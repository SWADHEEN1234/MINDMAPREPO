// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 8
// "A Journey Through States of Water"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "A JOURNEY THROUGH\nSTATES OF WATER",
    emoji: "💧",
    level: 0,
    description: "Chapter 8 explores water — the most essential substance on Earth — in all its amazing forms. Water is unique because it naturally exists as a solid (ice), liquid (water), and gas (vapour) on our planet. This chapter covers the water cycle, evaporation, condensation, transpiration, and the vital role water plays in sustaining all life.",
    fact: "Water is the only substance on Earth that naturally exists in all three physical states simultaneously — ice in the polar regions, liquid in the oceans, and vapour in the atmosphere — all at the same time!",
    keywords: ["Water Cycle", "Evaporation", "Condensation", "States"],
    children: [
        {
            id: "pb1-threestates",
            label: "Three States\nof Water",
            emoji: "🧊",
            level: 1,
            branchIndex: 1,
            description: "Water (H₂O) is unique in that it exists in all three physical states of matter under conditions found naturally on Earth. As a solid it forms ice and snow, as a liquid it fills our oceans and rivers, and as a gas it forms the invisible water vapour in the atmosphere. Changing between states requires gaining or releasing heat energy.",
            fact: "Water expands by about 9% when it freezes into ice — which is why ice floats on water and why water pipes burst in cold winters when the water inside them freezes and expands!",
            keywords: ["Solid", "Liquid", "Gas", "Phase Change"],
            quiz: {
                question: "What is the process called when water changes from liquid to gas?",
                options: ["Condensation", "Evaporation", "Melting", "Sublimation"],
                correct: 1,
                explanation: "Evaporation is the process where liquid water gains enough energy (from heat) for its surface molecules to escape into the air as water vapour (gas). This can happen at any temperature but speeds up with heat."
            },
            children: [
                {
                    id: "sb1-solid",
                    label: "Ice (Solid\nState)",
                    emoji: "❄️",
                    level: 2,
                    description: "In its solid state, water forms ice or snow. Ice molecules are arranged in a rigid, hexagonal crystal lattice structure in which molecules vibrate in place but cannot move freely. This structure makes ice less dense than liquid water, which is why ice floats. Water freezes at 0°C under normal atmospheric pressure.",
                    fact: "No two snowflakes have ever been found to be exactly identical — each one is shaped by the unique temperature, humidity, and turbulence conditions it encountered as it fell through thousands of metres of atmosphere!",
                    keywords: ["Ice", "Snow", "Freezing", "Crystal"],
                    children: [
                        { id: "tb1-iceprops", label: "Properties of Ice", emoji: "🏔️", level: 3, description: "Ice is less dense than liquid water (0.917 g/cm³ vs 1.0 g/cm³), which is why it floats. This is critical for aquatic life — a floating ice layer insulates the liquid water below, preventing rivers and lakes from freezing solid and killing all aquatic organisms.", fact: "Antarctic ice sheets contain about 70% of Earth's total fresh water — if all Antarctic ice melted, global sea levels would rise by approximately 60 metres (as tall as a 20-story building), flooding most coastal cities!" },
                        { id: "tb1-glacier", label: "Glaciers & Snow", emoji: "🗻", level: 3, description: "Glaciers are massive, slowly moving rivers of ice formed from compressed snow accumulated over thousands of years. They store vast quantities of fresh water and are major sources of river water for drinking and irrigation. The Himalayan glaciers feed the major Indian rivers like the Ganges and Brahmaputra.", fact: "The Lambert Glacier in Antarctica is the world's largest glacier, covering an area of 1 million km² — larger than the entire country of France and Belgium combined!" }
                    ]
                },
                {
                    id: "sb1-liquid",
                    label: "Liquid Water",
                    emoji: "🌊",
                    level: 2,
                    description: "Liquid water exists between 0°C and 100°C at normal atmospheric pressure. In this state, water molecules move freely but remain loosely bonded by hydrogen bonds. Liquid water is Earth's universal solvent — it dissolves more substances than almost any other liquid, making it an ideal medium for biochemical reactions in living cells.",
                    fact: "Water reaches its maximum density at exactly 4°C — which is why deep lake water stays at 4°C year-round regardless of surface temperature, creating a stable thermal environment for deep-water organisms!",
                    keywords: ["Ocean", "River", "Universal Solvent"],
                    children: [
                        { id: "tb1-waterprops", label: "Properties of\nLiquid Water", emoji: "🔬", level: 3, description: "Water has exceptionally high specific heat capacity — it can absorb large amounts of heat without changing temperature much. This regulates Earth's climate, moderating temperature swings near coastlines. It also has high surface tension, enabling small insects like water striders to walk on its surface.", fact: "The surface tension of water is so strong that a carefully placed steel needle will float on it despite being 8 times denser than water — the water surface behaves like an elastic membrane!" },
                        { id: "tb1-oceanrole", label: "Oceans & Rivers", emoji: "🏞️", level: 3, description: "About 97.5% of all water on Earth is in the salty oceans. Only 2.5% is fresh water, and most of that is frozen in glaciers. Rivers, lakes, and groundwater make up less than 1% of all Earth's water — yet this tiny fraction sustains all terrestrial life!", fact: "The Amazon River discharges 20% of all the fresh water that flows into the world's oceans — more than the next 7 largest rivers combined, making it the most powerful river on Earth!" }
                    ]
                },
                {
                    id: "sb1-gas",
                    label: "Water Vapour\n(Gaseous State)",
                    emoji: "☁️",
                    level: 2,
                    description: "Water vapour is the invisible gaseous form of water present in the atmosphere. At sea level, air can hold about 17 grams of water vapour per cubic metre at 20°C. When warm, moist air cools, the vapour condenses into tiny water droplets forming visible clouds, mist, and fog. All precipitation (rain, snow, hail) begins as water vapour.",
                    fact: "The atmosphere contains about 12,900 cubic kilometres of water at any moment — yet if all of it rained out simultaneously, it would cover the Earth's surface in just 25 millimetres of water!",
                    keywords: ["Vapour", "Humidity", "Cloud", "Mist"],
                    children: [
                        { id: "tb1-humidity", label: "Humidity", emoji: "🌡️", level: 3, description: "Humidity is the measure of water vapour concentration in the air. Relative humidity (RH) compares actual water vapour to the maximum the air can hold at that temperature. At 100% RH, air is saturated — additional vapour causes condensation (dew, fog, rain). Hot air can hold more vapour than cold air.", fact: "The most humid place on Earth is the Buenaventura Bay area in Colombia — it receives over 13 metres of rainfall annually and has relative humidity close to 90% for nearly the entire year!" },
                        { id: "tb1-clouds", label: "Cloud Formation", emoji: "⛅", level: 3, description: "Clouds form when warm, moist air rises, cools, and the water vapour condenses around tiny dust particles called cloud condensation nuclei. The resulting millions of microscopic water droplets or ice crystals (each just 1-100 microns wide) cluster together to form visible clouds at altitude.", fact: "A typical cumulus cloud contains about 500,000 kilograms of liquid water — yet it stays aloft because the water droplets are so small they fall slower than the rising air currents support them!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-evaporation",
            label: "Evaporation &\nCondensation",
            emoji: "♨️",
            level: 1,
            branchIndex: 2,
            description: "Evaporation and condensation are the two key processes driving the water cycle. Evaporation converts liquid water into water vapour by absorbing heat energy from the surroundings, which cools the surface. Condensation is the reverse — vapour releases heat as it converts back to liquid, forming dew, clouds, and rain.",
            fact: "Sweating is the human body's incredible evaporative cooling mechanism — when sweat evaporates, it removes about 540 calories of heat energy per gram of water, keeping your body cool during exercise!",
            keywords: ["Heat", "Cooling", "Vapour", "Dew"],
            quiz: {
                question: "Why does a clay pot keep water cool?",
                options: ["Clay absorbs heat from the sun", "Water evaporates through the clay pores cooling the remaining water", "Clay is a natural refrigerant", "Cold air is trapped inside the thick clay walls"],
                correct: 1,
                explanation: "Clay pots have tiny pores through which water seeps and evaporates. Evaporation absorbs heat energy from the remaining water inside the pot, cooling it. This is nature's evaporative cooling — the same principle used in modern air coolers."
            },
            children: [
                {
                    id: "sb2-evapfactors",
                    label: "Factors Affecting\nEvaporation",
                    emoji: "🌡️",
                    level: 2,
                    description: "The rate of evaporation depends on several environmental factors: temperature (higher temperature = faster evaporation), humidity (drier air = faster evaporation), wind (moving air carries away vapour, increasing rate), and surface area (larger surface exposed = faster evaporation).",
                    fact: "Clothing dries much faster on a windy day than on a calm one even at the same temperature — wind continuously removes moisture-saturated air from the surface and replaces it with dry air, dramatically accelerating evaporation!",
                    keywords: ["Temperature", "Humidity", "Wind", "Surface Area"],
                    children: [
                        { id: "tb2-evaptemp", label: "Temperature Effect", emoji: "🌞", level: 3, description: "Higher temperatures give water molecules more kinetic energy, increasing the proportion that have enough energy to escape from the liquid surface as vapour. This is why water evaporates much faster on a hot summer day than on a cold winter day.", fact: "The Atacama Desert in Chile is so dry and hot that rainfall less than 1mm per year completely evaporates before it even reaches the ground — creating what scientists call 'phantom rain'!" },
                        { id: "tb2-evaparea", label: "Surface Area Effect", emoji: "📐", level: 3, description: "A wider, flatter dish of water evaporates faster than the same volume in a tall narrow container because more water surface is exposed to the air. This is why farmers spread harvested grain in thin layers to dry quickly, and why clothes dry faster when spread out than bunched together.", fact: "The human lungs' inner surface area, if unfolded completely, would cover an area roughly equal to half a tennis court — maximising gas exchange surface area is why our lungs evolved with billions of tiny alveoli!" }
                    ]
                },
                {
                    id: "sb2-condensation",
                    label: "Condensation",
                    emoji: "🌧️",
                    level: 2,
                    description: "Condensation is the reverse of evaporation — when water vapour cools below its dew point, it converts back to liquid water, releasing the heat it originally absorbed during evaporation. Condensation forms dew on leaves in the morning, fog in valleys, water droplets on cold glasses, clouds in the sky, and eventually precipitation.",
                    fact: "Dew forms most heavily on clear nights because there are no clouds to act as a thermal blanket — the ground radiates heat into space rapidly, cooling below the dew point, and moisture condenses from the air onto cold grass and leaves!",
                    keywords: ["Dew", "Fog", "Precipitation", "Cooling"],
                    children: [
                        { id: "tb2-dew", label: "Dew & Fog", emoji: "🌫️", level: 3, description: "Dew forms when objects (leaves, grass, car hoods) cool overnight to below the dew point temperature, causing atmospheric water vapour to condense on their surfaces. Fog is simply cloud that forms at ground level when moist air cools below its dew point near the earth's surface.", fact: "The Namib Desert beetle has evolved a remarkable trick — it stands facing the wind on coastal fog mornings, allowing fog droplets to condense on its bumpy back and run down channels directly into its mouth for drinking water!" },
                        { id: "tb2-rain", label: "Precipitation", emoji: "🌧️", level: 3, description: "Precipitation occurs when cloud water droplets coalesce into larger drops heavy enough to fall as rain, or when ice crystals grow heavy enough to fall as snow, sleet, or hail. India receives 80% of its annual rainfall during the southwest monsoon season, driven by the evaporation-condensation cycle.", fact: "The heaviest rainfall ever recorded in one minute was 305 millimetres (over 1 foot) at Unionville, Maryland in 1956 — equivalent to a month's worth of average rainfall falling in just 60 seconds!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-watercycle",
            label: "The Water\nCycle",
            emoji: "🔄",
            level: 1,
            branchIndex: 3,
            description: "The water cycle (also called the hydrological cycle) is the continuous movement of water through the Earth's oceans, atmosphere, land, and living organisms. It has no beginning or end — water is perpetually recycled through evaporation, condensation, precipitation, and collection. The same water molecules have been circulating on Earth for over 4 billion years!",
            fact: "The water in your glass today may have once been drunk by a dinosaur — water has been continuously recycled through the exact same water cycle for the entire history of life on Earth, over 3.5 billion years!",
            keywords: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
            quiz: {
                question: "Which process describes water released by plants into the atmosphere?",
                options: ["Evaporation", "Precipitation", "Transpiration", "Condensation"],
                correct: 2,
                explanation: "Transpiration is the process by which plants release water vapour from their leaves into the atmosphere through microscopic pores called stomata. Trees and plants contribute significantly to the water cycle through transpiration."
            },
            children: [
                {
                    id: "sb3-transpiration",
                    label: "Transpiration",
                    emoji: "🌳",
                    level: 2,
                    description: "Transpiration is the evaporation of water from plant leaves, stems, and flowers into the surrounding atmosphere. Water absorbed by roots travels up the stem through the xylem and evaporates through tiny pores called stomata on leaf surfaces. This process cools the plant, creates a continuous water-drawing 'transpiration pull' from roots to leaves, and contributes significantly to atmospheric humidity.",
                    fact: "A single mature oak tree can transpire over 450 litres of water on a single hot summer day — roughly the same as 2,250 bottles of standard bottled water evaporating from one tree!",
                    keywords: ["Stomata", "Leaves", "Humidity"],
                    children: [
                        { id: "tb3-transimport", label: "Importance of\nTranspiration", emoji: "🌿", level: 3, description: "Transpiration creates low water pressure in leaves that pulls water up from roots, enabling trees to transport water hundreds of metres upward against gravity. It also cools plants like sweating cools animals, and contributes significantly to local humidity, rainfall, and climate regulation.", fact: "The Amazon rainforest acts as a giant atmospheric river — its billions of trees transpire so much water that they generate half of their own rainfall, creating a 'flying river' of water vapour that delivers rain to central South America!" }
                    ]
                },
                {
                    id: "sb3-groundwater",
                    label: "Groundwater\n& Collection",
                    emoji: "🏞️",
                    level: 2,
                    description: "After precipitation falls, water follows several paths: it flows across the surface as runoff into rivers and lakes, it infiltrates the soil and percolates into porous rock layers to form groundwater aquifers, or it is absorbed by plant roots. Groundwater stored in aquifers is the primary source of drinking water for billions of people worldwide.",
                    fact: "The world's largest underground aquifer — the Ogallala Aquifer beneath the US Great Plains — stores water that accumulated over 25,000 years but is being drained by modern agriculture 1,400% faster than it naturally recharges, making it dangerously depleted!",
                    keywords: ["Aquifer", "Runoff", "Infiltration"],
                    children: [
                        { id: "tb3-groundimport", label: "Importance of\nGroundwater", emoji: "🚰", level: 3, description: "Groundwater provides drinking water for over half the global population. India depends heavily on groundwater for drinking, irrigation, and industry. Overuse of groundwater causes the water table to drop, wells to dry up, and land subsidence (sinking) in many urban areas. Rainwater harvesting helps recharge groundwater.", fact: "Mexico City is literally sinking at rates of up to 50 centimetres per year in some areas because excessive extraction of groundwater has caused the compressed clay soil beneath the city to compact and settle — parts of the city have sunk over 10 metres in the last century!" }
                    ]
                }
            ]
        }
    ]
};
