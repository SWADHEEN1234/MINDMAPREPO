// ============================================
// MIND MAP DATA — Grade 6 Biology Chapter 2
// "Diversity in the Living World"
// ============================================

const MINDMAP_DATA = {
    id: "root",
    label: "DIVERSITY IN THE\nLIVING WORLD",
    emoji: "🌍",
    level: 0,
    description: "Welcome to Chapter 2: Diversity in the Living World. This chapter covers the vast variety of living organisms, how they adapt to different surroundings, and the methods used to classify and group them.",
    fact: "Life on Earth has existed for over 3.5 billion years! During this massive span of time, nature has evolved an immeasurable variety of species, ranging from extreme deep-sea bacteria to gigantic blue whales.",
    keywords: ["Diversity", "Classification", "Habitats"],
    children: [
        {
            id: "pb1-diversity",
            label: "Diversity In Plants\nAnd Animals",
            emoji: "🧠",
            level: 1,
            branchIndex: 1,
            description: "Concept: The vast variety of living organisms coexisting in our immediate environment.\n\nImportant points: Organisms differ immensely in size, shape, color, and behavior even within the same local area.\n\nExample: A small patch of grass vs. a massive banyan tree; a tiny ant vs. a street dog.",
            fact: "There are over 8 million estimated species on Earth, but we have only discovered and named about 1.5 million of them!",
            keywords: ["Flora", "Fauna", "Variation"],
            children: [
                {
                    id: "sb1-plants",
                    label: "Diversity in plants",
                    emoji: "🌿",
                    level: 2,
                    description: "The variety of plant life found in nature. Plants are the primary producers of the Earth's ecosystems. They not only provide the foundational food source for almost all other life forms, but they also produce the oxygen we breathe through photosynthesis. Their diversity spans across microscopic algae to towering redwood trees.",
                    fact: "The Amazon Rainforest is home to an estimated 390 billion individual trees divided into 16,000 species!",
                    keywords: ["Variety", "Flora"],
                    children: [
                        { id: "tb1-trees", label: "Trees", emoji: "🌲", level: 3, description: "Large, tall plants characterized by a thick, woody stem called a trunk. Trees possess incredibly deep root systems and complex canopies that provide shelter to countless other species. Some trees can live for hundreds or even thousands of years.", fact: "The oldest known living tree on Earth is a Bristlecone pine named Methuselah, estimated to be over 4,800 years old." },
                        { id: "tb1-shrubs", label: "Shrubs", emoji: "🪴", level: 3, description: "Medium-sized woody plants that are distinguished from trees by their multiple stems and shorter height. They usually branch out very close to the ground, forming dense bushes that are excellent for animal nesting.", fact: "Rosebushes and hibiscus are classic examples of common, flowering shrubs." },
                        { id: "tb1-herbs", label: "Herbs", emoji: "🌱", level: 3, description: "Small plants featuring soft, green, non-woody stems. They generally exhibit a short lifespan and are primarily responsible for covering the soil level of food chains. Many herbs are essential in human cuisine and traditional medicine.", fact: "Bananas actually grow on giant herb plants, not trees. The 'trunk' of a banana plant is made of tightly packed leaves!" },
                        { id: "tb1-creepers", label: "Creepers", emoji: "🍉", level: 3, description: "Plants that spread horizontally along the ground because their highly flexible stems are too weak to support upward growth. They often utilize root nodes along their stems to anchor themselves as they expand outward horizontally.", fact: "Watermelons and pumpkins grow on heavy creeper vines so that their enormous fruits can rest safely on the ground." }
                    ]
                },
                {
                    id: "sb1-animals",
                    label: "Diversity in animals",
                    emoji: "🐾",
                    level: 2,
                    description: "The immense variety of the animal kingdom. Animals are incredibly diverse multicellular organisms that rely on consuming other organisms for sustained energy. From the deepest oceanic trenches to the highest mountain peaks, they have evolved uniquely specialized features to survive and reproduce.",
                    fact: "Over 95% of all known animal species are invertebrates, meaning they completely lack a backbone!",
                    keywords: ["Variety", "Fauna"],
                    children: [
                        { id: "tb1-insects", label: "Insects", emoji: "🐜", level: 3, description: "Small, highly prolific invertebrate animals identified by their six legs, three-part bodies (head, thorax, and abdomen), and typically two pairs of wings. They hold vital roles in ecosystems across the globe, especially in pollinating crops and recycling organic matter.", fact: "Ants are so numerous that their combined weight on Earth equals or exceeds the combined weight of all human beings!" },
                        { id: "tb1-birds", label: "Birds", emoji: "🦜", level: 3, description: "Warm-blooded vertebrates distinctly characterized by their aerodynamic feathers, toothless beaks, and laying of hard-shelled eggs. While most birds are exceptional fliers with skeletons adapted for flight, some iconic species like ostriches and penguins are entirely flightless.", fact: "The Peregrine Falcon is the fastest animal in the sky, capable of diving at speeds over 240 mph (386 km/h)!" },
                        { id: "tb1-mammals", label: "Mammals", emoji: "🐅", level: 3, description: "Warm-blooded vertebrate animals distinguished by the possession of hair or fur, and mammary glands that females use to produce milk for nourishing their young. Mammals exhibit some of the most complex brain structures and social behaviors in the animal kingdom.", fact: "The Blue Whale, a marine mammal, is the largest animal known to have ever lived on Earth." },
                        { id: "tb1-reptiles", label: "Reptiles", emoji: "🦎", level: 3, description: "Primarily cold-blooded tetrapods covered in tough, protective scales or bony plates. Unlike amphibians, reptiles generally lay leathery eggs on dry land and do not undergo an aquatic larval stage during their life cycle.", fact: "Crocodilians have remained largely unchanged in their basic body structure since the time of the dinosaurs." }
                    ]
                }
            ]
        },
        {
            id: "pb2-surroundings",
            label: "Plants And Animals In\nDifferent Surroundings",
            emoji: "🖼",
            level: 1,
            branchIndex: 2,
            description: "Concept: Living things possess specific features that allow them to survive and thrive in their unique environments.\n\nImportant points: Physical surroundings strictly dictate the physical traits of the organisms living there.\n\nExample: Desert plants have fleshy stems to store water; mountain trees are cone-shaped to shed snow.",
            fact: "A camel's hump stores fat, which provides energy when food is scarce, rather than storing liquid water!",
            keywords: ["Habitat", "Adaptation", "Environment"],
            children: [
                {
                    id: "sb2-terrestrial",
                    label: "Terrestrial surroundings",
                    emoji: "🏕",
                    level: 2,
                    description: "Habitats and complex environments located exclusively on solid land. Terrestrial domains expose their inhabitants to dramatic fluctuations in temperature, oxygen availability, and water scarcity. Life forms here have engineered incredible biological adaptations, like lungs for breathing air and strong skeletal structures for fighting gravity.",
                    fact: "Forests, a major terrestrial ecosystem, cover nearly one-third of the entire global land surface.",
                    keywords: ["Land", "Earth"],
                    children: [
                        { id: "tb2-deserts", label: "Deserts", emoji: "🏜️", level: 3, description: "Arid, dry, and sandy landscapes where the lack of substantial rainfall creates extreme environmental stress. Daytime temperatures can be blisteringly hot, while nights frequently drop to freezing. Inhabitants are master water conservers, utilizing behavioral and physical traits to survive.", fact: "The Sahara Desert is so vast that it is comparable in size to the entire total land area of the United States." },
                        { id: "tb2-mountains", label: "Mountains", emoji: "🏔️", level: 3, description: "Elevated, highly rugged rocky terrains defined by violently cold climates, fierce winds, and low atmospheric oxygen. Organisms residing here generally possess thick coats of fur or robust needle-like leaves in order to resist freezing and limit precious moisture loss.", fact: "Snow Leopards have exceptionally long and thick tails that they wrap tightly around their bodies like a cozy scarf when resting in the snow." },
                        { id: "tb2-grasslands", label: "Grasslands", emoji: "🌾", level: 3, description: "Massive, open terrestrial expanses utterly dominated by various grasses rather than sprawling trees or shrubs. Usually characterized by defined wet and dry seasons, they are optimal grazing grounds that support some of the world's largest roaming herds of herbivores.", fact: "Many grassland grasses conceal their vulnerable growing points safely down at the soil level, allowing them to rapidly recover after grazing or intense natural fires." }
                    ]
                },
                {
                    id: "sb2-aquatic",
                    label: "Aquatic surroundings",
                    emoji: "🌊",
                    level: 2,
                    description: "Habitats located directly within or around permanent bodies of water. These diverse biomes support countless layers of unique ecological food webs. Species inhabiting true aquatic ecosystems have evolved specialized structures like gills, fins, and distinctly streamlined, torpedo-like bodies that minimize natural resistance while swimming.",
                    fact: "Less than 5% of all the massive blue oceans covering our global planet have actually been explored by modern humanity.",
                    keywords: ["Water", "Marine"],
                    children: [
                        { id: "tb2-oceans", label: "Oceans", emoji: "🐋", level: 3, description: "Unimaginably vast bodies of dense saltwater that collectively envelop more than 70% of the Earth's total crust. These monumental oceans are fiercely dynamic forces governing global weather patterns, and they act as habitats for millions of uniquely adapted marine animal and plant life variations.", fact: "Microscopic marine algae floating near the surface of the world's oceans produce over half of the entire Earth's breathable oxygen!" },
                        { id: "tb2-ponds", label: "Ponds", emoji: "🐸", level: 3, description: "Small, relatively shallow, and isolated pockets of slow-moving or entirely stagnant freshwater. Their still nature prevents large waves, easily allowing delicate lily pads and aquatic vegetation to root safely. Ponds serve fundamentally as nurturing reproductive breeding grounds for insect larvae and numerous amphibians.", fact: "Many distinct species of frogs rely so heavily on ponds that they fully absorb free oxygen directly through their moist skin while submerged." },
                        { id: "tb2-rivers", label: "Rivers", emoji: "🐟", level: 3, description: "Highly energetic, perpetually flowing channels of freshwater that constantly carve through harsh landscapes, eventually dumping directly into larger lakes or oceans. River species must navigate relentless, pounding water currents, often possessing robust suction pads or powerful muscular tails to hold and fight rapid flows.", fact: "Salmon fish pull off incredible migrations by fighting aggressive river currents upstream to return to the precise location they were born to reproduce." }
                    ]
                }
            ]
        },
        {
            id: "pb3-grouping",
            label: "How To Group\nPlants And Animals?",
            emoji: "📘",
            level: 1,
            branchIndex: 3,
            description: "Concept: Organizing living organisms into specific categories based on observable shared characteristics.\n\nImportant points: Grouping makes studying the massive variety of life easier, systematic, and logical.\n\nExample: Grouping animals by what they eat (herbivores vs. carnivores) or plants by whether they bear flowers.",
            fact: "The Greek philosopher Aristotle was one of the earliest to attempt scientifically classifying animals based strictly on where they lived—land, water, or air!",
            keywords: ["Classification", "Sorting", "Traits"],
            children: [
                {
                    id: "sb3-plants",
                    label: "Basis for grouping plants",
                    emoji: "🪴",
                    level: 2,
                    description: "Biologists deploy sophisticated combinations of morphological, physiological, and genetic traits to accurately categorize the vast flora of the world. Understanding structural features like venation, root architecture, and life span gives scientists an incredibly clear picture of plant evolutionary relationships.",
                    fact: "The modern scientific system of accurately naming and classifying precise organisms was first pioneered by the brilliant Swedish botanist Carl Linnaeus in the 1700s.",
                    keywords: ["Plant Traits", "Botany"],
                    children: [
                        { id: "tb3-stem", label: "Stem type", emoji: "🎋", level: 3, description: "Scientific classification effectively sorts plants into distinct structural groups such as herbs, shrubs, or trees based inherently upon stem thickness, overall material hardness, and physical branching patterns. It determines whether structural support relies strictly upon wood or basic hydrostatic water pressure.", fact: "Bamboo, despite displaying incredibly hard and sturdy, towering stems, is actually scientifically classified as a unique giant grass species!" },
                        { id: "tb3-flower", label: "Flowering status", emoji: "🌸", level: 3, description: "An incredibly critical division categorizes plants fundamentally by reproductive strategy, separating them into either majestic flowering plants (angiosperms) or sturdy non-flowering groups (specifically gymnosperms and simple spore-producing ferns). Angiosperms attract animals to pollinate crops, greatly enhancing reproductive efficiency.", fact: "The stunningly massive Rafflesia arnoldii produces the absolute largest individual flower safely recorded on Earth, measuring over three impressive feet across." },
                        { id: "tb3-lifespan", label: "Lifespan", emoji: "⏳", level: 3, description: "Observing a plant's biological life cycle categorizes it precisely into ephemeral annuals (completing the full life cycle in simply one year), robust biennials (requiring exclusively two whole years), or resilient perennials (which continually regenerate and survive independently for several ongoing years over countless seasons).", fact: "The remarkable Welwitschia plant seamlessly surviving in the harsh African desert grows precisely the exact same two leaves continuously for a shocking span spanning thousands of years." }
                    ]
                },
                {
                    id: "sb3-animals",
                    label: "Basis for grouping animals",
                    emoji: "🐾",
                    level: 2,
                    description: "Various physiological, anatomical, and innate behavioral traits are meticulously deployed to securely categorize diverse fauna. The immense animal kingdom is first segregated by the explicit presence or sheer absence of an internal backbone, and then subsequently classified using distinct specialized reproductive methods or metabolic behaviors.",
                    fact: "Taxonomy intrinsically groups organisms safely into seven primary distinct ranks: seamlessly descending Kingdom, Phylum, Class, Order, Family, Genus, and ultimately Species.",
                    keywords: ["Animal Traits", "Zoology"],
                    children: [
                        { id: "tb3-food", label: "Food habits", emoji: "🥩", level: 3, description: "Categorization based functionally on distinct dietary requirements splits species effectively into gentle herbivores, agile carnivores, or highly adaptable omnivores. These specific dietary choices distinctly shape their dental framework, hunting strategies, digestive tract mechanics, and ecological trophic level placements.", fact: "Cows intrinsically rely entirely upon specially equipped four-chambered stomachs exclusively to successfully fully digest the extremely tough and resilient cellulose fibers commonly found in endless plains of grazing grass." },
                        { id: "tb3-movement", label: "Movement style", emoji: "🏃", level: 3, description: "Anatomical adaptations intrinsically supporting specialized locomotion precisely define groups functionally based closely upon capable flying, rapid running, seamless swimming, or deliberate slithering motions. Skeletons and complex muscular networks adapt significantly over time to conquer spatial limitations.", fact: "The exceptionally swift cheetah relies entirely upon a remarkably flexible, spring-like spinal backbone strictly to reliably extend its massive running stride perfectly at blistering top speeds." },
                        { id: "tb3-cover", label: "Body covering", emoji: "🦚", level: 3, description: "Physical exterior protective coverings—whether interlocking scales, dense fur, intricate feathers, or purely smooth skin—serve distinctly as a massive primary classification metric. Coverings determine how efficiently animals securely shield out harsh environmental conditions and effectively retain critical body temperature.", fact: "The uniquely peculiar Pangolin happens to remain fundamentally the only scientifically documented mammal existing globally entirely blanketed top to bottom in tough keratin scales instead of familiar hair covering." }
                    ]
                }
            ]
        }
    ]
};
