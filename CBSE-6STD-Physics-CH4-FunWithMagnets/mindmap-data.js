// ============================================================
// MIND MAP DATA — CBSE Grade 6 Physics Chapter 4
// "Fun with Magnets"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "FUN WITH\nMAGNETS",
    emoji: "🧲",
    level: 0,
    description: "Chapter 4 of Grade 6 Physics dives deep into magnetism — one of the four fundamental forces of nature. Magnets exert invisible forces that can attract or repel other magnets and attract certain metals. Magnetism is deeply connected to electricity — together they form electromagnetism, which powers motors, generators, computers, and the entire digital world.",
    fact: "Every computer hard drive stores your data using magnetic domains on a spinning aluminium disk — billions of microscopic magnets pointing either 'north' (1) or 'south' (0) encode every photo, song, and document you've ever saved!",
    keywords: ["Magnet", "Poles", "Field", "Compass", "Electromagnet"],
    children: [
        {
            id: "pb1-magnets",
            label: "Types of\nMagnets",
            emoji: "🔩",
            level: 1,
            branchIndex: 1,
            description: "Magnets come in three major types: natural magnets (magnetite/lodestone, found in nature), artificial permanent magnets (bar, horseshoe, ring, disc — manufactured from steel or rare-earth alloys), and electromagnets (temporary magnets created by passing electric current through a coil of wire). Each type has different strengths, shapes, and applications.",
            fact: "The world's most powerful permanent magnet is made from neodymium-iron-boron (NIB) alloy and can lift over 1,000 times its own weight. A 1 cm cube NIB magnet can easily lift a 1 kg mass — the same magnetic force that makes your fridge magnet work, except 100,000 times stronger!",
            keywords: ["Permanent", "Temporary", "Electromagnet", "Lodestone"],
            quiz: {
                question: "How is an electromagnet different from a permanent magnet?",
                options: ["An electromagnet is heavier", "An electromagnet only attracts copper and aluminium", "An electromagnet can be switched on and off using electricity", "An electromagnet has only one pole"],
                correct: 2,
                explanation: "An electromagnet is a temporary magnet created by passing electric current through a coil of wire wrapped around an iron core. When the current is on, it behaves like a strong magnet. When the current is switched off, the magnetism disappears. This on/off control makes electromagnets ideal for cranes, doorbells, and MRI machines."
            },
            children: [
                {
                    id: "sb1-natural",
                    label: "Natural Magnets\n(Lodestone)",
                    emoji: "🪨",
                    level: 2,
                    description: "Lodestone (magnetite, Fe₃O₄) is a naturally occurring magnetic mineral — one of the few substances in nature that is magnetic as-found. Ancient Greeks, Chinese, and Indians discovered lodestone thousands of years ago. It was the first magnetic material known to humans and was used to create the earliest compass needles for navigation.",
                    fact: "The ancient city of Magnesia in modern Turkey (from which 'magnet' gets its name) sat atop a massive deposit of naturally occurring magnetite — local shepherds noticed their iron-tipped staffs were mysteriously attracted to the ground in that region!",
                    keywords: ["Magnetite", "Natural", "Iron Oxide"],
                    children: [
                        { id: "tb1-history", label: "History of\nMagnets", emoji: "📜", level: 3, description: "Magnetic properties of lodestone were known in ancient China (206 BC), Greece (~600 BC), and India. The first compass-like device (a 'south-pointing spoon' made of lodestone) appeared in China around 206 BC. In 1600, William Gilbert (physician to Queen Elizabeth I) published 'De Magnete' — the first scientific study of magnetism and he correctly suggested that Earth itself is a giant magnet.", fact: "William Gilbert discovered in 1600 that hammering a piece of iron while holding it aligned North-South could magnetise it — this 'stroke and alignment' magnetisation was used to make compass needles for 200 more years before electromagnets were invented!" }
                    ]
                },
                {
                    id: "sb1-permanent",
                    label: "Permanent\nMagnets",
                    emoji: "🔖",
                    level: 2,
                    description: "Permanent magnets are made from hard magnetic alloys (steel, alnico, ferrite, neodymium-iron-boron) that retain their magnetism indefinitely after being magnetised. They are shaped into: bar magnets (straight), horseshoe magnets (U-shaped, stronger as poles are closer), ring magnets, disc magnets, and cow magnets (cylindrical, fed to cows to capture accidentally swallowed iron in their stomach).",
                    fact: "Rare-earth neodymium magnets are so powerful that handling large ones requires protective gloves — two large magnets snapping together can trap and crush fingers, and they've been known to shatter when two large ones are brought together because the magnetic force exceeds the mechanical strength of the magnet itself!",
                    keywords: ["Bar Magnet", "Horseshoe", "Steel", "Neodymium"],
                    children: [
                        { id: "tb1-permapps", label: "Uses of Permanent\nMagnets", emoji: "🎯", level: 3, description: "Permanent magnets are used in: electric motors and generators (spinning magnets in motor coils), speakers and headphones (vibrating cone by varying magnetic field), hard disk drives (data storage domains), refrigerator door seals, toy magnets, door latches, medical MRI machines (superconducting electromagnets), and magnetic card strips on credit cards.", fact: "The magnets in the speakers of your phone or headphones weigh just a fraction of a gram, yet they vibrate a thin membrane precisely enough to reproduce the complete frequency range of human hearing — from 20 Hz bass rumble to 20,000 Hz high-frequency violin harmonics!" }
                    ]
                },
                {
                    id: "sb1-electromag",
                    label: "Electromagnets",
                    emoji: "🔌",
                    level: 2,
                    description: "An electromagnet is created by winding insulated conducting wire into a coil (solenoid) around a soft iron core and passing electric current through it. The current generates a magnetic field, and the iron core amplifies it enormously. Strength increases with more coil turns and higher current. Switching off the current demagnetises the iron — making it fully controllable.",
                    fact: "The pioneering electromagnetic theory was developed by Scottish physicist James Clerk Maxwell in 1865 — unifying electricity and magnetism into one framework. Einstein later said Maxwell's work was the greatest intellectual achievement of the 19th century and had a bigger impact on his own thinking than any other scientific discovery!",
                    keywords: ["Solenoid", "Coil", "Iron Core", "Current"],
                    children: [
                        { id: "tb1-electroapps", label: "Uses of\nElectromagnets", emoji: "🏗️", level: 3, description: "Electromagnets are used in: industrial cranes (lift and release scrap iron on command), electric bells and buzzers, relays (electrically controlled switches), MRI scanners (superconducting electromagnets 50,000 times Earth's field strength), particle accelerators (steer charged particle beams), door security locks, computer hard drives (writing magnetic data), and electric motors.", fact: "MRI (Magnetic Resonance Imaging) hospital scanners use superconducting electromagnets cooled to -269°C (colder than space!) that produce magnetic fields 50,000 times stronger than Earth's — powerful enough to detect hydrogen atoms inside your body and reconstruct a 3D image of your organs without any harmful radiation!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-poles",
            label: "Poles, Fields\n& Forces",
            emoji: "🌐",
            level: 1,
            branchIndex: 2,
            description: "Every magnet has a North Pole (N) and a South Pole (S) — regions of maximum magnetic strength. The fundamental law: like poles repel, unlike poles attract. Magnetic field lines connect from N to S pole, showing the direction and strength of the field. The field is strongest where lines are densest — at the poles.",
            fact: "If you break a magnet in half, you don't get a separate North and South — each half instantly becomes a complete magnet with its own North AND South pole. This has never failed in any experiment ever conducted — scientists have never found an isolated single magnetic pole (magnetic monopole)!",
            keywords: ["North Pole", "South Pole", "Field Lines", "Force"],
            quiz: {
                question: "Two magnets have their South poles facing each other. What will happen?",
                options: ["They will attract each other", "Nothing will happen", "They will repel each other", "One magnet will lose its magnetism"],
                correct: 2,
                explanation: "Like poles (South-South or North-North) always repel each other. Unlike poles (North-South) attract. This is an immutable law of magnetism with no known exceptions — even in quantum physics and particle physics experiments."
            },
            children: [
                {
                    id: "sb2-attract",
                    label: "Magnetic\nForce",
                    emoji: "⚡",
                    level: 2,
                    description: "Magnetic force acts at a distance without physical contact — it is a non-contact force (like gravity and electrostatic force). The force decreases rapidly with distance — if you double the distance between two magnets, the force decreases to about one-quarter. This means that magnets must be quite close to each other to exert significant forces.",
                    fact: "Maglev trains use the repulsive force between superconducting magnets at 15mm gap to levitate 40-tonne trains above the track — eliminating friction completely, which is why Japan's SCMaglev achieved a world record rail speed of 603 km/h, faster than a commercial aircraft takes off!",
                    keywords: ["Non-Contact", "Distance", "Repulsion"],
                    children: [
                        { id: "tb2-maglev", label: "Maglev\nTechnology", emoji: "🚄", level: 3, description: "Magnetic levitation (maglev) uses either electromagnets (attractive levitation) or superconducting magnets (repulsive levitation) to float a vehicle above a track. With no physical contact, there's no wheel friction — the only resistance is air drag. Maglev trains are also virtually silent, have near-zero maintenance costs, and never derail.", fact: "The Shanghai Maglev Train, which connects the airport to the city, reaches 431 km/h in commercial service and can make the 30km journey in 7 minutes 20 seconds — the same journey by conventional taxi takes 40+ minutes in traffic!" }
                    ]
                },
                {
                    id: "sb2-field",
                    label: "Magnetic Field\nLines",
                    emoji: "💫",
                    level: 2,
                    description: "Magnetic field lines are imaginary lines drawn to represent the direction and strength of a magnetic field. They emerge from the North pole, travel through the space outside the magnet, and re-enter at the South pole — forming continuous closed loops (also passing through the inside of the magnet). Where lines are closer, the field is stronger.",
                    fact: "Michael Faraday, who first conceived of magnetic field lines in the 1840s, was entirely self-taught and never had any formal education beyond age 13 — yet his concept of field lines was so revolutionary that Einstein kept a portrait of Faraday in his study alongside Newton!",
                    keywords: ["Field Lines", "Iron Filings", "Direction"],
                    children: [
                        { id: "tb2-fieldviz", label: "Visualising\nMagnetic Fields", emoji: "🗺️", level: 3, description: "Iron filings placed on a white paper above a magnet align along the field lines, making them visible. A plotting compass also shows field direction at any point — the north end of the compass needle points in the field direction. Both techniques reveal the characteristic figure-of-eight pattern of field lines around a bar magnet.", fact: "Scientists at the CERN particle physics laboratory mapped the magnetic field inside the Large Hadron Collider tunnel to within 0.01% accuracy over a 27km ring — because even a 0.01% field variation would deflect proton beams enough to miss their collision target and invalidate years of experiments!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-applications",
            label: "Compass &\nReal Applications",
            emoji: "🧭",
            level: 1,
            branchIndex: 3,
            description: "The magnetic compass is one of the most important inventions in human history — enabling trans-oceanic navigation and the Age of Exploration. Understanding Earth's magnetic field has led to deeper knowledge of our planet's interior, given us protection from solar storms, and helped explain animal migration. Modern technology builds on magnetism for nearly every digital device.",
            fact: "Animal navigation using Earth's magnetic field (magnetoreception) was considered impossible by most scientists as recently as the 1960s — today we know that salmon, sea turtles, birds, bees, sharks, and even bacteria all navigate using Earth's magnetic field as an internal GPS!",
            keywords: ["Compass", "Earth's Field", "Navigation", "Magnetoreception"],
            quiz: {
                question: "A freely suspended magnetic needle always points in which direction?",
                options: ["East-West", "North-South", "Toward the nearest magnet", "Toward the Sun"],
                correct: 1,
                explanation: "A freely suspended magnetic needle always comes to rest pointing roughly North-South, aligning with Earth's magnetic field. The North pole of the needle points toward geographic North (which is actually Earth's magnetic South Pole). This property makes magnetic needles the basis of all compasses."
            },
            children: [
                {
                    id: "sb3-compass",
                    label: "Making &\nUsing a Compass",
                    emoji: "🧭",
                    level: 2,
                    description: "A compass needle is simply a small, balanced permanent magnet on a frictionless pivot. You can make one by: (1) Stroking a steel needle 50+ times in one direction with a bar magnet. (2) Placing the needle on a small piece of cork or foam in water in a bowl. (3) The magnetised needle floats freely and aligns North-South with Earth's magnetic field.",
                    fact: "Traditional Chinese compass makers used lodestone carved into a spoon shape balanced on a polished bronze plate — the spoon rotated on its smooth base to point south because the spoon handle (south pole) aligned with Earth's magnetic field!",
                    keywords: ["Magnetised Needle", "Float", "Pivot"],
                    children: [
                        { id: "tb3-compapps", label: "Compass\nApplications", emoji: "⛵", level: 3, description: "Compasses are used in: marine navigation (ocean-going ships before GPS), aerial navigation (backup to electronic systems), military navigation (works without batteries or satellite contact), hiking and trekking (orienteering), geological surveying (finding magnetic ore deposits), and smartphone magnetometer chips (digital compass for maps apps).", fact: "Vasco da Gama navigated the first sea route from Europe to India (1497-1499) using mainly a magnetic compass and celestial navigation — covering 24,000 km across two oceans without GPS, radar, or any electronic instruments, arriving in Calicut within 20km of his intended destination!" }
                    ]
                },
                {
                    id: "sb3-earthmag",
                    label: "Earth as a\nGiant Magnet",
                    emoji: "🌍",
                    level: 2,
                    description: "Earth behaves like a giant bar magnet because its liquid outer core (mostly iron and nickel) is in constant convective motion, generating electric currents through the dynamo mechanism. These currents produce Earth's magnetic field (geomagnetic field), which extends from the core through the crust into space, forming the magnetosphere.",
                    fact: "Earth's north geographic pole is actually a magnetic SOUTH pole — this is why the north end of a compass needle (a magnetic north pole) is ATTRACTED to it. The confusion between geographic and magnetic north is one of the most common misconceptions in physics!",
                    keywords: ["Geomagnetic", "Dynamo", "Core", "Magnetosphere"],
                    children: [
                        { id: "tb3-protection", label: "Magnetosphere\nProtection", emoji: "🛡️", level: 3, description: "Earth's magnetosphere deflects the solar wind (stream of charged particles from the Sun) around our planet. Without this magnetic shield, the solar wind would slowly strip away Earth's atmosphere — exactly what happened to Mars 4 billion years ago. The aurora (Northern/Southern Lights) are caused by solar particles that slip through the magnetosphere at the poles.", fact: "During severe solar storms (geomagnetic storms), Earth's magnetosphere is deformed and compressed — the 1989 Quebec blackout event was caused by a solar storm so powerful it induced currents in Quebec's power grid transformers, causing a complete blackout for 9 hours and affecting 6 million people!" }
                    ]
                }
            ]
        }
    ]
};
