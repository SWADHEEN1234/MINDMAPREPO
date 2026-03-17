// ============================================
// MIND MAP DATA — Grade 6 Biology Chapter 1
// "Diversity in the Living World"
// ============================================

const MINDMAP_DATA = {
    id: "root",
    label: "Diversity in the\nLiving World",
    emoji: "🌍",
    level: 0,
    description: "This chapter explores the incredible variety of life on Earth — from tiny insects to giant trees, from deep ocean creatures to high mountain plants. You will learn how scientists group living things, why biodiversity matters, and how organisms adapt to survive in their habitats.",
    keywords: ["Biodiversity", "Classification", "Habitat", "Adaptation", "Flora", "Fauna"],
    quiz: {
        question: "What term describes the variety of living organisms found in a particular area?",
        options: ["Ecosystem", "Biodiversity", "Habitat", "Community"],
        correct: 1,
        explanation: "Biodiversity refers to the variety and variability of all forms of life in a particular region — including plants, animals, fungi, and microorganisms."
    },
    children: [
        {
            id: "biodiversity",
            label: "Biodiversity &\nIts Importance",
            emoji: "🦋",
            level: 1,
            branchIndex: 1,
            description: "Biodiversity means the variety of plant and animal life found in a region. Every organism, from the smallest bacteria to the largest whale, plays an important role in maintaining the balance of nature.",
            keywords: ["Variety of Life", "Plants", "Animals", "Microorganisms", "Ecosystem Balance"],
            quiz: {
                question: "Which of the following is NOT a reason why biodiversity is important?",
                options: ["Provides food and medicine", "Maintains ecological balance", "Makes the Earth look pretty", "Helps in pollination and seed dispersal"],
                correct: 2,
                explanation: "While nature is beautiful, biodiversity's importance lies in maintaining ecological balance, providing food, medicine, clean air, pollination, and seed dispersal — these are functional roles that keep ecosystems healthy."
            },
            children: [
                {
                    id: "what-is-biodiversity",
                    label: "What is\nBiodiversity?",
                    emoji: "📖",
                    level: 2,
                    description: "Biodiversity is the total variety of living organisms found in a specific area. It includes diversity among species, within species, and of ecosystems. India is one of the 17 mega-diverse countries in the world!",
                    keywords: ["Species Diversity", "Genetic Diversity", "Ecosystem Diversity"],
                    children: [
                        { id: "bd-species", label: "Species Diversity", emoji: "🐾", level: 3, description: "The number of different species found in an area. A coral reef has higher species diversity than a desert." },
                        { id: "bd-genetic", label: "Genetic Diversity", emoji: "🧬", level: 3, description: "Variations within members of the same species — like different colored flowers on the same type of plant." },
                        { id: "bd-ecosystem", label: "Ecosystem Diversity", emoji: "🏔️", level: 3, description: "The variety of ecosystems like forests, oceans, deserts, wetlands, and grasslands found in a region." }
                    ]
                },
                {
                    id: "interdependence",
                    label: "Interdependence",
                    emoji: "🔗",
                    level: 2,
                    description: "Plants and animals depend on each other for survival. Trees provide food and shelter to animals. Animals help in seed dispersal and pollination. This web of connections keeps nature in balance.",
                    keywords: ["Food Chain", "Pollination", "Seed Dispersal", "Symbiosis"],
                    children: [
                        { id: "id-food", label: "Food & Shelter", emoji: "🏠", level: 3, description: "Trees give fruits and leaves as food. Their branches, trunks, and roots provide shelter to birds, insects, and small animals." },
                        { id: "id-pollination", label: "Pollination", emoji: "🐝", level: 3, description: "Bees, butterflies, and birds carry pollen from one flower to another, helping plants reproduce." },
                        { id: "id-seeds", label: "Seed Dispersal", emoji: "💨", level: 3, description: "Animals eat fruits and spread seeds to new places through their droppings, helping plants grow in different areas." }
                    ]
                },
                {
                    id: "conservation",
                    label: "Conservation\nEfforts",
                    emoji: "🛡️",
                    level: 2,
                    description: "Human activities like deforestation and pollution are destroying biodiversity. Conservation efforts like Project Tiger, protected forests, and sacred groves help protect species from extinction.",
                    keywords: ["Project Tiger", "Sacred Groves", "Endangered Species", "Protected Areas"],
                    children: [
                        { id: "cn-tiger", label: "Project Tiger", emoji: "🐯", level: 3, description: "Launched in 1973 to protect Bengal Tigers. There are now 50+ tiger reserves across India!" },
                        { id: "cn-groves", label: "Sacred Groves", emoji: "🌳", level: 3, description: "Forests protected by local communities for religious or cultural reasons. They are treasure stores of biodiversity." },
                        { id: "cn-threats", label: "Threats to\nBiodiversity", emoji: "⚠️", level: 3, description: "Deforestation, pollution, habitat loss, overgrazing, and climate change threaten the survival of many species." }
                    ]
                }
            ]
        },
        {
            id: "classification",
            label: "Grouping &\nClassification",
            emoji: "📋",
            level: 1,
            branchIndex: 2,
            description: "With millions of species on Earth, scientists group living organisms based on their shared features. This makes it easier to study, identify, and understand the relationships between different organisms.",
            keywords: ["Classification", "Grouping", "Features", "Categories", "Taxonomy"],
            quiz: {
                question: "Plants can be classified based on which of the following?",
                options: ["Color of their pot", "Stem type, leaf shape, and flower", "The name given by the gardener", "The day they were planted"],
                correct: 1,
                explanation: "Plants are classified based on observable characteristics like their stem type (herbs, shrubs, trees), leaf shape (broad, needle-like), and whether they have flowers or not."
            },
            children: [
                {
                    id: "plant-classification",
                    label: "Classifying\nPlants",
                    emoji: "🌿",
                    level: 2,
                    description: "Plants can be grouped based on their stem (herbs, shrubs, trees), leaves (shape, size, venation), and whether they produce flowers or not.",
                    keywords: ["Herbs", "Shrubs", "Trees", "Flowering", "Non-flowering"],
                    children: [
                        { id: "pc-herbs", label: "Herbs", emoji: "🌱", level: 3, description: "Small plants with soft, green stems. Examples: mint, coriander, wheat. Usually live for one or two seasons." },
                        { id: "pc-shrubs", label: "Shrubs", emoji: "🌾", level: 3, description: "Medium-sized plants with hard but thin stems branching near the base. Examples: rose, henna (mehndi), lemon." },
                        { id: "pc-trees", label: "Trees", emoji: "🌲", level: 3, description: "Tall, strong plants with a thick, hard main trunk (stem). Examples: mango, neem, banyan. Can live for hundreds of years!" }
                    ]
                },
                {
                    id: "animal-classification",
                    label: "Classifying\nAnimals",
                    emoji: "🦁",
                    level: 2,
                    description: "Animals can be grouped based on their habitat (where they live), food habits (herbivore, carnivore, omnivore), and the way they move (fly, swim, walk, crawl).",
                    keywords: ["Herbivore", "Carnivore", "Omnivore", "Aquatic", "Terrestrial"],
                    children: [
                        { id: "ac-habitat", label: "By Habitat", emoji: "🏞️", level: 3, description: "Aquatic (water-living like fish), Terrestrial (land-living like elephants), Aerial (flying like eagles), Amphibians (both land and water like frogs)." },
                        { id: "ac-food", label: "By Food Habits", emoji: "🍖", level: 3, description: "Herbivores eat plants (cow, deer), Carnivores eat meat (lion, eagle), Omnivores eat both (bear, crow)." },
                        { id: "ac-movement", label: "By Movement", emoji: "🦅", level: 3, description: "Animals move in different ways: flying (birds), swimming (fish), walking (dogs), crawling (snakes), swinging (monkeys)." }
                    ]
                }
            ]
        },
        {
            id: "adaptations",
            label: "Adaptations",
            emoji: "🦎",
            level: 1,
            branchIndex: 3,
            description: "Living organisms develop special body features and behaviours to survive in their specific environments. These special features are called adaptations. A camel's hump stores fat for desert survival, while a polar bear's thick fur keeps it warm in the Arctic.",
            keywords: ["Survival", "Special Features", "Environment", "Body Structure", "Behaviour"],
            quiz: {
                question: "Why do fish have streamlined bodies?",
                options: ["To look beautiful underwater", "To reduce resistance and move easily through water", "To store more food in their body", "To scare away predators"],
                correct: 1,
                explanation: "Fish have streamlined (torpedo-shaped) bodies that help them move smoothly through water by reducing water resistance. This is a physical adaptation for aquatic life."
            },
            children: [
                {
                    id: "desert-adapt",
                    label: "Desert\nAdaptations",
                    emoji: "🏜️",
                    level: 2,
                    description: "Desert organisms face extreme heat and water scarcity. They have evolved features to conserve water and survive high temperatures.",
                    keywords: ["Camel", "Cactus", "Water Conservation", "Heat Resistance"],
                    children: [
                        { id: "da-camel", label: "Camel", emoji: "🐪", level: 3, description: "Long legs keep body away from hot sand. Hump stores fat for energy. Can close nostrils during sandstorms. Padded feet don't sink in sand!" },
                        { id: "da-cactus", label: "Cactus", emoji: "🌵", level: 3, description: "Leaves modified into spines to reduce water loss. Thick stem stores water. Waxy coating prevents evaporation. Roots spread wide to absorb rain." }
                    ]
                },
                {
                    id: "aquatic-adapt",
                    label: "Aquatic\nAdaptations",
                    emoji: "🐠",
                    level: 2,
                    description: "Water-living organisms have features that help them breathe, move, and survive underwater.",
                    keywords: ["Gills", "Fins", "Streamlined Body", "Webbed Feet"],
                    children: [
                        { id: "aa-fish", label: "Fish", emoji: "🐟", level: 3, description: "Streamlined body to swim fast. Gills to breathe underwater. Fins for balance and steering. Scales protect the body." },
                        { id: "aa-frog", label: "Frog", emoji: "🐸", level: 3, description: "Can breathe through skin and lungs! Webbed feet for swimming. Strong back legs for jumping. Moist skin helps in gas exchange." }
                    ]
                },
                {
                    id: "mountain-adapt",
                    label: "Mountain\nAdaptations",
                    emoji: "🏔️",
                    level: 2,
                    description: "Mountain organisms face cold temperatures, strong winds, and thin air. They have developed thick fur, special breathing systems, and compact body shapes.",
                    keywords: ["Thick Fur", "Hibernation", "Cone-shaped Trees", "Yak"],
                    children: [
                        { id: "ma-yak", label: "Yak", emoji: "🦬", level: 3, description: "Thick, shaggy fur keeps them warm in freezing cold. Large lungs to breathe in thin mountain air. Strong legs for climbing rocky terrain." },
                        { id: "ma-pine", label: "Pine Trees", emoji: "🎄", level: 3, description: "Cone shape helps snow slide off easily. Needle-like leaves reduce water loss in cold, dry air. Thick bark protects from frost." }
                    ]
                }
            ]
        },
        {
            id: "nature-walk",
            label: "Observing\nNature",
            emoji: "🔍",
            level: 1,
            branchIndex: 4,
            description: "Science begins with observation! Going on nature walks and carefully observing plants, animals, sounds, and smells around you helps develop scientific thinking. Record what you see, hear, smell, and feel.",
            keywords: ["Observation", "Nature Walk", "Curious Mind", "Recording", "Senses"],
            quiz: {
                question: "Which of these is the FIRST step in scientific exploration?",
                options: ["Writing a report", "Doing experiments", "Observation", "Reading a textbook"],
                correct: 2,
                explanation: "Observation is the foundation of science! By carefully watching, listening, and noting things around us, we start asking questions — which leads to deeper exploration and understanding."
            },
            children: [
                {
                    id: "nw-plants",
                    label: "Observing\nPlants",
                    emoji: "🌸",
                    level: 2,
                    description: "Look at stems — are they soft or hard? Observe leaves — what shape, size, and colour are they? Do they have flowers? What do the flowers look like? Notice the patterns of veins in leaves.",
                    keywords: ["Stems", "Leaves", "Flowers", "Roots", "Venation"],
                    children: [
                        { id: "np-leaf", label: "Leaf Features", emoji: "🍃", level: 3, description: "Shape (round, oval, pointed), Size (small, large), Edge (smooth, serrated), Venation (parallel, reticulate), Color (shades of green, variegated)." },
                        { id: "np-flower", label: "Flower Features", emoji: "🌺", level: 3, description: "Number of petals, colour, fragrance, shape. Some flowers attract insects with bright colors and sweet nectar for pollination!" }
                    ]
                },
                {
                    id: "nw-animals",
                    label: "Observing\nAnimals",
                    emoji: "🐦",
                    level: 2,
                    description: "Watch how animals move, what they eat, where they live, and how they behave. Notice bird songs, insect buzzing, and the tracks animals leave behind.",
                    keywords: ["Behaviour", "Movement", "Feeding", "Sounds", "Tracks"],
                    children: [
                        { id: "na-birds", label: "Watching Birds", emoji: "🦜", level: 3, description: "Observe beak shape (seed-eaters have short thick beaks, nectar-drinkers have long curved beaks), feather colours, nesting behaviour, and flight patterns." },
                        { id: "na-insects", label: "Insect World", emoji: "🐜", level: 3, description: "Ants march in lines following chemical trails! Butterflies visit colourful flowers. Spiders spin intricate webs. Bees do a 'waggle dance' to communicate!" }
                    ]
                }
            ]
        },
        {
            id: "habitats",
            label: "Habitats &\nEcosystems",
            emoji: "🌊",
            level: 1,
            branchIndex: 5,
            description: "A habitat is the natural home of an organism where it finds food, water, shelter, and mates. Different habitats — forests, deserts, oceans, wetlands — support different kinds of life. All living and non-living things in a habitat form an ecosystem.",
            keywords: ["Habitat", "Ecosystem", "Forest", "Desert", "Ocean", "Wetland"],
            quiz: {
                question: "What is a 'habitat'?",
                options: ["A zoo where animals live", "A house built for pets", "The natural home of an organism", "A science laboratory"],
                correct: 2,
                explanation: "A habitat is the natural environment where an organism lives. It provides everything the organism needs to survive — food, water, shelter, and appropriate temperature."
            },
            children: [
                {
                    id: "hab-forest",
                    label: "Forest\nHabitat",
                    emoji: "🌳",
                    level: 2,
                    description: "Forests are dense areas full of trees, plants, and animals. They can be tropical (warm, rainy), temperate (seasonal), or coniferous (cold, pine trees). Forests are called the 'lungs of the Earth' because they produce oxygen.",
                    keywords: ["Tropical", "Temperate", "Lungs of Earth", "Canopy"],
                    children: [
                        { id: "hf-tropical", label: "Tropical Forest", emoji: "🦜", level: 3, description: "Hot, humid, heavy rainfall. Maximum biodiversity on Earth! Multiple layers: forest floor, understory, canopy, emergent layer." },
                        { id: "hf-animals", label: "Forest Animals", emoji: "🐒", level: 3, description: "Monkeys swing in canopies, deer graze on the forest floor, woodpeckers tap on tree trunks, owls come alive at night." }
                    ]
                },
                {
                    id: "hab-ocean",
                    label: "Ocean\nHabitat",
                    emoji: "🐳",
                    level: 2,
                    description: "Oceans cover about 71% of the Earth's surface. They are home to an incredible diversity of life from microscopic plankton to the largest animal ever — the blue whale.",
                    keywords: ["Marine Life", "Coral Reef", "Deep Sea", "Plankton"],
                    children: [
                        { id: "ho-coral", label: "Coral Reefs", emoji: "🪸", level: 3, description: "Called 'rainforests of the sea' for their incredible biodiversity. Built by tiny coral animals. Home to colourful fish, sea turtles, and starfish." },
                        { id: "ho-deep", label: "Deep Ocean", emoji: "🦑", level: 3, description: "Complete darkness, extreme pressure, near-freezing cold. Yet strange creatures thrive here — anglerfish use built-in 'lights' to attract prey!" }
                    ]
                },
                {
                    id: "hab-grassland",
                    label: "Grassland\nHabitat",
                    emoji: "🦒",
                    level: 2,
                    description: "Open areas dominated by grasses. Too dry for forests but wetter than deserts. Home to large herds of herbivores and their predators.",
                    keywords: ["Savanna", "Prairie", "Herbivores", "Predators"],
                    children: [
                        { id: "hg-animals", label: "Grassland Life", emoji: "🦓", level: 3, description: "African savannas host zebras, giraffes, lions, and elephants. Indian grasslands are home to blackbucks, Indian wolves, and great Indian bustards." }
                    ]
                }
            ]
        },
        {
            id: "regional-diversity",
            label: "India's Rich\nBiodiversity",
            emoji: "🇮🇳",
            level: 1,
            branchIndex: 6,
            description: "India is a mega-diverse country with a stunning variety of climates, landscapes, and living things. From the snow-capped Himalayas to tropical Kerala, from the Thar Desert to the mangrove forests of the Sundarbans — India hosts about 8% of the world's biodiversity!",
            keywords: ["Mega-diverse", "Western Ghats", "Sundarbans", "Himalayas", "Endemic Species"],
            quiz: {
                question: "India is home to approximately what percentage of the world's biodiversity?",
                options: ["2%", "5%", "8%", "15%"],
                correct: 2,
                explanation: "India hosts about 7-8% of all recorded species in the world, making it one of the 17 mega-diverse countries. This is remarkable considering India covers only about 2.4% of the world's land area!"
            },
            children: [
                {
                    id: "rd-hotspots",
                    label: "Biodiversity\nHotspots",
                    emoji: "🔥",
                    level: 2,
                    description: "India has 4 of the world's 36 biodiversity hotspots — areas with exceptional species richness that are under threat.",
                    keywords: ["Western Ghats", "Eastern Himalayas", "Indo-Burma", "Sundaland"],
                    children: [
                        { id: "rh-wg", label: "Western Ghats", emoji: "⛰️", level: 3, description: "A UNESCO World Heritage site. Home to lion-tailed macaques, Malabar giant squirrels, and thousands of endemic plant species found nowhere else on Earth." },
                        { id: "rh-him", label: "Eastern\nHimalayas", emoji: "🏔️", level: 3, description: "Home to the red panda, snow leopard, and many rare orchids. New species are still being discovered here every year!" }
                    ]
                },
                {
                    id: "rd-regions",
                    label: "Climate &\nRegions",
                    emoji: "🗺️",
                    level: 2,
                    description: "Different climates in different parts of India support different kinds of plants and animals. Rajasthan's dry desert differs vastly from Meghalaya's wet forests.",
                    keywords: ["Desert", "Rainforest", "Mangrove", "Alpine"],
                    children: [
                        { id: "rr-desert", label: "Thar Desert", emoji: "🐪", level: 3, description: "Hot and dry. Home to Indian spiny-tailed lizards, great Indian bustards, and thorny bushes adapted to survive with very little water." },
                        { id: "rr-sundarban", label: "Sundarbans", emoji: "🐅", level: 3, description: "The world's largest mangrove forest, shared between India and Bangladesh. Famous for the Royal Bengal Tiger which can swim between islands!" }
                    ]
                }
            ]
        }
    ]
};
