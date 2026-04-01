// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 7
// "Getting to Know Plants"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "GETTING TO\nKNOW PLANTS",
    emoji: "🌿",
    level: 0,
    description: "Chapter 7 explores the wonderful world of plants — their different parts, how each part functions, and how they are classified. From tiny herbs to towering trees, plants are the foundation of all food on Earth. Understanding plant structure helps us appreciate how they grow, reproduce, and sustain entire ecosystems.",
    fact: "Plants have been on Earth for over 470 million years — they were the first organisms to colonise dry land, transforming the bare rocky surface of ancient Earth into the green, oxygen-rich world we know today!",
    keywords: ["Root", "Stem", "Leaf", "Flower", "Photosynthesis"],
    children: [
        {
            id: "pb1-roots",
            label: "Roots &\nTheir Functions",
            emoji: "🌱",
            level: 1,
            branchIndex: 1,
            description: "Roots are the underground parts of a plant that anchor it in the soil, absorb water and minerals from the soil, and store food. There are two major types of root systems — taproot systems (one main thick root with smaller lateral roots) and fibrous root systems (many fine roots spreading from the base of the stem).",
            fact: "The total root length of a single mature rye plant, if all its roots and root hairs were laid end to end, would stretch over 600 kilometres — longer than the distance from Delhi to Jaipur!",
            keywords: ["Taproot", "Fibrous Root", "Absorption", "Anchor"],
            quiz: {
                question: "Which type of root system does a mango tree have?",
                options: ["Fibrous root system", "Taproot system", "Prop root system", "Aerial root system"],
                correct: 1,
                explanation: "Mango trees have a taproot system — one large, thick main root called the taproot that grows deep into the soil, with smaller lateral roots branching off from it. Plants like wheat and grass have fibrous root systems with many fine roots of similar size."
            },
            children: [
                {
                    id: "sb1-taproot",
                    label: "Taproot System",
                    emoji: "🥕",
                    level: 2,
                    description: "The taproot system has one dominant primary root (the taproot) that grows straight down deep into the soil, with smaller secondary and tertiary branches. This system is excellent for accessing deep underground water and anchoring large plants firmly. Carrots, radishes, and turnips are modified taproots we eat as vegetables.",
                    fact: "The taproot of a mature mesquite tree in the American Southwest can grow over 53 metres deep into the earth — deeper than a 15-storey building is tall — to reach underground water in the desert!",
                    keywords: ["Primary Root", "Lateral Roots", "Deep Soil"],
                    children: [
                        { id: "tb1-taproots", label: "Examples", emoji: "🌳", level: 3, description: "Plants with taproot systems include: mango, neem, rose, sunflower, carrot, radish, turnip, beetroot, and most dicotyledon plants. Taproots are typically found in large shrubs and trees that need strong anchorage.", fact: "The carrot we eat is actually a biennial plant's taproot packed with stored food (sugars) meant to fuel the plant's second year of growth — we harvest and eat it before the plant gets to use it!" },
                        { id: "tb1-storage", label: "Modified Storage\nRoots", emoji: "🥕", level: 3, description: "Some taproots are modified to store large quantities of food (starch and sugars). Examples include carrots (orange, rich in beta-carotene), radishes (white/red, pungent), turnips, and beetroots. These are nutritious vegetables used worldwide and are the root's way of storing food reserves.", fact: "Sweet potato roots can store so much starch that a single plant can produce over 4 kilograms of edible roots — making it one of the world's most calorie-dense food crops per square metre of farmland!" }
                    ]
                },
                {
                    id: "sb1-fibrous",
                    label: "Fibrous Root System",
                    emoji: "🌾",
                    level: 2,
                    description: "Fibrous root systems have many thin roots of roughly equal thickness that spread from the base of the stem in all directions rather than one dominant root going deep. They are excellent at binding the topsoil which prevents erosion. Most grasses and cereal crops (wheat, rice, maize) have fibrous roots.",
                    fact: "Grass fibrous roots are so effective at holding soil that a single square metre of healthy lawn grass can bind together over 2 tonnes (2,000 kg) of topsoil — making grasses nature's best anti-erosion tool!",
                    keywords: ["Spread", "Soil Erosion", "Grasses"],
                    children: [
                        { id: "tb1-fibrousex", label: "Examples &\nImportance", emoji: "🌻", level: 3, description: "Fibrous roots are found in: wheat, rice, maize, sugarcane, onion, grass, and most monocotyledon plants. Because they spread widely near the surface, they are excellent at absorbing rainfall quickly before it runs off, preventing soil erosion, and anchoring soil on hillsides and riverbanks.", fact: "The Great Plains of America were once held stable for thousands of years by native prairie grass fibrous roots — but when settlers ploughed the grass up for farming, the exposed topsoil blew away in the catastrophic 1930s Dust Bowl!" }
                    ]
                },
                {
                    id: "sb1-rootfunctions",
                    label: "Functions\nof Roots",
                    emoji: "💧",
                    level: 2,
                    description: "Roots perform three vital functions: (1) Anchorage — they hold the plant firmly in the soil against wind and rain. (2) Absorption — root hair cells absorb water and dissolved minerals from the soil. (3) Transport — the absorbed water travels up through the xylem vessels in the root to the stem and leaves. Some roots additionally store food.",
                    fact: "Root hair cells are single-celled extensions of the root surface that are individually invisible to the naked eye — yet they collectively increase a root's water-absorbing surface area by up to 1,000 times!",
                    keywords: ["Anchorage", "Absorption", "Transport"],
                    children: [
                        { id: "tb1-roothairs", label: "Root Hair Cells", emoji: "🔬", level: 3, description: "Root hair cells are tiny hair-like extensions found just behind the root tip. Each root hair is a single cell elongated into a tube shape that pushes between soil particles to maximise contact with water. Water enters by osmosis (moving from high concentration outside into the less concentrated cell).", fact: "Root hair cells live for only 2-3 days and are constantly replaced by new ones forming behind the growing root tip — an entire army of fresh absorption cells perpetually advancing through the soil!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-stems",
            label: "Stems &\nLeaves",
            emoji: "🌿",
            level: 1,
            branchIndex: 2,
            description: "The stem is the main structural axis of a plant, connecting roots to leaves and flowers. It conducts water, minerals, and food between these parts through its vascular bundles. Leaves are the plant's food factories — flat, green structures that capture sunlight and perform photosynthesis. Together, stems and leaves form the shoot system of a plant.",
            fact: "The world's tallest grass — which is also technically a stem — is bamboo: it can grow 91 cm (3 feet!) in a single day, making it the fastest growing plant on Earth!",
            keywords: ["Photosynthesis", "Vascular", "Xylem", "Phloem"],
            quiz: {
                question: "What is the primary function of leaves in a plant?",
                options: ["To absorb water from soil", "To anchor the plant in soil", "To make food through photosynthesis", "To transport water to the roots"],
                correct: 2,
                explanation: "The primary function of leaves is photosynthesis — converting sunlight, water, and carbon dioxide into glucose (food) and oxygen. Leaves are specially designed with a flat shape to maximize surface area for capturing sunlight."
            },
            children: [
                {
                    id: "sb2-stem",
                    label: "Stem Structure\n& Function",
                    emoji: "🪵",
                    level: 2,
                    description: "The stem provides structural support, keeping the plant upright and positioning leaves to receive maximum sunlight. Inside the stem, two types of vascular tubes run parallel: xylem (carries water and minerals upward from roots) and phloem (carries dissolved glucose downward from leaves). At nodes on the stem, leaves and branches grow; internodes are the sections between nodes.",
                    fact: "Celery — the vegetable we eat — is actually a plant's petiole (leaf stalk) bunched together. When you pull the strings off a celery stalk, you're actually removing the plant's visible vascular bundles (xylem and phloem)!",
                    keywords: ["Xylem", "Phloem", "Node", "Internode"],
                    children: [
                        { id: "tb2-stemtype", label: "Types of Stems", emoji: "🌸", level: 3, description: "Stems vary greatly: erect stems (mango, sunflower) grow upright; creeping stems (grass, strawberry, watermelon) grow along the ground; climbing stems (money plant, grape vine) use tendrils or suckers to climb; underground stems (potato, ginger, garlic) store food underground.", fact: "The potato we eat is NOT a root — it is a modified underground stem called a tuber! You can prove it by looking for 'eyes' (buds) on its surface — only stems have buds, not roots!" },
                        { id: "tb2-transport", label: "Water Transport", emoji: "💧", level: 3, description: "Water absorbed by root hairs travels up through xylem vessels in a continuous column driven by transpiration pull — as water evaporates from leaves, it creates a tension that literally sucks water upward from roots, even in trees 100 metres tall. This process requires no energy from the plant itself!", fact: "The Amazon water lily has a stem that can grow an astonishing 8 metres long underwater — its enormous flat leaves (up to 3 metres wide) float on the surface above!" }
                    ]
                },
                {
                    id: "sb2-leaves",
                    label: "Leaf Structure\n& Venation",
                    emoji: "🍃",
                    level: 2,
                    description: "A typical leaf has: a flat blade (lamina) to capture light, a stalk (petiole) connecting to the stem, and a network of veins (venation) that carry water to the leaf and food away. Leaves have tiny pores called stomata (mostly on the underside) which allow gas exchange — CO₂ in, O₂ out — and regulate water loss through transpiration.",
                    fact: "There are approximately 400,000 stomata per square centimetre of leaf surface in some plants — each stoma is like a tiny mouth that can open and close independently to control gas exchange and water loss!",
                    keywords: ["Lamina", "Petiole", "Venation", "Stomata"],
                    children: [
                        { id: "tb2-venation", label: "Types of Venation", emoji: "🌿", level: 3, description: "Venation (vein pattern) in leaves comes in two types: Reticulate venation has a net-like/branched pattern (mango, hibiscus, rose — most dicot plants). Parallel venation has veins running parallel side by side (grass, banana, bamboo — most monocot plants). Vein type can be used to identify the plant type.", fact: "You can identify whether a plant is a monocot or dicot just by looking at its leaf veins — parallel veins = monocot (grass, wheat, rice); net-like branch veins = dicot (mango, rose, sunflower)!" },
                        { id: "tb2-photoleaf", label: "Photosynthesis\nin Leaves", emoji: "☀️", level: 3, description: "Leaves contain chloroplasts, organelles filled with the green pigment chlorophyll, which captures light energy. The leaf equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ (glucose) + 6O₂. The flat shape, transparent cuticle, and internal spongy layer all maximise access to light, CO₂, and water.", fact: "Leaves change color in autumn because trees stop producing green chlorophyll — the yellow and orange pigments (carotenoids) were always there, hidden beneath the dominant green, and are only revealed when chlorophyll breaks down!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-flowers",
            label: "Flowers, Fruits\n& Seeds",
            emoji: "🌸",
            level: 1,
            branchIndex: 3,
            description: "Flowers are the reproductive structures of plants. They contain male parts (stamen with pollen) and female parts (pistil with ovary). After pollination and fertilisation, the ovary develops into a fruit enclosing the seed(s). Seeds contain the embryo plant and stored food — the next generation waiting to germinate.",
            fact: "The Rafflesia arnoldii flower is the world's largest individual flower — it can be 1 metre wide and weigh up to 11 kg, yet it has no leaves, stems or roots and lives entirely as a parasite inside another plant's tissues!",
            keywords: ["Pollination", "Fertilisation", "Fruit", "Seed"],
            quiz: {
                question: "Which part of a flower develops into a fruit?",
                options: ["Petal", "Stamen", "Ovary", "Sepal"],
                correct: 2,
                explanation: "The ovary is the part of the pistil (female reproductive organ) that contains the ovules. After pollination and fertilization, the ovary wall swells and develops into the fruit, while the ovules inside develop into seeds."
            },
            children: [
                {
                    id: "sb3-flowerparts",
                    label: "Parts of\na Flower",
                    emoji: "🌺",
                    level: 2,
                    description: "A complete flower has four main whorls: Sepals (green, protect the bud), Petals (brightly coloured to attract pollinators), Stamens (male parts: filament + anther with pollen), and Pistil (female parts: stigma + style + ovary with ovules). Pollination transfers pollen to the stigma; fertilisation occurs when pollen reaches the ovule.",
                    fact: "The star orchid of Madagascar has a nectar tube 30 cm deep — and Charles Darwin predicted the existence of a moth with a proboscis exactly 30 cm long to pollinate it. The moth (Xanthopan morgani) was only discovered 41 years after Darwin's prediction!",
                    keywords: ["Sepal", "Petal", "Stamen", "Pistil"],
                    children: [
                        { id: "tb3-pollination", label: "Pollination", emoji: "🐝", level: 3, description: "Pollination is the transfer of pollen from an anther (male) to a stigma (female) of the same or different flower. Agents of pollination include insects (bee, butterfly), wind (grass, wheat), water (aquatic plants), and birds (hummingbirds). Flowers are specifically designed to attract their preferred pollinator.", fact: "Bees can see ultraviolet light that is invisible to human eyes — many flowers have UV 'nectar guides' (like runway lights) only visible to bees that lead them straight to the nectar and pollen!" },
                        { id: "tb3-fruit", label: "Fruit & Seed\nFormation", emoji: "🍎", level: 3, description: "After fertilisation, the ovary wall grows and develops into the fruit (the fleshy or dry outer covering). The ovule(s) inside develop into seeds. The fruit protects the seed and aids its dispersal — animal-eaten fruits get their seeds dispersed through droppings; winged fruits are dispersed by wind; spiny fruits hitchhike on animal fur.", fact: "Botanically (scientifically), tomatoes, cucumbers, pumpkins, peppers, and even avocados are ALL fruits — because each develops from the ovary of a flower and contains seeds. What we call 'vegetables' is a culinary, not botanical, classification!" }
                    ]
                },
                {
                    id: "sb3-herbshrubstree",
                    label: "Herbs, Shrubs\n& Trees",
                    emoji: "🌳",
                    level: 2,
                    description: "Plants can be classified by their stem into herbs (soft green stem, small, e.g. coriander, mint), shrubs (harder thin branching stems from base, medium height, e.g. rose, lemon), and trees (single thick woody trunk, tall, e.g. mango, oak, teak). This classification is based on stem type, height, and lifespan.",
                    fact: "The General Sherman tree in California is the world's largest living organism by volume — it is 84 metres tall, has a trunk circumference of 31 metres, and contains enough wood to build 40 average-sized houses!",
                    keywords: ["Herb", "Shrub", "Tree", "Woody"],
                    children: [
                        { id: "tb3-planttype", label: "Plant\nClassification", emoji: "🌿", level: 3, description: "Herbs: small, soft, non-woody stems (basil, mint, coriander, wheat, grass). Shrubs: woody stems branching from the base, medium-height (rose, jasmine, hibiscus, lemon, henna). Trees: single large woody trunk with branches higher up, tall and long-lived (mango, neem, banyan, oak, coconut, pine).", fact: "The banyan tree (India's national tree) can spread its canopy over an area larger than 2 football fields through aerial prop roots that grow down from branches into the soil — forming what appears to be a whole forest from a single tree!" }
                    ]
                }
            ]
        }
    ]
};
