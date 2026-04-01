// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 4
// "Living Creatures: Characteristics & Germination"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "LIVING CREATURES:\nCHARACTERISTICS",
    emoji: "🌱",
    level: 0,
    description: "Chapter 4 explores what makes a living thing alive. From breathing and growing to reproducing and responding to the environment — all life shares a common set of characteristics. We also look at how seeds germinate and the life cycles of living organisms.",
    fact: "The tallest living organism on Earth is a coast redwood tree named Hyperion — it stands at over 115 metres, taller than a 35-floor building, and it is very much alive!",
    keywords: ["Life", "Characteristics", "Germination", "Respiration"],
    children: [
        {
            id: "pb1-characteristics",
            label: "Characteristics\nof Living Things",
            emoji: "✨",
            level: 1,
            branchIndex: 1,
            description: "All living organisms — whether plants, animals, or microbes — share a set of fundamental characteristics that distinguish them from non-living things. These include growth, nutrition, respiration, excretion, movement, sensitivity, and reproduction. Knowing these helps us scientifically classify whether something is alive.",
            fact: "Viruses are the ultimate grey area — they show some characteristics of life (like reproduction) only when inside a host cell, but are otherwise completely non-living!",
            keywords: ["Growth", "Respiration", "Reproduction", "Movement"],
            quiz: {
                question: "Which of the following is a characteristic shared by ALL living organisms?",
                options: ["They can fly", "They perform respiration", "They move with legs", "They are all green"],
                correct: 1,
                explanation: "Respiration (obtaining energy from food) is common to all living organisms — from bacteria to blue whales. Other characteristics like movement or colour are not universal to all life."
            },
            children: [
                {
                    id: "sb1-growth",
                    label: "Growth",
                    emoji: "📈",
                    level: 2,
                    description: "All living organisms grow over time. In animals, growth is limited to a certain size determined by genetics. Plants, however, exhibit indeterminate growth — they can continue growing throughout their entire lifespan. Growth in living things requires energy from food and results in an increase in both the number of cells and their size.",
                    fact: "A blue whale calf grows from about 2.7 tonnes at birth to over 150 tonnes as an adult — gaining roughly 90 kg every single day during its first year of life!",
                    keywords: ["Cell Division", "Size", "Lifespan"],
                    children: [
                        { id: "tb1-plantgrowth", label: "Plant Growth", emoji: "🌿", level: 3, description: "Plants grow from their tips — the shoot apex and root apex contain zones of rapidly dividing cells called meristems. These cells constantly divide and elongate, increasing the plant's length. Plants also grow in girth through a process called secondary growth.", fact: "The giant sequoia tree (Sequoiadendron giganteum) can grow to over 84 metres tall and live for 3,000 years — it is the world's largest tree by volume!" },
                        { id: "tb1-animalgrowth", label: "Animal Growth", emoji: "🐣", level: 3, description: "Animals grow by an increase in the number and size of cells. Unlike most plants, animals grow only up to a genetically pre-determined size. Hormones like growth hormone (GH) from the pituitary gland regulate the growth process in mammals.", fact: "The Etruscan shrew is the world's smallest mammal by mass — fully grown adults weigh less than 2 grams, lighter than a single penny!" }
                    ]
                },
                {
                    id: "sb1-nutrition",
                    label: "Nutrition",
                    emoji: "🌿",
                    level: 2,
                    description: "All living organisms need nutrition — the process of obtaining and using food for energy, growth, and repair. Plants are autotrophs (self-feeders) and make their own food through photosynthesis. Animals are heterotrophs (other-feeders) and get energy by consuming other organisms.",
                    fact: "A single large oak tree can produce up to 70,000 acorns in a single season — each one a seed packed with nutrients to feed the next generation of oak trees!",
                    keywords: ["Photosynthesis", "Autotrophs", "Heterotrophs"],
                    children: [
                        { id: "tb1-autotrophic", label: "Autotrophic\nNutrition", emoji: "☀️", level: 3, description: "Autotrophs like plants, algae, and some bacteria make their own food using sunlight (photosynthesis) or chemical energy (chemosynthesis). In photosynthesis, plants use sunlight, water, and CO₂ to produce glucose and oxygen.", fact: "On a bright sunny day, a healthy sunflower leaf can produce enough glucose through photosynthesis in just one hour to keep a human cell alive for 3 days!" },
                        { id: "tb1-heterotrophic", label: "Heterotrophic\nNutrition", emoji: "🦁", level: 3, description: "Heterotrophs cannot make their own food and must eat other organisms. They include herbivores (eat plants), carnivores (eat meat), and omnivores (eat both). Decomposers like fungi and bacteria break down dead matter and recycle nutrients back into ecosystems.", fact: "The Venus flytrap plant is an autotroph that also acts as a carnivore — it photosynthesises food but supplements its nitrogen intake by trapping and digesting insects!" }
                    ]
                },
                {
                    id: "sb1-respiration",
                    label: "Respiration",
                    emoji: "💨",
                    level: 2,
                    description: "Respiration is the biochemical process by which living organisms break down food (glucose) to release energy. This energy powers every activity within a cell. Most organisms perform aerobic respiration (using oxygen), but some perform anaerobic respiration (without oxygen) in low-oxygen environments.",
                    fact: "Your body cells perform respiration continuously — even right now while you sleep, your cells are breaking down glucose to produce the ATP energy needed for every function!",
                    keywords: ["Aerobic", "Anaerobic", "ATP", "Breathing"],
                    children: [
                        { id: "tb1-aerobic", label: "Aerobic\nRespiration", emoji: "🌬️", level: 3, description: "Aerobic respiration uses oxygen to completely break down glucose into carbon dioxide, water, and a large amount of ATP energy. This is the most efficient form of respiration and is used by most plants, animals, and fungi. Breathing supplies the oxygen needed.", fact: "A human body at rest produces enough heat through aerobic respiration to bring about 1.5 litres of water to boiling point over the course of a single day!" },
                        { id: "tb1-anaerobic", label: "Anaerobic\nRespiration", emoji: "⚡", level: 3, description: "Anaerobic respiration occurs without oxygen and produces less energy. Yeast performs anaerobic respiration producing alcohol and CO₂ — a process used in bread-making and brewing. Human muscles use anaerobic respiration during intense exercise, producing lactic acid which causes muscle soreness.", fact: "The lactic acid produced by your muscles during intense exercise is why you feel that burning sensation — it's your cells desperately generating energy without enough oxygen!" }
                    ]
                },
                {
                    id: "sb1-reproduction",
                    label: "Reproduction",
                    emoji: "👶",
                    level: 2,
                    description: "Reproduction is the biological process by which living organisms produce new individuals of the same species. It ensures the continuation of species across generations. Reproduction can be sexual (involving two parents and genetic mixing) or asexual (involving one parent and creating genetically identical offspring).",
                    fact: "Some sharks can reproduce asexually — females held in captivity with no males have given birth to live pups through a process called parthenogenesis!",
                    keywords: ["Sexual", "Asexual", "Offspring"],
                    children: [
                        { id: "tb1-sexual", label: "Sexual\nReproduction", emoji: "💑", level: 3, description: "Sexual reproduction involves the fusion of male and female gametes (sex cells) to form a zygote. This mixing of genetic material creates offspring with unique combinations of traits, driving biodiversity and adaptation. Most animals and flowering plants reproduce sexually.", fact: "A single flowering plant can produce millions of pollen grains, but only a tiny fraction of those will successfully reach and fertilise another flower of the same species!" },
                        { id: "tb1-asexual", label: "Asexual\nReproduction", emoji: "🌵", level: 3, description: "Asexual reproduction produces offspring from a single parent with no genetic exchange. Common methods include budding (hydra, yeast), binary fission (bacteria), spore formation (fungi), and vegetative reproduction in plants. The offspring are genetically identical clones of the parent.", fact: "Sea stars (starfish) can regenerate their entire body from just a single arm — making them one of nature's most spectacular examples of asexual regeneration!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-germination",
            label: "Seed Germination\n& Life Cycles",
            emoji: "🌾",
            level: 1,
            branchIndex: 2,
            description: "Germination is the process by which a dormant seed begins to grow into a new plant when provided with the right conditions. A seed contains all the stored food and genetic instructions needed to start life. Understanding germination and life cycles helps us grow crops, understand ecosystems, and appreciate the continuity of life.",
            fact: "Scientists successfully germinated a Judean Date Palm seed found in a 2,000-year-old archaeological deposit in Israel — making it the oldest successfully germinated seed in recorded history!",
            keywords: ["Seed", "Germination", "Conditions", "Growth"],
            quiz: {
                question: "What are the three main conditions required for seed germination?",
                options: ["Sunlight, soil, and minerals", "Water, air, and warmth", "Fertilizer, water, and sunlight", "Carbon dioxide, water, and sunlight"],
                correct: 1,
                explanation: "The three essential conditions for seed germination are water (to activate enzymes), air (oxygen for cellular respiration), and warmth (suitable temperature for enzyme activity). Sunlight is NOT needed at germination stage."
            },
            children: [
                {
                    id: "sb2-conditions",
                    label: "Conditions for\nGermination",
                    emoji: "🌡️",
                    level: 2,
                    description: "For a seed to germinate successfully, three key conditions must be met simultaneously: adequate water, sufficient oxygen, and an appropriate temperature. Interestingly, light is not a requirement for germination itself — seeds germinate underground in complete darkness.",
                    fact: "Some seeds can only germinate after passing through an animal's digestive system — the tough seed coat is broken down by stomach acids, triggering germination!",
                    keywords: ["Water", "Oxygen", "Temperature"],
                    children: [
                        { id: "tb2-water", label: "Water", emoji: "💧", level: 3, description: "Water is the first trigger for germination. It softens and breaks the seed coat, activates dormant enzymes, and helps convert stored starch into sugar that provides energy for growth. Without water, seeds remain in dormancy indefinitely, sometimes for hundreds of years.", fact: "Lotus seeds can stay dormant for over 1,300 years in dried lake sediments — and still germinate perfectly when given water, making them the longest-surviving seeds on record!" },
                        { id: "tb2-air", label: "Air (Oxygen)", emoji: "🌬️", level: 3, description: "The germinating seed requires oxygen for aerobic respiration to generate the energy needed for rapid cell division and growth. Waterlogged soils deprive seeds of oxygen, which is why flooding prevents germination. Well-aerated, loosely tilled soil promotes germination.", fact: "A germinating bean seed can respire 200 times faster than a dormant seed — it's metabolically burning through its food reserves at an incredible rate during those first few days!" },
                        { id: "tb2-temp", label: "Warmth", emoji: "🌡️", level: 3, description: "Temperature affects the rate of enzyme activity inside the seed. Each plant species has an optimal temperature range for germination typically between 15°C–30°C for most crop plants. Seeds sown in cold soil germinate very slowly; seeds in extremely hot soil may not germinate at all.", fact: "Arctic poppies have adapted to germinate at near-freezing temperatures as low as 3°C — an amazing feat of evolutionary adaptation to polar climate conditions!" }
                    ]
                },
                {
                    id: "sb2-stages",
                    label: "Stages of\nGermination",
                    emoji: "🌱",
                    level: 2,
                    description: "Germination occurs in a series of connected stages. Starting from a dormant seed, it progresses through water absorption, metabolic activation, radical emergence, shoot development, and finally the appearance of the first true leaves, marking the seedling stage. Stored food in cotyledons fuels this entire journey.",
                    fact: "A bean seedling grows so fast during germination that you can actually watch it inch upward from hour to hour — some seedlings can grow 1 cm in less than 24 hours!",
                    keywords: ["Radicle", "Plumule", "Cotyledon", "Seedling"],
                    children: [
                        { id: "tb2-radicle", label: "Radicle & Root", emoji: "🌿", level: 3, description: "The radicle is the first part of the embryo to emerge from the seed. It grows downward (positively gravitropic) to anchor the plant and absorb water and minerals from the soil. Root hairs develop from the radicle to maximise surface area for absorption.", fact: "Roots can sense gravity — if you rotate a germinating seed sideways, the root will curve and grow downward within hours!" },
                        { id: "tb2-plumule", label: "Plumule & Shoot", emoji: "☀️", level: 3, description: "After the radicle establishes, the plumule (shoot) emerges and grows upward toward light (positively phototropic). The shoot eventually develops into the stem and leaves, taking over food production via photosynthesis once it reaches sunlight.", fact: "Some plants like beans arch their shoot into a hook shape as they push through soil — this protects the delicate leaf tip from damage during emergence, straightening out only when it reaches open air!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-lifecycle",
            label: "Life Cycles",
            emoji: "🔄",
            level: 1,
            branchIndex: 3,
            description: "Every living organism follows a life cycle — a series of stages from birth (or germination) through growth to maturity, reproduction, and eventually death. Life cycles vary enormously across species, ranging from days in bacteria to thousands of years in some trees.",
            fact: "The mayfly adult lives for just one single day — its entire purpose is to mate and lay eggs. Its larval stage, however, can last up to 3 years underwater!",
            keywords: ["Stages", "Metamorphosis", "Lifespan", "Reproduction"],
            quiz: {
                question: "What is metamorphosis in insects?",
                options: ["A type of reproduction", "A series of changes from egg to adult", "A form of nutrition", "A type of movement"],
                correct: 1,
                explanation: "Metamorphosis is the biological process of transformation where an insect changes its body form through distinct stages (e.g., egg → larva → pupa → adult in butterflies). It allows the larvae and adults to occupy completely different ecological niches."
            },
            children: [
                {
                    id: "sb3-plant",
                    label: "Plant Life Cycle",
                    emoji: "🌸",
                    level: 2,
                    description: "A typical flowering plant's life cycle progresses through: seed formation → germination → seedling growth → mature plant with flowers → pollination → fertilisation → fruit formation → seed dispersal. The cycle then repeats. Some plants complete this in weeks (annuals), others take years (perennials).",
                    fact: "Bamboo plants can wait for 120 years before flowering for the first and only time — after which the entire plant dies, scattering millions of seeds to begin again!",
                    keywords: ["Seed", "Sprout", "Flower", "Fruit"],
                    children: [
                        { id: "tb3-annual", label: "Annual Plants", emoji: "🌻", level: 3, description: "Annual plants complete their entire life cycle — germination, growth, flowering, seed production, and death — within a single growing season (usually one year). Examples include sunflower, wheat, and maize.", fact: "The spectacular California poppy completes its entire life cycle, from seed to flower to new seed, in just 60 days during the spring season!" },
                        { id: "tb3-perennial", label: "Perennial Plants", emoji: "🌳", level: 3, description: "Perennial plants live for more than two years and flower repeatedly. Trees like mango, coconut, and oak are perennials that can live and fruit for decades or even centuries without dying after each seed cycle.", fact: "A mango tree can continue to bear fruit for over 100 years — some ancestral mango orchards in Uttar Pradesh, India, are still producing today!" }
                    ]
                },
                {
                    id: "sb3-animal",
                    label: "Animal Life Cycle",
                    emoji: "🦋",
                    level: 2,
                    description: "Animal life cycles vary enormously. Insects often undergo metamorphosis — a radical body transformation from larva to adult. Other animals like mammals grow less dramatically, with stages typically being birth, juvenile growth, sexual maturity, reproduction, and senescence (aging).",
                    fact: "A monarch butterfly migrates up to 4,800 kilometres from Canada to Mexico each autumn — and no single butterfly makes the same journey twice in its short life!",
                    keywords: ["Metamorphosis", "Larva", "Pupa", "Adult"],
                    children: [
                        { id: "tb3-complete", label: "Complete\nMetamorphosis", emoji: "🐛", level: 3, description: "Complete metamorphosis (holometabolism) has four distinct stages: egg → larva → pupa → adult. Examples include butterflies, moths, beetles, and flies. The pupa stage is a dramatic transformation where nearly all larval tissues are broken down and reorganised into the adult form.", fact: "Inside a butterfly chrysalis, the caterpillar's body literally digests most of itself into a nutrient-rich liquid 'soup' before reassembling into the butterfly body — one of nature's most incredible transformations!" },
                        { id: "tb3-incomplete", label: "Incomplete\nMetamorphosis", emoji: "🦗", level: 3, description: "Incomplete metamorphosis (hemimetabolism) has three stages: egg → nymph → adult. The nymph resembles a small wingless version of the adult. Examples include grasshoppers, cockroaches, and dragonflies. There is no pupal stage in this type.", fact: "Dragonflies spend most of their lives as aquatic nymphs, sometimes for 3-5 years underwater — their dramatic, winged adult life may last only a few weeks!" }
                    ]
                }
            ]
        }
    ]
};
