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
    fact: "The Earth is currently home to roughly 8.7 million documented species, but over 80% of terrestrial species and an incredible 91% of oceanic species remain entirely undiscovered!",
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
            fact: "A single teaspoon of healthy functioning soil can naturally contain more individual microorganisms than there are people currently living on Earth!",
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
                    fact: "Scientists strongly estimate that the massive Amazon Rainforest alone currently hosts approximately ten percent of all known life species existing on our entire planet.",
                    keywords: ["Species Diversity", "Genetic Diversity", "Ecosystem Diversity"],
                    children: [
                        { id: "bd-species", label: "Species Diversity", emoji: "🐾", level: 3, description: "The number of different species found in an area. A coral reef has higher species diversity than a desert.", fact: "Tropical coral reefs occupy less than 1% of the total ocean floor, yet they act as primary nursing habitats for more than 25% of all oceanic marine life!" },
                        { id: "bd-genetic", label: "Genetic Diversity", emoji: "🧬", level: 3, description: "Variations within members of the same species — like different colored flowers on the same type of plant.", fact: "Humans and wild chimpanzees astonishingly share nearly 98.8% of exactly identical DNA configurations within their underlying genetic sequences." },
                        { id: "bd-ecosystem", label: "Ecosystem Diversity", emoji: "🏔️", level: 3, description: "The variety of ecosystems like forests, oceans, deserts, wetlands, and grasslands found in a region.", fact: "The sprawling African savanna constitutes a globally critical ecosystem, uniquely capable of sustaining the most immensely immense and diverse herds of massive wild herbivores found anywhere on Earth." }
                    ]
                },
                {
                    id: "interdependence",
                    label: "Interdependence",
                    emoji: "🔗",
                    level: 2,
                    description: "Plants and animals depend on each other for survival. Trees provide food and shelter to animals. Animals help in seed dispersal and pollination. This web of connections keeps nature in balance.",
                    fact: "Certain species of aggressive ants live permanently inside the hollow thorns of the African Acacia tree, fearlessly defending the plant from massive grazing herbivores perfectly in exchange for sweet nectar.",
                    keywords: ["Food Chain", "Pollination", "Seed Dispersal", "Symbiosis"],
                    children: [
                        { id: "id-food", label: "Food & Shelter", emoji: "🏠", level: 3, description: "Trees give fruits and leaves as food. Their branches, trunks, and roots provide shelter to birds, insects, and small animals.", fact: "Adult koalas subsist absolutely exclusively on native eucalyptus tree leaves, an incredibly toxic dietary source that their specialized stomachs have uniquely adapted to digest perfectly." },
                        { id: "id-pollination", label: "Pollination", emoji: "🐝", level: 3, description: "Bees, butterflies, and birds carry pollen from one flower to another, helping plants reproduce.", fact: "Remarkably, one in exactly every three total bites of human food fundamentally exists as a direct outcome of active natural pollination performed freely by struggling insect populations." },
                        { id: "id-seeds", label: "Seed Dispersal", emoji: "💨", level: 3, description: "Animals eat fruits and spread seeds to new places through their droppings, helping plants grow in different areas.", fact: "Fruit bats inadvertently plant hundreds of brand new forest trees annually strictly by dropping nutrient-coated viable seeds naturally while flying back to their dark nesting caves." }
                    ]
                },
                {
                    id: "conservation",
                    label: "Conservation\nEfforts",
                    emoji: "🛡️",
                    level: 2,
                    description: "Human activities like deforestation and pollution are destroying biodiversity. Conservation efforts like Project Tiger, protected forests, and sacred groves help protect species from extinction.",
                    fact: "Yellowstone formally became the absolute first officially established National Park in the entire world way back in 1872, fundamentally launching the global environmental conservation movement.",
                    keywords: ["Project Tiger", "Sacred Groves", "Endangered Species", "Protected Areas"],
                    children: [
                        { id: "cn-tiger", label: "Project Tiger", emoji: "🐯", level: 3, description: "Launched in 1973 to protect Bengal Tigers. There are now 50+ tiger reserves across India!", fact: "A completely healthy adult Bengal Tiger can effortlessly consume up to 40 incredible pounds of fresh meat perfectly in simply one massive single feeding session." },
                        { id: "cn-groves", label: "Sacred Groves", emoji: "🌳", level: 3, description: "Forests protected by local communities for religious or cultural reasons. They are treasure stores of biodiversity.", fact: "India currently actively maintains over surprisingly 100,000 distinct dedicated sacred groves safely protecting an immense assortment of incredibly rare and deeply culturally significant medicinal flora." },
                        { id: "cn-threats", label: "Threats to\nBiodiversity", emoji: "⚠️", level: 3, description: "Deforestation, pollution, habitat loss, overgrazing, and climate change threaten the survival of many species.", fact: "Current scientific extinction rates are roughly 1,000 to precisely 10,000 times vastly higher than completely normal organic background extinction rates distinctly observed historically across Earth's timeline." }
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
            fact: "The modern scientific system of reliably naming entirely distinct organisms was effectively pioneered by the Swedish botanist Carl Linnaeus safely completely back in the 1700s.",
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
                    fact: "Scientists have impressively discovered and actively formalized nearly 400,000 totally unique diverse plant species thriving natively across wildly completely different complex biomes globally.",
                    keywords: ["Herbs", "Shrubs", "Trees", "Flowering", "Non-flowering"],
                    children: [
                        { id: "pc-herbs", label: "Herbs", emoji: "🌱", level: 3, description: "Small plants with soft, green stems. Examples: mint, coriander, wheat. Usually live for one or two seasons.", fact: "Bananas surprisingly grow fundamentally on highly massive green herb plants, explicitly lacking a completely solid wooden tree trunk naturally altogether!" },
                        { id: "pc-shrubs", label: "Shrubs", emoji: "🌾", level: 3, description: "Medium-sized plants with hard but thin stems branching near the base. Examples: rose, henna (mehndi), lemon.", fact: "Tea securely originates largely essentially straight from incredibly resilient, precisely clipped hardy evergreen shrub plants deliberately cultivated intensely strictly for drinking." },
                        { id: "pc-trees", label: "Trees", emoji: "🌲", level: 3, description: "Tall, strong plants with a thick, hard main trunk (stem). Examples: mango, neem, banyan. Can live for hundreds of years!", fact: "The Hyperion redwood currently proudly securely accurately stands over an impossible 380 feet tall!" }
                    ]
                },
                {
                    id: "animal-classification",
                    label: "Classifying\nAnimals",
                    emoji: "🦁",
                    level: 2,
                    description: "Animals can be grouped based on their habitat (where they live), food habits (herbivore, carnivore, omnivore), and the way they move (fly, swim, walk, crawl).",
                    fact: "Invertebrates—creeping insects, swarming spiders, soft worms, and swimming jellies—quietly encompass 97 percent of all animal species alive today.",
                    keywords: ["Herbivore", "Carnivore", "Omnivore", "Aquatic", "Terrestrial"],
                    children: [
                        { id: "ac-habitat", label: "By Habitat", emoji: "🏞️", level: 3, description: "Aquatic (water-living like fish), Terrestrial (land-living like elephants), Aerial (flying like eagles), Amphibians (both land and water like frogs).", fact: "Penguins naturally gracefully master flying aggressively efficiently effectively precisely fully smoothly purely underwater directly squarely thoroughly." },
                        { id: "ac-food", label: "By Food Habits", emoji: "🍖", level: 3, description: "Herbivores eat plants (cow, deer), Carnivores eat meat (lion, eagle), Omnivores eat both (bear, crow).", fact: "Giant pandas natively survive directly on remarkably tough purely bamboo stems." },
                        { id: "ac-movement", label: "By Movement", emoji: "🦅", level: 3, description: "Animals move in different ways: flying (birds), swimming (fish), walking (dogs), crawling (snakes), swinging (monkeys).", fact: "The exceptionally swift cheetah relies entirely upon a remarkably flexible, spring-like spinal backbone strictly to reliably extend its massive running stride perfectly at blistering top speeds." }
                    ]
                }
            ]
        }
    ]
};
