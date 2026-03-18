// data/mirrorMode.js - MODE MIROIR ULTIME
// TRANSITIONS RÉALISTES - DUO SENSUEL

// Vérifier si la variable existe déjà pour éviter les conflits
if (typeof window.mirrorModeData === 'undefined') {
    window.mirrorModeData = {
        // Types de clones
        types: {
            classique: {
                name: "🪞 Clone Identique",
                description: "Le clone est STRICTEMENT IDENTIQUE (même tenue, même apparence)",
                interaction: "Dansent de façon SYNCHRONISÉE"
            },
            tenue_inversee: {
                name: "🔄 Clone aux couleurs inversées",
                description: "Le clone a les couleurs inversées (négatif élégant)",
                interaction: "Dansent en MIROIR (l'une fait gauche, l'autre droite)"
            },
            regard_different: {
                name: "👁️ Clone au regard intense",
                description: "Le clone a le même visage mais un regard PLUS SENSUEL",
                interaction: "Jeux de regards magnétiques entre elles"
            }
        },
        
        // TRANSITIONS RÉALISTES (4 options)
        transitions: {
            main_tendue: {
                name: "🤝 Main tendue",
                description: "Elle tend la main, le clone la prend et sort",
                chrono: "0-1s: Elle tend la main vers le miroir\n1-2s: Le clone tend la main aussi\n2-3s: Leurs doigts se touchent à la surface\n3-4s: Elle TIRE doucement le clone\n4-5s: Le clone sort du miroir\n5-6s: Elles sont main dans la main"
            },
            contournement: {
                name: "🚶 Contournement",
                description: "Elle contourne le miroir, le clone apparaît derrière",
                chrono: "0-2s: Elle danse, regarde le clone\n2-3s: Le clone lui fait signe de venir\n3-5s: Elle CONTOURNE le miroir\n5-6s: Elle réapparaît avec le clone"
            },
            derriere: {
                name: "👋 Le clone sort par derrière",
                description: "Le clone sort du miroir et vient derrière elle",
                chrono: "0-2s: Danse normale\n2-3s: Le clone devient flou\n3-4s: Le clone SORT du miroir\n4-5s: Il vient DERRIÈRE elle\n5-6s: Il pose les mains sur ses épaules"
            },
            danse_progressive: {
                name: "💃 Danse progressive",
                description: "Les mouvements deviennent différents, le clone prend vie",
                chrono: "0-2s: Mouvements synchronisés\n2-3s: Le clone fait un geste différent\n3-4s: Elle s'arrête, le regarde\n4-5s: Le clone sort et la rejoint\n5-6s: Elles dansent ensemble"
            }
        },
        
        // Styles de danse à deux
        duo_styles: {
            synchronise: {
                name: "🔄 Synchronisé",
                description: "Mêmes mouvements en même temps - puissance double"
            },
            miroir: {
                name: "🪞 En miroir",
                description: "Quand l'une va à droite, l'autre va à gauche - effet miroir parfait"
            },
            complementaire: {
                name: "💞 Complémentaire",
                description: "Mouvements différents mais qui s'assemblent - chorégraphie à deux"
            },
            sensuel: {
                name: "🔥 Sensuel",
                description: "Jeux de regards, caresses, mouvements lents - connexion intime"
            }
        },
        
        // Poses finales face caméra
        poses_finales: [
            "côte à côte, se tenant par la main, regard caméra",
            "l'une derrière l'autre, mains sur les épaules, sourire complice",
            "face à face, se regardant avec sensualité, puis vers caméra",
            "bras dessus bras dessous, hanches collées, regard intense",
            "l'une la tête sur l'épaule de l'autre, yeux mi-clos, puis ouverture vers caméra",
            "mains sur les hanches, poses de déesses, sourires coquins"
        ],
        
        // Jeux de séduction à deux
        seduction_duo: [
            "regards complices entre elles",
            "clins d'œil échangés",
            "caresses légères sur le bras",
            "se frôlent en dansant",
            "l'une passe la main dans les cheveux de l'autre",
            "se prennent par la taille",
            "l'embrasse sur la joue (tendre)",
            "regards vers la caméra en duo"
        ]
    };
    
    console.log("✅ mirrorMode.js chargé - Mode miroir avec transitions réalistes");
} else {
    console.log("⚠️ mirrorModeData déjà existant, chargement ignoré");
}
