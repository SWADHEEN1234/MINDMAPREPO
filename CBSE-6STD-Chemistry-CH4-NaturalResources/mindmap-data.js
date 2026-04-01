// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 9
// "Nature's Treasures: Natural Resources"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "NATURE'S TREASURES:\nNATURAL RESOURCES",
    emoji: "🌿",
    level: 0,
    description: "Chapter 9 explores the natural resources that the Earth provides to sustain life — the sun, air, water, forests, biodiversity, and soils. These treasures support all living beings and human civilisation. Understanding these resources and how to conserve them is one of the most important lessons of our time.",
    fact: "The energy in one hour of sunlight hitting Earth's surface equals more than the total global energy consumption of all humans for an entire year — yet we harness less than 0.01% of it!",
    keywords: ["Sun", "Forests", "Soil", "Biodiversity"],
    children: [
        {
            id: "pb1-sun",
            label: "The Sun:\nOur Energy Source",
            emoji: "☀️",
            level: 1,
            branchIndex: 1,
            description: "The sun is the ultimate source of energy for nearly all life on Earth. Through photosynthesis, plants convert sunlight into chemical energy stored in food. This energy then flows through all food chains and food webs. The sun also drives the water cycle, weather systems, ocean currents, and wind patterns.",
            fact: "The sunlight that powers a leaf's photosynthesis today actually left the sun's core about 100,000 years ago — it took that long to travel from the core to the sun's surface before making the 8-minute journey to Earth!",
            keywords: ["Solar Energy", "Photosynthesis", "Climate"],
            quiz: {
                question: "Which process allows plants to convert sunlight into food?",
                options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
                correct: 2,
                explanation: "Photosynthesis is the process by which green plants, algae, and some bacteria use sunlight, water, and carbon dioxide to produce glucose (food) and oxygen. It is the foundation of nearly all food chains on Earth."
            },
            children: [
                {
                    id: "sb1-solarenergy",
                    label: "Solar Energy\n& Light",
                    emoji: "🌞",
                    level: 2,
                    description: "The sun releases energy through nuclear fusion — hydrogen atoms fuse to form helium, releasing enormous amounts of energy. This energy reaches Earth as electromagnetic radiation including visible light, ultraviolet, and infrared radiation. Solar panels can directly convert this light into electricity through the photovoltaic effect.",
                    fact: "The sun converts approximately 600 million tonnes of hydrogen into helium every single second through nuclear fusion — releasing energy equivalent to detonating 100 billion nuclear bombs per second!",
                    keywords: ["Nuclear Fusion", "Solar Panels", "Radiation"],
                    children: [
                        { id: "tb1-solaruses", label: "Uses of Solar\nEnergy", emoji: "⚡", level: 3, description: "Solar energy is used for: heating water (solar water heaters), generating electricity (solar photovoltaic panels), powering satellites, cooking food (solar cookers), drying crops and clothes naturally, and desalinating sea water in remote areas.", fact: "India's Kamuthi Solar Power Plant in Tamil Nadu was briefly the world's largest solar farm when built in 2016 — it covers 23 square kilometres and generates enough power for 750,000 homes, built in just 8 months!" },
                        { id: "tb1-photosynthesis", label: "Photosynthesis", emoji: "🍃", level: 3, description: "Photosynthesis converts light energy into chemical energy stored in glucose. The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. This process is responsible for producing virtually all the oxygen in Earth's atmosphere and forms the base of every food chain.", fact: "Phytoplankton — microscopic ocean plants — produce approximately 50-80% of all the oxygen on Earth, despite being invisible to the naked eye! The Amazon forest produces only a fraction by comparison." }
                    ]
                },
                {
                    id: "sb1-climate",
                    label: "Sun & Climate",
                    emoji: "🌡️",
                    level: 2,
                    description: "The sun drives Earth's climate system by differentially heating the planet's surface. Equatorial regions receive more direct sunlight and are hot, while polar regions receive angled, weaker sunlight and stay cold. This temperature difference drives global wind patterns, ocean currents, and rainfall distribution — creating the diverse climates and biomes of Earth.",
                    fact: "If the sun were to suddenly 'turn off', Earth's average surface temperature would drop to –18°C within just one week — but the oceans' heat reserves would keep deeper waters above freezing for hundreds of years!",
                    keywords: ["Climate Zones", "Wind", "Ocean Currents"],
                    children: [
                        { id: "tb1-climzones", label: "Climate Zones", emoji: "🗺️", level: 3, description: "Earth's sun-driven climate zones include: tropical (hot, wet, near equator), subtropical (hot, dry deserts), temperate (moderate seasons), boreal (cold forests), and polar (frozen). These zones determine what plants and animals can survive in each region — directly shaping biodiversity.", fact: "Monsoon rains, which feed over 1 billion people in South Asia, are entirely driven by the sun — land heats up faster than ocean in summer, creating low pressure that sucks in moist ocean air!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-forests",
            label: "Forests Nature's\nLungs",
            emoji: "🌲",
            level: 1,
            branchIndex: 2,
            description: "Forests cover about 31% of the world's land surface and are among the most species-rich ecosystems on Earth. They act as the planet's lungs, absorbing CO₂ and releasing oxygen. Forests regulate water cycles, prevent soil erosion, shelter wildlife, and provide timber, medicine, and livelihoods for billions of people.",
            fact: "One large tree can provide a day's supply of oxygen for four people, absorb one tonne of CO₂ over its lifetime, and return 40,000 litres of water to the atmosphere annually through transpiration!",
            keywords: ["Biodiversity", "Oxygen", "Carbon Sink", "Erosion"],
            quiz: {
                question: "Why are forests called 'the lungs of the Earth'?",
                options: ["They breathe in and out like animals", "They absorb CO2 and release oxygen", "They make the sounds of wind", "They are shaped like lungs"],
                correct: 1,
                explanation: "Forests are called Earth's lungs because they absorb vast amounts of carbon dioxide (CO₂) from the atmosphere through photosynthesis and release oxygen in return — just as lungs exchange gases during breathing, but on a planetary scale."
            },
            children: [
                {
                    id: "sb2-biodiversity",
                    label: "Forests &\nBiodiversity",
                    emoji: "🦜",
                    level: 2,
                    description: "Tropical rainforests like the Amazon are home to over half of the world's plant and animal species despite covering less than 7% of Earth's land surface. Forests provide nesting sites, food sources, shelter, and climate stability for millions of species. Deforestation destroys biodiversity at an alarming rate — species are going extinct before they can even be discovered.",
                    fact: "Scientists discover approximately 15,000 new species every year — and many of them are found in forest ecosystems. Yet deforestation is eliminating species even faster than science can document them!",
                    keywords: ["Species", "Habitat", "Endangered"],
                    children: [
                        { id: "tb2-habitatloss", label: "Impact of\nDeforestation", emoji: "⚠️", level: 3, description: "Deforestation destroys habitat, reduces biodiversity, increases soil erosion, disrupts local rainfall patterns, and accelerates climate change by releasing stored carbon. Global deforestation rate is approximately 10 million hectares per year — equal to losing a football field of forest every single second.", fact: "The Sumatran orangutan has lost over 80% of its forest habitat to palm oil plantations in just 20 years — making it critically endangered with fewer than 14,000 individuals remaining in the wild!" }
                    ]
                },
                {
                    id: "sb2-forestproducts",
                    label: "Forest Products\n& Services",
                    emoji: "🌿",
                    level: 2,
                    description: "Forests provide enormous economic, ecological, and cultural value. Direct products include timber, paper, rubber, resins, fruits, nuts, mushrooms, and medicinal plants. Indirect services include water purification, flood prevention, carbon storage, climate regulation, and soil formation. An estimated 1.6 billion people depend on forests for their daily livelihoods.",
                    fact: "75% of all modern medicines were originally derived from forest plants — including aspirin (willow bark), morphine (poppy), quinine (cinchona tree for malaria), and taxol (Pacific yew tree for cancer)!",
                    keywords: ["Timber", "Medicine", "Ecosystem Services"],
                    children: [
                        { id: "tb2-medicine", label: "Forest Medicines", emoji: "💊", level: 3, description: "The world's forests are a vast, largely untapped pharmacy. Indigenous peoples have used forest plants medicinally for tens of thousands of years. Modern pharmaceutical companies actively explore rainforests for new drug compounds. Currently, fewer than 1% of forest plant species have been fully studied for medicinal potential.", fact: "The anti-cancer drug taxol, extracted from Pacific Yew tree bark, was only discovered in 1971 and has since saved hundreds of thousands of cancer patients' lives — and the tree had existed for over 200 million years before we found this remarkable property!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-soil",
            label: "Soil: The\nLiving Foundation",
            emoji: "🪱",
            level: 1,
            branchIndex: 3,
            description: "Soil is the thin uppermost layer of Earth's surface and is one of the planet's most precious natural resources. It is a complex living system containing minerals, organic matter, water, air, and billions of living organisms. Over 95% of the world's food is produced in soil, making its conservation critically important for global food security.",
            fact: "One teaspoon of healthy soil contains more living organisms than the total human population of Earth — including billions of bacteria, millions of fungi, thousands of protozoa, and hundreds of nematodes!",
            keywords: ["Fertility", "Erosion", "Conservation", "Organisms"],
            quiz: {
                question: "What is the uppermost, dark, fertile layer of soil called?",
                options: ["Subsoil", "Topsoil", "Bedrock", "Parent material"],
                correct: 1,
                explanation: "Topsoil is the darkest, most fertile upper layer of soil. It is rich in organic matter (humus), microorganisms, and plant roots. Most plant growth and agricultural productivity depends on this thin but incredibly valuable topsoil layer."
            },
            children: [
                {
                    id: "sb3-soilcompo",
                    label: "Soil\nComposition",
                    emoji: "🔬",
                    level: 2,
                    description: "Healthy soil is approximately: 45% mineral particles (sand, silt, clay), 25% water, 25% air, and 5% organic matter (humus). This precise balance determines soil's fertility, water retention, drainage, and ability to support plant life. The relative proportions of sand, silt, and clay determine the soil type.",
                    fact: "It takes nature approximately 500–1,000 years to create just 2.5 centimetres (1 inch) of topsoil from bare rock — yet industrial farming can erode that same amount in just a few years without proper conservation practices!",
                    keywords: ["Humus", "Minerals", "Bacteria", "Texture"],
                    children: [
                        { id: "tb3-humus", label: "Humus & Organic\nMatter", emoji: "🍂", level: 3, description: "Humus is the dark, spongy organic component of soil formed by the decomposition of plant material and animal wastes by bacteria, fungi, and earthworms. It dramatically improves soil fertility by providing nutrients, improving water retention, and supporting microbial life.", fact: "Earthworms are the undisputed champions of soil health — a single acre of healthy soil can contain over 1 million earthworms, each continuously mixing, aerating, and fertilising the soil with their castings!" },
                        { id: "tb3-soiltype", label: "Soil Types", emoji: "🏝️", level: 3, description: "Sandy soil has large particles, drains quickly, but retains few nutrients. Clay soil has tiny particles that hold water and nutrients well but become waterlogged. Loam is the ideal soil — a balanced mix of sand, silt, and clay with good fertility, drainage, and structure. India's black cotton soil (Regur) is famous for its high clay content and exceptional fertility.", fact: "The black volcanic soil in Maharashtra (Deccan Trap region) is so fertile that it remains productive even without fertilisers for decades — it's the reason Maharashtra is India's top cotton-growing state and has been for thousands of years!" }
                    ]
                },
                {
                    id: "sb3-erosion",
                    label: "Soil Erosion &\nConservation",
                    emoji: "🌊",
                    level: 2,
                    description: "Soil erosion is the removal of the fertile topsoil layer by wind, water, or human activities like deforestation and poor farming practices. It strips away the most biologically valuable soil layer, degrading land productivity and causing rivers to silt up. Soil conservation techniques restore and protect this irreplaceable resource.",
                    fact: "The 1930s American 'Dust Bowl' was caused by poor farming practices destroying the natural grassland root systems — massive dust storms blew away an estimated 480 million tonnes of precious topsoil, causing one of history's worst human-made ecological disasters!",
                    keywords: ["Wind Erosion", "Water Erosion", "Conservation"],
                    children: [
                        { id: "tb3-conserve", label: "Conservation\nMethods", emoji: "🌿", level: 3, description: "Soil conservation methods include: planting trees to anchor soil with roots, contour ploughing on slopes to slow water runoff, crop rotation to maintain soil nutrients, adding organic compost/manure to rebuild humus, building terraces on hillsides, and maintaining grass cover between crops.", fact: "China has planted the world's largest man-made forest — a 4,500 km belt of trees called the 'Great Green Wall' — to combat the advancing Gobi Desert, which erodes 10,000 square kilometres of grassland every year!" }
                    ]
                }
            ]
        }
    ]
};
