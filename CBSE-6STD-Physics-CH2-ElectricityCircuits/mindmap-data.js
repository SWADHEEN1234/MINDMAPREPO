// ============================================================
// MIND MAP DATA — CBSE Grade 6 Physics Chapter 2
// "Electricity and Circuits"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "ELECTRICITY\n& CIRCUITS",
    emoji: "⚡",
    level: 0,
    description: "Chapter 2 of Grade 6 Physics explores electric circuits in depth. We build on basic concepts of current and voltage to study how circuits are constructed, how conductors and insulators behave, how switches control circuits, and how to design practical circuit experiments. Electricity is one of the most useful and powerful forms of energy that humans have learned to harness.",
    fact: "Global electricity generation reached 29,000 TWh in 2023 — enough energy that if converted to mechanical work, it could lift the entire Himalayan mountain range off the Earth's surface and place it back down again every single day!",
    keywords: ["Circuit", "Conductor", "Insulator", "Switch", "Battery"],
    children: [
        {
            id: "pb1-components",
            label: "Circuit\nComponents",
            emoji: "🔋",
            level: 1,
            branchIndex: 1,
            description: "Every functional electric circuit must have four essential components: an energy source (cell/battery), conductors (wires to connect components), a load (device that uses electric energy such as a bulb, motor, or buzzer), and usually a switch. Understanding what each component does and how it connects is the foundation of all electrical engineering.",
            fact: "The first practical electric circuit was demonstrated on September 4, 1882, when Thomas Edison switched on his Pearl Street Station in New York — illuminating 400 electric lamps across 82 homes and businesses, marking the birth of the modern electrical power industry!",
            keywords: ["Cell", "Bulb", "Switch", "Wire"],
            quiz: {
                question: "Which component in a circuit is responsible for converting electrical energy into light?",
                options: ["The battery", "The switch", "The wire", "The bulb/LED"],
                correct: 3,
                explanation: "A bulb or LED is the 'load' in a circuit — it converts electrical energy into light (and some heat). The battery is the energy source, the switch controls current flow, and the wires are conductors that connect everything together."
            },
            children: [
                {
                    id: "sb1-cell",
                    label: "The Electric\nCell",
                    emoji: "🔋",
                    level: 2,
                    description: "An electric cell converts stored chemical energy into electrical energy. It has a positive terminal (+) marked with a raised cap or '+' sign and a negative terminal (−) marked with a flat base or '−' sign. When connected in a circuit, the cell maintains a potential difference that drives electrons from the negative to the positive terminal through the external conductor.",
                    fact: "The Baghdad Battery, discovered in 1936 in Iraq, is possibly a 2,000-year-old electric cell made from a clay pot, copper cylinder, and iron rod — if true, ancient Parthians may have used electricity for gold plating 1,800 years before Volta's battery!",
                    keywords: ["Chemical Energy", "Terminals", "Voltage"],
                    children: [
                        { id: "tb1-battery", label: "From Cell to\nBattery", emoji: "🔋🔋", level: 3, description: "A single cell (e.g., AA, 1.5V) provides 1.5 volts. To get higher voltage, cells are connected in series — their voltages add. A 9V battery contains 6 cells of 1.5V each connected in series inside. The word 'battery' originally meant a series of cells.", fact: "A fully charged Tesla Model S Long Range battery pack stores 100 kWh of energy — equivalent to burning about 10 litres of petrol, yet it powers a 2-tonne electric car over 600 km with zero local emissions!" }
                    ]
                },
                {
                    id: "sb1-switch",
                    label: "Switches &\nControl",
                    emoji: "🔘",
                    level: 2,
                    description: "A switch is a component that can open (break) or close (complete) a circuit. When a switch is open, there is a physical gap in the circuit — current cannot flow and the load (bulb) is off. When a switch is closed, the circuit is complete — current flows and the load operates. Switches give us safe, convenient control over electrical devices.",
                    fact: "The world's smallest switch is a 'molecular switch' — a single molecule that can be toggled between two electrical states by a tiny voltage pulse. IBM used molecular switches to store data at densities 1,000 times greater than conventional chips!",
                    keywords: ["Open Circuit", "Closed Circuit", "Break"],
                    children: [
                        { id: "tb1-switchtypes", label: "Types of\nSwitches", emoji: "💡", level: 3, description: "Common switch types: toggle switch (flip up/down — used in home light switches), push-button switch (press to make or break contact), relay switch (an electromagnet opens/closes a switch remotely), dimmer switch (varies resistance to control bulb brightness), and reed switch (closed by a nearby magnetic field — used in alarms and phone cases).", fact: "The touch screens on smartphones work as millions of tiny capacitive switches — your finger's electrical charge changes the capacitance at each touch point, and the phone's processor detects which of 10+ million micro-sensors were activated!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-conductors",
            label: "Conductors\n& Insulators",
            emoji: "🔌",
            level: 1,
            branchIndex: 2,
            description: "A conductor is a material that allows electric current to flow through it with low resistance. An insulator is a material that strongly resists the flow of current. Both are essential in electrical systems — conductors carry current where it is needed, while insulators prevent current from flowing where it could be dangerous.",
            fact: "Superconductors are materials that conduct electricity with ZERO resistance — but only at extremely low temperatures near absolute zero (−273°C). Superconducting electromagnets in MRI machines allow a patient's scan to use 1,000 times less electricity than conventional magnets!",
            keywords: ["Conductor", "Insulator", "Resistance"],
            quiz: {
                question: "Which of these is the BEST conductor of electricity?",
                options: ["Plastic", "Rubber", "Silver", "Wood"],
                correct: 2,
                explanation: "Silver is technically the best electrical conductor of all known materials, followed closely by copper. However, copper is used in most electrical wiring because it is far cheaper while still having excellent conductivity. Plastic, rubber, and wood are insulators."
            },
            children: [
                {
                    id: "sb2-goodcond",
                    label: "Good Conductors",
                    emoji: "🥈",
                    level: 2,
                    description: "Good conductors include metals (copper, silver, gold, aluminium, iron) and some non-metals (graphite, carbon, salt water, the human body). Their conductivity comes from free-moving electrons (in metals) or ions (in solutions). Copper is the most widely used conductor because it strikes the best balance of high conductivity and low cost.",
                    fact: "The global copper wiring in all electrical devices and power grids weighs approximately 900 million tonnes — if all that copper wire were stretched into a single strand, it would wrap around the Earth's equator over 2.25 billion times!",
                    keywords: ["Copper", "Silver", "Graphite", "Ions"],
                    children: [
                        { id: "tb2-condtest", label: "Conductor Tester", emoji: "🔬", level: 3, description: "A simple conductor-insulator tester uses a cell, a bulb, and two free wire ends. Touch the ends to any material: glowing bulb = conductor, no glow = insulator. Test materials like: copper coin (conductor), rubber eraser (insulator), pencil lead/graphite (conductor), plastic ruler (insulator), salt water (conductor), distilled water (insulator).", fact: "Pure distilled water is actually an insulator — it's the dissolved minerals (ions) in tap water, seawater, and body fluids that conduct electricity. This is why drying your hands properly before touching switches is important!" }
                    ]
                },
                {
                    id: "sb2-insulators",
                    label: "Insulators &\nSafety Role",
                    emoji: "🛡️",
                    level: 2,
                    description: "Good insulators include rubber, plastic, glass, wood, dry air, and pure water. They have no free-moving electrons — all electrons are tightly bound to atoms. Insulators are applied to electrical wires (rubber/plastic coating), sockets (plastic casing), and high-voltage power line connectors (ceramic/glass insulators) to prevent dangerous current leakage.",
                    fact: "Power transmission lines across India's countryside use large ceramic or glass disc insulators — each disc can withstand 12,000 volts, and multiple discs are stacked in a string to insulate 220,000-volt or higher transmission lines from tower structures!",
                    keywords: ["Rubber", "Glass", "Ceramic", "Coating"],
                    children: [
                        { id: "tb2-insapps", label: "Application of\nInsulators", emoji: "🏭", level: 3, description: "Key insulator applications: rubber gloves for electricians (protect from shock), plastic handles on tools (safe grip), porcelain/ceramic plug sockets (safe housing), teflon/plastic-coated cooking pans (heat-resistant non-conductor), glass/ceramic high-voltage lines (prevent current leakage to towers), and air gaps in switchgear (natural insulator in high-voltage equipment).", fact: "Teflon (PTFE) — the non-stick coating on cookware — is also an extraordinary electrical insulator used in high-frequency cable insulation inside satellites and spacecraft because it can withstand both extreme heat and extreme cold while remaining a perfect insulator!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-practical",
            label: "Practical\nCircuit Work",
            emoji: "🔬",
            level: 1,
            branchIndex: 3,
            description: "Practical circuit work builds hands-on understanding of electricity. Setting up and troubleshooting simple circuits develops problem-solving skills and logical thinking. Real-world troubleshooting — finding out why a circuit doesn't work — is a core skill for anyone from home DIY enthusiasts to professional electrical engineers.",
            fact: "The space shuttle Challenger disaster in 1986 was traced to a single failed O-ring seal in a rocket booster — a component that cost less than a dollar — demonstrating how one faulty component in any system (electrical or mechanical) can cause catastrophic failure!",
            keywords: ["Troubleshoot", "Short Circuit", "Fuse"],
            quiz: {
                question: "Why does a fuse protect electrical circuits?",
                options: ["It stores electricity for emergencies", "It melts and breaks the circuit when current is too high, preventing fires", "It increases the circuit's voltage", "It converts AC to DC electricity"],
                correct: 1,
                explanation: "A fuse contains a thin wire of low-melting-point metal. When current exceeds the safe limit, the fuse wire heats up and melts, breaking the circuit and stopping the dangerous excessive current flow before it can overheat the main wiring and cause a fire."
            },
            children: [
                {
                    id: "sb3-troubleshoot",
                    label: "Troubleshooting\nCircuits",
                    emoji: "🔧",
                    level: 2,
                    description: "When a circuit doesn't work, check systematically: (1) Is the battery charged? Replace if flat. (2) Is the bulb working? Test in a known good circuit. (3) Are all connections tight? Loose connections create very high resistance. (4) Is there a break in any wire? (5) Is the switch closed? Systematic checking identifies the failure point efficiently.",
                    fact: "NASA engineers spend months debugging simulated spacecraft electrical failures before launch — their 'fault tree analysis' technique, invented for the Apollo programme in the 1960s, is now used worldwide in nuclear power, aviation, and medical device safety analysis!",
                    keywords: ["Fault Finding", "Connection", "Open Circuit"],
                    children: [
                        { id: "tb3-fuse", label: "Fuses & Circuit\nBreakers", emoji: "⚠️", level: 3, description: "A fuse is a safety device — a thin wire of specific melting-point alloy (tin-lead) that carries current. If current exceeds the fuse rating, it heats and melts, breaking the circuit before the wiring catches fire. Modern homes use resettable circuit breakers instead — electromagnetic switches that trip when overloaded and can be manually reset.", fact: "The world's first automatic circuit protection device — a predecessor to the modern circuit breaker — was installed in Thomas Edison's Pearl Street power station in 1882. He called it the 'safety catch' and it saved his generators repeatedly from overload damage!" }
                    ]
                },
                {
                    id: "sb3-shortcircuit",
                    label: "Short Circuits\n& Overloading",
                    emoji: "🔥",
                    level: 2,
                    description: "A short circuit occurs when current finds an unintended low-resistance path between two terminals of a battery or power supply — bypassing the intended load. This can cause an enormous current to flow, rapidly overheating wires and potentially starting fires. Overloading occurs when too many appliances draw more current than the circuit is designed to handle safely.",
                    fact: "Approximately 25,000 home fires are caused by electrical faults (short circuits and overloaded wiring) every year in India — making it one of the top three causes of house fires, all of which are entirely preventable with proper electrical maintenance!",
                    keywords: ["Overload", "Heating", "Fire", "Resistance"],
                    children: [
                        { id: "tb3-prevention", label: "Prevention &\nSafety", emoji: "🛡️", level: 3, description: "Prevent short circuits and overloads by: (1) Never connecting too many appliances to one socket (socket overloading). (2) Replace frayed wires immediately. (3) Install correctly rated fuses (5A for lights, 13A for heavy appliances). (4) Never use aluminium foil or thick copper wire as 'fuses' — they don't melt and fail to protect. (5) Use MCBs (Miniature Circuit Breakers) in modern homes.", fact: "In India, it is compulsory by law (as per IE Rules 1956) for all residential buildings to have a properly earthed electrical system with fuses or MCBs — yet millions of homes, especially in older urban and rural areas, still use dangerously under-protected wiring!" }
                    ]
                }
            ]
        }
    ]
};
