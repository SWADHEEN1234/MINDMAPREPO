// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 10
// "Motion and Measurement of Distances"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "MOTION &\nMEASUREMENT",
    emoji: "📏",
    level: 0,
    description: "Chapter 10 introduces students to the science of measurement and motion. We learn how humans have developed standard units to measure length, and how to describe the different types of motion that objects undergo. Understanding measurement is the foundation of all scientific investigation.",
    fact: "The metric system (SI units) was created during the French Revolution in 1795 — and scientists chose 1 metre as exactly one ten-millionth of the distance from the Earth's equator to the North Pole along a meridian line!",
    keywords: ["Length", "SI Units", "Motion", "Measurement"],
    children: [
        {
            id: "pb1-measurement",
            label: "Measurement\n& Units",
            emoji: "📐",
            level: 1,
            branchIndex: 1,
            description: "Measurement is the process of comparing an unknown quantity with a fixed, known standard called a unit. Without standardised units, there would be no reliable way to communicate sizes, distances, or quantities across different cultures and countries. The International System of Units (SI) provides a universal standard used by scientists worldwide.",
            fact: "In ancient times, the 'cubit' (length from elbow to middle fingertip) was used as a standard measurement — but since everyone's arm length differs, building projects like the Egyptian pyramids required a special royal cubit rod kept as the official standard!",
            keywords: ["Unit", "Standard", "SI", "Metre"],
            quiz: {
                question: "What is the SI unit of length?",
                options: ["Centimetre", "Foot", "Metre", "Kilometre"],
                correct: 2,
                explanation: "The metre (m) is the SI (International System) base unit of length. Other units like centimetres and kilometres are derived from the metre: 1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm."
            },
            children: [
                {
                    id: "sb1-siunit",
                    label: "SI Units of\nMeasurement",
                    emoji: "📊",
                    level: 2,
                    description: "The SI (Système International d'Unités) is the globally accepted standard system of measurement. For length, the base unit is the metre (m). Derived units include: kilometre (1 km = 1000 m), centimetre (1 m = 100 cm), millimetre (1 m = 1000 mm). All measurements in science, medicine, and engineering use SI units for consistency.",
                    fact: "The original kilogram standard — a actual lump of platinum-iridium metal kept in Paris — was used as the world's mass reference until 2019, when it was replaced by a definition based on Planck's constant — a fundamental law of quantum physics!",
                    keywords: ["Kilometre", "Centimetre", "Millimetre"],
                    children: [
                        { id: "tb1-conversions", label: "Unit Conversions", emoji: "🔄", level: 3, description: "Key length conversions: 1 km = 1000 m, 1 m = 100 cm = 1000 mm, 1 cm = 10 mm. For practical everyday use: small objects (pencil, book) are measured in cm; room dimensions in metres; city-to-city distances in kilometres. Scientific measurements may use nanometres (1 nm = 0.000000001 m) for atoms.", fact: "The diameter of a human hair is approximately 70 micrometres (0.07 mm) — to measure it, scientists use units a thousand times smaller than a millimetre!" },
                        { id: "tb1-nonstandard", label: "Non-Standard\nUnits", emoji: "🤚", level: 3, description: "Before SI units, people used body-based measurements: hand span, cubit (elbow to fingertip), foot length, pace (one step), fathom (arm span). These were easy to use but unreliable because they vary from person to person and place to place — which is exactly why standardised units were invented.", fact: "The 'foot' unit of 12 inches was standardised in Imperial Britain by defining it as the total length of 36 consecutive men's feet standing heel to toe in a line — averaged out to create a single consistent unit!" }
                    ]
                },
                {
                    id: "sb1-measuring",
                    label: "Measuring Length\nCorrectly",
                    emoji: "📏",
                    level: 2,
                    description: "A ruler or measuring tape is used to measure length. Key rules for correct measurement: (1) Place the zero mark of the ruler exactly at one end of the object. (2) Hold the ruler along (parallel to) the object, not at an angle. (3) Read the measurement from directly above (avoid parallax error by keeping your eye perpendicular to the scale). (4) Estimate to the nearest division.",
                    fact: "Parallax error in measurement occurs when you read a scale from the wrong angle — the same thermometer can appear to show different temperatures depending on the viewer's eye position relative to the scale!",
                    keywords: ["Ruler", "Parallax", "Zero Error"],
                    children: [
                        { id: "tb1-meastools", label: "Measuring Tools", emoji: "🔧", level: 3, description: "Different tools measure different ranges: ruler (1mm–30cm for small objects), metre scale (1mm–100cm), measuring tape (1mm–several metres for curved surfaces like body measurements), odometer in vehicles (km), surveyor's chain (land measurement), vernier calliper (0.01mm precision for small precise measurements).", fact: "Scientists at NIST (National Institute of Standards and Technology) use atomic clocks so precise they would only gain or lose 1 second in 300 million years — making them the world's most accurate measuring instruments!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-motion",
            label: "Types of\nMotion",
            emoji: "🚀",
            level: 1,
            branchIndex: 2,
            description: "Motion is the change in position of an object with respect to its surroundings over time. Motion is everywhere — from the spinning of electrons to the orbiting of galaxies. Scientists classify motion by its path and pattern. Understanding the type of motion helps predict future positions and speeds of moving objects.",
            fact: "Everything in the universe is in motion — even when you sit perfectly still, you're hurtling through space at 107,000 km/h as Earth orbits the Sun, and around 220 km/s as the Sun orbits the Milky Way galaxy!",
            keywords: ["Speed", "Distance", "Path", "Circular", "Linear"],
            quiz: {
                question: "What type of motion does a ball rolling in a straight path exhibit?",
                options: ["Circular motion", "Oscillatory motion", "Linear motion", "Rotational motion"],
                correct: 2,
                explanation: "Linear (rectilinear) motion describes an object moving in a straight line. A ball rolling straight on a flat surface, a train on straight tracks, or a person walking in a straight corridor are all examples of linear motion."
            },
            children: [
                {
                    id: "sb2-linear",
                    label: "Linear Motion",
                    emoji: "🚂",
                    level: 2,
                    description: "Linear or rectilinear motion occurs when an object moves along a straight line path. The direction remains constant throughout the motion. Linear motion is the simplest type of motion to describe and calculate. Speed is simply the distance covered per unit of time.",
                    fact: "Japan's Shinkansen bullet train travels so smoothly in a straight line at 320 km/h that passengers can balance a coin on its edge for several seconds — because the perfectly linear motion creates virtually no lateral force!",
                    keywords: ["Straight Line", "Speed", "Distance"],
                    children: [
                        { id: "tb2-speedcalc", label: "Speed & Distance", emoji: "⚡", level: 3, description: "Speed = Distance ÷ Time. If a car covers 120 km in 2 hours, its speed is 60 km/h. In linear motion, the object travels a specific measured distance in a specific time. SI unit of speed is m/s (metres per second); km/h is also commonly used for vehicles.", fact: "The fastest human ever recorded was Usain Bolt at the 2009 World Championships — he reached a peak speed of 12.4 m/s (44.7 km/h) during his 100m world record run of 9.58 seconds!" }
                    ]
                },
                {
                    id: "sb2-circular",
                    label: "Circular Motion",
                    emoji: "🌀",
                    level: 2,
                    description: "Circular motion occurs when an object moves along a circular path — always at a constant distance from a central point. The direction of motion continuously changes (always pointed tangentially), even if speed stays the same. Earth's revolution around the Sun and a fan blade's rotation are classic examples.",
                    fact: "The international space station (ISS) completes a full circular orbit around Earth every 92 minutes, travelling at 27,600 km/h — astronauts on board see 16 sunrises and 16 sunsets every single day!",
                    keywords: ["Circular Path", "Revolution", "Rotation"],
                    children: [
                        { id: "tb2-circex", label: "Examples of\nCircular Motion", emoji: "🎡", level: 3, description: "Examples of circular motion in everyday life: blades of a fan or helicopter, Earth revolving around the Sun, Moon orbiting Earth, a merry-go-round, a coin rolling in a bowl, a satellite in orbit, and the tip of a clock's hands. Circular motion always requires a centre-directed (centripetal) force.", fact: "The Moon travels 2.4 million km in its circular orbit around Earth each month — yet because it also rotates once in that same period, we always see exactly the same face of the Moon from Earth!" }
                    ]
                },
                {
                    id: "sb2-oscillatory",
                    label: "Oscillatory &\nPeriodic Motion",
                    emoji: "🕰️",
                    level: 2,
                    description: "Oscillatory motion is a to-and-fro (back-and-forth) motion around a central position. The object repeatedly returns to its starting position — like a pendulum, a swing, or guitar strings vibrating. Periodic motion is any motion that repeats at regular time intervals — both circular and oscillatory motions are periodic.",
                    fact: "Galileo discovered the remarkable property of pendulums by watching a swinging chandelier in Pisa Cathedral — he timed it using his pulse and found that short pendulums and long pendulums always take the same time for half a swing regardless of how wide the swing is!",
                    keywords: ["Pendulum", "To-and-Fro", "Periodic", "Vibration"],
                    children: [
                        { id: "tb2-oscillex", label: "Examples of\nOscillatory Motion", emoji: "🎸", level: 3, description: "Oscillatory motion examples: a pendulum in a wall clock, a child on a swing, a rocking chair, guitar strings vibrating, a ruler flicked off the edge of a table, a spring being stretched and released. Every oscillatory motion has an: amplitude (max. displacement from centre), time period (time for one complete oscillation).", fact: "Quartz crystals in digital watches oscillate at exactly 32,768 vibrations per second — and computer circuits count exactly these vibrations to track time with an accuracy of ±15 seconds per month!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-distance",
            label: "Distance in\nEveryday Life",
            emoji: "🗺️",
            level: 1,
            branchIndex: 3,
            description: "Measuring distance accurately is essential in daily life — from measuring fabric to planning construction to navigating cities. Scientists and engineers use a wide range of specialised tools. Understanding how to choose the RIGHT measuring instrument for each task is a key practical scientific skill.",
            fact: "Laser rangefinders, used in surveying and smartphones, can measure distances up to 200 metres with an accuracy of just 1 millimetre — by timing how long it takes for a laser pulse to bounce back from the target!",
            keywords: ["Curved Surface", "Tape", "Estimation"],
            quiz: {
                question: "Which instrument is most appropriate for measuring the length of a curved surface (like the circumference of a ball)?",
                options: ["Metre scale/ruler", "Vernier calliper", "Flexible measuring tape", "Thermometer"],
                correct: 2,
                explanation: "A flexible measuring tape can be bent to follow curved surfaces, making it ideal for measuring curved lengths like the circumference of a ball, arm length, or waist measurement. A rigid ruler cannot bend and would give an incorrect measurement on curved surfaces."
            },
            children: [
                {
                    id: "sb3-curved",
                    label: "Measuring\nCurved Lengths",
                    emoji: "🔘",
                    level: 2,
                    description: "Curved lengths cannot be measured directly with a rigid ruler. Methods for curved surfaces include: (1) Flexible tape — pressing it along the curve and reading the length. (2) Thread method — placing thread along the curve, then measuring the thread length with a ruler. Both methods are used in tailoring, sports (measuring racing tracks), and geography (measuring rivers on maps).",
                    fact: "Cartographers (map makers) use a map-measuring device called a curvimeter (or opisometer) that rolls a tiny wheel along a curved road or river on a map — the wheel's rotation counter measures the true curved distance accurately!",
                    keywords: ["Thread Method", "Flexible Tape", "Curve"],
                    children: [
                        { id: "tb3-practapps", label: "Practical\nApplications", emoji: "🧵", level: 3, description: "Curved measurement applications include: a tailor measuring body curves to stitch clothes, engineers measuring curved road lengths for construction, coaches measuring athletes' limb lengths and grip circumferences, doctors measuring head circumference of babies to track brain growth, and archaeologists measuring the circumference of ancient pottery fragments.", fact: "The Great Wall of China, if straightened out, would measure approximately 21,196 km — but its actual length along all its curves through mountains is much harder to determine, which is why different surveys report very different totals!" }
                    ]
                },
                {
                    id: "sb3-estimation",
                    label: "Estimation &\nApproximation",
                    emoji: "🎯",
                    level: 2,
                    description: "Estimation is making a reasonable, educated guess about a measurement without using an instrument. Good estimation skills are valuable in daily life — when an exact measurement isn't needed or instruments aren't available. Scientists round measurements to an appropriate number of significant figures to avoid false precision.",
                    fact: "Fermi estimation (named after physicist Enrico Fermi) is the scientific skill of making surprisingly accurate estimates with minimal information — Fermi famously estimated the yield of the first atomic bomb just by dropping torn paper and observing how far the blast blew it!",
                    keywords: ["Estimate", "Approximation", "Rounding"],
                    children: [
                        { id: "tb3-estexamples", label: "Why Estimation\nMatters", emoji: "💡", level: 3, description: "In everyday life: a carpenter estimates wood length before cutting, a cook estimates ingredient quantities, a doctor estimates patient age from an X-ray, a navigator estimates remaining fuel vs. distance. Estimation prevents costly errors of over-ordering or under-preparing, and is a critical skill in engineering and business.", fact: "Jeff Bezos famously attributed Amazon's early success to Bezos' 'regret minimization framework' — a mental estimation of future regret that is essentially applied estimation skills used at a life-decisions level!" }
                    ]
                }
            ]
        }
    ]
};
