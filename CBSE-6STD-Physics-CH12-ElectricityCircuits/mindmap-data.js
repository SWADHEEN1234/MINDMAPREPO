// ============================================================
// MIND MAP DATA — CBSE Grade 6 Biology Chapter 12
// "Electricity and Circuits"
// ============================================================

const MINDMAP_DATA = {
    id: "root",
    label: "ELECTRICITY\n& CIRCUITS",
    emoji: "⚡",
    level: 0,
    description: "Chapter 12 introduces the fascinating world of electricity — one of the most transformative forms of energy discovered by humankind. We learn about electric cells, how circuits are constructed, the difference between conductors and insulators, and how simple switches control the flow of electricity. Electricity powers virtually every aspect of modern life.",
    fact: "Lightning is a massive natural electrical discharge — a single lightning bolt contains about 1 billion volts of electricity and can heat the surrounding air to 30,000°C, which is 5 times hotter than the surface of the Sun!",
    keywords: ["Circuit", "Cell", "Conductor", "Switch"],
    children: [
        {
            id: "pb1-electric",
            label: "Electric Cells\n& Current",
            emoji: "🔋",
            level: 1,
            branchIndex: 1,
            description: "An electric cell (or battery) is a device that converts stored chemical energy into electrical energy. It has two terminals — a positive terminal (+) and a negative terminal (−). When connected by a wire, electrons flow from the negative to the positive terminal, creating an electric current. Batteries are just multiple electric cells connected together.",
            fact: "Alessandro Volta invented the first electric battery in 1800 using alternating discs of zinc and copper separated by cloth soaked in saltwater — he called it the 'voltaic pile' and the unit of voltage (volt) is named after him!",
            keywords: ["Cell", "Battery", "Terminals", "Current"],
            quiz: {
                question: "In a simple electric circuit, through which component does electric current flow?",
                options: ["Only through the switch", "Through the conductor connecting all components", "Only through the bulb", "Through air gaps in the circuit"],
                correct: 1,
                explanation: "Electric current flows through the conductor (wire) that connects all parts of the circuit — from the battery through the switch, bulb, and back to the battery. Current cannot flow through breaks (gaps) in the circuit or through air, which is why open switches stop the current."
            },
            children: [
                {
                    id: "sb1-cell",
                    label: "How a Cell\nWorks",
                    emoji: "🔋",
                    level: 2,
                    description: "Inside an electric cell, a chemical reaction produces a difference in charge between the two terminals — positive has a deficit of electrons, negative has an excess. When connected in a circuit, this charge difference (voltage) drives electrons from negative to positive through the external wire. When the chemicals are used up, the cell goes 'flat' and must be replaced or recharged.",
                    fact: "The first rechargeable lead-acid battery — the same basic design used in modern car batteries — was invented by French physicist Gaston Planté in 1859 and is still manufactured in essentially the same way over 165 years later!",
                    keywords: ["Chemical Energy", "Voltage", "Terminals"],
                    children: [
                        { id: "tb1-celltype", label: "Types of Cells", emoji: "🟡", level: 3, description: "Primary cells (non-rechargeable): once the chemicals are used up, they must be discarded (torch cells, AA size batteries). Secondary cells (rechargeable): can be recharged by passing current through them in the reverse direction, restoring the chemicals (car batteries, phone lithium-ion batteries, rechargeable AA cells).", fact: "Modern lithium-ion batteries (used in phones and electric cars) contain lithium ions that travel back and forth between two electrodes during charging and discharging — a lithium-ion battery can be recharged over 500-1,000 times before noticeable capacity loss!" },
                        { id: "tb1-cellarrange", label: "Cells in Series", emoji: "🔋🔋", level: 3, description: "When cells are connected in series (positive terminal of one touching negative terminal of next), their voltages add up. Two 1.5V cells in series give 3V. This is how multi-cell torches and remote controls work. Connecting cells in parallel (both positives together) gives the same voltage but longer life.", fact: "The Tesla Model S electric car battery pack uses 7,104 individual lithium-ion cells arranged in a complex series and parallel configuration to deliver both high voltage AND long range from a single charge!" }
                    ]
                },
                {
                    id: "sb1-current",
                    label: "Electric Current\n& Voltage",
                    emoji: "⚡",
                    level: 2,
                    description: "Electric current is the flow of electric charge (electrons) through a conductor. It is measured in Amperes (A). Voltage (or potential difference) is the 'electric pressure' that drives current through a circuit, measured in Volts (V). A higher voltage pushes more current through the same wire, just as higher water pressure pushes more water through a pipe.",
                    fact: "The electric eel can generate shocks of up to 860 volts — enough to stun a horse! It uses special cells called electrocytes that stack up like batteries to produce this remarkable bio-electric pulse for hunting and self-defence!",
                    keywords: ["Ampere", "Volt", "Flow", "Pressure"],
                    children: [
                        { id: "tb1-household", label: "Household\nElectricity", emoji: "🏠", level: 3, description: "Household mains electricity in India is 220-240 V AC (alternating current) at 50 Hz. This is strong enough to cause fatal electrocution on contact — which is why safety measures like insulation, earthing, fuses, and circuit breakers are essential. Batteries produce safer DC (direct current) at much lower voltages.", fact: "The human body can feel electric current as low as 1 milliampere (0.001 A) and a current of just 0.1 A (100 mA) through the heart can be fatal — making even ordinary household sockets life-threatening if touched!" }
                    ]
                }
            ]
        },
        {
            id: "pb2-circuits",
            label: "Simple Electric\nCircuits",
            emoji: "🔌",
            level: 1,
            branchIndex: 2,
            description: "An electric circuit is a closed path through which electric current flows. For current to flow, the circuit must be complete (no breaks). A simple circuit consists of: an electric cell (energy source), connecting wires (conductors), a load (bulb, motor, buzzer), and usually a switch to open/close the circuit. A circuit diagram uses symbols to represent each component.",
            fact: "The first practical electric light bulb circuit was demonstrated by Thomas Edison in 1879 using a carbonised bamboo filament — he tested over 6,000 different materials before finding one that worked reliably!",
            keywords: ["Complete Circuit", "Open Circuit", "Components"],
            quiz: {
                question: "What happens to a bulb in a circuit when the switch is opened (turned off)?",
                options: ["The bulb glows brighter", "The bulb continues to glow normally", "The bulb goes out because the circuit is broken", "The bulb flickers"],
                correct: 2,
                explanation: "When a switch is opened, it creates a gap (break) in the circuit. Electric current cannot flow through a gap (air is an insulator), so current stops flowing completely and the bulb goes out. A closed switch completes the circuit and allows current to flow, making the bulb glow."
            },
            children: [
                {
                    id: "sb2-simple",
                    label: "Building a\nSimple Circuit",
                    emoji: "💡",
                    level: 2,
                    description: "A simple circuit requires: (1) An energy source (one or more cells). (2) Conducting wires connecting all components in a complete loop. (3) A load — a component that uses the electrical energy (bulb converts it to light+heat). (4) A switch — a device that opens or closes the circuit. All four must be properly connected for the circuit to work.",
                    fact: "The entire power grid of India — generating over 400 GW and supplying electricity to 1.4 billion people — operates on the same fundamental principle as the simple battery-bulb-wire circuit you connect in class!",
                    keywords: ["Energy Source", "Load", "Switch", "Wire"],
                    children: [
                        { id: "tb2-openclosed", label: "Open vs Closed\nCircuit", emoji: "🔓", level: 3, description: "A closed circuit is a complete, unbroken loop — current flows and the bulb glows. An open circuit has a break somewhere (like an open switch, broken wire, or loose connection) — no current flows and the bulb stays off. Most electrical faults in homes are simply open circuits caused by a broken connection.", fact: "Fuses and circuit breakers are intentional 'automatic open-circuit' safety devices — when current exceeds a safe level, they deliberately break the circuit to prevent overheating and fire, protecting your home's wiring!" },
                        { id: "tb2-diagram", label: "Circuit Diagrams\n& Symbols", emoji: "📋", level: 3, description: "Engineers and scientists use standardised circuit diagrams with symbols to represent components: a long-short line pair = cell, a long line = longer positive terminal; crossed circle = bulb; rectangle = resistor; lines with a break = switch; parallel lines = battery. Diagrams allow circuits to be shared and reproduced worldwide without language barriers.", fact: "A modern smartphone's main circuit board (PCB) contains over 10 billion transistors etched onto a chip the size of a thumbnail — the circuit diagram for just this one chip, if printed, would fill thousands of engineering textbooks!" }
                    ]
                },
                {
                    id: "sb2-series",
                    label: "Series vs Parallel\nCircuits",
                    emoji: "🔀",
                    level: 2,
                    description: "In a series circuit, components are connected one after another in a single loop. If one component fails (one bulb breaks), the entire circuit breaks and all components go off. In a parallel circuit, components are connected side by side in separate branches. If one branch fails, other branches continue to work — this is why home wiring uses parallel circuits.",
                    fact: "Old-style Christmas light strings used series circuits — if one bulb blew, the entire string went dark, and you had to test each bulb one-by-one. Modern LED Christmas lights use parallel circuits so a single failed bulb doesn't affect the rest!",
                    keywords: ["Series", "Parallel", "Bulbs", "Branches"],
                    children: [
                        { id: "tb2-homewiring", label: "Home Wiring\n(Parallel)", emoji: "🏡", level: 3, description: "All home electrical appliances (lights, fans, TV, AC) are connected in parallel to the main power supply. This means: each appliance receives the full mains voltage (220V), switching off one appliance doesn't affect others, different appliances can draw different currents independently, and each has its own independently controllable switch.", fact: "A typical Indian household electrical circuit is designed to safely handle 10-15 amperes — if too many high-power appliances (like ACs, geysers, irons) run simultaneously, the total current exceeds this and the circuit breaker trips to protect the wiring!" }
                    ]
                }
            ]
        },
        {
            id: "pb3-conductors",
            label: "Conductors,\nInsulators & Safety",
            emoji: "🛡️",
            level: 1,
            branchIndex: 3,
            description: "Electrical conductors are materials that allow electric current to flow through them easily. Insulators resist current flow. This property is critical in designing safe electrical devices — conductors carry the current to where it's needed, while insulators prevent accidental electrocution and short circuits. Electricity safety is a life-critical knowledge area.",
            fact: "Silver is technically the best electrical conductor of all metals — but copper is used for wiring worldwide because it conducts electricity nearly as well as silver while being over 70 times cheaper per kilogram!",
            keywords: ["Conductor", "Insulator", "Safety", "Short Circuit"],
            quiz: {
                question: "Why are electrical wires covered with a layer of plastic or rubber?",
                options: ["To make them more colourful", "To prevent the wire from rusting", "Because plastic/rubber are insulators that prevent accidental electrocution", "To make the wires stronger and thicker"],
                correct: 2,
                explanation: "The plastic or rubber coating on wires acts as an insulator — it prevents electricity from flowing outside the wire where it could cause a short circuit, start a fire, or electrocute someone who touches the wire. The metal core inside carries current, while the coating keeps it safely confined."
            },
            children: [
                {
                    id: "sb3-conductors",
                    label: "Electrical\nConductors",
                    emoji: "🔌",
                    level: 2,
                    description: "Good electrical conductors have loosely bound outer electrons that can move freely when a voltage is applied. Metals are the best conductors: copper (used in wires), aluminium (used in power lines), silver (highest conductivity, used in electronics), and gold (used in computer connectors for its non-corrosive conductivity). Graphite (non-metal) and salt water (electrolyte) also conduct electricity.",
                    fact: "The human body can conduct electricity: your blood (salt water) and muscles are reasonable conductors — which is why touching a live wire can cause current to flow through your body, often with fatal consequences!",
                    keywords: ["Copper", "Metal", "Free Electrons"],
                    children: [
                        { id: "tb3-testing", label: "Testing for\nConductors", emoji: "🔬", level: 3, description: "A simple conductor-insulator tester can be made with a battery, bulb, and two free wire ends. Touch the two wire ends to an object: if the bulb glows, the object conducts electricity (conductor); if the bulb stays off, it's an insulator. This tester can identify conductors among materials like coins, pencil lead, water, wood, and plastic.", fact: "Pencil lead (graphite) is the only common non-metal that conducts electricity well enough to light a bulb in a simple testing circuit — graphite's layered structure has free electrons between layers that move easily when voltage is applied!" }
                    ]
                },
                {
                    id: "sb3-safety",
                    label: "Electrical\nSafety",
                    emoji: "⚠️",
                    level: 2,
                    description: "Electrical safety is critical for preventing shocks, fires, and electrocution. Key safety rules: never touch naked/bare wires, never touch switches or plugs with wet hands (water conducts electricity), always use properly insulated wires, never overload sockets by plugging in too many devices, and always use an electrician for repairs — never attempt to repair live circuits yourself.",
                    fact: "Approximately 1,000 people die from electrocution in India every year — the majority from one cause: touching live wires or electrical equipment with wet hands or bare feet, both of which are completely preventable!",
                    keywords: ["Shock", "Wet Hands", "Insulation", "Earthing"],
                    children: [
                        { id: "tb3-safetyrules", label: "Safety Rules", emoji: "🚫", level: 3, description: "Essential electrical safety rules: (1) Never use electrical appliances with wet hands or near water. (2) Don't insert fingers or objects into electrical sockets. (3) Don't touch hanging or fallen power lines. (4) Always switch off the main switch before any electrical repair. (5) Use earthed (three-pin) connectors for high-power appliances. (6) Replace frayed or cracked wires immediately.", fact: "Rubber-soled shoes can provide significant protection from electrical shock because rubber is an excellent insulator — yet many electrical accidents still happen because people forget that current can arc (jump) through air and moist skin without any direct contact!" }
                    ]
                }
            ]
        }
    ]
};
