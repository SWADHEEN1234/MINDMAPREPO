// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 3
// "Mindful Eating: Food Components"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "MINDFUL EATING:\nFOOD COMPONENTS",
    emoji: "🍽️",
    level: 0,
    description: "Chapter 3 explores the science behind food — what it contains, why our bodies need it, and how we can test for nutrients. Understanding food components helps us make healthier eating choices every single day.",
    fact: "The human body needs over 40 different nutrients every day to function properly — no single food can supply them all!",
    keywords: ["Nutrients", "Diet", "Health"],
    children: [
        {
            id: "pb1-components",
            label: "Components\nof Food",
            emoji: "🧪",
            level: 1,
            branchIndex: 1,
            description: "Food is made up of several chemical substances called nutrients. Each nutrient has a specific role in maintaining our body's health, growth, and daily energy. The five major food components are carbohydrates, fats, proteins, vitamins, and minerals.",
            fact: "Carbohydrates are the body's primary fuel source — they power everything from breathing to sprinting!",
            keywords: ["Carbohydrates", "Fats", "Proteins", "Vitamins", "Minerals", "Water"],
            quiz: {
                question: "Which nutrient is the body's primary source of energy?",
                options: ["Protein", "Carbohydrate", "Vitamin", "Water"],
                correct: 1,
                explanation: "Carbohydrates are broken down into glucose, which is the body's primary and most immediate source of energy for all cell functions."
            },
            children: [
                {
                    id: "sb1-carbs",
                    label: "Carbohydrates",
                    emoji: "🍚",
                    level: 2,
                    description: "Carbohydrates are the chief energy-providing nutrients. They are found abundantly in foods like rice, wheat, bread, potatoes, and sugar. The body breaks carbohydrates down into glucose, which fuels every cell. Excess carbohydrates are stored as glycogen in the liver or converted into fat for long-term storage.",
                    fact: "The brain alone consumes nearly 120 grams of glucose — about the same weight as an orange — every single day just to keep thinking!",
                    keywords: ["Glucose", "Starch", "Sugar", "Energy"],
                    children: [
                        { id: "tb1-starch", label: "Starch & Sugar", emoji: "🍞", level: 3, description: "Starch is a complex carbohydrate found in rice, potatoes, and wheat. Sugar is a simple carbohydrate found in fruits, milk, and candy. The body digests both into glucose for energy.", fact: "There are over 614 grams of sugar in a one-litre bottle of a popular cola drink — that's roughly 130 teaspoons!" },
                        { id: "tb1-fiber", label: "Dietary Fiber", emoji: "🥦", level: 3, description: "Fiber is a type of carbohydrate that the body cannot digest. It keeps the digestive system healthy by adding bulk to food and preventing constipation. High-fiber foods include vegetables, fruits, and whole grains.", fact: "Fiber literally feeds the good bacteria in your gut — it's the main reason probiotic-rich diets are so important!" },
                        { id: "tb1-carbsource", label: "Sources", emoji: "🌾", level: 3, description: "Major carbohydrate-rich foods include rice, wheat, maize, potatoes, sweet potatoes, bread, and sugar. These foods form the staple diet of billions of people across the world.", fact: "Rice feeds more humans than any other crop on Earth — over 3.5 billion people depend on it as their primary food staple daily." }
                    ]
                },
                {
                    id: "sb1-fats",
                    label: "Fats",
                    emoji: "🧈",
                    level: 2,
                    description: "Fats are energy-dense nutrients that provide more than twice the energy per gram compared to carbohydrates or proteins. They cushion body organs, insulate from cold, carry fat-soluble vitamins (A, D, E, K), and form the structural basis of every cell membrane in the body.",
                    fact: "Cell membranes throughout your entire body are literally made of fat molecules called phospholipids — every one of your 37 trillion cells needs them!",
                    keywords: ["Saturated", "Unsaturated", "Oil", "Butter"],
                    children: [
                        { id: "tb1-satfat", label: "Saturated Fats", emoji: "🥩", level: 3, description: "Saturated fats are solid at room temperature and are found in animal products like butter, ghee, meat, and cheese. Consuming too much saturated fat increases cholesterol levels and raises the risk of heart disease.", fact: "Coconut oil, despite being plant-based, contains over 90% saturated fat — more than even butter!" },
                        { id: "tb1-unsatfat", label: "Unsaturated Fats", emoji: "🫒", level: 3, description: "Unsaturated fats are liquid at room temperature and are found in vegetable oils, nuts, and fish. They are considered 'healthy fats' as they can lower bad cholesterol and reduce inflammation in the body.", fact: "Avocados are one of the only fruits in the world that contain a significant amount of heart-healthy unsaturated fat." },
                        { id: "tb1-fatsource", label: "Sources", emoji: "🥜", level: 3, description: "Common fat sources include groundnut oil, sunflower oil, butter, ghee, cheese, fatty fish like salmon, and nuts like almonds and walnuts. Including the right fats in a balanced diet is essential for optimal health.", fact: "Walnuts contain the highest amount of Omega-3 fatty acids among all tree nuts — just 7 walnuts meet your daily Omega-3 requirement!" }
                    ]
                },
                {
                    id: "sb1-proteins",
                    label: "Proteins",
                    emoji: "💪",
                    level: 2,
                    description: "Proteins are the building blocks of the body. They are essential for growth, repair of damaged tissues, production of enzymes and hormones, and fighting infections via antibodies. Proteins are made of smaller units called amino acids, of which 20 types exist, and 9 are essential meaning the body cannot make them on its own.",
                    fact: "Your hair and nails are almost entirely made of a tough protein called keratin — the same protein that forms rhino horns!",
                    keywords: ["Amino Acids", "Growth", "Repair"],
                    children: [
                        { id: "tb1-plantpro", label: "Plant Proteins", emoji: "🫘", level: 3, description: "Plant-based proteins include legumes (lentils, chickpeas, beans), soy, quinoa, and nuts. Although individual plant proteins may lack some essential amino acids, combining different plants (like rice with lentils) provides a complete protein profile.", fact: "Soybean is often called 'the meat of the fields' because it contains all 9 essential amino acids — making it a rare complete plant protein!" },
                        { id: "tb1-animalpro", label: "Animal Proteins", emoji: "🥚", level: 3, description: "Animal-based proteins like eggs, meat, fish, milk, and cheese are called 'complete proteins' because they contain all 9 essential amino acids that the human body cannot produce on its own.", fact: "Eggs are often called the 'gold standard' of protein because their amino acid profile is almost perfectly matched to human nutritional needs!" },
                        { id: "tb1-prosource", label: "Sources", emoji: "🐟", level: 3, description: "Key protein sources include dal, beans, rajma, soybean, tofu, eggs, chicken, fish, and dairy products like paneer and curd. A good diet should include protein at every meal for sustained energy and muscle health.", fact: "100 grams of cooked chicken breast provides about 31 grams of pure protein with very minimal fat — making it one of the most efficient protein sources available." }
                    ]
                },
                {
                    id: "sb1-vitamins",
                    label: "Vitamins &\nMinerals",
                    emoji: "💊",
                    level: 2,
                    description: "Vitamins and minerals are micronutrients required in tiny quantities but essential for hundreds of biochemical reactions in the body. Vitamins regulate processes like vision, immunity, and blood clotting. Minerals build bones, carry oxygen, and maintain fluid balance. Unlike carbohydrates and fats, they provide no calories yet are absolutely indispensable.",
                    fact: "Vitamin D is unique among vitamins — it is actually a hormone that the body manufactures itself when sunlight strikes the skin!",
                    keywords: ["Vitamin A", "Iron", "Calcium", "Deficiency"],
                    children: [
                        { id: "tb1-vitaminA", label: "Vitamin A", emoji: "🥕", level: 3, description: "Vitamin A is crucial for good vision (especially night vision), healthy skin, and a strong immune system. It is found in carrots, sweet potatoes, leafy greens, and dairy. Deficiency can cause night blindness and dry skin.", fact: "Carrots contain beta-carotene, which the body converts directly into Vitamin A — one large carrot provides more than 200% of your daily requirement!" },
                        { id: "tb1-iron", label: "Iron", emoji: "🫀", level: 3, description: "Iron is a vital mineral that forms haemoglobin, the protein in red blood cells that carries oxygen from the lungs to all the cells in the body. Iron deficiency causes anaemia, which leads to fatigue, pallor, and weakness.", fact: "Spinach contains a lot of iron, but it also contains oxalic acid which can reduce how much iron your body actually absorbs — pairing it with Vitamin C foods dramatically improves absorption!" },
                        { id: "tb1-calcium", label: "Calcium", emoji: "🦴", level: 3, description: "Calcium is the most abundant mineral in the body, making up about 99% of bones and teeth. Beyond structure, calcium also plays a critical role in muscle contraction, nerve communication, and blood clotting.", fact: "Your entire skeleton is completely replaced and rebuilt by the body within approximately every 10 years — calcium continuously cycles in and out of your bones!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-balanced",
            label: "Balanced Diet",
            emoji: "⚖️",
            level: 1,
            branchIndex: 2,
            description: "A balanced diet is one that contains all the necessary nutrients — carbohydrates, fats, proteins, vitamins, minerals, and water — in the correct proportions. Eating a balanced diet every day keeps the body healthy, energetic, and disease-free.",
            fact: "The traditional Indian thali is actually a near-perfect balanced meal — it naturally includes carbs (rice/roti), protein (dal), fat (ghee), vitamins (sabzi), and calcium (curd)!",
            keywords: ["Nutrition", "Deficiency", "Obesity", "Health"],
            quiz: {
                question: "What does a balanced diet include?",
                options: ["Only proteins and fats", "Only carbohydrates", "All nutrients in correct proportions", "Only vitamins and minerals"],
                correct: 2,
                explanation: "A balanced diet includes all major nutrients — carbohydrates, fats, proteins, vitamins, minerals, and water — in the right amounts to keep the body healthy and functioning properly."
            },
            children: [
                {
                    id: "sb2-deficiency",
                    label: "Deficiency\nDiseases",
                    emoji: "🤒",
                    level: 2,
                    description: "When the body does not get enough of a particular nutrient over a long period, it develops a deficiency disease. These diseases are preventable simply by eating the right foods. Early recognition of symptoms and correcting the diet is the most effective cure.",
                    fact: "Scurvy — a disease caused by Vitamin C deficiency — used to kill more sailors on long sea voyages than all storms and battles combined during the Age of Exploration!",
                    keywords: ["Kwashiorkor", "Marasmus", "Scurvy", "Rickets"],
                    children: [
                        { id: "tb2-kwashiorkor", label: "Kwashiorkor", emoji: "🍃", level: 3, description: "Kwashiorkor is a severe form of protein deficiency that mainly affects children. Symptoms include a swollen belly, growth retardation, skin discoloration, and extreme weakness. It is most common in regions with food insecurity.", fact: "The word 'Kwashiorkor' comes from the Ga language of Ghana in West Africa and literally means 'the disease the first child gets when the second child is born' — because the older child is weaned off breast milk too early!" },
                        { id: "tb2-rickets", label: "Rickets", emoji: "🦵", level: 3, description: "Rickets is caused by a severe deficiency of Vitamin D and calcium, leading to soft and weakened bones in children. The bones are unable to harden properly, causing bowing of the legs and pain. Adequate sunlight and dairy can prevent it.", fact: "The Industrial Revolution dramatically increased rickets cases in children working indoors in coal mines and factories — sunlight was the missing ingredient!" },
                        { id: "tb2-scurvy", label: "Scurvy", emoji: "🍋", level: 3, description: "Scurvy is caused by a Vitamin C deficiency. It causes bleeding gums, loose teeth, joint pain, and skin bruising. Fresh fruits and vegetables like oranges, lemons, and amla can prevent and cure scurvy effectively.", fact: "British sailors were given limes to prevent scurvy during long sea voyages — which is why they were nicknamed 'Limeys'!" }
                    ]
                },
                {
                    id: "sb2-water",
                    label: "Water &\nRoughage",
                    emoji: "💧",
                    level: 2,
                    description: "Water and roughage (dietary fiber) are two non-nutrient components of food that are absolutely essential for health. Water makes up about 60-70% of the human body weight and is involved in virtually every physiological process. Roughage helps the digestive system function smoothly by adding bulk to stool.",
                    fact: "You can survive for weeks without food, but most people would die within just 3-4 days without water!",
                    keywords: ["Hydration", "Digestion", "Fiber"],
                    children: [
                        { id: "tb2-waterrole", label: "Role of Water", emoji: "🌊", level: 3, description: "Water acts as a solvent for nutrients, transports materials in the blood, lubricates joints, regulates body temperature through sweating, and flushes toxins out of the body through urine. Staying properly hydrated is crucial for all biological functions.", fact: "The human brain is approximately 73% water — even mild dehydration of just 2% can noticeably impair concentration, memory, and mood!" },
                        { id: "tb2-roughage", label: "Role of Roughage", emoji: "🥬", level: 3, description: "Roughage (dietary fiber) is the indigestible portion of plant food. It adds bulk to the food in the gut, stimulates bowel movement, prevents constipation, lowers cholesterol, and feeds beneficial gut bacteria, supporting overall digestive health.", fact: "The average person passes food through their 9-meter long digestive tract in 24-72 hours — roughage significantly speeds this process up!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-testing",
            label: "Testing for\nNutrients",
            emoji: "🔬",
            level: 1,
            branchIndex: 3,
            description: "Scientists and students can detect the presence of key nutrients using simple chemical tests. These tests rely on specific reactions between the food sample and a test chemical that produces a visible colour change. The iodine test, Benedict's test, and Biuret test are three fundamental food tests taught at this level.",
            fact: "The iodine test for starch is so sensitive that it can detect starch concentrations as low as 0.2 grams per litre — that's like finding a tiny pinch of starch dissolved in a full swimming pool of water!",
            keywords: ["Iodine Test", "Benedict Test", "Biuret Test"],
            quiz: {
                question: "Which chemical is used to test for the presence of starch in food?",
                options: ["Benedict's solution", "Iodine solution", "Biuret solution", "Vinegar"],
                correct: 1,
                explanation: "Iodine solution turns from its natural brown/orange colour to a dark blue-black colour when starch is present in a food sample. This is the standard test for detecting starch."
            },
            children: [
                {
                    id: "sb3-iodine",
                    label: "Iodine Test\n(Starch)",
                    emoji: "🟣",
                    level: 2,
                    description: "The iodine test detects the presence of starch. When a few drops of iodine solution are added to a food sample, starch turns the iodine from its natural orange-brown to a striking blue-black colour. This reaction occurs because starch molecules form a helical complex that traps iodine inside.",
                    fact: "Ancient Egyptians used a natural iodine-rich plant solution to preserve papyrus scrolls — accidentally creating the world's oldest starch test!",
                    keywords: ["Starch", "Blue-black", "Iodine"],
                    children: [
                        { id: "tb3-iodineproc", label: "Procedure", emoji: "🧫", level: 3, description: "To perform the test: crush a small amount of the food sample and place it in a clean dish. Add 2-3 drops of iodine (Lugol's) solution. Observe the colour change. A blue-black colour confirms the presence of starch.", fact: "Lugol's iodine solution, standard in school labs, was invented by French physician Jean Guillaume Auguste Lugol in 1829 — it's still used identically 200 years later!" },
                        { id: "tb3-iodineresult", label: "Positive vs Negative", emoji: "✅", level: 3, description: "A positive result is indicated by the colour changing from orange-brown to blue-black or dark purple, confirming starch. A negative result means the iodine stays orange-brown, confirming the absence of starch in that food sample.", fact: "Potatoes give an extremely strong positive iodine test — you can see the blue-black reaction almost instantly even with a tiny piece!" }
                    ]
                },
                {
                    id: "sb3-benedict",
                    label: "Grease Patch Test\n(Fats)",
                    emoji: "🟡",
                    level: 2,
                    description: "The grease patch (or paper test) for fats involves rubbing or pressing a food sample onto a piece of white paper. If the food contains fat, it leaves a permanent translucent (see-through) greasy patch even after the water evaporates. Fats don't evaporate like water — the patch stays visible.",
                    fact: "This simple paper test was historically used by merchants and food inspectors to quickly detect adulterated or low-quality oils in food products!",
                    keywords: ["Translucent", "Paper Test", "Grease"],
                    children: [
                        { id: "tb3-fatproc", label: "Procedure", emoji: "📄", level: 3, description: "Take a small piece of white paper. Rub the food sample onto the paper (or press it), then allow the paper to dry completely. Hold the paper up to a light source. If a permanent translucent spot is visible, the food contains fat.", fact: "Milk leaves only a faint translucent spot because it is an emulsion — fat is suspended in water droplets so it is not pure fat, but the test still detects the fat component!" },
                        { id: "tb3-fatresult", label: "Common Results", emoji: "🧁", level: 3, description: "Butter and ghee leave vivid, obvious translucent spots. Nuts and fried chips also produce clear opaque spots. Dry biscuits may show faint spots depending on fat content. Fruits and vegetables typically show no translucent patch as they contain negligible fat.", fact: "One gram of fat yields about 9 Calories of energy — more than double that of one gram of carbohydrate or protein, which each yield only 4 Calories!" }
                    ]
                },
                {
                    id: "sb3-biuret",
                    label: "Biuret Test\n(Proteins)",
                    emoji: "🟣",
                    level: 2,
                    description: "The Biuret test detects proteins by reacting with the peptide bonds (the chemical links between amino acids). When copper sulphate (CuSO₄) is added to an alkaline food solution, the presence of protein causes the solution to turn violet or mauve-purple. Egg white is a classic test case.",
                    fact: "The Biuret test was accidentally discovered by Heinrich Rose in 1833 — he was heating urea when he noticed the vivid purple colour change!",
                    keywords: ["Copper Sulphate", "Peptide Bond", "Purple"],
                    children: [
                        { id: "tb3-biuretproc", label: "Procedure", emoji: "🔵", level: 3, description: "Add a food extract to a test tube. Add sodium hydroxide (NaOH) solution to make the mixture alkaline. Then add a few drops of copper sulphate (CuSO₄) solution. Observe the colour carefully. A violet-purple colour confirms the presence of protein.", fact: "The intensity of the violet-purple colour is directly related to the concentration of protein present — scientists can measure protein amounts precisely using this colour intensity!" },
                        { id: "tb3-biuretresult", label: "Common Results", emoji: "🥛", level: 3, description: "Egg white (albumen) gives a strong positive result — turning deep violet-purple. Milk also gives a positive result. Foods with starch or simple sugar (like rice or glucose) give no colour change, resulting in a negative (blue) result.", fact: "Scientists can also use a modified Biuret test to precisely measure protein content in blood plasma — it's a standard diagnostic test used in medical laboratories worldwide!" }
                    ]
                }
            ]
        }
    ]
};
