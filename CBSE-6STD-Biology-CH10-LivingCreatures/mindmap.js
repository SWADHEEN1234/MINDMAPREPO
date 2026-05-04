// ============================================
// INTERACTIVE MIND MAP ENGINE  v2
// ============================================

(function () {
    "use strict";

    // ---- CONFIGURATION ----
    const CONFIG = {
        centerX: 3000,
        centerY: 2000,
        level1Radius: 340,
        level2Radius: 220,
        level3Radius: 150,
        animDelay: 60,
        minZoom: 0.3,
        maxZoom: 2.5,
        focusPadding: 120,   // px padding when zoom-to-fit
    };

    // ---- STATE ----
    const state = {
        nodes: [],
        expandedIds: new Set(["root"]),
        visitedIds: new Set(),  // tracks which nodes have been opened (progress)
        zoom: 0.55,
        panX: 0,
        panY: 0,
        // Smooth animation targets
        targetPanX: null,
        targetPanY: null,
        targetZoom: null,
        animFrameId: null,
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
        setTimeout(() => focusOnSubtree("root"), 50);
        bindGlobalEvents();
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

    // ============================================================
    //  TRANSFORM  —  apply, clamp, animate
    // ============================================================

    function applyTransform() {
        clampPan();
        canvas.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    }

    /** Keep the viewport within the bounding box of visible nodes */
    function clampPan() {
        if (state.nodes.length === 0) return;

        // Compute world-space bounding box of ALL visible nodes
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        state.nodes.forEach(n => {
            minX = Math.min(minX, n.x - 150);
            minY = Math.min(minY, n.y - 80);
            maxX = Math.max(maxX, n.x + 150);
            maxY = Math.max(maxY, n.y + 80);
        });

        const vw = viewport.offsetWidth;
        const vh = viewport.offsetHeight;
        const margin = 200; // extra breathing room

        // Converted to screen space:  screenX = panX + worldX * zoom
        // We want the bounding box to stay within the viewport ± margin
        const leftLimit = vw + margin - minX * state.zoom;
        const rightLimit = -margin - maxX * state.zoom + vw;
        const topLimit = vh + margin - minY * state.zoom;
        const bottomLimit = -margin - maxY * state.zoom + vh;

        // Only clamp if the content is larger than the viewport;
        // otherwise center it
        if (leftLimit > rightLimit) {
            // Content fits horizontally — don't over-clamp, but stay reasonable
            state.panX = Math.min(leftLimit, Math.max(rightLimit, state.panX));
        }
        if (topLimit > bottomLimit) {
            state.panY = Math.min(topLimit, Math.max(bottomLimit, state.panY));
        }
    }

    // ============================================================
    //  FOCUS / ZOOM-TO-FIT  —  the core UX improvement
    // ============================================================

    /**
     * Smoothly zoom + pan so that the given node AND all its visible
     * descendants fit comfortably in the viewport.
     */
    function focusOnSubtree(nodeId) {
        const bbox = getSubtreeBBox(nodeId);
        if (!bbox) return;
        zoomToFitBBox(bbox);
    }

    /** Get the bounding box (world coords) of a node + visible descendants */
    function getSubtreeBBox(nodeId) {
        const descendantIds = getVisibleDescendantIds(nodeId);
        descendantIds.push(nodeId);

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let found = false;

        descendantIds.forEach(id => {
            const ni = state.nodes.find(n => n.data.id === id);
            if (!ni) return;
            found = true;
            minX = Math.min(minX, ni.x - 130);
            minY = Math.min(minY, ni.y - 60);
            maxX = Math.max(maxX, ni.x + 130);
            maxY = Math.max(maxY, ni.y + 60);
        });

        if (!found) return null;
        return { minX, minY, maxX, maxY };
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

    /** Compute zoom + pan to fit a bounding box, then animate to it */
    function zoomToFitBBox(bbox) {
        const vw = viewport.offsetWidth;
        const vh = viewport.offsetHeight;
        const pad = CONFIG.focusPadding;

        const bboxW = bbox.maxX - bbox.minX;
        const bboxH = bbox.maxY - bbox.minY;

        // Desired zoom so that bbox + padding fills the viewport
        const zoomX = (vw - pad * 2) / bboxW;
        const zoomY = (vh - pad * 2) / bboxH;
        let targetZoom = Math.min(zoomX, zoomY);
        targetZoom = Math.max(CONFIG.minZoom, Math.min(CONFIG.maxZoom, targetZoom));

        // Center of the bbox in world coords
        const cx = (bbox.minX + bbox.maxX) / 2;
        const cy = (bbox.minY + bbox.maxY) / 2;

        // Pan so that the center of the bbox maps to the center of the viewport
        const targetPanX = vw / 2 - cx * targetZoom;
        const targetPanY = vh / 2 - cy * targetZoom;

        animateTo(targetPanX, targetPanY, targetZoom);
    }

    /** Kick off a smooth animation to the given pan/zoom */
    function animateTo(panX, panY, zoom) {
        state.targetPanX = panX;
        state.targetPanY = panY;
        state.targetZoom = zoom;

        if (state.animFrameId) cancelAnimationFrame(state.animFrameId);
        state.animFrameId = requestAnimationFrame(animationTick);
    }

    function animationTick() {
        if (state.targetPanX === null) return;

        const ease = 0.14;
        const dx = state.targetPanX - state.panX;
        const dy = state.targetPanY - state.panY;
        const dz = state.targetZoom - state.zoom;

        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(dz) < 0.005) {
            state.panX = state.targetPanX;
            state.panY = state.targetPanY;
            state.zoom = state.targetZoom;
            cancelAnimation();
            applyTransform();
            return;
        }

        state.panX += dx * ease;
        state.panY += dy * ease;
        state.zoom += dz * ease;
        applyTransform();

        state.animFrameId = requestAnimationFrame(animationTick);
    }

    function cancelAnimation() {
        state.targetPanX = null;
        state.targetPanY = null;
        state.targetZoom = null;
        if (state.animFrameId) {
            cancelAnimationFrame(state.animFrameId);
            state.animFrameId = null;
        }
    }

    // ============================================================
    //  BUILD MINDMAP
    // ============================================================

    function buildMindmap() {
        clearCanvas();
        state.nodes = [];
        
        let currentY = 0;
        const paddingX = 400; // horizontal spacing between depths
        const paddingY = 80;  // vertical spacing between leaves
        
        // 1. Compute abstract layout
        function computeLayout(node, depth) {
            if (!node.children || node.children.length === 0 || !state.expandedIds.has(node.id)) {
                node.x = depth * paddingX;
                node.y = currentY;
                currentY += paddingY;
            } else {
                node.x = depth * paddingX;
                let startY = currentY;
                node.children.forEach(c => computeLayout(c, depth + 1));
                let endY = currentY - paddingY;
                node.y = (startY + endY) / 2;
            }
            node.level = depth;
        }
        
        computeLayout(MINDMAP_DATA, 0);
        
        // Offset so root starts at centerX/Y
        const offsetY = CONFIG.centerY - MINDMAP_DATA.y;
        const offsetX = CONFIG.centerX; 
        
        // 2. Create DOM elements
        function renderNodeTree(data, delayIndex, parentBranchIndex) {
            const branchIdx = data.branchIndex || parentBranchIndex || 1;
            const cx = data.x + offsetX;
            const cy = data.y + offsetY;
            
            const nodeInfo = { data, x: cx, y: cy, branchIndex: branchIdx, element: null, width: 0 };
            state.nodes.push(nodeInfo);

            const el = createNodeElement(data, cx, cy, branchIdx, delayIndex);
            nodeInfo.element = el;
            canvas.appendChild(el);
            
            if (data.children && data.children.length > 0 && state.expandedIds.has(data.id)) {
                data.children.forEach((child, i) => {
                    renderNodeTree(child, delayIndex + i + 1, branchIdx);
                });
            }
        }
        
        renderNodeTree(MINDMAP_DATA, 0, null);
        
        // 3. Measure widths for connections before scaling down
        state.nodes.forEach(n => {
            n.width = n.element.offsetWidth;
        });

        // 4. Render connections based on real widths
        renderConnections();

        // 5. Hide nodes for animation
        state.nodes.forEach(n => {
            n.element.style.transform = "translate(0, -50%) scale(0)";
            n.element.style.opacity = "0";
        });

        animateNodesIn();
    }

    function clearCanvas() {
        canvas.querySelectorAll(".mm-node").forEach(el => el.remove());
        connectionsLayer.innerHTML = "";
    }

    // ---- CREATE NODE ELEMENT ----
    function createNodeElement(data, x, y, branchIndex, delayIndex) {
        const el = document.createElement("div");
        const isExpandedNode = state.expandedIds.has(data.id) && data.children && data.children.length > 0;
        const isVisited = state.visitedIds.has(data.id);
        el.className = `mm-node level-${data.level} branch-${branchIndex}${isExpandedNode ? ' is-expanded' : ''}${isVisited ? ' is-visited' : ''}`;
        el.dataset.id = data.id;
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.transform = "translate(0, -50%) scale(1)";

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

        // Expand chevron — LEFT-facing (<) since tree flows left→right
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

        el.dataset.delay = delayIndex;
        return el;
    }

    // ---- ANIMATE NODES IN ----
    function animateNodesIn() {
        const nodeEls = canvas.querySelectorAll(".mm-node");
        nodeEls.forEach((el) => {
            const delay = parseInt(el.dataset.delay) * CONFIG.animDelay;
            setTimeout(() => {
                el.style.transform = "translate(0, -50%) scale(1)";
                el.style.opacity = "1";
                el.classList.add("visible");
            }, delay);
        });
    }

    // ============================================================
    //  EXPAND / COLLAPSE
    // ============================================================

    function toggleExpand(id) {
        if (state.expandedIds.has(id)) {
            collapseRecursive(id);
            buildMindmap();
        } else {
            let siblingsCollapsed = false;
            // Close siblings (accordion style)
            const parentId = findParentId(MINDMAP_DATA, id);
            if (parentId) {
                const parentNode = findNodeData(MINDMAP_DATA, parentId);
                if (parentNode && parentNode.children) {
                    parentNode.children.forEach(sibling => {
                        if (sibling.id !== id && state.expandedIds.has(sibling.id)) {
                            collapseRecursive(sibling.id);
                            siblingsCollapsed = true;
                        }
                    });
                }
            }
            
            state.expandedIds.add(id);
            buildMindmap();

            // Only focus if we didn't just replace a sibling branch
            // This allows stationary camera for sibling swaps, but auto-focus for drilling down
            if (!siblingsCollapsed) {
                setTimeout(() => focusOnSubtree(id), 50);
            }
        }
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

    // ---- RENDER CONNECTIONS ----
    function renderConnections() {
        connectionsLayer.innerHTML = "";
        renderConnectionsRecursive(MINDMAP_DATA);
    }

    function renderConnectionsRecursive(data) {
        if (!data.children || !state.expandedIds.has(data.id)) return;
        const parentNode = state.nodes.find(n => n.data.id === data.id);
        if (!parentNode) return;

        data.children.forEach(child => {
            const childNode = state.nodes.find(n => n.data.id === child.id);
            if (!childNode) return;

            const branchIdx = child.branchIndex || parentNode.branchIndex;
            
            // X coordinates logic: Parent right side edge -> Child left side edge
            const x1 = parentNode.x + parentNode.width;
            const y1 = parentNode.y;
            const x2 = childNode.x;
            const y2 = childNode.y;

            const path = createCurvedPath(x1, y1, x2, y2);
            const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svgPath.setAttribute("d", path);
            svgPath.setAttribute("class", `connection-path branch-${branchIdx}`);

            const length = estimatePathLength(x1, y1, x2, y2);
            svgPath.style.strokeDasharray = length;
            svgPath.style.strokeDashoffset = length;
            svgPath.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            setTimeout(() => { svgPath.style.strokeDashoffset = "0"; }, 100);

            connectionsLayer.appendChild(svgPath);
            renderConnectionsRecursive(child);
        });
    }

    function createCurvedPath(x1, y1, x2, y2) {
        // Horizontal cubic bezier curve
        const controlOffset = Math.abs(x2 - x1) * 0.5;
        return `M ${x1} ${y1} C ${x1 + controlOffset} ${y1}, ${x2 - controlOffset} ${y2}, ${x2} ${y2}`;
    }

    function estimatePathLength(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) * 1.5;
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

        // ---- Touch pan ----
        let touchStartX, touchStartY, touchStartPanX, touchStartPanY;
        viewport.addEventListener("touchstart", (e) => {
            if (e.touches.length === 1 && !e.target.closest(".mm-node")) {
                cancelAnimation();
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                touchStartPanX = state.panX;
                touchStartPanY = state.panY;
            }
        }, { passive: true });

        viewport.addEventListener("touchmove", (e) => {
            if (e.touches.length === 1 && touchStartX !== undefined) {
                state.panX = touchStartPanX + (e.touches[0].clientX - touchStartX);
                state.panY = touchStartPanY + (e.touches[0].clientY - touchStartY);
                applyTransform();
            }
        }, { passive: true });

        viewport.addEventListener("touchend", () => { touchStartX = undefined; });

        // ---- Wheel zoom ----
        viewport.addEventListener("wheel", (e) => {
            e.preventDefault();
            cancelAnimation();
            const delta = e.deltaY > 0 ? 0.92 : 1.08;
            const newZoom = Math.max(CONFIG.minZoom, Math.min(CONFIG.maxZoom, state.zoom * delta));

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
        setTimeout(() => focusOnSubtree("root"), 80);
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
        setTimeout(() => focusOnSubtree("root"), 80);
        showToast("🔒 All branches collapsed", "info");
    }

    function resetView() {
        collapseAll();
    }

    // ---- START ----
    window.addEventListener("DOMContentLoaded", init);
    window.addEventListener("resize", () => {
        focusOnSubtree("root");
    });
})();
