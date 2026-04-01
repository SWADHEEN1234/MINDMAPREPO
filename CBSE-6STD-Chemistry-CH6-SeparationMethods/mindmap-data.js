// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology/Chemistry Chapter 6
// "Methods of Separation"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "METHODS OF\nSEPARATION",
    emoji: "🧪",
    level: 0,
    description: "Chapter 6 explores the various techniques used to separate mixtures into their component parts. From simple handpicking to complex distillation, each method exploits a specific physical property difference between the substances being separated. Separation is fundamental to cooking, water treatment, mining, and all chemical industries.",
    fact: "The process of separating crude oil into petrol, diesel, kerosene, and jet fuel uses a giant industrial version of the same distillation technique you study in class — it's called fractional distillation and takes place at temperatures above 350°C!",
    keywords: ["Mixture", "Separation", "Physical Methods"],
    children: [
        {
            id: "pb1-manual",
            label: "Manual\nMethods",
            emoji: "🙌",
            level: 1,
            branchIndex: 1,
            description: "Manual separation methods rely on human hands, simple tools, and basic observations to separate mixtures. These are the oldest and simplest methods, but they are still widely used in agriculture, food processing, and everyday cooking. They work best when components differ strongly in size, colour, or shape.",
            fact: "Rice farmers in ancient India documented manual threshing and winnowing techniques over 3,500 years ago — and these exact same methods are still used by millions of farmers today worldwide!",
            keywords: ["Handpicking", "Threshing", "Winnowing", "Sieving"],
            quiz: {
                question: "Which separation method uses wind or blowing air to separate heavier grains from lighter husks?",
                options: ["Sieving", "Handpicking", "Winnowing", "Filtration"],
                correct: 2,
                explanation: "Winnowing uses wind or a blower to separate lighter materials (like chaff/husk) from heavier ones (grain). The heavy grain falls straight down while the light husk is blown away and falls further out, separating them effectively."
            },
            children: [
                {
                    id: "sb1-handpicking",
                    label: "Handpicking",
                    emoji: "✋",
                    level: 2,
                    description: "Handpicking is the most basic method — manually removing unwanted pieces (stones, stalks, bad grains) from a mixture by hand. It is used when the components are large enough to see clearly and the mixture is small enough to process by hand. It is commonly used in kitchens to clean rice and pulses.",
                    fact: "Gem miners in Sri Lanka and India still handpick precious sapphires, rubies, and spinels from river sediment by hand using traditional wooden trays — even today, human eyes can spot coloured gemstones more reliably than most machines!",
                    keywords: ["Impurities", "Rice", "Pulses"],
                    children: [
                        { id: "tb1-uses", label: "Common Uses", emoji: "🍚", level: 3, description: "Handpicking is used to: remove stones and husk from rice before cooking, remove bad or insect-damaged grains from wheat and pulses, sort fruits by size and quality in food packaging, and remove foreign objects from raw spices in kitchens.", fact: "Global food standards require that commercially sold spices contain less than 3-4 foreign particles per kilogram — ensuring handpicking quality control remains essential even in industrial food processing!" }
                    ]
                },
                {
                    id: "sb1-threshing",
                    label: "Threshing",
                    emoji: "🌾",
                    level: 2,
                    description: "Threshing is the process of separating grain from the stalks (straw) of harvested cereal plants like wheat, rice, and barley. Traditionally, farmers beat bundles of harvested stalks against a hard surface or spread them on the ground for cattle to walk over. Modern threshing machines do this mechanically at scale.",
                    fact: "A modern combine harvester can thresh and collect over 40 tonnes of wheat grain in a single hour — a job that would have taken an entire village of 50 labourers an entire week by hand!",
                    keywords: ["Grain", "Straw", "Harvest"],
                    children: [
                        { id: "tb1-threshingmeth", label: "Traditional vs\nModern", emoji: "🚜", level: 3, description: "Traditional threshing involved beating grain stalks against a wooden post, using bullocks to trample grain on a circular floor, or simple hand-operated machines. Modern combine harvesters integrate cutting, threshing, and winnowing into one continuous mechanical process.", fact: "Before the invention of the mechanical thresher in 1784, a farm labourer could thresh just 7 bushels of wheat per day — modern machines process 7,000 bushels in the same time period!" }
                    ]
                },
                {
                    id: "sb1-winnowing",
                    label: "Winnowing",
                    emoji: "💨",
                    level: 2,
                    description: "Winnowing separates lighter particles (chaff, husk, dust) from heavier grains using wind or an air stream. The mixture is raised in the air or poured from a height, allowing wind to blow the light chaff sideways while the heavy grains fall straight down into a separate pile.",
                    fact: "Ancient Egyptians pictured winnowing scenes on tomb paintings dated 3,500 years ago — the process has remained unchanged ever since, proving that some physical separation methods are timeless!",
                    keywords: ["Chaff", "Wind", "Grain"],
                    children: [
                        { id: "tb1-winnowingproc", label: "How It Works", emoji: "🌬️", level: 3, description: "Winnowing exploits the density difference between grains and lighter husks. Grains have higher mass and momentum, so gravity pulls them straight down despite the wind. Husks have less mass and more surface area, so the wind easily carries them sideways into a separate pile.", fact: "Industrial grain cleaners use precisely controlled fans and multiple screens to achieve the same effect as traditional winnowing — separating wheat from chaff at a rate of 50 tonnes per hour!" }
                    ]
                },
                {
                    id: "sb1-sieving",
                    label: "Sieving",
                    emoji: "🧁",
                    level: 2,
                    description: "Sieving separates mixtures of solid particles of different sizes using a mesh or perforated screen (sieve). Smaller particles pass through the holes while larger particles are retained on the sieve surface. The sieve is chosen based on the particle size difference between the components being separated.",
                    fact: "Construction sites use industrial vibrating sieves to separate sand, gravel, and stones into precise size grades — the concrete in your school building was made using sieved aggregate with a specific particle size distribution!",
                    keywords: ["Mesh", "Particles", "Size"],
                    children: [
                        { id: "tb1-sievinguses", label: "Uses of Sieving", emoji: "🏗️", level: 3, description: "Sieving is used in: baking (sieving flour to remove lumps and aerate it), construction (separating sand from gravel), flour milling (separating fine flour from coarse bran), toy sandpits (removing debris), and mining (sorting ore particles by size).", fact: "Premium espresso coffee uses coffee grounds sieved to a very specific particle size between 0.2-0.4mm — too coarse and the coffee is weak, too fine and it becomes over-extracted and bitter!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-physical",
            label: "Physical\nMethods",
            emoji: "🔬",
            level: 1,
            branchIndex: 2,
            description: "Physical separation methods use specific physical properties — solubility, density, magnetic nature, or particle size — to separate mixtures without causing any chemical change to the substances. These methods are highly efficient, precise, and form the basis of industrial chemical processing worldwide.",
            fact: "Gold is separated from river sediment using density differences — gold is 19 times denser than water while sand is only 2.5 times denser, making the heavy gold sink while gold diggers swirl and wash lighter sand away!",
            keywords: ["Filtration", "Magnetic", "Sedimentation", "Decantation"],
            quiz: {
                question: "Which method is used to separate mud from muddy water?",
                options: ["Winnowing", "Evaporation", "Filtration", "Threshing"],
                correct: 2,
                explanation: "Filtration is used to separate insoluble solid particles (like mud) from a liquid (water). The mixture is passed through a filter paper or filter medium — the solid particles are trapped on the filter while the liquid (filtrate) passes through."
            },
            children: [
                {
                    id: "sb2-filtration",
                    label: "Filtration",
                    emoji: "🫙",
                    level: 2,
                    description: "Filtration separates insoluble solids from liquids by passing the mixture through a porous medium (filter). The liquid passes through (called the filtrate) while the solid is retained (called the residue). Filter papers, sand filters, and membranes are common filter materials used in science and industry.",
                    fact: "The filters in your home water purifier work on the same principle as laboratory filtration — but they use activated carbon, microporous membranes, and UV light to remove particles and bacteria down to just 0.0001 microns in size!",
                    keywords: ["Filter", "Residue", "Filtrate"],
                    children: [
                        { id: "tb2-filtuses", label: "Applications", emoji: "🚰", level: 3, description: "Filtration is used everywhere: coffee machines (filter paper separates grounds from coffee), water treatment plants (sand beds filter muddy river water), blood dialysis machines (membrane filters remove waste from blood), air conditioning units (air filters remove dust particles).", fact: "The kidneys are the body's natural filtration system — they filter your entire blood volume (about 5 litres) over 1,000 times per day, processing about 180 litres of fluid to produce only 1-2 litres of urine!" }
                    ]
                },
                {
                    id: "sb2-sedimentation",
                    label: "Sedimentation &\nDecantation",
                    emoji: "🏺",
                    level: 2,
                    description: "Sedimentation allows heavier particles to settle to the bottom of a liquid under gravity (the settled layer is the sediment). Decantation is the careful pouring off of the clear liquid from above the sediment without disturbing it. Together they are an effective two-step method for separating insoluble mixtures without a filter.",
                    fact: "Wine making uses natural sedimentation — grape residue settles to the bottom of wine barrels over weeks, and the clear wine is then carefully decanted off the sediment into bottles!",
                    keywords: ["Sediment", "Settling", "Decant"],
                    children: [
                        { id: "tb2-sedprocess", label: "Process", emoji: "⏳", level: 3, description: "Step 1 (Sedimentation): Add water to muddy soil in a beaker. Stir and leave undisturbed. Over time, mud particles settle to the bottom under gravity. Step 2 (Decantation): Carefully tilt the beaker and pour the clear water into another container without disturbing the settled mud.", fact: "Ancient Romans used large sedimentation tanks over 2,000 years ago to purify the drinking water supply to the city of Rome — modern water processing plants still use the exact same principle!" }
                    ]
                },
                {
                    id: "sb2-magnetic",
                    label: "Magnetic\nSeparation",
                    emoji: "🧲",
                    level: 2,
                    description: "Magnetic separation uses a strong magnet to attract and remove magnetic materials (iron, steel, nickel, cobalt) from non-magnetic mixtures. It is one of the fastest, cleanest, and most efficient separation methods as it leaves no chemical residue and can be done repeatedly without degrading either substance.",
                    fact: "Massive electromagnetic cranes in scrap metal yards lift several tonnes of iron and steel per lift — sorting millions of tonnes of recyclable metal from waste every year worldwide!",
                    keywords: ["Magnet", "Iron", "Non-Magnetic"],
                    children: [
                        { id: "tb2-maguses", label: "Applications", emoji: "🏭", level: 3, description: "Magnetic separation is used in: separating iron filings from sulphur powder (classic school experiment), removing iron nails from sand, recycling scrap metals in junkyards, food processing (removing iron contamination from spices/flour), and mining (separating iron ore from gangue rock).", fact: "The food processing industry routinely passes products like flour, breakfast cereal, and spice powder over powerful magnets during manufacturing to detect and remove any iron or steel fragments that may have entered the food from processing equipment!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-evaporation",
            label: "Evaporation &\nDistillation",
            emoji: "♨️",
            level: 1,
            branchIndex: 3,
            description: "Evaporation and distillation use differences in boiling points or volatility to separate dissolved substances from liquids, or to separate mixtures of liquids. These heat-based methods are fundamental to the production of salt, fresh water, alcohol, essential oils, and petroleum products on an industrial scale.",
            fact: "The perfume industry separates plant fragrances from petals using steam distillation — it takes approximately 5,000 kilograms (5 tonnes!) of rose petals just to produce 1 kilogram of pure rose essential oil!",
            keywords: ["Evaporation", "Condensation", "Distillation", "Boiling Point"],
            quiz: {
                question: "How is common salt (NaCl) obtained from sea water?",
                options: ["Filtration", "Magnetic separation", "Evaporation", "Handpicking"],
                correct: 2,
                explanation: "Salt is obtained from sea water by evaporation. Sea water is channelled into large shallow pans called salt pans. The sun's heat evaporates the water, leaving behind solid white salt crystals that are then collected and processed."
            },
            children: [
                {
                    id: "sb3-evap",
                    label: "Evaporation",
                    emoji: "☀️",
                    level: 2,
                    description: "Evaporation is the process of converting a liquid into vapour (gas) by heating. When a solution is heated, the liquid solvent evaporates into the air, leaving behind the dissolved solid solute. This method is used to recover dissolved solids like salt and sugar from their solutions.",
                    fact: "India is the world's third largest producer of salt — most of it harvested from enormous coastal salt pans in Gujarat using natural solar evaporation from seawater in flat, shallow pans spanning thousands of hectares!",
                    keywords: ["Salt", "Sea Water", "Solar"],
                    children: [
                        { id: "tb3-evapuses", label: "Applications", emoji: "🧂", level: 3, description: "Evaporation is used to: produce table salt from sea water, crystallise sugar from sugarcane juice, manufacture dyes and chemicals in industry, concentrate fruit juices, and recover precious metals from mining solutions.", fact: "The Great Salt Lake in Utah, USA naturally concentrates to over 25% salinity via solar evaporation — 8 times saltier than the ocean — making it one of the world's largest natural salt resources!" }
                    ]
                },
                {
                    id: "sb3-distil",
                    label: "Distillation",
                    emoji: "🌡️",
                    level: 2,
                    description: "Distillation separates mixtures of liquids based on their different boiling points. The mixture is heated until the component with the lower boiling point boils and turns to vapour. The vapour is then cooled in a condenser and collected as a pure liquid (the distillate) in a separate vessel. This leaves the higher boiling point component behind.",
                    fact: "The distillation of alcohol was first documented by Islamic chemists in the 9th century AD — scholars like al-Kindi described the process in detail, establishing the scientific foundation for the modern chemical industry!",
                    keywords: ["Boiling Point", "Condenser", "Distillate"],
                    children: [
                        { id: "tb3-distiluses", label: "Applications", emoji: "🏭", level: 3, description: "Distillation is used to: purify drinking water (water distillation), separate petroleum components (fractional distillation in oil refineries), produce spirits and beverages, obtain essential oils from plants (steam distillation), and separate industrial chemical products in laboratories.", fact: "The world's longest oil refinery distillation column is over 90 metres tall — the same height as a 30-storey building — and separates crude oil into over 20 separate useful petroleum products simultaneously!" }
                    ]
                }
            ]
        }
    ]
};
