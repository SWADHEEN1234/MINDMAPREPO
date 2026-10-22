// ============================================================
// MIND MAP DATA — Equilibrium (Test: Max Main Nodes + Level 2 / Level 3)
// ============================================================

// Experimental filler branches used to stress-test deep / wide layouts.
// makeTestNodes("node2", 5, 3) -> Node 2.1 … Node 2.5, each with 3 level-3 children.
function makeTestNodes(parentId, count, childCount, deepCount) {
    const prefix = parentId.replace("node", "Node ");
    const nodes = [];
    for (let i = 1; i <= count; i++) {
        const id = `${parentId}-${i}`;
        const kids = [];
        const grandCount = (deepCount === undefined || i <= deepCount) ? childCount : 0;
        for (let j = 1; j <= grandCount; j++) {
            kids.push({ id: `${id}-${j}`, label: `${prefix}.${i}.${j}`, emoji: "🔹", level: 3, description: "----", fact: "----", keywords: ["----"], children: [] });
        }
        nodes.push({ id, label: `${prefix}.${i}`, emoji: "📁", level: 2, description: "----", fact: "----", keywords: ["----"], children: kids });
    }
    return nodes;
}

const MINDMAP_DATA = {
    id: "root",
    label: "EQUILIBRIUM",
    emoji: "⚖️",
    level: 0,
    description: "----",
    fact: "----",
    keywords: ["Equilibrium"],
    children: [
        {
            id: "ch1", label: "Condition Of Precipitation", emoji: "🧪", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch1-1", label: "Ionic Product (Qsp)", emoji: "✖️", level: 2, description: "Product of the molar concentrations of the ions in solution, each raised to its stoichiometric coefficient, at any instant.", keywords: ["Ionic product", "Qsp"], children: [] },
                { id: "ch1-2", label: "Qsp > Ksp → Precipitation", emoji: "⬇️", level: 2, description: "The solution is supersaturated, so the excess ions combine and the salt precipitates out.", keywords: ["Supersaturated"], children: [] },
                { id: "ch1-3", label: "Qsp = Ksp → Saturated", emoji: "🟰", level: 2, description: "The solution is saturated and in equilibrium with the undissolved solid.", keywords: ["Saturated"], children: [] },
                { id: "ch1-4", label: "Qsp < Ksp → Unsaturated", emoji: "⬆️", level: 2, description: "More of the solid can dissolve; no precipitate forms.", keywords: ["Unsaturated"], children: [] }
            ]
        },
        {
            id: "ch2", label: "Types Of Chemical Equilibrium", emoji: "🔬", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                {
                    id: "ch2-1", label: "Homogeneous Equilibrium", emoji: "🟰", level: 2, description: "All reactants and products are in the same phase.", keywords: ["Single phase"],
                    children: [
                        { id: "ch2-1-1", label: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)", emoji: "💨", level: 3, description: "Gas-phase homogeneous equilibrium (Haber process).", keywords: ["Gas phase"], children: [] },
                        { id: "ch2-1-2", label: "Ester Hydrolysis In Solution", emoji: "🧴", level: 3, description: "CH₃COOC₂H₅(aq) + H₂O(l) ⇌ CH₃COOH(aq) + C₂H₅OH(aq) — a liquid-phase example.", keywords: ["Solution phase"], children: [] }
                    ]
                },
                {
                    id: "ch2-2", label: "Heterogeneous Equilibrium", emoji: "🔀", level: 2, description: "Reactants and products exist in more than one phase.", keywords: ["Multiple phases"],
                    children: [
                        { id: "ch2-2-1", label: "CaCO₃(s) ⇌ CaO(s) + CO₂(g)", emoji: "🪨", level: 3, description: "Kp = p(CO₂) — the solids do not appear in the expression.", keywords: ["Kp = pCO₂"], children: [] },
                        { id: "ch2-2-2", label: "Pure Solids & Liquids Omitted", emoji: "🚫", level: 3, description: "Their active mass is constant (taken as 1), so they are left out of K.", keywords: ["Active mass = 1"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch3", label: "Relationship Between K, Q And G", emoji: "📐", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch3-1", label: "ΔG = ΔG° + RT ln Q", emoji: "🧮", level: 2, description: "Gibbs energy change of a reaction mixture at any composition.", keywords: ["Reaction quotient"], children: [] },
                { id: "ch3-2", label: "ΔG° = −RT ln K", emoji: "📏", level: 2, description: "At equilibrium ΔG = 0 and Q = K, giving this link between standard Gibbs energy and K.", keywords: ["Standard Gibbs energy"], children: [] },
                {
                    id: "ch3-3", label: "Predicting Spontaneity", emoji: "🧭", level: 2, description: "The sign of ΔG tells which direction is spontaneous.", keywords: ["Spontaneity"],
                    children: [
                        { id: "ch3-3-1", label: "ΔG < 0 → Forward Spontaneous", emoji: "➡️", level: 3, description: "Q < K; reaction proceeds forward.", keywords: ["Q < K"], children: [] },
                        { id: "ch3-3-2", label: "ΔG > 0 → Reverse Spontaneous", emoji: "⬅️", level: 3, description: "Q > K; reaction proceeds backward.", keywords: ["Q > K"], children: [] },
                        { id: "ch3-3-3", label: "ΔG = 0 → At Equilibrium", emoji: "⚖️", level: 3, description: "Q = K; no net change.", keywords: ["Q = K"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch4", label: "Introduction", emoji: "📖", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch4-1", label: "Dynamic Nature", emoji: "🔄", level: 2, description: "At equilibrium the forward and reverse processes continue at equal rates.", keywords: ["Dynamic"], children: [] },
                { id: "ch4-2", label: "Constant Measurable Properties", emoji: "📊", level: 2, description: "Concentration, pressure, colour, etc. stop changing once equilibrium is reached.", keywords: ["Observable properties"], children: [] },
                { id: "ch4-3", label: "Closed System Required", emoji: "📦", level: 2, description: "Equilibrium can only be established when nothing enters or leaves the system.", keywords: ["Closed system"], children: [] }
            ]
        },
        {
            id: "ch5", label: "Predicting The Direction\nOf The Reaction", emoji: "🧭", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch5-1", label: "Qc < Kc → Forward", emoji: "➡️", level: 2, description: "Too few products; the reaction moves towards products.", keywords: ["Qc < Kc"], children: [] },
                { id: "ch5-2", label: "Qc > Kc → Backward", emoji: "⬅️", level: 2, description: "Too many products; the reaction moves towards reactants.", keywords: ["Qc > Kc"], children: [] },
                { id: "ch5-3", label: "Qc = Kc → Equilibrium", emoji: "⚖️", level: 2, description: "The mixture is already at equilibrium.", keywords: ["Qc = Kc"], children: [] }
            ]
        },
        {
            id: "ch6", label: "pH And pOH Range", emoji: "📊", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch6-1", label: "pH + pOH = 14 (298 K)", emoji: "➕", level: 2, description: "Follows from Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 298 K.", keywords: ["pKw"], children: [] },
                { id: "ch6-2", label: "Acidic: pH < 7", emoji: "🍋", level: 2, description: "[H₃O⁺] > 10⁻⁷ M at 298 K.", keywords: ["Acidic"], children: [] },
                { id: "ch6-3", label: "Neutral: pH = 7", emoji: "💧", level: 2, description: "[H₃O⁺] = [OH⁻] = 10⁻⁷ M at 298 K.", keywords: ["Neutral"], children: [] },
                { id: "ch6-4", label: "Basic: pH > 7", emoji: "🧼", level: 2, description: "[H₃O⁺] < 10⁻⁷ M at 298 K.", keywords: ["Basic"], children: [] }
            ]
        },
        { id: "ch7", label: "Test Of Cationic Radicals", emoji: "🔎", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch8", label: "Equilibrium In\nPhysical Processes", emoji: "⚗️", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch8-1", label: "Solid ⇌ Liquid", emoji: "🧊", level: 2, description: "Ice and water coexist at 273 K and 1 atm; rate of melting = rate of freezing.", keywords: ["Melting point"], children: [] },
                { id: "ch8-2", label: "Liquid ⇌ Vapour", emoji: "🌫️", level: 2, description: "In a closed vessel, rate of evaporation = rate of condensation; vapour pressure becomes constant.", keywords: ["Vapour pressure"], children: [] },
                { id: "ch8-3", label: "Solid ⇌ Vapour", emoji: "♨️", level: 2, description: "Sublimation equilibrium, e.g. iodine or camphor in a closed vessel.", keywords: ["Sublimation"], children: [] },
                {
                    id: "ch8-4", label: "Dissolution In Liquids", emoji: "🫧", level: 2, description: "Equilibrium between undissolved and dissolved solute.", keywords: ["Solubility"],
                    children: [
                        { id: "ch8-4-1", label: "Solids In Liquids", emoji: "🧂", level: 3, description: "A saturated solution is in dynamic equilibrium with excess solid.", keywords: ["Saturated solution"], children: [] },
                        { id: "ch8-4-2", label: "Gases In Liquids — Henry's Law", emoji: "🥤", level: 3, description: "Mass of gas dissolved is proportional to its pressure above the liquid (e.g. CO₂ in soda water).", keywords: ["Henry's law"], children: [] }
                    ]
                }
            ]
        },
        { id: "ch9", label: "Solubility Equilibria Of\nSparingly Soluble Salts", emoji: "🧂", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch10", label: "Relation Between\nKp And Kc", emoji: "🔗", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch10-1", label: "Kp = Kc(RT)^Δn", emoji: "🧮", level: 2, description: "Δn = moles of gaseous products − moles of gaseous reactants.", keywords: ["Δn"], children: [] },
                { id: "ch10-2", label: "Δn = 0 → Kp = Kc", emoji: "🟰", level: 2, description: "e.g. H₂(g) + I₂(g) ⇌ 2HI(g).", keywords: ["Equal moles"], children: [] },
                { id: "ch10-3", label: "R = 0.0831 bar L mol⁻¹ K⁻¹", emoji: "📏", level: 2, description: "Use this value of R when pressures are in bar.", keywords: ["Gas constant"], children: [] }
            ]
        },
        {
            id: "ch11", label: "Properties Of Water", emoji: "💧", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch11-1", label: "Amphoteric Nature", emoji: "🔁", level: 2, description: "Water can act both as a Brønsted acid and as a Brønsted base.", keywords: ["Amphoteric"], children: [] },
                { id: "ch11-2", label: "Self-Ionisation", emoji: "⚡", level: 2, description: "H₂O + H₂O ⇌ H₃O⁺ + OH⁻", keywords: ["Autoprotolysis"], children: [] }
            ]
        },
        { id: "ch12", label: "Di- And Polybasic Acids\nAnd Di And Polyacidic Bases", emoji: "⚛️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch13", label: "Applications Of\nEquilibrium Constants", emoji: "📋", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch13-1", label: "Predict Extent Of Reaction", emoji: "📊", level: 2, description: "The magnitude of K shows how far a reaction goes.", keywords: ["Extent"], children: [] },
                { id: "ch13-2", label: "Predict Direction Of Reaction", emoji: "🧭", level: 2, description: "Compare Q with K.", keywords: ["Direction"], children: [] },
                { id: "ch13-3", label: "Calculate Equilibrium Concentrations", emoji: "🧮", level: 2, description: "Use K with an ICE table to find equilibrium amounts.", keywords: ["ICE table"], children: [] }
            ]
        },
        { id: "ch14", label: "Equilibrium Constant\nIn Gaseous System", emoji: "💨", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch15", label: "Common Ion Effect In\nIonization Acids And Bases", emoji: "🔄", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch16", label: "Degree Of Dissociation\nAnd Ionisation", emoji: "📈", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch16-1", label: "α = Dissociated ÷ Total", emoji: "➗", level: 2, description: "Fraction of the total molecules that dissociate into ions.", keywords: ["α"], children: [] },
                {
                    id: "ch16-2", label: "Ostwald's Dilution Law", emoji: "📜", level: 2, description: "For a weak electrolyte, Ka = Cα² / (1 − α).", keywords: ["Ostwald"],
                    children: [
                        { id: "ch16-2-1", label: "α ≈ √(Ka / C)", emoji: "🧮", level: 3, description: "Valid when α is very small (1 − α ≈ 1).", keywords: ["Weak electrolyte"], children: [] },
                        { id: "ch16-2-2", label: "α Increases On Dilution", emoji: "💧", level: 3, description: "As C falls, α rises.", keywords: ["Dilution"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch17", label: "Hydrolysis Of Salts And\nThe pH Of Their Solutions", emoji: "🌊", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch17-1", label: "Strong Acid + Strong Base", emoji: "⚪", level: 2, description: "e.g. NaCl — ions do not hydrolyse; solution is neutral (pH = 7).", keywords: ["Neutral"], children: [] },
                { id: "ch17-2", label: "Weak Acid + Strong Base", emoji: "🔵", level: 2, description: "e.g. CH₃COONa — anion hydrolyses; solution is basic (pH > 7).", keywords: ["Basic"], children: [] },
                { id: "ch17-3", label: "Strong Acid + Weak Base", emoji: "🔴", level: 2, description: "e.g. NH₄Cl — cation hydrolyses; solution is acidic (pH < 7).", keywords: ["Acidic"], children: [] },
                {
                    id: "ch17-4", label: "Weak Acid + Weak Base", emoji: "🟣", level: 2, description: "e.g. CH₃COONH₄ — both ions hydrolyse.", keywords: ["Both hydrolyse"],
                    children: [
                        { id: "ch17-4-1", label: "pH = 7 + ½(pKa − pKb)", emoji: "🧮", level: 3, description: "pH depends on the relative strengths of the parent acid and base.", keywords: ["pKa", "pKb"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch18", label: "Law Of Mass Action And\nLaw Of Equilibrium Constant", emoji: "⚖️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch18-1", label: "Guldberg & Waage (1864)", emoji: "👨‍🔬", level: 2, description: "Proposed the law of mass action.", keywords: ["History"], children: [] },
                { id: "ch18-2", label: "Rate ∝ Product Of Active Masses", emoji: "✖️", level: 2, description: "Rate of reaction is proportional to the product of the active masses of the reactants.", keywords: ["Rate law"], children: [] }
            ]
        },
        { id: "ch19", label: "Dissolution Of Solid Or\nGases In Liquids", emoji: "🫧", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch20", label: "Homogeneous Equilibria", emoji: "🟰", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch21", label: "Ionic Equilibrium\nIn Solution", emoji: "⚡", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch21-1", label: "Strong Electrolytes", emoji: "💪", level: 2, description: "Ionise almost completely in water, e.g. NaCl, HCl.", keywords: ["Complete ionisation"], children: [] },
                { id: "ch21-2", label: "Weak Electrolytes", emoji: "🪶", level: 2, description: "Ionise only partially; ions are in equilibrium with unionised molecules, e.g. CH₃COOH.", keywords: ["Partial ionisation"], children: [] }
            ]
        },
        {
            id: "ch22", label: "The pH Scale", emoji: "📏", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch22-1", label: "pH = −log[H₃O⁺]", emoji: "🧮", level: 2, description: "Proposed by Sørensen to express hydronium ion concentration conveniently.", keywords: ["Sørensen"], children: [] },
                { id: "ch22-2", label: "1 Unit = 10× Change", emoji: "🔟", level: 2, description: "A change of one pH unit means a ten-fold change in [H₃O⁺].", keywords: ["Logarithmic"], children: [] },
                {
                    id: "ch22-3", label: "Everyday Examples", emoji: "🧃", level: 2, description: "pH of some common substances.", keywords: ["Examples"],
                    children: [
                        { id: "ch22-3-1", label: "Gastric Juice ≈ 1.2", emoji: "🫃", level: 3, description: "Strongly acidic.", keywords: ["Acidic"], children: [] },
                        { id: "ch22-3-2", label: "Human Blood ≈ 7.4", emoji: "🩸", level: 3, description: "Slightly basic; maintained by buffers.", keywords: ["Buffer"], children: [] },
                        { id: "ch22-3-3", label: "Milk Of Magnesia ≈ 10.5", emoji: "🥛", level: 3, description: "Basic; used as an antacid.", keywords: ["Antacid"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch23", label: "Relation Between\nKa And Kb", emoji: "🔗", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch23-1", label: "Ka × Kb = Kw", emoji: "✖️", level: 2, description: "For a conjugate acid–base pair.", keywords: ["Conjugate pair"], children: [] },
                { id: "ch23-2", label: "pKa + pKb = 14 (298 K)", emoji: "➕", level: 2, description: "Logarithmic form of Ka × Kb = Kw.", keywords: ["pKw"], children: [] }
            ]
        },
        { id: "ch24", label: "Solid-Vapour Equilibrium", emoji: "♨️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch25", label: "Ionization Of Weak Bases", emoji: "🧪", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch26", label: "Effect Of\nConcentration Change", emoji: "🎚️", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch26-1", label: "Add Reactant → Forward Shift", emoji: "➡️", level: 2, description: "The system consumes the added reactant.", keywords: ["Le Chatelier"], children: [] },
                { id: "ch26-2", label: "Remove Product → Forward Shift", emoji: "📤", level: 2, description: "The system replaces the removed product.", keywords: ["Le Chatelier"], children: [] },
                {
                    id: "ch26-3", label: "Demonstration", emoji: "🧪", level: 2, description: "A colour change shows the shift.", keywords: ["Experiment"],
                    children: [
                        { id: "ch26-3-1", label: "Fe³⁺ + SCN⁻ ⇌ [Fe(SCN)]²⁺", emoji: "🔴", level: 3, description: "Adding oxalic acid removes Fe³⁺, and the blood-red colour fades.", keywords: ["Blood-red complex"], children: [] }
                    ]
                }
            ]
        },
        { id: "ch27", label: "Calculating Equilibrium\nConcentrations", emoji: "🧮", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch28", label: "Ionization Constants\nOf Weak Acids", emoji: "🔢", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch29", label: "Factors Affecting\nAcid Strength", emoji: "💪", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch30", label: "Active Mass", emoji: "⚙️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch31", label: "Effect Of\nTemperature Change", emoji: "🌡️", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch31-1", label: "Exothermic: K Falls On Heating", emoji: "🔥", level: 2, description: "Raising temperature shifts the equilibrium backward.", keywords: ["ΔH < 0"], children: [] },
                { id: "ch31-2", label: "Endothermic: K Rises On Heating", emoji: "❄️", level: 2, description: "Raising temperature shifts the equilibrium forward.", keywords: ["ΔH > 0"], children: [] },
                {
                    id: "ch31-3", label: "Demonstration", emoji: "🧪", level: 2, description: "A colour change shows the shift.", keywords: ["Experiment"],
                    children: [
                        { id: "ch31-3-1", label: "2NO₂ (brown) ⇌ N₂O₄ (colourless)", emoji: "🟤", level: 3, description: "Exothermic forward reaction: hot mixture is darker brown, cold mixture is paler.", keywords: ["NO₂ / N₂O₄"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch32", label: "Bronsted-Lowry\nAcids And Bases", emoji: "🧬", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch32-1", label: "Acid = Proton Donor", emoji: "📤", level: 2, description: "Donates H⁺ to another species.", keywords: ["H⁺ donor"], children: [] },
                { id: "ch32-2", label: "Base = Proton Acceptor", emoji: "📥", level: 2, description: "Accepts H⁺ from another species.", keywords: ["H⁺ acceptor"], children: [] },
                {
                    id: "ch32-3", label: "Conjugate Acid–Base Pairs", emoji: "🔗", level: 2, description: "Differ by only one proton.", keywords: ["Conjugate pair"],
                    children: [
                        { id: "ch32-3-1", label: "Strong Acid → Weak Conjugate Base", emoji: "⚖️", level: 3, description: "e.g. HCl / Cl⁻.", keywords: ["Strength"], children: [] },
                        { id: "ch32-3-2", label: "Weak Acid → Strong Conjugate Base", emoji: "⚖️", level: 3, description: "Relatively stronger, e.g. CH₃COOH / CH₃COO⁻.", keywords: ["Strength"], children: [] }
                    ]
                }
            ]
        },
        { id: "ch33", label: "Solid-Liquid Equilibrium", emoji: "🧊", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch34", label: "Indicators And Titrations", emoji: "🎨", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch34-1", label: "Phenolphthalein (pH 8.2–10)", emoji: "🩷", level: 2, description: "Colourless in acid, pink in base.", keywords: ["Indicator"], children: [] },
                { id: "ch34-2", label: "Methyl Orange (pH 3.1–4.4)", emoji: "🟠", level: 2, description: "Red in acid, yellow in base.", keywords: ["Indicator"], children: [] }
            ]
        },
        {
            id: "ch35", label: "Solubility Product\nConstant", emoji: "📐", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch35-1", label: "Ksp = [Mʸ⁺]ˣ [Aˣ⁻]ʸ", emoji: "🧮", level: 2, description: "For MₓAᵧ(s) ⇌ xMʸ⁺ + yAˣ⁻ in a saturated solution.", keywords: ["Ksp"], children: [] },
                {
                    id: "ch35-2", label: "Relation With Solubility (S)", emoji: "🔗", level: 2, description: "Ksp = xˣ yʸ S⁽ˣ⁺ʸ⁾", keywords: ["Molar solubility"],
                    children: [
                        { id: "ch35-2-1", label: "AB → Ksp = S²", emoji: "2️⃣", level: 3, description: "e.g. AgCl, BaSO₄.", keywords: ["1:1 salt"], children: [] },
                        { id: "ch35-2-2", label: "AB₂ → Ksp = 4S³", emoji: "3️⃣", level: 3, description: "e.g. CaF₂, PbI₂.", keywords: ["1:2 salt"], children: [] },
                        { id: "ch35-2-3", label: "A₂B₃ → Ksp = 108S⁵", emoji: "5️⃣", level: 3, description: "e.g. Bi₂S₃.", keywords: ["2:3 salt"], children: [] }
                    ]
                }
            ]
        },
        {
            id: "ch36", label: "Effect Of\nPressure Change", emoji: "🔽", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch36-1", label: "Shift To Fewer Gas Moles", emoji: "⬇️", level: 2, description: "Increasing pressure (decreasing volume) favours the side with fewer gaseous moles.", keywords: ["Le Chatelier"], children: [] },
                { id: "ch36-2", label: "No Effect When Δn = 0", emoji: "🟰", level: 2, description: "e.g. H₂(g) + I₂(g) ⇌ 2HI(g).", keywords: ["Δn = 0"], children: [] }
            ]
        },
        {
            id: "ch37", label: "Arrhenius Concept Of\nAcids And Bases", emoji: "🏛️", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch37-1", label: "Acid Gives H⁺ In Water", emoji: "🍋", level: 2, description: "e.g. HCl(aq) → H⁺(aq) + Cl⁻(aq).", keywords: ["Arrhenius acid"], children: [] },
                { id: "ch37-2", label: "Base Gives OH⁻ In Water", emoji: "🧼", level: 2, description: "e.g. NaOH(aq) → Na⁺(aq) + OH⁻(aq).", keywords: ["Arrhenius base"], children: [] },
                { id: "ch37-3", label: "Limited To Aqueous Solutions", emoji: "⚠️", level: 2, description: "Cannot explain basicity of NH₃ or reactions in non-aqueous media.", keywords: ["Limitation"], children: [] }
            ]
        },
        {
            id: "ch38", label: "Effect Of\nInert Gas Addition", emoji: "🎈", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch38-1", label: "Constant Volume → No Effect", emoji: "📦", level: 2, description: "Partial pressures of the reacting gases do not change.", keywords: ["Constant V"], children: [] },
                { id: "ch38-2", label: "Constant Pressure → Shift To More Moles", emoji: "🎈", level: 2, description: "Volume increases, so equilibrium shifts to the side with more gaseous moles.", keywords: ["Constant P"], children: [] }
            ]
        },
        { id: "ch39", label: "Ionization Of\nAcids And Bases", emoji: "⚡", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch40", label: "Acids, Bases And Salts", emoji: "🧫", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch41", label: "Lewis Acids And Bases", emoji: "🔬", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch41-1", label: "Acid = Electron-Pair Acceptor", emoji: "📥", level: 2, description: "e.g. BF₃, AlCl₃, Co³⁺, Mg²⁺.", keywords: ["Lewis acid"], children: [] },
                { id: "ch41-2", label: "Base = Electron-Pair Donor", emoji: "📤", level: 2, description: "e.g. NH₃, H₂O, OH⁻.", keywords: ["Lewis base"], children: [] }
            ]
        },
        { id: "ch42", label: "Applications Of\nSolubility Product", emoji: "📝", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch43", label: "Predicting The Extent\nOf A Reaction", emoji: "📊", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch43-1", label: "K > 10³ → Products Predominate", emoji: "🟢", level: 2, description: "Reaction proceeds nearly to completion.", keywords: ["Large K"], children: [] },
                { id: "ch43-2", label: "K < 10⁻³ → Reactants Predominate", emoji: "🔴", level: 2, description: "Reaction proceeds rarely.", keywords: ["Small K"], children: [] },
                { id: "ch43-3", label: "10⁻³ to 10³ → Both Appreciable", emoji: "🟡", level: 2, description: "Appreciable concentrations of both reactants and products.", keywords: ["Intermediate K"], children: [] }
            ]
        },
        {
            id: "ch44", label: "Factors Affecting\nEquilibrium Constant", emoji: "🎯", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch44-1", label: "Only Temperature Changes K", emoji: "🌡️", level: 2, description: "Concentration, pressure and inert gas only shift the position, not K.", keywords: ["Temperature"], children: [] },
                { id: "ch44-2", label: "Catalyst Does Not Change K", emoji: "⏩", level: 2, description: "It speeds up both directions equally.", keywords: ["Catalyst"], children: [] }
            ]
        },
        { id: "ch45", label: "Law Of Chemical Equilibrium\nAnd Equilibrium Constant", emoji: "📜", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch46", label: "Liquid-Vapour Equilibrium", emoji: "🌫️", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch47", label: "Ionization Constant Of Water\nAnd Its Ionic Product", emoji: "💧", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch47-1", label: "Kw = [H₃O⁺][OH⁻]", emoji: "✖️", level: 2, description: "Ionic product of water.", keywords: ["Kw"], children: [] },
                { id: "ch47-2", label: "Kw = 1.0 × 10⁻¹⁴ (298 K)", emoji: "🔢", level: 2, description: "Kw increases with temperature.", keywords: ["298 K"], children: [] }
            ]
        },
        {
            id: "ch48", label: "Effect Of A Catalyst", emoji: "⏩", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch48-1", label: "Lowers Activation Energy", emoji: "📉", level: 2, description: "Lowers it equally for forward and reverse reactions.", keywords: ["Ea"], children: [] },
                { id: "ch48-2", label: "Equilibrium Reached Faster", emoji: "⏱️", level: 2, description: "Equilibrium composition and K remain unchanged.", keywords: ["Rate"], children: [] },
                { id: "ch48-3", label: "Haber Process: Iron Catalyst", emoji: "🏭", level: 2, description: "Finely divided iron with molybdenum as promoter.", keywords: ["Fe", "Mo"], children: [] }
            ]
        },
        { id: "ch49", label: "Heterogeneous Equilibria", emoji: "🔀", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch50", label: "Common Ion Effect On\nSolubility Of Ionic Salts", emoji: "🧂", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch51", label: "Condition Of Best Buffer", emoji: "🛡️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch52", label: "Buffer Solutions", emoji: "🧴", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                {
                    id: "ch52-1", label: "Acidic Buffer", emoji: "🍋", level: 2, description: "Weak acid + its salt with a strong base, e.g. CH₃COOH + CH₃COONa.", keywords: ["Acidic buffer"],
                    children: [
                        { id: "ch52-1-1", label: "pH = pKa + log([Salt]/[Acid])", emoji: "🧮", level: 3, description: "Henderson–Hasselbalch equation.", keywords: ["Henderson"], children: [] }
                    ]
                },
                {
                    id: "ch52-2", label: "Basic Buffer", emoji: "🧼", level: 2, description: "Weak base + its salt with a strong acid, e.g. NH₄OH + NH₄Cl.", keywords: ["Basic buffer"],
                    children: [
                        { id: "ch52-2-1", label: "pOH = pKb + log([Salt]/[Base])", emoji: "🧮", level: 3, description: "Henderson–Hasselbalch equation for basic buffers.", keywords: ["Henderson"], children: [] }
                    ]
                },
                { id: "ch52-3", label: "Blood Buffer (H₂CO₃ / HCO₃⁻)", emoji: "🩸", level: 2, description: "Keeps blood pH close to 7.4.", keywords: ["Biological buffer"], children: [] }
            ]
        },
        { id: "ch53", label: "Factors Affecting Degree\nOf Dissociation", emoji: "📉", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch54", label: "Factors Affecting\nEquilibria", emoji: "⚖️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch54-1", label: "Le Chatelier's Principle", emoji: "📜", level: 2, description: "A system at equilibrium adjusts to cancel the effect of any change imposed on it.", keywords: ["Le Chatelier"], children: [] },
                { id: "ch54-2", label: "Concentration", emoji: "🎚️", level: 2, description: "Shifts position; K unchanged.", keywords: ["Concentration"], children: [] },
                { id: "ch54-3", label: "Pressure", emoji: "🔽", level: 2, description: "Affects gaseous equilibria with Δn ≠ 0.", keywords: ["Pressure"], children: [] },
                { id: "ch54-4", label: "Temperature", emoji: "🌡️", level: 2, description: "The only factor that changes K.", keywords: ["Temperature"], children: [] },
                { id: "ch54-5", label: "Catalyst", emoji: "⏩", level: 2, description: "No shift; equilibrium is just reached faster.", keywords: ["Catalyst"], children: [] }
            ]
        },
        { id: "ch55", label: "Types Of\nChemical Reactions", emoji: "💥", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch56", label: "General Characteristics Of\nPhysical Process Equilibrium", emoji: "🔄", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: [] },
        { id: "ch57", label: "Designing Buffer Solution", emoji: "🏗️", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: [] },
        {
            id: "ch58", label: "Equilibrium In Chemical\nProcesses - Dynamic Equilibrium", emoji: "⚡", level: 1, branchIndex: 1, description: "----", fact: "----", keywords: ["----"],
            children: [
                { id: "ch58-1", label: "Rate Forward = Rate Backward", emoji: "🔄", level: 2, description: "Reactions do not stop at equilibrium; they proceed at equal rates.", keywords: ["Dynamic"], children: [] },
                { id: "ch58-2", label: "Isotope (D₂) Experiment", emoji: "🔬", level: 2, description: "Using D₂ in the Haber process shows deuterium spreads into NH₃ and H₂ even at equilibrium.", keywords: ["Deuterium"], children: [] }
            ]
        },
        { id: "node2", label: "Node 2", emoji: "📦", level: 1, branchIndex: 2, description: "----", fact: "----", keywords: ["----"], children: makeTestNodes("node2", 5, 3) },
        { id: "node3", label: "Node 3", emoji: "📦", level: 1, branchIndex: 3, description: "----", fact: "----", keywords: ["----"], children: makeTestNodes("node3", 10, 4, 3) }
    ]
};
