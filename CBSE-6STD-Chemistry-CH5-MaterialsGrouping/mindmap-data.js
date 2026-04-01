// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology/Chemistry Chapter 5
// "How to Group Materials?"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "HOW TO GROUP\nMATERIALS?",
    emoji: "🔍",
    level: 0,
    description: "Chapter 5 explores the science of observing and classifying everyday objects and materials. By studying their physical properties — lustre, hardness, texture, solubility, and transparency — we learn to systematically group materials. Classification is a fundamental skill in all branches of science.",
    fact: "The universe contains 118 known elements, and materials science has created over 300,000 synthetic materials that don't exist in nature — yet scientists classify them all using just a handful of properties!",
    keywords: ["Classification", "Properties", "Matter", "Observation"],
    children: [
        {
            id: "pb1-observing",
            label: "Observing\nMaterials",
            emoji: "👁️",
            level: 1,
            branchIndex: 1,
            description: "The first step in classifying materials is careful observation using our senses. We look at how materials appear (colour, lustre), feel (texture, hardness), and behave (solubility, conductivity). Good observation skills are the foundation of all scientific classification, from geology to materials engineering.",
            fact: "Scientists estimate that the naked human eye can distinguish between 10 million different shades of colour — yet most colours in nature remain unnamed in most languages!",
            keywords: ["Senses", "Observation", "Appearance", "Properties"],
            quiz: {
                question: "What property makes metals like gold and silver shine?",
                options: ["Hardness", "Transparency", "Lustre", "Density"],
                correct: 2,
                explanation: "Lustre is the property of a material that describes how it reflects light off its surface. Metals like gold, silver, and copper are lustrous because they reflect light strongly, giving them a characteristic shine or sheen."
            },
            children: [
                {
                    id: "sb1-lustre",
                    label: "Lustre",
                    emoji: "✨",
                    level: 2,
                    description: "Lustre describes how a material reflects light from its surface. Lustrous materials (like metals) have a shiny, reflective surface. Non-lustrous materials (like wood or plastic) have a dull, non-reflective surface. Lustre is an important property used to identify metals and distinguish them from non-metals.",
                    fact: "Gold's exceptional lustre is so stable that gold artefacts buried for 3,000 years emerge from archaeological digs still shining perfectly — unlike iron which rusts away completely!",
                    keywords: ["Shiny", "Metallic", "Reflective"],
                    children: [
                        { id: "tb1-lustrous", label: "Lustrous Materials", emoji: "🥇", level: 3, description: "Examples of lustrous materials include gold, silver, aluminium, copper, and iron. These materials reflect light and have a characteristic metallic shine. Polishing enhances lustre by smoothing microscopic surface irregularities that would otherwise scatter light.", fact: "Diamond, a non-metal, has the highest refractive index of any natural substance and produces such intense lustre and sparkle that it reflects light in more directions than any other material!" },
                        { id: "tb1-nonlustrous", label: "Non-Lustrous Materials", emoji: "🪵", level: 3, description: "Non-lustrous materials such as wood, plastic, rubber, and paper have dull surfaces that scatter rather than reflect light. These materials are typically non-metallic and have surfaces too rough at a microscopic level to form a true reflection.", fact: "Black velvet fabric has been measured as one of the most non-lustrous materials ever manufactured — it absorbs nearly 99.965% of all light that hits it, appearing as an extremely dark, matte black!" }
                    ]
                },
                {
                    id: "sb1-hardness",
                    label: "Hardness",
                    emoji: "💎",
                    level: 2,
                    description: "Hardness is a material's resistance to scratching, indentation, or deformation. The Mohs scale, developed by Friedrich Mohs in 1812, rates materials from 1 (softest — talc) to 10 (hardest — diamond). Hard materials are used in cutting tools, drills, and construction; soft materials are used for writing, polishing, and padding.",
                    fact: "A diamond can only be scratched by another diamond — it is the hardest natural substance on Earth and has a Mohs rating of 10/10!",
                    keywords: ["Mohs Scale", "Scratch", "Resistance"],
                    children: [
                        { id: "tb1-hard", label: "Hard Materials", emoji: "🪨", level: 3, description: "Hard materials include diamond, corundum (ruby, sapphire), quartz, iron, and granite. These materials resist scratching, are used in tools and construction, and retain their shape under significant physical force and pressure.", fact: "Corundum (aluminium oxide) with a Mohs hardness of 9 is used to coat sandpaper — only diamond tools can shape or cut corundum itself!" },
                        { id: "tb1-soft", label: "Soft Materials", emoji: "🧴", level: 3, description: "Soft materials like talc (Mohs 1), gypsum, and wax can be easily scratched even by a fingernail. They are used in cosmetics (talcum powder), casts for broken bones (plaster of Paris/gypsum), and candles (wax).", fact: "Soapstone, used by ancient Indians to carve intricate jewellery and art, is so soft (Mohs 2-3) it can be scratched with a copper coin!" }
                    ]
                },
                {
                    id: "sb1-texture",
                    label: "Texture & Other\nProperties",
                    emoji: "🧱",
                    level: 2,
                    description: "Texture describes how a material feels to the touch — rough, smooth, grainy, or slippery. Other observable properties include flexibility (ability to bend without breaking), elasticity (ability to return to original shape), and conductivity (ability to conduct heat or electricity).",
                    fact: "Graphite and diamond are both made entirely of carbon atoms — yet graphite is one of the softest materials (used in pencils) while diamond is the hardest! The difference is entirely in how the atoms are arranged.",
                    keywords: ["Rough", "Smooth", "Flexible", "Conductor"],
                    children: [
                        { id: "tb1-rough", label: "Rough vs Smooth", emoji: "🪨", level: 3, description: "Rough materials like sandpaper, brick, and tree bark have microscopic ridges and bumps on their surface. Smooth materials like glass, ice, and polished marble have extremely flat surfaces. Roughness increases friction while smoothness reduces it.", fact: "Shark skin has microscopic tooth-like scales called denticles that reduce drag in water — swimsuit designers copied this pattern to create state-of-the-art performanceswimsuits!" },
                        { id: "tb1-flexible", label: "Flexible vs Rigid", emoji: "🌿", level: 3, description: "Flexible materials like rubber, cloth, and thin plastic can bend without breaking. Rigid materials like glass, iron, and concrete resist bending and break under excessive force. Flexibility is critically important for materials used in packaging, clothing, and safety equipment.", fact: "Spider silk is simultaneously one of the most flexible AND one of the strongest natural materials — gram for gram, it is stronger than steel yet stretches 40% before breaking!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-properties",
            label: "Key Properties\nof Materials",
            emoji: "⚗️",
            level: 1,
            branchIndex: 2,
            description: "Beyond appearance and texture, materials are classified by properties like solubility (ability to dissolve in water), transparency (ability to transmit light), conductivity (heat/electricity), and magnetic nature. These properties determine what each material is useful for in science, technology, and daily life.",
            fact: "The most transparent natural material on Earth is aerogel — a laboratory material 99.9% air — yet it is also an excellent heat insulator used in NASA spacesuits!",
            keywords: ["Solubility", "Transparency", "Conductivity", "Magnetism"],
            quiz: {
                question: "Which of the following is an example of a transparent material?",
                options: ["Wood", "Glass", "Copper", "Rubber"],
                correct: 1,
                explanation: "Glass is transparent because light can pass through it almost entirely. This property makes it ideal for windows, lenses, and mirrors. Wood, copper, and rubber are opaque — light cannot pass through them."
            },
            children: [
                {
                    id: "sb2-solubility",
                    label: "Solubility",
                    emoji: "🧂",
                    level: 2,
                    description: "Solubility is the ability of a substance (solute) to dissolve in a liquid (solvent) to form a uniform mixture (solution). Common examples include salt and sugar dissolving in water. Insoluble materials like sand and chalk do not dissolve in water. Solubility is highly temperature-dependent — hot water dissolves more solute than cold water.",
                    fact: "The Dead Sea is so saturated with dissolved salt (10 times saltier than normal seawater) that objects — including people — float effortlessly on its surface without sinking!",
                    keywords: ["Dissolve", "Solution", "Solute", "Solvent"],
                    children: [
                        { id: "tb2-soluble", label: "Soluble Substances", emoji: "🧪", level: 3, description: "Salt (NaCl), sugar, copper sulphate, and many minerals are soluble in water. When a soluble substance dissolves, its particles spread evenly between water molecules, making the mixture clear and uniform — a true solution (not a suspension or mixture).", fact: "At 100°C, hot water can dissolve almost 3 times as much salt as cold water at 0°C — temperature dramatically affects how much substance can be dissolved!" },
                        { id: "tb2-insoluble", label: "Insoluble Substances", emoji: "🪨", level: 3, description: "Sand, chalk (calcium carbonate), oil, and many minerals are insoluble in water — they don't dissolve but instead remain as separate particles or float as droplets. This property is important in filtration and separation techniques.", fact: "Oil and water don't mix because water is a polar molecule and oil is non-polar — like charges repel, but vinegar (acid) and oil can be temporarily combined by adding mustard as an emulsifier to make salad dressing!" }
                    ]
                },
                {
                    id: "sb2-transparency",
                    label: "Transparency",
                    emoji: "🪟",
                    level: 2,
                    description: "Transparency describes how much light can pass through a material. Transparent materials (like glass and clear water) allow almost all light through. Translucent materials (like frosted glass and thin plastic) allow some light but scatter it. Opaque materials (like wood and metal) allow no light through.",
                    fact: "The invisibility cloak concept from science fiction is being made real — researchers at the University of Rochester created a working multi-directional cloak using only ordinary optical lenses!",
                    keywords: ["Transparent", "Translucent", "Opaque"],
                    children: [
                        { id: "tb2-transparent", label: "Transparent", emoji: "🔷", level: 3, description: "Transparent materials like glass, clear plastic, and clean air allow almost all light to pass through without scattering. Objects are clearly visible through them. Transparency is essential for optical lenses, windows, goggles, and microscope slides.", fact: "The clearest natural substance known is pure air — which is so transparent to human vision that we forget it's even there, despite it being a mixture of several gases!" },
                        { id: "tb2-opaque", label: "Opaque & Translucent", emoji: "🪞", level: 3, description: "Opaque materials like metal, wood, and stone block all light. Translucent materials like wax paper, frosted glass, and thin milk allow some light but create a blurred image. These distinctions matter greatly in architecture, photography, and privacy screen design.", fact: "X-rays can pass through human soft tissue (translucent) but not through bones (opaque) — this differential opacity is what makes X-ray medical imaging possible!" }
                    ]
                },
                {
                    id: "sb2-conduction",
                    label: "Conductors &\nInsulators",
                    emoji: "⚡",
                    level: 2,
                    description: "Conductors are materials that allow heat or electricity to flow through them easily. Metals like copper and iron are excellent conductors. Insulators are materials that resist the flow of heat and electricity. Wood, rubber, plastic, and glass are common insulators. This property is critical in electrical engineering and kitchen safety.",
                    fact: "Copper is so effective at conducting electricity that it remains the most widely used electrical conductor in the world — nearly 21 million tonnes of copper are produced globally every year!",
                    keywords: ["Heat", "Electricity", "Metal", "Rubber"],
                    children: [
                        { id: "tb2-conductor", label: "Conductors", emoji: "🔌", level: 3, description: "Electrical conductors like copper, silver, gold, and aluminium have free-moving electrons in their structure that carry electric charge efficiently. Thermal conductors like iron and copper also transfer heat energy quickly between their atoms when one end is heated.", fact: "Silver is actually the best electrical conductor of all metals — but copper is used in wires because it is 700 times cheaper while still being an excellent conductor!" },
                        { id: "tb2-insulator", label: "Insulators", emoji: "🧤", level: 3, description: "Insulators prevent unwanted flow of heat or electricity. Rubber, plastic, glass, and wood have tightly bound electrons that don't move freely, stopping electrical flow. Wool, fur, and air gaps are thermal insulators used in warm clothing and building insulation.", fact: "The rubber on electrical cables is so important that a bare copper wire touching the wrong surface can create a short circuit powerful enough to start a fire or electrocute a person!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-matter",
            label: "Sorting &\nClassifying Matter",
            emoji: "📊",
            level: 1,
            branchIndex: 3,
            description: "Scientists classify all matter — everything in the universe that has mass and takes up space — into categories based on its composition, state, and properties. The most fundamental classification divides matter into pure substances (elements and compounds) and mixtures. Understanding these categories helps us study everything from atoms to stars.",
            fact: "99% of the observable universe by mass is made of just two elements — hydrogen and helium — yet from these humble beginnings, all 118 known elements were created inside stars over billions of years!",
            keywords: ["Pure Substance", "Mixture", "Element", "Compound"],
            quiz: {
                question: "Which of the following is the correct classification of materials by state?",
                options: ["Liquid, gas, plasma", "Solid, liquid, gas", "Wet, dry, and gaseous", "Light, heavy, and medium"],
                correct: 1,
                explanation: "Matter in everyday life exists in three fundamental states: solid (fixed shape and volume), liquid (fixed volume, variable shape), and gas (variable shape and volume). Plasma is a fourth state found in stars and lightning but not common in daily life."
            },
            children: [
                {
                    id: "sb3-states",
                    label: "States of Matter",
                    emoji: "🧊",
                    level: 2,
                    description: "All matter exists in one of three common states: solid, liquid, or gas. Each state has distinct properties relating to how closely packed the particles are and how strongly they are held together. Temperature and pressure determine which state a substance exists in at any given time.",
                    fact: "Water is the only substance on Earth that commonly exists naturally in all three states simultaneously — ice in glaciers, liquid in rivers, and water vapour in clouds, often in the same region!",
                    keywords: ["Solid", "Liquid", "Gas"],
                    children: [
                        { id: "tb3-solid", label: "Solids", emoji: "🧱", level: 3, description: "Solids have a definite shape and definite volume. Their particles are tightly packed and vibrate in fixed positions. Solids are incompressible and retain their shape under normal conditions. Examples include ice, metal, stone, and wood.", fact: "Some solids can change directly from solid to gas without becoming liquid first — this process is called sublimation. Dry ice (solid CO₂) sublimates at room temperature and is used for dramatic smoke effects in fog machines!" },
                        { id: "tb3-liquid", label: "Liquids", emoji: "💧", level: 3, description: "Liquids have a definite volume but no fixed shape — they take the shape of their container. Liquid particles are close but can move past each other. Liquids flow, exert pressure equally in all directions, and can dissolve other substances.", fact: "Honey is a liquid so viscous that it moves 10,000 times more slowly than water — it flows at a rate of only 1 millimetre per second at room temperature!" },
                        { id: "tb3-gas", label: "Gases", emoji: "💨", level: 3, description: "Gases have neither fixed shape nor fixed volume — they expand to fill whatever container they are placed in. Gas particles move freely and rapidly in all directions. Gases are compressible, which makes them useful in aerosol cans, air compression, and gas cylinders.", fact: "The air you breathe in one single breath contains approximately 10²² (ten sextillion) molecules — more than the total number of all trees on Earth multiplied by a billion!" }
                    ]
                },
                {
                    id: "sb3-sorting",
                    label: "Grouping\nObjects",
                    emoji: "📦",
                    level: 2,
                    description: "Objects can be classified using multiple criteria simultaneously — like natural/synthetic, biodegradable/non-biodegradable, or man-made/naturally occurring. Sorting helps organise information, makes identification easier, and allows us to see patterns and relationships between different materials and objects.",
                    fact: "Modern recycling science depends entirely on accurate material sorting — improperly sorted waste can contaminate entire batches of recyclable material, sending thousands of kilograms to landfill unnecessarily!",
                    keywords: ["Natural", "Synthetic", "Biodegradable"],
                    children: [
                        { id: "tb3-natural", label: "Natural vs\nSynthetic", emoji: "🌿", level: 3, description: "Natural materials are found in nature: wood, stone, leather, wool, silk, and cotton are all natural. Synthetic materials are made by humans through chemical processes: plastic, nylon, polyester, glass, and concrete are synthetic. Synthetic materials often outperform natural ones in specific properties.", fact: "Nylon, the world's first fully synthetic fibre, was invented in 1935 by DuPont chemist Wallace Carothers — its first major commercial use was women's stockings, which sold 64 million pairs in its first year!" },
                        { id: "tb3-bio", label: "Biodegradable vs\nNon-biodegradable", emoji: "♻️", level: 3, description: "Biodegradable materials (food scraps, paper, cotton) can be broken down naturally by microorganisms back into basic chemical components. Non-biodegradable materials (most plastics, metals, glass) persist in the environment for hundreds of years without decomposing, creating significant pollution challenges.", fact: "A plastic bag can take 500-1,000 years to fully decompose in a landfill — yet it can be manufactured in seconds and used for just minutes before being thrown away!" }
                    ]
                }
            ]
        }
    ]
};
