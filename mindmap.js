// ============================================
// INTERACTIVE MIND MAP ENGINE  v3
// Root fixed at the centre, topics split left / right,
// nodes glide to new positions instead of being rebuilt.
// ============================================

(function () {
    "use strict";

    // ---- CONFIGURATION ----
    const CONFIG = {
        centerX: 3000,
        centerY: 2000,
        gapX: 90,             // gap between a parent's edge and its children's column
        gapXMobile: 28,
        rowGap: 20,           // vertical gap between stacked leaf nodes
        rowGapMobile: 12,
        groupGap: 14,         // extra space around an expanded group
        layoutDuration: 480,  // ms for nodes to glide to new positions
        cameraDuration: 560,  // ms for pan / zoom glides
        minZoom: 0.65,        // furthest zoom-out — labels must stay legible
        minZoomMobile: 0.7,
        maxZoom: 2.5,
        readableZoom: 0.75,   // auto-focus never zooms out further than this
        edgeMargin: 60,       // screen px the map keeps from the viewport edge
        focusPadding: 80,     // px padding when revealing a branch
    };

    // ---- STATE ----
    const state = {
        nodes: new Map(),               // id -> node record (visible + leaving)
        expandedIds: new Set(["root"]), // root open so the topics show on load
        visitedIds: new Set(),          // tracks which nodes have been opened (progress)
        bounds: null,                   // world bbox of the target layout
        zoom: 0.75,
        panX: 0,
        panY: 0,
        minZoom: CONFIG.minZoom,
        cameraAnim: null,
        layoutAnim: null,
        animFrameId: null,
        layoutFrameId: null,
        // Pan dragging
        isPanning: false,
        startPanX: 0,
        startPanY: 0,
        startMouseX: 0,
        startMouseY: 0,
    };

    // ---- DOM REFS ----
    const viewport = document.getElementById("mindmapViewport");
    const canvas = document.getElementById("mindmapCanvas");
    const connectionsLayer = document.getElementById("connectionsLayer");
    const detailPanel = document.getElementById("detailPanel");
    const detailContent = document.getElementById("detailContent");
    const detailClose = document.getElementById("detailClose");
    const quizOverlay = document.getElementById("quizOverlay");
    const quizContent = document.getElementById("quizContent");
    const quizClose = document.getElementById("quizClose");
    const toastContainer = document.getElementById("toastContainer");

    // ---- INIT ----
    function init() {
        initTheme();
        createParticles();
        buildMindmap();
        jumpToRoot();
        bindGlobalEvents();
        initSidebar();
        bindScrollbarEvents();

        // Web fonts change label widths — re-measure once they are ready
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => { buildMindmap(); clampCamera(); });
        }
    }

    // ---- THEME ----
    function initTheme() {
        const savedTheme = localStorage.getItem("mindmap-theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
        }
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("mindmap-theme", isDark ? "dark" : "light");
        showToast(isDark ? "🌙 Dark mode" : "☀️ Light mode", "info");
    }

    // ---- PARTICLES ----
    function createParticles() {
        const container = document.getElementById("particles");
        const colors = ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            const size = Math.random() * 4 + 2;
            p.style.width = size + "px";
            p.style.height = size + "px";
            p.style.left = Math.random() * 100 + "%";
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (Math.random() * 15 + 10) + "s";
            p.style.animationDelay = (Math.random() * 15) + "s";
            container.appendChild(p);
        }
    }

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    // ============================================================
    //  GEOMETRY HELPERS
    // ============================================================

    /** Left edge of a node. Root is anchored at its centre, right-side
     *  nodes at their left edge, left-side nodes at their right edge. */
    function nodeLeft(n, x) {
        if (n.depth === 0) return x - n.w / 2;
        return n.side > 0 ? x : x - n.w;
    }

    /** World bbox of a node at its target position */
    function nodeBox(n) {
        const left = nodeLeft(n, n.tx);
        return { minX: left, maxX: left + n.w, minY: n.ty - n.h / 2, maxY: n.ty + n.h / 2 };
    }

    function unionBox(a, b) {
        if (!a) return { ...b };
        return {
            minX: Math.min(a.minX, b.minX), minY: Math.min(a.minY, b.minY),
            maxX: Math.max(a.maxX, b.maxX), maxY: Math.max(a.maxY, b.maxY),
        };
    }

    /** X where connections leave a parent towards children on `side` */
    function childAnchorX(parent, side, x) {
        return x + side * (parent.depth === 0 ? parent.w / 2 : parent.w);
    }

    function visibleNodes() {
        return [...state.nodes.values()].filter(n => !n.leaving);
    }

    // ============================================================
    //  CAMERA  —  clamp, animate, focus
    // ============================================================

    function fitZoomFor(box, pad) {
        const vw = viewport.offsetWidth;
        const vh = viewport.offsetHeight;
        return Math.min((vw - pad * 2) / (box.maxX - box.minX), (vh - pad * 2) / (box.maxY - box.minY));
    }

    function isMobile() {
        return viewport.offsetWidth < 768;
    }

    /** Fixed floor: zooming out further would make labels unreadable.
     *  Large maps are explored by panning / scrolling instead. */
    function updateMinZoom() {
        state.minZoom = isMobile() ? CONFIG.minZoomMobile : CONFIG.minZoom;
    }

    function clampZoom(z) {
        return Math.max(state.minZoom, Math.min(CONFIG.maxZoom, z));
    }

    /**
     * Allowed pan range for a zoom level. If the map is smaller than the
     * viewport it may move but must stay fully on screen; if it is larger
     * it must keep covering the viewport — so it can never be lost.
     */
    function panRange(zoom) {
        const b = state.bounds;
        const vw = viewport.offsetWidth;
        const vh = viewport.offsetHeight;
        const m = CONFIG.edgeMargin;
        const ax = m - b.minX * zoom, bx = vw - m - b.maxX * zoom;
        const ay = m - b.minY * zoom, by = vh - m - b.maxY * zoom;
        return {
            minX: Math.min(ax, bx), maxX: Math.max(ax, bx),
            minY: Math.min(ay, by), maxY: Math.max(ay, by),
            fitsX: bx >= ax, fitsY: by >= ay,
        };
    }

    function clampPan(panX, panY, zoom) {
        if (!state.bounds) return { x: panX, y: panY };
        const r = panRange(zoom);
        return {
            x: Math.min(r.maxX, Math.max(r.minX, panX)),
            y: Math.min(r.maxY, Math.max(r.minY, panY)),
        };
    }

    function applyTransform(clamp = true) {
        if (clamp) {
            const c = clampPan(state.panX, state.panY, state.zoom);
            state.panX = c.x;
            state.panY = c.y;
        }
        canvas.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
        updateScrollbars();
    }

    /** Smoothly glide to the given pan/zoom (clamped to valid values) */
    function animateTo(panX, panY, zoom) {
        const z = clampZoom(zoom);
        const target = clampPan(panX, panY, z);
        cancelAnimation();

        if (Math.abs(target.x - state.panX) < 0.5 && Math.abs(target.y - state.panY) < 0.5 && Math.abs(z - state.zoom) < 0.001) {
            applyTransform();
            return;
        }

        state.cameraAnim = {
            start: performance.now(),
            fromX: state.panX, fromY: state.panY, fromZ: state.zoom,
            toX: target.x, toY: target.y, toZ: z,
        };
        state.animFrameId = requestAnimationFrame(cameraTick);
    }

    function cameraTick(now) {
        const a = state.cameraAnim;
        if (!a) return;
        const t = Math.min(1, (now - a.start) / CONFIG.cameraDuration);
        const e = easeOutCubic(t);
        state.panX = a.fromX + (a.toX - a.fromX) * e;
        state.panY = a.fromY + (a.toY - a.fromY) * e;
        state.zoom = a.fromZ + (a.toZ - a.fromZ) * e;

        if (t >= 1) {
            cancelAnimation();
            applyTransform();
            return;
        }
        applyTransform(false);
        state.animFrameId = requestAnimationFrame(cameraTick);
    }

    function cancelAnimation() {
        state.cameraAnim = null;
        if (state.animFrameId) {
            cancelAnimationFrame(state.animFrameId);
            state.animFrameId = null;
        }
    }

    /** Re-clamp the current view after the map grows / shrinks */
    function clampCamera() {
        updateMinZoom();
        animateTo(state.panX, state.panY, state.zoom);
    }

    /** Zoom that shows as much of the map as possible while staying readable */
    function overviewZoom() {
        if (isMobile()) {
            // Phones: fit both topic columns across the width, scroll vertically
            const fitW = (viewport.offsetWidth - 16) / (state.bounds.maxX - state.bounds.minX);
            return Math.max(state.minZoom, Math.min(1, fitW));
        }
        const fit = fitZoomFor(state.bounds, CONFIG.edgeMargin);
        return Math.max(CONFIG.readableZoom, Math.min(1, fit));
    }

    /** Pan / zoom values that put the root in the middle of the screen */
    function rootView(zoom) {
        const root = state.nodes.get("root");
        const z = clampZoom(zoom);
        return {
            x: viewport.offsetWidth / 2 - root.tx * z,
            y: viewport.offsetHeight / 2 - root.ty * z,
            z,
        };
    }

    function jumpToRoot() {
        const v = rootView(overviewZoom());
        state.zoom = v.z;
        state.panX = v.x;
        state.panY = v.y;
        applyTransform();
    }

    function focusRoot(zoom) {
        const v = rootView(zoom === undefined ? overviewZoom() : zoom);
        animateTo(v.x, v.y, v.z);
    }

    /** Center viewport on a node (optionally at a new zoom) */
    function centerOnNode(nodeId, zoom) {
        const n = state.nodes.get(nodeId);
        if (!n) return;
        const z = clampZoom(zoom === undefined ? state.zoom : zoom);
        const box = nodeBox(n);
        const cx = (box.minX + box.maxX) / 2;
        animateTo(viewport.offsetWidth / 2 - cx * z, viewport.offsetHeight / 2 - n.ty * z, z);
    }

    /** Screen area not covered by the side panels */
    function visibleRect() {
        const vw = viewport.offsetWidth;
        const vh = viewport.offsetHeight;
        let left = 0, right = vw;
        if (vw > 768) {
            if (detailPanel.classList.contains("open")) right -= detailPanel.offsetWidth;
            const sidebar = document.getElementById("sidebarPanel");
            if (sidebar && sidebar.classList.contains("open")) left += sidebar.offsetWidth;
        }
        return { left, right, top: 0, bottom: vh };
    }

    /** Get the bounding box (world coords) of a node + visible descendants */
    function getSubtreeBBox(nodeId) {
        let box = null;
        [nodeId, ...getVisibleDescendantIds(nodeId)].forEach(id => {
            const n = state.nodes.get(id);
            if (n && !n.leaving) box = unionBox(box, nodeBox(n));
        });
        return box;
    }

    /** Collect IDs of all visible (rendered) descendants */
    function getVisibleDescendantIds(nodeId) {
        const data = findNodeData(MINDMAP_DATA, nodeId);
        if (!data || !data.children || !state.expandedIds.has(nodeId)) return [];
        const ids = [];
        data.children.forEach(c => {
            ids.push(c.id);
            ids.push(...getVisibleDescendantIds(c.id));
        });
        return ids;
    }

    /**
     * Bring a node and its visible branch into view with the least movement:
     * keep the current zoom if it fits, otherwise zoom out (but stay readable).
     */
    function focusOnSubtree(nodeId) {
        const bbox = getSubtreeBBox(nodeId);
        if (!bbox) return;

        const rect = visibleRect();
        const pad = isMobile() ? 16 : CONFIG.focusPadding;
        const availW = rect.right - rect.left - pad * 2;
        const availH = rect.bottom - rect.top - pad * 2;
        const fit = Math.min(availW / (bbox.maxX - bbox.minX), availH / (bbox.maxY - bbox.minY));

        let zoom = state.zoom;
        if (fit < zoom) zoom = Math.min(state.zoom, Math.max(fit, CONFIG.readableZoom));
        zoom = clampZoom(zoom);

        // Keep the screen centre fixed while zoom changes, then nudge into view
        const midX = (rect.left + rect.right) / 2;
        const midY = (rect.top + rect.bottom) / 2;
        let panX = midX - (midX - state.panX) * (zoom / state.zoom);
        let panY = midY - (midY - state.panY) * (zoom / state.zoom);

        function nudge(pan, min, max, lo, hi, mid) {
            const s1 = pan + min * zoom;
            const s2 = pan + max * zoom;
            if (s2 - s1 > hi - lo) return mid - ((min + max) / 2) * zoom;
            if (s1 < lo) return pan + (lo - s1);
            if (s2 > hi) return pan - (s2 - hi);
            return pan;
        }
        panX = nudge(panX, bbox.minX, bbox.maxX, rect.left + pad, rect.right - pad, midX);
        panY = nudge(panY, bbox.minY, bbox.maxY, rect.top + pad, rect.bottom - pad, midY);

        animateTo(panX, panY, zoom);
    }

    // ============================================================
    //  BUILD / LAYOUT
    // ============================================================

    /** Visible nodes in depth-first order with their side + depth */
    function collectVisible() {
        const list = [];
        const rootKids = MINDMAP_DATA.children || [];
        const rightCount = Math.ceil(rootKids.length / 2);

        function walk(data, depth, side, parentId, branchIdx) {
            list.push({ data, depth, side, parentId, branchIndex: branchIdx });
            if (!data.children || !state.expandedIds.has(data.id)) return;
            data.children.forEach((c, i) => {
                const childSide = depth === 0 ? (i < rightCount ? 1 : -1) : side;
                walk(c, depth + 1, childSide, data.id, c.branchIndex || branchIdx || 1);
            });
        }
        walk(MINDMAP_DATA, 0, 0, null, 1);
        return list;
    }

    function buildMindmap() {
        const visible = collectVisible();
        const visibleIds = new Set(visible.map(v => v.data.id));
        const created = [];

        // 1. Create new nodes, refresh existing ones
        visible.forEach(v => {
            let n = state.nodes.get(v.data.id);
            if (!n) {
                n = { id: v.data.id, data: v.data, path: null, x: 0, y: 0 };
                n.el = createNodeElement(v.data, v.depth);
                canvas.appendChild(n.el);
                state.nodes.set(n.id, n);
                created.push(n);
            } else if (n.leaving) {
                n.leaving = false;
                n.el.classList.add("visible");
                if (n.path) n.path.classList.add("visible");
            }
            Object.assign(n, { depth: v.depth, side: v.side, parentId: v.parentId, branchIndex: v.branchIndex });
            syncNodeClasses(n);
        });

        // 2. Everything else animates back into its parent and is removed
        state.nodes.forEach(n => {
            if (!visibleIds.has(n.id)) {
                n.leaving = true;
                n.el.classList.remove("visible");
                if (n.path) n.path.classList.remove("visible");
            }
        });

        // 3. Measure real sizes, then compute target positions
        visible.forEach(v => {
            const n = state.nodes.get(v.data.id);
            n.w = n.el.offsetWidth;
            n.h = n.el.offsetHeight;
        });
        computeLayout(visible);

        // 4. New nodes start at their parent's edge and glide out
        created.forEach(n => {
            const parent = state.nodes.get(n.parentId);
            if (parent) {
                n.x = childAnchorX(parent, n.side, parent.x);
                n.y = parent.y;
            } else {
                n.x = n.tx;
                n.y = n.ty;
            }
        });

        // 5. Leaving nodes glide back to their parent's edge
        state.nodes.forEach(n => {
            if (!n.leaving) return;
            const parent = state.nodes.get(n.parentId);
            n.tx = parent ? childAnchorX(parent, n.side, parent.tx) : n.x;
            n.ty = parent ? parent.ty : n.y;
        });

        state.bounds = visibleNodes().reduce((b, n) => unionBox(b, nodeBox(n)), null);
        updateMinZoom();

        startLayoutAnimation();
        revealNodes(created);
    }

    function computeLayout(visible) {
        const root = state.nodes.get("root");
        root.tx = CONFIG.centerX;
        root.ty = CONFIG.centerY;
        const gapX = isMobile() ? CONFIG.gapXMobile : CONFIG.gapX;
        const rowGap = isMobile() ? CONFIG.rowGapMobile : CONFIG.rowGap;

        // Column widths per side so each depth lines up in a neat column
        const colWidth = { 1: [], "-1": [] };
        visible.forEach(v => {
            if (v.depth === 0) return;
            const n = state.nodes.get(v.data.id);
            colWidth[v.side][v.depth] = Math.max(colWidth[v.side][v.depth] || 0, n.w);
        });

        [1, -1].forEach(side => {
            // Column anchor X for each depth
            const colX = [];
            let edge = CONFIG.centerX + side * root.w / 2;
            for (let d = 1; d < colWidth[side].length; d++) {
                edge += side * gapX;
                colX[d] = edge;
                edge += side * (colWidth[side][d] || 0);
            }

            // Stack leaves top → bottom; parents sit midway between children
            const tops = visible.filter(v => v.depth === 1 && v.side === side).map(v => v.data);
            if (tops.length === 0) return;
            const sideNodes = [];
            let cursor = 0;

            function place(data) {
                const n = state.nodes.get(data.id);
                sideNodes.push(n);
                n.tx = colX[n.depth];
                const kids = state.expandedIds.has(data.id) ? (data.children || []) : [];
                if (kids.length === 0) {
                    n.ty = cursor + n.h / 2;
                    cursor += n.h + rowGap;
                    return;
                }
                if (cursor > 0) cursor += CONFIG.groupGap;
                kids.forEach(place);
                cursor += CONFIG.groupGap;
                const first = state.nodes.get(kids[0].id);
                const last = state.nodes.get(kids[kids.length - 1].id);
                n.ty = (first.ty + last.ty) / 2;
            }
            tops.forEach(place);

            // Centre this side's topic column on the root
            const firstTop = state.nodes.get(tops[0].id);
            const lastTop = state.nodes.get(tops[tops.length - 1].id);
            const shift = CONFIG.centerY - (firstTop.ty + lastTop.ty) / 2;
            sideNodes.forEach(n => { n.ty += shift; });
        });
    }

    function startLayoutAnimation() {
        state.nodes.forEach(n => { n.fromX = n.x; n.fromY = n.y; });
        state.layoutAnim = { start: performance.now() };
        if (!state.layoutFrameId) state.layoutFrameId = requestAnimationFrame(layoutTick);
    }

    function layoutTick(now) {
        const t = Math.min(1, (now - state.layoutAnim.start) / CONFIG.layoutDuration);
        const e = easeOutCubic(t);

        state.nodes.forEach(n => {
            n.x = n.fromX + (n.tx - n.fromX) * e;
            n.y = n.fromY + (n.ty - n.fromY) * e;
            n.el.style.translate = `${n.x}px ${n.y}px`;
        });
        updateConnections();

        if (t < 1) {
            state.layoutFrameId = requestAnimationFrame(layoutTick);
            return;
        }

        state.layoutFrameId = null;
        state.layoutAnim = null;
        state.nodes.forEach(n => {
            if (!n.leaving) return;
            n.el.remove();
            if (n.path) n.path.remove();
            state.nodes.delete(n.id);
        });
    }

    /** Fade / scale new nodes in with a short stagger */
    function revealNodes(nodes) {
        nodes.forEach((n, i) => {
            const delay = Math.min(i * 18, 260);
            setTimeout(() => {
                if (n.leaving) return;
                n.el.classList.add("visible");
                if (n.path) n.path.classList.add("visible");
            }, delay);
        });
    }

    // ---- RENDER CONNECTIONS ----
    function updateConnections() {
        state.nodes.forEach(n => {
            if (!n.parentId) return;
            const parent = state.nodes.get(n.parentId);
            if (!parent) return;

            if (!n.path) {
                n.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                n.path.setAttribute("class", `connection-path branch-${n.branchIndex}`);
                connectionsLayer.appendChild(n.path);
                if (!n.leaving) requestAnimationFrame(() => n.path && !n.leaving && n.path.classList.add("visible"));
            }

            // Parent outer edge -> child inner edge
            const x1 = childAnchorX(parent, n.side, parent.x);
            n.path.setAttribute("d", createCurvedPath(x1, parent.y, n.x, n.y));
        });
    }

    function createCurvedPath(x1, y1, x2, y2) {
        // Horizontal cubic bezier curve (works for both directions)
        const mx = (x1 + x2) / 2;
        return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
    }

    // ---- CREATE NODE ELEMENT ----
    function createNodeElement(data, depth) {
        const el = document.createElement("div");
        const isVisited = state.visitedIds.has(data.id);
        el.className = `mm-node level-${depth}${isVisited ? ' is-visited' : ''}`;
        el.dataset.id = data.id;

        const isExpanded = state.expandedIds.has(data.id);
        const hasChildren = data.children && data.children.length > 0;
        const hasDetail = data.description || data.fact || data.quiz;

        const labelText = data.label.replace(/\n/g, " ");
        let innerHTML = `<div class="node-content">`;

        if (data.emoji) {
            innerHTML += `<span class="node-emoji">${data.emoji}</span>`;
        }

        innerHTML += `<span class="node-label">${labelText}</span>`;

        // Checkpoint dot — looks like ○ when unvisited, green ✓ circle when visited
        if (hasDetail) {
            if (isVisited) {
                innerHTML += `<div class="node-info-trigger checked" title="Visited ✓">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>`;
            } else {
                innerHTML += `<div class="node-info-trigger" title="View details">○</div>`;
            }
        }

        // Expand chevron — points away from the root, rotates when open
        if (hasChildren) {
            innerHTML += `<div class="node-expand-btn ${isExpanded ? 'expanded' : ''}" title="${isExpanded ? 'Collapse' : 'Expand'}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="chevron">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>`;
        }

        innerHTML += `</div>`;
        el.innerHTML = innerHTML;

        // Expand button: only handles expand/collapse
        const expandBtn = el.querySelector(".node-expand-btn");
        if (expandBtn) {
            expandBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleExpand(data.id);
            });
        }

        // Dot (checkpoint): opens detail panel (auto-marks visited on open)
        const infoTrigger = el.querySelector(".node-info-trigger");
        if (infoTrigger) {
            infoTrigger.addEventListener("click", (e) => {
                e.stopPropagation();
                openDetail(data);
            });
        }

        // Clicking anywhere on the node body also opens details
        el.addEventListener("click", () => {
            if (hasDetail) {
                openDetail(data);
            }
            if (!hasDetail && hasChildren) {
                toggleExpand(data.id);
            }
        });

        return el;
    }

    /** Keep level / side / expanded classes in sync without rebuilding */
    function syncNodeClasses(n) {
        const el = n.el;
        const hasChildren = n.data.children && n.data.children.length > 0;
        const isExpanded = state.expandedIds.has(n.id) && hasChildren;
        const sideClass = n.depth === 0 ? "side-center" : (n.side > 0 ? "side-right" : "side-left");

        el.classList.remove("side-center", "side-right", "side-left");
        el.classList.add(sideClass, `branch-${n.branchIndex}`);
        el.classList.toggle("is-expanded", isExpanded);

        const btn = el.querySelector(".node-expand-btn");
        if (btn) {
            btn.classList.toggle("expanded", isExpanded);
            btn.title = isExpanded ? "Collapse" : "Expand";
        }
    }

    // ============================================================
    //  EXPAND / COLLAPSE
    // ============================================================

    function toggleExpand(id) {
        if (state.expandedIds.has(id)) {
            collapseRecursive(id);
            buildMindmap();
            if (id === "root") focusRoot();
            else focusOnSubtree(id);
            return;
        }

        // Close siblings (accordion style)
        const parentId = findParentId(MINDMAP_DATA, id);
        if (parentId) {
            const parentNode = findNodeData(MINDMAP_DATA, parentId);
            if (parentNode && parentNode.children) {
                parentNode.children.forEach(sibling => {
                    if (sibling.id !== id && state.expandedIds.has(sibling.id)) {
                        collapseRecursive(sibling.id);
                    }
                });
            }
        }

        state.expandedIds.add(id);
        buildMindmap();
        if (id === "root") focusRoot();
        else focusOnSubtree(id);
    }

    function collapseRecursive(id) {
        state.expandedIds.delete(id);
        const node = findNodeData(MINDMAP_DATA, id);
        if (node && node.children) {
            node.children.forEach(c => collapseRecursive(c.id));
        }
    }

    function findNodeData(node, id) {
        if (node.id === id) return node;
        if (node.children) {
            for (const child of node.children) {
                const found = findNodeData(child, id);
                if (found) return found;
            }
        }
        return null;
    }

    function findParentId(tree, targetId, currentParentId = null) {
        if (tree.id === targetId) return currentParentId;
        if (tree.children) {
            for (const child of tree.children) {
                const result = findParentId(child, targetId, tree.id);
                if (result !== undefined) return result;
            }
        }
        return undefined;
    }

    // ============================================================
    //  DETAIL PANEL
    // ============================================================

    function openDetail(data) {
        // Mark node as active (gradient stroke)
        canvas.querySelectorAll(".mm-node.is-active").forEach(n => n.classList.remove("is-active"));
        const activeEl = canvas.querySelector(`.mm-node[data-id="${data.id}"]`);
        if (activeEl) activeEl.classList.add("is-active");

        // Auto-mark as visited + update dot in-place (no full rebuild)
        if (!state.visitedIds.has(data.id)) {
            state.visitedIds.add(data.id);
            if (activeEl) {
                const dot = activeEl.querySelector(".node-info-trigger");
                if (dot) {
                    dot.classList.add("checked");
                    dot.title = "Visited ✓";
                    dot.textContent = "";  // remove ○ character
                    dot.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
                }
            }
        }

        let html = "";
        if (data.emoji) html += `<span class="detail-emoji">${data.emoji}</span>`;
        html += `<h2>${data.label.replace(/\n/g, " ")}</h2>`;


        if (data.description) html += `<p class="detail-description">${data.description}</p>`;

        if (data.keywords && data.keywords.length > 0) {
            html += `<div class="detail-section">
                <h3>🏷️ Key Terms</h3>
                <div class="keyword-tags">
                    ${data.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join("")}
                </div>
            </div>`;
        }

        if (data.fact) {
            html += `<div class="detail-section">
                <h3>💡 Did You Know?</h3>
                <div class="fact-card">
                    <span class="fact-icon">🧠</span>
                    <p>${data.fact}</p>
                </div>
            </div>`;
        }

        if (data.quiz) {
            html += `<button class="quiz-btn" data-id="${data.id}">🎯 Test Your Knowledge</button>`;
        }

        detailContent.innerHTML = html;
        detailPanel.classList.add("open");

        const quizBtn = detailContent.querySelector(".quiz-btn");
        if (quizBtn) quizBtn.addEventListener("click", () => openQuiz(data));
    }

    function closeDetail() {
        detailPanel.classList.remove("open");
        canvas.querySelectorAll(".mm-node.is-active").forEach(n => n.classList.remove("is-active"));
    }

    // ============================================================
    //  QUIZ
    // ============================================================

    function openQuiz(data) {
        const q = data.quiz;
        if (!q) return;

        const letters = ["A", "B", "C", "D"];
        quizContent.innerHTML = `
            <h3>🎯 Quick Quiz</h3>
            <p class="quiz-topic">${data.label.replace(/\n/g, " ")}</p>
            <p class="quiz-question">${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option" data-index="${i}">
                        <span class="option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </div>
                `).join("")}
            </div>
            <div class="quiz-feedback" id="quizFeedback"></div>
            <button class="quiz-next-btn" id="quizNext">Got it! ✨</button>
        `;
        quizOverlay.classList.add("open");

        let answered = false;
        quizContent.querySelectorAll(".quiz-option").forEach(opt => {
            opt.addEventListener("click", () => {
                if (answered) return;
                answered = true;
                const idx = parseInt(opt.dataset.index);
                const isCorrect = idx === q.correct;

                quizContent.querySelectorAll(".quiz-option").forEach(o => {
                    const oIdx = parseInt(o.dataset.index);
                    if (oIdx === q.correct) o.classList.add("correct");
                    if (oIdx === idx && !isCorrect) o.classList.add("incorrect");
                });

                const fb = document.getElementById("quizFeedback");
                fb.className = `quiz-feedback show ${isCorrect ? "correct-fb" : "incorrect-fb"}`;
                fb.innerHTML = isCorrect
                    ? `<strong>🎉 Correct!</strong><br>${q.explanation}`
                    : `<strong>❌ Not quite!</strong><br>The correct answer is <strong>${q.options[q.correct]}</strong>.<br>${q.explanation}`;

                document.getElementById("quizNext").classList.add("show");
                showToast(isCorrect ? "🎉 Great job!" : "📚 Keep learning!", isCorrect ? "success" : "info");
            });
        });

        document.getElementById("quizNext").addEventListener("click", closeQuiz);
    }

    function closeQuiz() {
        quizOverlay.classList.remove("open");
    }

    // ---- TOAST ----
    function showToast(message, type = "info") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3200);
    }

    // ============================================================
    //  PAN & ZOOM  —  user interaction
    // ============================================================

    function bindGlobalEvents() {
        document.addEventListener("contextmenu", e => e.preventDefault());

        // The viewport clips the canvas; focus / scrollIntoView must never scroll it
        viewport.addEventListener("scroll", () => {
            viewport.scrollTop = 0;
            viewport.scrollLeft = 0;
        });

        // ---- Mouse pan ----
        viewport.addEventListener("mousedown", (e) => {
            if (e.target.closest(".mm-node") || e.target.closest(".detail-panel")) return;
            state.isPanning = true;
            cancelAnimation();
            state.startMouseX = e.clientX;
            state.startMouseY = e.clientY;
            state.startPanX = state.panX;
            state.startPanY = state.panY;
        });

        window.addEventListener("mousemove", (e) => {
            if (!state.isPanning) return;
            state.panX = state.startPanX + (e.clientX - state.startMouseX);
            state.panY = state.startPanY + (e.clientY - state.startMouseY);
            applyTransform();
        });

        window.addEventListener("mouseup", () => { state.isPanning = false; });

        // ---- Touch pan & pinch zoom ----
        let touchStartX, touchStartY, touchStartPanX, touchStartPanY;
        let initialPinchDistance = null;
        let initialPinchZoom = null;
        let initialPinchCenter = null;

        function getDistance(t1, t2) {
            return Math.sqrt((t2.clientX - t1.clientX) ** 2 + (t2.clientY - t1.clientY) ** 2);
        }

        function getCenter(t1, t2) {
            return {
                x: (t1.clientX + t2.clientX) / 2,
                y: (t1.clientY + t2.clientY) / 2
            };
        }

        viewport.addEventListener("touchstart", (e) => {
            if (e.touches.length === 1 && !e.target.closest(".mm-node")) {
                cancelAnimation();
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                touchStartPanX = state.panX;
                touchStartPanY = state.panY;
            } else if (e.touches.length === 2) {
                cancelAnimation();
                initialPinchDistance = getDistance(e.touches[0], e.touches[1]);
                initialPinchZoom = state.zoom;
                const center = getCenter(e.touches[0], e.touches[1]);
                const rect = viewport.getBoundingClientRect();
                initialPinchCenter = {
                    x: center.x - rect.left,
                    y: center.y - rect.top
                };
            }
        }, { passive: false });

        viewport.addEventListener("touchmove", (e) => {
            if (e.touches.length === 1 && touchStartX !== undefined) {
                state.panX = touchStartPanX + (e.touches[0].clientX - touchStartX);
                state.panY = touchStartPanY + (e.touches[0].clientY - touchStartY);
                applyTransform();
            } else if (e.touches.length === 2 && initialPinchDistance !== null) {
                e.preventDefault(); // prevent native scroll/zoom
                const currentDistance = getDistance(e.touches[0], e.touches[1]);
                const distanceRatio = currentDistance / initialPinchDistance;

                const newZoom = clampZoom(initialPinchZoom * distanceRatio);
                const zoomRatio = newZoom / state.zoom;

                state.zoom = newZoom;
                state.panX = initialPinchCenter.x - (initialPinchCenter.x - state.panX) * zoomRatio;
                state.panY = initialPinchCenter.y - (initialPinchCenter.y - state.panY) * zoomRatio;

                applyTransform();
            }
        }, { passive: false });

        viewport.addEventListener("touchend", (e) => {
            if (e.touches.length < 2) {
                initialPinchDistance = null;
            }
            if (e.touches.length === 0) {
                touchStartX = undefined;
            }
        });

        // ---- Wheel zoom ----
        viewport.addEventListener("wheel", (e) => {
            e.preventDefault();
            cancelAnimation();
            const delta = e.deltaY > 0 ? 0.92 : 1.08;
            const newZoom = clampZoom(state.zoom * delta);

            const rect = viewport.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const ratio = newZoom / state.zoom;

            state.panX = mouseX - ratio * (mouseX - state.panX);
            state.panY = mouseY - ratio * (mouseY - state.panY);
            state.zoom = newZoom;
            applyTransform();
        }, { passive: false });

        // ---- Toolbar ----
        const btnTheme = document.getElementById("btnTheme");
        if (btnTheme) btnTheme.addEventListener("click", toggleTheme);

        document.getElementById("btnExpandAll").addEventListener("click", expandAll);
        document.getElementById("btnCollapseAll").addEventListener("click", collapseAll);
        document.getElementById("btnReset").addEventListener("click", resetView);

        // ---- Panels ----
        detailClose.addEventListener("click", closeDetail);
        quizClose.addEventListener("click", closeQuiz);
        quizOverlay.addEventListener("click", (e) => { if (e.target === quizOverlay) closeQuiz(); });

        // ---- Keyboard ----
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") { closeDetail(); closeQuiz(); }
        });
    }

    // ---- EXPAND/COLLAPSE ALL ----
    function expandAll() {
        expandRecursive(MINDMAP_DATA);
        buildMindmap();
        // Show as much as possible; clampZoom keeps it at a legible size
        focusRoot(fitZoomFor(state.bounds, CONFIG.edgeMargin));
        showToast("🔓 All branches expanded", "success");
    }

    function expandRecursive(node) {
        state.expandedIds.add(node.id);
        if (node.children) node.children.forEach(c => expandRecursive(c));
    }

    function collapseAll() {
        state.expandedIds.clear();
        state.expandedIds.add("root");
        buildMindmap();
        focusRoot();
        showToast("🔒 All branches collapsed", "info");
    }

    function resetView() {
        collapseAll();
    }

    // ============================================================
    //  SCROLLBARS & SIDEBAR
    // ============================================================

    function updateScrollbars() {
        if (!state.bounds) return;
        const r = panRange(state.zoom);
        // Drag maths below works in terms of these limits
        state.panLimits = { leftLimit: r.maxX, rightLimit: r.minX, topLimit: r.maxY, bottomLimit: r.minY };

        const scrollbarH = document.getElementById("scrollbarH");
        const scrollbarHThumb = document.getElementById("scrollbarHThumb");
        const scrollbarV = document.getElementById("scrollbarV");
        const scrollbarVThumb = document.getElementById("scrollbarVThumb");

        if (!scrollbarH || !scrollbarHThumb) return;

        const panXRange = r.maxX - r.minX;
        if (r.fitsX || panXRange <= 0) {
            scrollbarH.style.opacity = "0";
            scrollbarH.style.pointerEvents = "none";
        } else {
            scrollbarH.style.opacity = "1";
            scrollbarH.style.pointerEvents = "all";
            const fracX = (r.maxX - state.panX) / panXRange;
            const thumbWidthPct = Math.max(10, Math.min(100, (viewport.offsetWidth / (viewport.offsetWidth + panXRange)) * 100));
            scrollbarHThumb.style.width = `${thumbWidthPct}%`;
            scrollbarHThumb.style.left = `${Math.max(0, Math.min(1, fracX)) * (100 - thumbWidthPct)}%`;
        }

        const panYRange = r.maxY - r.minY;
        if (r.fitsY || panYRange <= 0) {
            scrollbarV.style.opacity = "0";
            scrollbarV.style.pointerEvents = "none";
        } else {
            scrollbarV.style.opacity = "1";
            scrollbarV.style.pointerEvents = "all";
            const fracY = (r.maxY - state.panY) / panYRange;
            const thumbHeightPct = Math.max(10, Math.min(100, (viewport.offsetHeight / (viewport.offsetHeight + panYRange)) * 100));
            scrollbarVThumb.style.height = `${thumbHeightPct}%`;
            scrollbarVThumb.style.top = `${Math.max(0, Math.min(1, fracY)) * (100 - thumbHeightPct)}%`;
        }
    }

    function bindScrollbarEvents() {
        const hThumb = document.getElementById("scrollbarHThumb");
        const vThumb = document.getElementById("scrollbarVThumb");
        if (!hThumb || !vThumb) return;

        let isDraggingH = false, isDraggingV = false;
        let startClientX, startClientY, startPanX, startPanY;

        hThumb.addEventListener("mousedown", (e) => {
            e.stopPropagation(); e.preventDefault();
            isDraggingH = true; startClientX = e.clientX; startPanX = state.panX;
            cancelAnimation();
        });

        vThumb.addEventListener("mousedown", (e) => {
            e.stopPropagation(); e.preventDefault();
            isDraggingV = true; startClientY = e.clientY; startPanY = state.panY;
            cancelAnimation();
        });

        window.addEventListener("mousemove", (e) => {
            if (isDraggingH && state.panLimits) {
                const dx = e.clientX - startClientX;
                const track = document.getElementById("scrollbarH");
                const trackWidth = track.offsetWidth;
                const thumbWidth = hThumb.offsetWidth;
                if (trackWidth > thumbWidth) {
                    const dxFrac = dx / (trackWidth - thumbWidth);
                    const panXRange = state.panLimits.leftLimit - state.panLimits.rightLimit;
                    state.panX = startPanX - (dxFrac * panXRange);
                    applyTransform();
                }
            }
            if (isDraggingV && state.panLimits) {
                const dy = e.clientY - startClientY;
                const track = document.getElementById("scrollbarV");
                const trackHeight = track.offsetHeight;
                const thumbHeight = vThumb.offsetHeight;
                if (trackHeight > thumbHeight) {
                    const dyFrac = dy / (trackHeight - thumbHeight);
                    const panYRange = state.panLimits.topLimit - state.panLimits.bottomLimit;
                    state.panY = startPanY - (dyFrac * panYRange);
                    applyTransform();
                }
            }
        });

        window.addEventListener("mouseup", () => {
            isDraggingH = false; isDraggingV = false;
        });

        // Touch events for scrollbars
        hThumb.addEventListener("touchstart", (e) => {
            e.stopPropagation(); e.preventDefault();
            isDraggingH = true; startClientX = e.touches[0].clientX; startPanX = state.panX;
            cancelAnimation();
        }, { passive: false });

        vThumb.addEventListener("touchstart", (e) => {
            e.stopPropagation(); e.preventDefault();
            isDraggingV = true; startClientY = e.touches[0].clientY; startPanY = state.panY;
            cancelAnimation();
        }, { passive: false });

        window.addEventListener("touchmove", (e) => {
            if (isDraggingH && state.panLimits) {
                const dx = e.touches[0].clientX - startClientX;
                const track = document.getElementById("scrollbarH");
                const trackWidth = track.offsetWidth;
                const thumbWidth = hThumb.offsetWidth;
                if (trackWidth > thumbWidth) {
                    const dxFrac = dx / (trackWidth - thumbWidth);
                    const panXRange = state.panLimits.leftLimit - state.panLimits.rightLimit;
                    state.panX = startPanX - (dxFrac * panXRange);
                    applyTransform();
                }
            }
            if (isDraggingV && state.panLimits) {
                const dy = e.touches[0].clientY - startClientY;
                const track = document.getElementById("scrollbarV");
                const trackHeight = track.offsetHeight;
                const thumbHeight = vThumb.offsetHeight;
                if (trackHeight > thumbHeight) {
                    const dyFrac = dy / (trackHeight - thumbHeight);
                    const panYRange = state.panLimits.topLimit - state.panLimits.bottomLimit;
                    state.panY = startPanY - (dyFrac * panYRange);
                    applyTransform();
                }
            }
        }, { passive: false });

        window.addEventListener("touchend", () => {
            isDraggingH = false; isDraggingV = false;
        });
    }

    function initSidebar() {
        const btnSidebar = document.getElementById("btnSidebar");
        const sidebarPanel = document.getElementById("sidebarPanel");
        const sidebarClose = document.getElementById("sidebarClose");
        const sidebarSearch = document.getElementById("sidebarSearch");

        if (!btnSidebar || !sidebarPanel) return;

        btnSidebar.addEventListener("click", () => {
            sidebarPanel.classList.toggle("open");
            if (sidebarPanel.classList.contains("open")) {
                renderSidebarList("");
                sidebarSearch.focus();
            }
        });

        sidebarClose.addEventListener("click", () => {
            sidebarPanel.classList.remove("open");
        });

        sidebarSearch.addEventListener("input", (e) => {
            renderSidebarList(e.target.value);
        });
    }

    function renderSidebarList(query) {
        const listContainer = document.getElementById("sidebarList");
        if (!listContainer) return;

        const q = query.toLowerCase();
        let html = "";

        const topics = MINDMAP_DATA.children || [];

        topics.forEach(t => {
            if (t.label.toLowerCase().includes(q) || (t.keywords && t.keywords.some(k => k.toLowerCase().includes(q)))) {
                const isVisited = state.visitedIds.has(t.id);
                html += `
                    <div class="sidebar-item ${isVisited ? 'visited' : ''}" data-id="${t.id}">
                        <span class="item-emoji">${t.emoji || '📄'}</span>
                        <span class="item-label" title="${t.label.replace(/\n/g, ' ')}">${t.label.replace(/\n/g, ' ')}</span>
                        <div class="item-status">
                            ${isVisited ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
                        </div>
                    </div>
                `;
            }
        });

        if (html === "") {
            html = `<div style="padding: 20px; text-align: center; color: #6B7280; font-size: 12px;">No topics found.</div>`;
        }

        listContainer.innerHTML = html;

        listContainer.querySelectorAll(".sidebar-item").forEach(item => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                if (!state.expandedIds.has("root")) {
                    state.expandedIds.add("root");
                    buildMindmap();
                }
                centerOnNode(id, Math.max(state.zoom, CONFIG.readableZoom));
                const nodeData = findNodeData(MINDMAP_DATA, id);
                if (nodeData && (nodeData.description || nodeData.fact || nodeData.quiz)) {
                    openDetail(nodeData);
                }
                if (window.innerWidth <= 768) {
                    document.getElementById("sidebarPanel").classList.remove("open");
                }
            });
        });
    }

    // ---- START ----
    window.addEventListener("DOMContentLoaded", init);

    // Re-measure on resize (mobile breakpoints change node widths) and keep the map on screen
    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildMindmap();
            clampCamera();
        }, 120);
    });
})();
