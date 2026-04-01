// ============================================================
// MIND MAP DATA — CBSE Grade 6 Physics Chapter 1
// "Light, Shadows and Reflections"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "LIGHT, SHADOWS\n& REFLECTIONS",
    emoji: "💡",
    level: 0,
    description: "Chapter 1 of Grade 6 Physics explores the nature of light — the fastest thing in the universe. We discover what light is, where it comes from, how it travels, how shadows form, and how it reflects off different surfaces. Understanding light is fundamental to optics, vision, photography, and astronomy.",
    fact: "Light travels at 299,792,458 metres per second — so fast that it could circle the entire Earth 7.5 times in just one second, or travel from the Earth to the Moon in a mere 1.28 seconds!",
    keywords: ["Light", "Shadow", "Reflection", "Transparent", "Opaque"],
    children: [
        {
            id: "pb1-sources",
            label: "Sources of\nLight",
            emoji: "☀️",
            level: 1,
            branchIndex: 1,
            description: "Light is a form of energy that makes things visible to our eyes. Objects that produce their own light are called luminous objects. Objects that do not produce light but are visible by reflecting light from luminous sources are called non-luminous objects. The Sun is the most important natural luminous object for life on Earth.",
            fact: "The light from stars we see tonight may have left those stars thousands or even millions of years ago — we are literally looking back in time when we gaze at the night sky! Some stars we see may have already exploded and no longer exist!",
            keywords: ["Luminous", "Non-Luminous", "Sun", "Natural", "Artificial"],
            quiz: {
                question: "Which of the following is a luminous object?",
                options: ["The Moon", "A mirror", "A burning candle", "A white paper"],
                correct: 2,
                explanation: "A burning candle is a luminous object because it produces its own light through the chemical combustion of wax. The Moon, mirror, and white paper are non-luminous — they only reflect light from another source (the Sun) and don't generate light themselves."
            },
            children: [
                {
                    id: "sb1-natural",
                    label: "Natural Sources\nof Light",
                    emoji: "🌟",
                    level: 2,
                    description: "Natural luminous objects include: the Sun (light from nuclear fusion), stars, lightning, fireflies (bioluminescence — chemical light from living organisms), some deep-sea fish with bioluminescent organs, the Aurora Borealis (light from energetic solar particles colliding with atmospheric gases), and fire.",
                    fact: "Fireflies produce light with nearly 100% efficiency — almost all the chemical energy goes directly into light with virtually no heat, compared to an incandescent bulb which converts only 5% of energy to light and wastes 95% as heat!",
                    keywords: ["Sun", "Stars", "Bioluminescence", "Fire"],
                    children: [
                        { id: "tb1-sunlight", label: "Sunlight", emoji: "☀️", level: 3, description: "The Sun produces light through nuclear fusion — hydrogen atoms fuse into helium in the core, releasing enormous energy as photons of light and heat. This energy takes about 100,000 years to travel from the Sun's core to its surface, then just 8 minutes to reach Earth across 150 million kilometres.", fact: "The Sun has been shining for approximately 4.6 billion years and has enough hydrogen fuel to continue for another 5 billion years — after which it will expand into a Red Giant large enough to engulf Mercury, Venus, and possibly Earth!" },
                        { id: "tb1-biolum", label: "Bioluminescence", emoji: "🌊", level: 3, description: "Bioluminescence is the production of light by living organisms through chemical reactions, without heat. Found in fireflies (attracts mates), deep-sea fish like anglerfish (lures prey), some jellyfish (startles predators), certain fungi, and bacteria. Over 76% of deep-sea life forms are bioluminescent.", fact: "The bioluminescent Maldivian beaches glow brilliant electric blue at night when disturbed — caused by dinoflagellate plankton that flash light as a defence response to wave movement, creating an otherworldly natural light show!" }
                    ]
                },
                {
                    id: "sb1-artificial",
                    label: "Artificial Sources\nof Light",
                    emoji: "💡",
                    level: 2,
                    description: "Artificial luminous objects are those created by humans: electric bulbs (incandescent, CFL, LED), candles, lanterns, lamps, neon signs, lasers, and torches. LEDs (Light Emitting Diodes) are the most energy-efficient artificial light source, converting up to 90% of electrical energy directly into light.",
                    fact: "Switching a traditional incandescent bulb to an LED reduces its energy consumption by 90% — if India replaced all its incandescent bulbs with LEDs, it would save enough electricity to power the entire state of Rajasthan for a year!",
                    keywords: ["LED", "Candle", "Torch", "Bulb"],
                    children: [
                        { id: "tb1-led", label: "LED Technology", emoji: "🔦", level: 3, description: "LEDs (Light Emitting Diodes) produce light when electrons flow across a semiconductor junction and release energy as photons of light. They are: highly energy-efficient, long-lasting (50,000+ hours), cool-running (no dangerous heat waste), available in all colours, and now cost less than traditional bulbs — making them the standard for modern lighting.", fact: "The 2014 Nobel Prize in Physics was awarded to three Japanese scientists for inventing the blue LED — because once red and green LEDs existed, blue was the missing colour needed to create white LED light and complete the revolution in efficient lighting!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-shadows",
            label: "Shadows &\nTransparency",
            emoji: "🌑",
            level: 1,
            branchIndex: 2,
            description: "Shadows form when an opaque object blocks light and prevents it from reaching a surface behind it. The shadow takes the shape of the object's silhouette. The size, position, and darkness of a shadow depend on the relative positions of the light source, object, and screen. Understanding shadows requires understanding how light travels in straight lines.",
            fact: "The world's largest natural shadow is cast by the Moon during a solar eclipse — the Moon's shadow (umbra) is only about 270 km wide at Earth's surface, yet total darkness within it can last up to 7.5 minutes in a single location!",
            keywords: ["Opaque", "Shadow", "Umbra", "Penumbra", "Transparent"],
            quiz: {
                question: "Why do transparent objects NOT form strong shadows?",
                options: ["They are very thin", "They let most light pass through them", "They reflect all light back", "They absorb all light"],
                correct: 1,
                explanation: "Transparent objects like glass or clear plastic allow most light to pass through them. Since only a little light is blocked, only a faint or no shadow forms behind them. Opaque objects block all light and form strong, dark shadows."
            },
            children: [
                {
                    id: "sb2-shadowform",
                    label: "Shadow\nFormation",
                    emoji: "👤",
                    level: 2,
                    description: "Three things are needed to form a shadow: (1) A light source, (2) An opaque object that blocks the light, and (3) A screen or surface for the shadow to fall on. Light from a point source creates a sharper shadow (umbra). Light from an extended source creates a central dark shadow (umbra) surrounded by a partial shadow (penumbra).",
                    fact: "Ancient Egyptians used shadow clocks (early sundials) over 3,500 years ago — tracking the movement and length of a vertical stick's shadow to tell time throughout the day. This was based on the observation that shadows change predictably as the Sun moves across the sky!",
                    keywords: ["Opaque Object", "Light Source", "Screen"],
                    children: [
                        { id: "tb2-shadowsize", label: "Shadow Size\nVariations", emoji: "📏", level: 3, description: "Shadow size varies with: (1) Distance of object from light source — move the object closer to the light, the shadow gets larger; move it away, the shadow shrinks. (2) Angle of the light source — the Sun casts longest shadows at dawn/dusk (low angle) and shortest at noon (directly overhead). (3) Size of the object itself.", fact: "The 'camera obscura' (dark chamber) used by Renaissance artists and later inventors was based entirely on shadow formation through a tiny hole — it projected an inverted image of the outside world onto a white wall, directly inspiring the invention of photography!" }
                    ]
                },
                {
                    id: "sb2-transparency",
                    label: "Transparent,\nOpaque & Translucent",
                    emoji: "🪟",
                    level: 2,
                    description: "Materials are classified by how they interact with light: Transparent (clear glass, clean water, air) — allow almost all light through, objects perfectly visible through them. Translucent (frosted glass, wax paper, thin cloth) — allow some light but scatter it, objects blurry/invisible but light passes. Opaque (wood, metal, thick paper) — block all light, form strong dark shadows.",
                    fact: "Aerogel, the world's lightest solid material (97% air), is so transparent to light and heat that it was used in NASA's Mars Pathfinder mission to insulate instruments from −80°C Martian nights while remaining virtually transparent to scientists' instruments!",
                    keywords: ["Transparent", "Translucent", "Opaque"],
                    children: [
                        { id: "tb2-transapps", label: "Applications", emoji: "🏗️", level: 3, description: "Transparent materials: glass windows, eyeglasses, camera lenses, telescope objectives, aquarium tanks. Translucent materials: bathroom frosted glass (privacy + light), lampshades (diffuses harsh light), greenhouse polycarbonate panels. Opaque materials: room walls (blocks external light), blackout curtains (completely blocks sunlight for daytime sleep or cinema projection).", fact: "The James Webb Space Telescope's 18 gold-coated mirror segments are each nearly perfectly reflective — they reflect over 98% of the light that hits them, collecting light from galaxies 13.6 billion light-years away!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-reflection",
            label: "Reflection\nof Light",
            emoji: "🪞",
            level: 1,
            branchIndex: 3,
            description: "Reflection is the bouncing back of light when it strikes a surface that it cannot pass through. The law of reflection states: the angle of incidence (incoming ray) equals the angle of reflection (outgoing ray). Mirrors, calm water, and polished metal are excellent reflectors. Reflection is why we can see non-luminous objects — they reflect light from luminous sources into our eyes.",
            fact: "The Moon has no light of its own — all the 'moonlight' we see is actually sunlight that has travelled 150 million km from the Sun, hit the Moon's surface, and reflected another 384,400 km to reach our eyes in just 1.3 seconds!",
            keywords: ["Mirror", "Angle of Incidence", "Angle of Reflection"],
            quiz: {
                question: "What is the law of reflection?",
                options: ["Light bends when it hits a mirror", "Angle of incidence equals the angle of reflection", "Light is absorbed by shiny surfaces", "Reflection only happens in dark rooms"],
                correct: 1,
                explanation: "The Law of Reflection states that the angle at which a light ray hits a reflective surface (angle of incidence) is exactly equal to the angle at which it bounces back (angle of reflection). Both angles are measured from the 'normal' — an imaginary line perpendicular to the surface at the point of reflection."
            },
            children: [
                {
                    id: "sb3-regularirr",
                    label: "Regular vs Diffuse\nReflection",
                    emoji: "✨",
                    level: 2,
                    description: "Regular (specular) reflection occurs on very smooth surfaces (like shiny mirrors or calm water) — all reflected rays are parallel, forming a clear image. Diffuse reflection occurs on rough surfaces (paper, skin, road) — rays scatter in all directions because the surface has microscopic bumps, creating no clear image but making the surface visible from all angles.",
                    fact: "We can see everything around us — walls, people, trees, books — solely because of diffuse reflection. If all surfaces were perfectly smooth mirrors, we'd be surrounded by confusing reflections of reflections and couldn't see anything clearly!",
                    keywords: ["Specular", "Diffuse", "Smooth", "Rough"],
                    children: [
                        { id: "tb3-mirroruses", label: "Uses of\nMirrors", emoji: "🪞", level: 3, description: "Plane mirrors are used in: daily grooming, periscopes (to see over obstacles), kaleidoscopes (multiple reflection patterns), rear-view mirrors in vehicles, and security mirrors in shops. Curved mirrors (concave and convex) are used in telescopes, car headlights, solar concentrators, make-up mirrors, and shop security systems.", fact: "The world's largest optical telescope mirror — the Giant Magellan Telescope being built in Chile — will have a primary mirror 25.4 metres wide made of 7 individual circular glass segments, each ground to atomic-level smoothness to enable it to see objects 10 billion light-years away!" }
                    ]
                },
                {
                    id: "sb3-periscope",
                    label: "Periscope &\nKaleidoscope",
                    emoji: "🔭",
                    level: 2,
                    description: "A periscope uses two plane mirrors at 45° angles to allow someone to see over obstacles (used in submarines and by soldiers in trenches). A kaleidoscope uses two or three mirrors arranged at specific angles — reflections of coloured objects between the mirrors create beautiful symmetrical patterns that multiply as the tube is rotated.",
                    fact: "The periscope was used extensively in World War I trench warfare — soldiers could safely look above the trench parapet to observe enemy positions without exposing their head to enemy fire, saving countless lives!",
                    keywords: ["Periscope", "Kaleidoscope", "45 degrees"],
                    children: [
                        { id: "tb3-reflectapps", label: "Reflection\nApplications", emoji: "🛰️", level: 3, description: "Reflection is used in: dental mirrors (to see behind teeth), car rear-view mirrors (to see vehicles behind), road cat's-eyes (reflect car headlights for safer night driving), solar cookers/furnaces (focus reflected sunlight for intense heat), satellite dishes (reflect radio waves to a focal point), and fibre optic cables (light bounced along by total internal reflection).", fact: "Cats' eyes in roads — those reflective markers — were invented in 1933 by Percy Shaw after he was saved from driving off a foggy cliff edge when the reflectors on a cat's eyes (real cat!) briefly shone back his headlights!" }
                    ]
                }
            ]
        }
    ]
};
