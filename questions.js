questions = [
    {
        "question": "The authority of law comes primarily from being formally enacted by legitimate institutions.",
        "effect": {
            "sorc": 10,  // Positivist
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Laws that violate fundamental moral principles lack true legal authority.",
        "effect": {
            "sorc": -10,  // Non-Positivist
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional provisions should be interpreted according to their plain text meaning.",
        "effect": {
            "sorc": 0,
            "cons": 10,  // Textualist
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should interpret legal texts to achieve their underlying purposes, even if this goes beyond literal meaning.",
        "effect": {
            "sorc": 0,
            "cons": -10,  // Open Construction
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "The Constitution means today what it meant when it was originally ratified.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 10,  // Originalist
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional interpretation must evolve to address contemporary challenges and values.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": -10,  // Living
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Precedent should rarely be overturned to maintain legal stability and predictability.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 10,  // Stability
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should be willing to overturn precedent when it produces unjust results.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": -10,  // Overruling
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Judicial remedies should be limited to the specific parties and issues before the court.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 10,  // Narrow
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should be willing to order broad structural reforms when constitutional violations are systemic.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": -10,  // Systemic
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should generally defer to the decisions of democratically elected officials.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 10,  // Majoritarian
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts must protect individual rights even when doing so contradicts majority preferences.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": -10,  // Counter-Majoritarian
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Each branch of government should stay strictly within its constitutionally defined role.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 10,  // Formalist
            "form": 0
        }
    },
    {
        "question": "Effective governance sometimes requires flexible cooperation between branches of government.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": -10,  // Functionalist
            "form": 0
        }
    },
    {
        "question": "Legal standards should provide clear, predictable rules that apply uniformly across cases.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 10  // Rules
        }
    },
    {
        "question": "Legal decision-making should weigh competing interests and consider the unique circumstances of each case.",
        "effect": {
            "sorc": 0,
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": -10  // Balancing
        }
    },
    {
        "question": "Natural law provides a foundation for legal systems that transcends human-made law.",
        "effect": {
            "sorc": -8,  // Non-Positivist
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": -5,  // Counter-Majoritarian tendency
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "The validity of law depends solely on its source and procedure of creation, not its moral content.",
        "effect": {
            "sorc": 8,  // Positivist
            "cons": 5,  // Textualist tendency
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 5,  // Formalist tendency
            "form": 0
        }
    },
    {
        "question": "When constitutional text is ambiguous, courts should look to the intent of the framers.",
        "effect": {
            "sorc": 0,
            "cons": 5,  // Textualist
            "time": 8,  // Originalist
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional interpretation should consider contemporary social and scientific understanding.",
        "effect": {
            "sorc": 0,
            "cons": -5,  // Open Construction
            "time": -8,  // Living
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "Stare decisis is essential to the rule of law and judicial legitimacy.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 10,  // Stability
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Wrong precedents perpetuate injustice and should be corrected regardless of reliance interests.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": -10,  // Overruling
            "remed": 0,
            "post": -5,  // Counter-Majoritarian tendency
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should avoid judicial activism and limit themselves to deciding the case before them.",
        "effect": {
            "sorc": 0,
            "cons": 5,  // Textualist tendency
            "time": 0,
            "prec": 5,  // Stability tendency
            "remed": 10,  // Narrow
            "post": 8,  // Majoritarian
            "separ": 5,  // Formalist tendency
            "form": 0
        }
    },
    {
        "question": "When faced with constitutional violations, courts have a duty to provide comprehensive relief.",
        "effect": {
            "sorc": 0,
            "cons": -5,  // Open Construction tendency
            "time": 0,
            "prec": 0,
            "remed": -10,  // Systemic
            "post": -8,  // Counter-Majoritarian
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "Democratic accountability requires that major policy decisions be made by elected officials.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 5,  // Narrow tendency
            "post": 10,  // Majoritarian
            "separ": 5,  // Formalist tendency
            "form": 0
        }
    },
    {
        "question": "Constitutional rights exist to protect minorities from majoritarian tyranny.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": -5,  // Systemic tendency
            "post": -10,  // Counter-Majoritarian
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "The separation of powers requires that courts not perform executive or legislative functions.",
        "effect": {
            "sorc": 0,
            "cons": 5,  // Textualist tendency
            "time": 5,  // Originalist tendency
            "prec": 0,
            "remed": 8,  // Narrow tendency
            "post": 5,  // Majoritarian tendency
            "separ": 10,  // Formalist
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Modern governance requires practical cooperation between branches to address complex problems.",
        "effect": {
            "sorc": 0,
            "cons": -5,  // Open Construction tendency
            "time": -5,  // Living tendency
            "prec": 0,
            "remed": -5,  // Systemic tendency
            "post": 0,
            "separ": -10,  // Functionalist
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "Legal tests should provide bright-line rules to ensure consistent application across similar cases.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 8,  // Textualist tendency
            "time": 5,  // Originalist tendency
            "prec": 8,  // Stability tendency
            "remed": 0,
            "post": 0,
            "separ": 5,  // Formalist tendency
            "form": 10  // Rules
        }
    },
    {
        "question": "Context-sensitive standards better serve justice than rigid categorical rules.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": -8,  // Open Construction tendency
            "time": -5,  // Living tendency
            "prec": -5,  // Overruling tendency
            "remed": -5,  // Systemic tendency
            "post": 0,
            "separ": -5,  // Functionalist tendency
            "form": -10  // Balancing
        }
    },
    {
        "question": "The written law is the primary source of legal obligation in a democratic society.",
        "effect": {
            "sorc": 8,  // Positivist
            "cons": 5,  // Textualist tendency
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 5,  // Majoritarian tendency
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Judges should sometimes look beyond written law to principles of justice and fairness.",
        "effect": {
            "sorc": -8,  // Non-Positivist
            "cons": -5,  // Open Construction tendency
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": -5,  // Counter-Majoritarian tendency
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "Statutory interpretation should focus on what a reasonable reader would understand the text to mean.",
        "effect": {
            "sorc": 0,
            "cons": 8,  // Textualist
            "time": 5,  // Originalist tendency
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Judges should consider legislative history and purpose when interpreting statutes.",
        "effect": {
            "sorc": 0,
            "cons": -8,  // Open Construction
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "The Constitution should be interpreted as it was understood by those who ratified it.",
        "effect": {
            "sorc": 0,
            "cons": 5,  // Textualist tendency
            "time": 10,  // Originalist
            "prec": 5,  // Stability tendency
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional principles must be applied to circumstances the framers never anticipated.",
        "effect": {
            "sorc": 0,
            "cons": -5,  // Open Construction tendency
            "time": -10,  // Living
            "prec": -5,  // Overruling tendency
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "Overturning precedent undermines the stability and predictability of law.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 10,  // Stability
            "remed": 0,
            "post": 0,
            "separ": 0,
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Maintaining incorrect precedent perpetuates legal error and injustice.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": -10,  // Overruling
            "remed": 0,
            "post": -5,  // Counter-Majoritarian tendency
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Courts should craft narrow remedies that interfere minimally with other institutions.",
        "effect": {
            "sorc": 0,
            "cons": 5,  // Textualist tendency
            "time": 0,
            "prec": 5,  // Stability tendency
            "remed": 10,  // Narrow
            "post": 8,  // Majoritarian tendency
            "separ": 8,  // Formalist tendency
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Effective constitutional enforcement sometimes requires broad institutional reform.",
        "effect": {
            "sorc": 0,
            "cons": -5,  // Open Construction tendency
            "time": 0,
            "prec": -5,  // Overruling tendency
            "remed": -10,  // Systemic
            "post": -8,  // Counter-Majoritarian tendency
            "separ": -5,  // Functionalist tendency
            "form": -5  // Balancing tendency
        }
    },
    {
        "question": "The will of the majority should generally prevail in a democratic system.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": 5,  // Narrow tendency
            "post": 10,  // Majoritarian
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional rights protect fundamental values that majorities cannot override.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": 0,
            "time": 0,
            "prec": 0,
            "remed": -5,  // Systemic tendency
            "post": -10,  // Counter-Majoritarian
            "separ": 0,
            "form": 0
        }
    },
    {
        "question": "Constitutional structure requires strict adherence to the formal separation of powers.",
        "effect": {
            "sorc": 5,  // Positivist tendency
            "cons": 8,  // Textualist tendency
            "time": 8,  // Originalist tendency
            "prec": 5,  // Stability tendency
            "remed": 5,  // Narrow tendency
            "post": 0,
            "separ": 10,  // Formalist
            "form": 8  // Rules tendency
        }
    },
    {
        "question": "Effective government requires flexible boundaries between branches of government.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": -5,  // Open Construction tendency
            "time": -8,  // Living tendency
            "prec": -5,  // Overruling tendency
            "remed": -5,  // Systemic tendency
            "post": 0,
            "separ": -10,  // Functionalist
            "form": -8  // Balancing tendency
        }
    },
    {
        "question": "Legal doctrines should establish clear rules that judges can apply mechanically.",
        "effect": {
            "sorc": 8,  // Positivist tendency
            "cons": 8,  // Textualist tendency
            "time": 5,  // Originalist tendency
            "prec": 8,  // Stability tendency
            "remed": 5,  // Narrow tendency
            "post": 5,  // Majoritarian tendency
            "separ": 8,  // Formalist tendency
            "form": 10  // Rules
        }
    },
    {
        "question": "Legal decision-making requires weighing multiple factors and considering context.",
        "effect": {
            "sorc": -5,  // Non-Positivist tendency
            "cons": -8,  // Open Construction tendency
            "time": -5,  // Living tendency
            "prec": -5,  // Overruling tendency
            "remed": -5,  // Systemic tendency
            "post": -5,  // Counter-Majoritarian tendency
            "separ": -8,  // Functionalist tendency
            "form": -10  // Balancing
        }
    },
    {
        "question": "Moral considerations have no place in determining what counts as valid law.",
        "effect": {
            "sorc": 10,  // Positivist
            "cons": 5,  // Textualist tendency
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": 0,
            "separ": 5,  // Formalist tendency
            "form": 5  // Rules tendency
        }
    },
    {
        "question": "Unjust laws lack the moral authority that legitimate law requires.",
        "effect": {
            "sorc": -10,  // Non-Positivist
            "cons": -5,  // Open Construction tendency
            "time": 0,
            "prec": 0,
            "remed": 0,
            "post": -5,  // Counter-Majoritarian tendency
            "separ": 0,
            "form": -5  // Balancing tendency
        }
    }
];