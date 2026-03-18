
// script.js - Version ULTIME avec TOUS les effets - TABLEAUX ALIEN COMPLETS + OPTIONS SPÉCIALES + MODE ANIMAL + MODE MIROIR
// CORRIGÉ : Les transformations (Avatar/Alien/Animal) n'apparaissent que dans la PARTIE 2
// CORRIGÉ : Gestion des deux cas Avatar (visage humain conservé OU transformation complète)
// CORRIGÉ : Ajout des options spéciales (yeux différents, taches de naissance)
// CORRIGÉ : Priorité absolue aux options spéciales avec renfort vidéo
// CORRIGÉ : Intégration du MODE ANIMAL (chatte, tigresse, panthère, lionne, lapine)
// CORRIGÉ : Mains peintes visibles pendant TOUTE la PARTIE 1 (couleurs ne disparaissent pas)
// CORRIGÉ : Gestion des 5 tenues pour le rappeur urbain ET le rappeur américain
// CORRIGÉ : Ajout des détails ultra-réalistes niveau MAXIMUM (micro-expressions, yeux humides, respiration, mains)
// CORRIGÉ : Erreur de syntaxe ligne 952 (template string mal fermé)
// CORRIGÉ : Ajout du MODE BÉBÉ ANIMAL CÂLIN
// CORRIGÉ : Mode bébé animal - l'animal est DÉJÀ dans ses bras au début de la PARTIE 2
// CORRIGÉ : Mode bébé animal - DÉSACTIVE les gestes finaux, finale spéciale avec l'animal
// AJOUTÉ : MODE MIROIR - Transition DIRECTE (flash lumineux) - OPTION 4

console.log("🚀 Chargement de script.js...");

// Exposer les fonctions de actions.js
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js exposé globalement");
}

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        if (!countries || !countries[personnageKey]) return 'default';
        
        let type = countries[personnageKey].type || personnageKey;
        
        const actions = window.personnageActions || {};
        if (actions[type]) {
            return type;
        }
        
        if (this.typeMapping[type]) {
            return this.typeMapping[type];
        }
        
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') {
            return window.getRandomDecor(personnageKey);
        }
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') {
            return window.getRandomAction(personnageKey);
        }
        return "elle danse sensuellement face caméra";
    }

    // ===== DÉCOR UNIFIÉ =====
    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        
        const customEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customText = document.getElementById('customDecorText')?.value || '';
        if (customEnabled && customText.trim() !== '') {
            return customText.trim();
        }
        
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        if (randomDecor && randomDecor !== "studio professionnel") {
            return randomDecor;
        }
        
        if (country && country.background) {
            return country.background;
        }
        
        return "dans un studio de danse professionnel avec éclairages tamisés";
    }

    // ===== FINALE SPECTACULAIRE =====
    getFinaleGesture() {
        // Vérifier si le mode bébé animal est activé
        const animalBabyModeEnabled = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const animalNom = animalType === 'chiot' ? 'son chiot' : 'son chaton';
        
        // Si mode bébé animal activé, on ignore les gestes cochés et on retourne une finale spéciale
        if (animalBabyModeEnabled) {
            return `FINALE SPÉCIALE MODE CÂLIN (dernière seconde) :
À LA SECONDE 5 EXACTEMENT (dernière seconde de la vidéo) :
- Elle serre ${animalNom} TRÈS FORT contre elle dans un dernier CÂLIN intense
- Elle pose sa joue sur sa tête, FERME LES YEUX avec un sourire de pur bonheur
- Puis elle OUVRE LENTEMENT LES YEUX vers la CAMÉRA, regard SÉDUCTEUR et COMPLICE
- Elle lui fait un dernier BISOU TENDRE sur le front tout en fixant le spectateur
- Elle le PRÉSENTE fièrement à la caméra au niveau des seins
- Son expression alterne entre AMOUR pour l'animal et SENSUALITÉ pour le spectateur
- FREEZE sur cette image : elle tient l'animal, regard caméra, sourire COQUIN et TENDRE
- L'animal fait un dernier câlin (lèche ou frotte sa tête contre elle)
- MOMENT PARFAIT de CONNEXION TOTALE entre elle, l'animal et le spectateur
- SENSUALITÉ DOUCE et MAGNÉTIQUE`;
        }
        
        // Sinon, on continue normalement avec les gestes cochés
        const finaleGestures = [];
        
        if (document.getElementById('finalBisou')?.checked) 
            finaleGestures.push('elle envoie UN DERNIER BISOU LANGOUREUX à la caméra, ses doigts effleurant ses lèvres avant de s\'ouvrir lentement vers le spectateur, les yeux mi-clos dans un regard de désir');
        
        if (document.getElementById('finalCiao')?.checked) 
            finaleGestures.push('elle fait un "CIAO" SENSUEL de la main, ses doigts bougeant gracieusement comme des vagues, un sourire complice aux lèvres, regardant le spectateur droit dans les yeux');
        
        if (document.getElementById('finalMasque')?.checked) 
            finaleGestures.push('elle RAPPROCHE SES MAINS DE L\'OBJECTIF pour masquer l\'écran, laissant deviner un sourire mystérieux derrière, comme une promesse de revenir, ses doigts caressant presque la caméra');
        
        if (document.getElementById('finalCoeur')?.checked) 
            finaleGestures.push('elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête, puis le porte lentement à sa poitrine en fermant les yeux, offrant son cœur au spectateur');
        
        if (document.getElementById('finalClignement')?.checked) 
            finaleGestures.push('elle fait un LONG CLIN D\'ŒIL APPUYÉ, presque un slow blink, sa paupière s\'abaissant très lentement, accompagné d\'un sourire en coin terriblement charmeur');
        
        if (document.getElementById('finalCascade')?.checked) 
            finaleGestures.push('elle envoie une CASCADE DE BISOUS du bout des doigts, comme une pluie de baisers magiques qui flottent vers le spectateur, ses mains dessinant des cœurs dans l\'air');
        
        if (document.getElementById('finalRevelation')?.checked) 
            finaleGestures.push('elle ÉCARTE LES BRAS dans un geste théâtral de révélation, offrant son corps comme un cadeau au spectateur, la tête légèrement inclinée, regard intense');
        
        if (document.getElementById('finalSalut')?.checked) 
            finaleGestures.push('elle exécute une RÉVÉRENCE GRACIEUSE, son corps s\'abaissant lentement tout en gardant le regard levé vers la caméra, un salut royal digne d\'une reine');
        
        if (document.getElementById('finalRegard')?.checked) 
            finaleGestures.push('elle FIXE LA CAMÉRA INTENSÉMENT pendant 2 secondes, ses yeux plongeant dans ceux du spectateur, puis un sourire lent naît sur ses lèvres, d\'abord timide puis éclatant');
        
        if (document.getElementById('finalViens')?.checked) 
            finaleGestures.push('elle fait un DERNIER GESTE "VIENS VERS MOI" avec l\'index, exécuté très lentement de haut en bas, sa main invitant le spectateur à la rejoindre dans une danse éternelle');
        
        if (document.getElementById('finalSouffle')?.checked) 
            finaleGestures.push('elle ENVOIE UN SOUFFLE SENSUEL vers la caméra, comme un baiser volé, ses lèvres formant une moue parfaite, la buée imaginaire embuant l\'objectif');
        
        if (document.getElementById('finalEpaule')?.checked) 
            finaleGestures.push('elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu, regardant la caméra avec un air de défi sensuel, puis la recouvre tout aussi lentement');
        
        if (document.getElementById('finalCheveux')?.checked) 
            finaleGestures.push('elle REJETTE SES CHEVEUX EN ARRIÈRE d\'un geste lent et sensuel, sa main glissant à travers les mèches, le cou offert au regard du spectateur');
        
        if (finaleGestures.length === 0) {
            return 'elle envoie un dernier bisou du bout des doigts, suivit d\'un clin d\'œil complice';
        }
        
        if (finaleGestures.length === 1) {
            return finaleGestures[0];
        } else {
            const lastGesture = finaleGestures.pop();
            if (finaleGestures.length === 1) {
                return finaleGestures[0] + ' puis ' + lastGesture;
            } else {
                return finaleGestures.join(', ') + ', puis enfin ' + lastGesture;
            }
        }
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, comme une photographie sensuelle qui dure ${duree} secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image, partant des bords pour terminer sur son regard, comme une porte qui se ferme doucement sur ${duree} secondes`,
            'fonduBlanc': `un FONDU AU BLANC LUMINEUX l'illumine, comme un flash d'appareil photo qui révélerait sa silhouette de déesse, pendant ${duree} secondes`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage, capturant l'émotion ${emotion} de son regard, ses yeux devenant plus grands à l'écran pendant ${duree} secondes`,
            'flou': `un FLOU ARTISTIQUE PROGRESSIF, ses traits devenant de plus en plus éthérés comme un rêve qui s'achève, ne laissant que son sourire visible pendant ${duree} secondes`
        };
        
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR, créant une connexion intime et personnelle',
            'sourire': 'elle offre un SOURIRE ÉCLATANT ET PERSONNEL, comme si elle ne dansait que pour LUI, pour ELLE',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE, comme un secret partagé entre elle et chaque spectateur',
            'main': 'elle TEND LA MAIN vers l\'écran, comme pour toucher le spectateur à travers la vitre',
            'tous': 'elle ALTERNATE REGARD, SOURIRE ET CLIN D\'ŒIL, s\'adressant personnellement à chaque personne derrière l\'écran'
        };
        
        return interactions[interaction] || interactions['regard'];
    }

    // ===== SCRIPT DU PERSONNAGE =====
    generateScript() {
        if (!document.getElementById('enableScript')?.checked) return '';
        
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        
        const part1 = document.getElementById('scriptPart1')?.checked ? `En partie 1, elle dit: "${scriptText}"` : '';
        const part2 = document.getElementById('scriptPart2')?.checked ? `En partie 2, elle dit: "${scriptText}"` : '';
        const final = document.getElementById('scriptFinal')?.checked ? `À la fin, elle dit: "${scriptText}"` : '';
        
        const scripts = [part1, part2, final].filter(s => s).join(' ');
        
        return `\n\n🎤 SCRIPT DU PERSONNAGE :\n${scripts}`;
    }

    // ===== TEXTES MAGIQUES FLOTTANTS =====
    generateFloatingWords(partie) {
        if (!document.getElementById('enableMagicTexts')?.checked) return '';
        
        const words = [];
        
        // Textes standards
        if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
        if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
        if (document.getElementById('textLuna')?.checked) words.push('"@luna_wells"');
        if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
        if (document.getElementById('textLove')?.checked) words.push('"Love Me"');
        if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
        if (document.getElementById('textHeart')?.checked) words.push('❤️ (cœurs)');
        if (document.getElementById('textStar')?.checked) words.push('✨ (étoiles)');
        
        // Texte personnalisé
        const customText = document.getElementById('customText')?.value;
        if (customText) words.push(`"${customText}"`);
        
        if (words.length === 0) return '';
        
        const effect = document.getElementById('textEffect')?.value || 'neon';
        const movement = document.getElementById('textMovement')?.value || 'float';
        const color = document.getElementById('textColor')?.value || '#ff6b6b';
        const color2 = document.getElementById('textColor2')?.value || '#4ecdc4';
        const size = document.getElementById('textSize')?.value || 'medium';
        const quantity = document.getElementById('textQuantity')?.value || 'medium';
        const position = document.getElementById('textPosition')?.value || 'around';
        
        const sizeText = { small: 'petits', medium: 'moyens', large: 'grands', xlarge: 'très grands' }[size] || 'moyens';
        const quantityText = { few: '3-4', medium: '5-7', many: '8-10' }[quantity] || '5-7';
        
        const specialEffects = [];
        if (document.getElementById('effectSparkle')?.checked) specialEffects.push('scintillement');
        if (document.getElementById('effectPulse')?.checked) specialEffects.push('pulsation');
        if (document.getElementById('effectFade')?.checked) specialEffects.push('apparition/disparition progressive');
        if (document.getElementById('effectTrail')?.checked) specialEffects.push('traînée lumineuse');
        if (document.getElementById('effectShadow')?.checked) specialEffects.push('ombre portée');
        if (document.getElementById('effect3d')?.checked) specialEffects.push('effet 3D');
        
        const timing = document.getElementById('textTiming')?.value || 'whole';
        if (timing === 'part2' && partie === 'part1') return '';
        if (timing === 'transition' && partie !== 'part2') return '';
        
        return `
✨ EFFETS TEXTES MAGIQUES ${partie === 'part1' ? 'PENDANT LA PREMIÈRE PARTIE' : 'PENDANT LA DEUXIÈME PARTIE'} ✨
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : ${effect}
- Mouvement : ${movement}
- Couleurs : ${color} (principal) et ${color2} (secondaire)
- Taille des textes : ${sizeText}
- Quantité : ${quantityText} textes
- Position : ${position}
- Les textes réagissent à ses mouvements et la suivent
- Effets supplémentaires : ${specialEffects.join(', ')}
- Ils apparaissent de façon magique et créent une ambiance immersive`;
    }

    // ===== MODE ALIEN (TABLEAU COMPLET) =====
    generateAlienTransformations() {
        if (!document.getElementById('enableAlienMode')?.checked) return '';
        
        let alienText = '\n\n👽 TRANSFORMATIONS EXTRA-TERRESTRES (DÉJÀ ACCOMPLIES) :\n';
        let hasFeatures = false;
        
        if (document.getElementById('alienSkin')?.checked) {
            const color = document.getElementById('alienSkinColor')?.value || 'argent';
            alienText += `- Peau transformée : texture ${color} irisée, effet métal liquide, reflets holographiques (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienEyes')?.checked) {
            const color = document.getElementById('alienEyesColor')?.value || 'rouge';
            alienText += `- Yeux : devenus lumineux, couleur ${color}, avec un éclat surnaturel (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienAntenna')?.checked) {
            const style = document.getElementById('antennaStyle')?.value || 'antennes';
            const styleText = {
                'antennes': 'Antennes fines (insectoïdes)',
                'cornes': 'Cornes stylisées (démoniaques)',
                'couronne': 'Couronne lumineuse (angélique)',
                'halo': 'Halo de lumière (surnaturel)',
                'tentacules': 'Tentacules (cthulhu)'
            }[style] || 'Antennes';
            alienText += `- ${styleText} sur la tête, qui pulsent en rythme (DÉJÀ PRÉSENTES)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienGlow')?.checked) {
            const color = document.getElementById('glowColor')?.value || 'bleu';
            alienText += `- Corps phosphorescent : lueur ${color} qui émane de sa peau (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienTattoos')?.checked) {
            const style = document.getElementById('tattooStyle')?.value || 'symboles';
            alienText += `- Tatouages lumineux : motifs ${style} qui s'allument et s'éteignent sur tout son corps (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienHolograms')?.checked) {
            const type = document.getElementById('hologramType')?.value || 'etoiles';
            const typeText = {
                'etoiles': 'étoiles filantes',
                'planetes': 'planètes miniatures',
                'symboles': 'symboles mystiques',
                'energie': 'sphères d\'énergie',
                'animaux': 'créatures holographiques'
            }[type] || 'hologrammes';
            alienText += `- Hologrammes flottants : des ${typeText} apparaissent et dansent autour d'elle (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienVoice')?.checked) {
            alienText += `- Voix modulée : sons extraterrestres, vibrations cosmiques\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienGravity')?.checked) {
            alienText += `- Effet apesanteur : ses mouvements semblent défier la gravité, elle flotte légèrement\n`;
            hasFeatures = true;
        }
        
        if (document.getElementById('alienTeleportation')?.checked) {
            alienText += `- Effet téléportation : des scintillements lumineux créent une illusion de déplacement instantané\n`;
            hasFeatures = true;
        }
        
        return hasFeatures ? alienText : '';
    }

    // ===== MODE AVATAR (AVEC CHOIX GARDER VISAGE) =====
    generateAvatarTransformations() {
        if (!document.getElementById('enableAvatarMode')?.checked) return '';
        
        let avatarText = '\n\n🔵 TRANSFORMATIONS AVATAR (NA\'VI) - DÉJÀ ACCOMPLIES :\n';
        
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        
        if (keepFace) {
            avatarText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence (mêmes traits, mêmes pores, mêmes yeux 8K). Seul le corps est transformé en Na'vi.\n`;
        }
        
        if (document.getElementById('avatarFullBody')?.checked) {
            const skinTone = document.getElementById('avatarSkinTone')?.value || 'bleu nuit';
            avatarText += `- Corps Na'vi complet : peau ${skinTone}, morphologie élancée, caractéristiques alien\n`;
        }
        
        if (document.getElementById('avatarEars')?.checked) {
            avatarText += `- Oreilles pointues caractéristiques des Na'vi\n`;
        }
        
        if (document.getElementById('avatarTail')?.checked) {
            const tailStyle = document.getElementById('avatarTailStyle')?.value || 'fine';
            avatarText += `- Queue ${tailStyle} et expressive\n`;
        }
        
        if (document.getElementById('avatarStripes')?.checked) {
            const stripeStyle = document.getElementById('avatarStripesStyle')?.value || 'fines';
            const stripeColor = document.getElementById('avatarStripesColor')?.value || 'blanc';
            avatarText += `- Rayures lumineuses ${stripeStyle} de couleur ${stripeColor}\n`;
        }
        
        if (document.getElementById('avatarBioluminescence')?.checked) {
            avatarText += `- Points bioluminescents sur tout le corps qui s'illuminent dans l'obscurité\n`;
        }
        
        if (document.getElementById('avatarTattoos')?.checked) {
            avatarText += `- Peintures tribales Na'vi sur le visage et le corps\n`;
        }
        
        return avatarText;
    }

    // ===== MODE ANIMAL =====
    generateAnimalTransformations() {
        if (typeof window.animalData === 'undefined') return '';
        if (!document.getElementById('enableAnimalMode')?.checked) return '';
        
        const type = document.getElementById('animalType')?.value || 'chatte';
        const color = document.getElementById('animalColor')?.value || '';
        const keepFace = document.getElementById('animalKeepFace')?.checked || false;
        const ears = document.getElementById('animalEars')?.checked || false;
        const tail = document.getElementById('animalTail')?.checked || false;
        const fur = document.getElementById('animalFur')?.checked || false;
        const eyes = document.getElementById('animalEyes')?.checked || false;
        const claws = document.getElementById('animalClaws')?.checked || false;
        
        const animal = window.animalData?.[type];
        if (!animal) return '';
        
        let animalText = '\n\n🐾 TRANSFORMATION ANIMALE - DÉJÀ ACCOMPLIE :\n';
        
        if (keepFace) {
            animalText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence, seuls les attributs animaux sont ajoutés\n`;
        } else {
            animalText += `- Transformation COMPLÈTE en ${animal.name}\n`;
            if (animal.traits.museau) animalText += `- ${animal.traits.museau}\n`;
        }
        
        if (ears) animalText += `- ${animal.traits.oreilles}\n`;
        if (tail) animalText += `- ${animal.traits.queue}\n`;
        if (fur) animalText += `- ${animal.traits.fourrure || 'Fourrure texturée'}\n`;
        if (eyes) animalText += `- ${animal.traits.yeux}\n`;
        if (claws) animalText += `- ${animal.traits.griffes || 'Griffes'}\n`;
        if (animal.traits.moustaches) animalText += `- ${animal.traits.moustaches}\n`;
        if (animal.traits.comportement) animalText += `- ${animal.traits.comportement}\n`;
        
        if (color) animalText += `- Robe/couleur : ${color}\n`;
        
        animalText += `- La tenue du personnage est CONSERVÉE et s'adapte à la morphologie animale\n`;
        
        return animalText;
    }

    // ===== OPTIONS SPÉCIALES (YEUX DIFFÉRENTS + TACHES DE NAISSANCE) =====
    generateSpecialFeatures() {
        let specialText = '';
        let hasFeatures = false;
        
        // ===== 1. YEUX DIFFÉRENTS (HÉTÉROCHROMIE) =====
        if (document.getElementById('enable-eyes')?.checked) {
            const eyeLeft = document.getElementById('eye-left-select')?.value || 'bleu';
            const eyeRight = document.getElementById('eye-right-select')?.value || 'marron';
            
            // Chercher les descriptions dans eyeColorsData (si disponible)
            let leftDesc = `${eyeLeft} iris, macro photography, 8k`;
            let rightDesc = `${eyeRight} iris, macro photography, 8k`;
            
            // Si eyeColorsData existe, utiliser les descriptions précises
            if (typeof eyeColorsData !== 'undefined') {
                const leftData = eyeColorsData.find(e => e.label.toLowerCase() === eyeLeft.toLowerCase());
                const rightData = eyeColorsData.find(e => e.label.toLowerCase() === eyeRight.toLowerCase());
                
                if (leftData) leftDesc = leftData.prompt;
                if (rightData) rightDesc = rightData.prompt;
            }
            
            specialText += `\n👁️ YEUX ULTRA-RÉALISTES 8K (HÉTÉROCHROMIE) :\n`;
            specialText += `- Œil GAUCHE : ${leftDesc}\n`;
            specialText += `- Œil DROIT : ${rightDesc}\n`;
            specialText += `- Les deux yeux ont une texture hyper réaliste avec vaisseaux sanguins visibles, reflets multiples et une netteté maximale (point focal de l'image)\n`;
            specialText += `- Chaque œil est photographié en macro 8K avec des détails infimes de l'iris\n`;
            hasFeatures = true;
        }
        
        // ===== 2. TACHES DE NAISSANCE / VITILIGO =====
        if (document.getElementById('enable-skin')?.checked) {
            const skinColor = document.getElementById('skin-color-select')?.value || 'blanc';
            
            // Chercher la description dans skinColorsData (si disponible)
            let skinDesc = `${skinColor} skin patches, vitiligo, hyper-detailed 8k skin texture`;
            
            if (typeof skinColorsData !== 'undefined') {
                const skinData = skinColorsData.find(s => s.label.toLowerCase().includes(skinColor.toLowerCase()));
                if (skinData) skinDesc = skinData.prompt;
            }
            
            specialText += `\n🎨 TACHES DE NAISSANCE / VITILIGO (DÉJÀ PRÉSENTES) :\n`;
            specialText += `- ${skinDesc}\n`;
            specialText += `- Contours irréguliers et naturels, parfaitement intégrés à la peau\n`;
            specialText += `- La texture de la peau est préservée : pores visibles, relief cutané\n`;
            specialText += `- Les taches font partie intégrante de son identité et sont mises en valeur\n`;
            hasFeatures = true;
        }
        
        return hasFeatures ? specialText : '';
    }

    // ===== EFFETS AVANCÉS =====
    generateAdvancedEffects() {
        const effects = [];
        
        if (document.getElementById('effectExplosion')?.checked) effects.push('explosion de couleurs aveuglante');
        if (document.getElementById('effectTeleportation')?.checked) effects.push('effet de téléportation avec distorsion de l\'espace');
        if (document.getElementById('effectMirror')?.checked) effects.push('effet miroir avec double d\'elle-même');
        if (document.getElementById('effectTimeLapse')?.checked) effects.push('accéléré puis ralenti au moment de la révélation');
        if (document.getElementById('effectHologram')?.checked) effects.push('hologrammes flottants autour d\'elle');
        if (document.getElementById('effectClone')?.checked) effects.push('duplication en plusieurs clones qui dansent ensemble');
        
        if (document.getElementById('effectFeu')?.checked) effects.push('flammes tourbillonnantes');
        if (document.getElementById('effectEau')?.checked) effects.push('vagues d\'eau cristalline');
        if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace étincelants');
        if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs zébrant le ciel');
        if (document.getElementById('effectPapillons')?.checked) effects.push('papillons magiques multicolores');
        if (document.getElementById('effectPlumes')?.checked) effects.push('plumes légères dansantes');
        if (document.getElementById('effectLaser')?.checked) effects.push('lasers colorés synchronisés');
        if (document.getElementById('effectBulles')?.checked) effects.push('bulles scintillantes irisées');
        
        if (effects.length === 0) return '';
        
        const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
        const surpriseText = surpriseLevel <= 3 ? 'surprise subtile' : 
                            surpriseLevel <= 6 ? 'effet wow' : 
                            surpriseLevel <= 8 ? 'explosion visuelle' : 'EXPÉRIENCE HALLUCINANTE';
        
        return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseText}) : ${effects.join(', ')}.`;
    }

    // ===== COLLECTE DES DONNÉES =====
    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            leftPalmColor: document.getElementById('leftPalmColor').value,
            rightPalmColor: document.getElementById('rightPalmColor').value,
            leftPalmColorName: this.getColorName(document.getElementById('leftPalmColor').value),
            rightPalmColorName: this.getColorName(document.getElementById('rightPalmColor').value),
            startingOutfit: {
                top: document.getElementById('startingTop').value,
                bottom: document.getElementById('startingBottom').value,
                details: document.getElementById('startingDetails').value
            },
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                fumee: document.getElementById('effectFumee')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false
            },
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                bisou: document.getElementById('finalBisou')?.checked || false,
                ciao: document.getElementById('finalCiao')?.checked || false,
                masque: document.getElementById('finalMasque')?.checked || false,
                coeur: document.getElementById('finalCoeur')?.checked || false,
                clignement: document.getElementById('finalClignement')?.checked || false,
                cascade: document.getElementById('finalCascade')?.checked || false,
                revelation: document.getElementById('finalRevelation')?.checked || false,
                salut: document.getElementById('finalSalut')?.checked || false,
                regard: document.getElementById('finalRegard')?.checked || false,
                viens: document.getElementById('finalViens')?.checked || false,
                souffle: document.getElementById('finalSouffle')?.checked || false,
                epaule: document.getElementById('finalEpaule')?.checked || false,
                cheveux: document.getElementById('finalCheveux')?.checked || false,
                option: document.getElementById('finalOption')?.value || 'freeze',
                maintien: document.getElementById('finalMaintien')?.value || '2',
                emotion: document.getElementById('finalEmotion')?.value || 'satisfaite',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            },
            // MODE BÉBÉ ANIMAL CÂLIN
            animalBabyMode: {
                enabled: document.getElementById('enableAnimalBabyMode')?.checked || false,
                type: document.getElementById('animalBabyType')?.value || 'chiot',
                intensity: document.getElementById('animalBabyIntensity')?.value || 'tendre',
                positions: document.getElementById('animalBabyPositions')?.value || 'variees'
            },
            // MODE MIROIR
            mirrorMode: {
                enabled: document.getElementById('enableMirrorMode')?.checked || false,
                type: document.getElementById('mirrorType')?.value || 'classique',
                transition: document.getElementById('mirrorTransition')?.value || 'main_tendue',
                duoStyle: document.getElementById('mirrorDuoStyle')?.value || 'synchronise',
                poseFinale: document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote'
            },
            // 👇 AJOUT POUR LES 5 TENUES DES RAPPEURS
            rapperStyle: document.getElementById('rapperStyle')?.value || 'tenue1',
            rapperluxeStyle: document.getElementById('rapperluxeStyle')?.value || 'tenue1'
        };
    }

    getColorName(hex) {
        const colors = {
            '#ff0000': 'rouge passion',
            '#ff4500': 'orange brûlé',
            '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude',
            '#0000ff': 'bleu Majorelle',
            '#ffff00': 'jaune soleil',
            '#ffd700': 'or étincelant',
            '#c0c0c0': 'argent métallique',
            '#000000': 'noir profond',
            '#ffffff': 'blanc pur'
        };
        return colors[hex.toLowerCase()] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    // ===== PARTIE 1 - AUCUNE TRANSFORMATION =====
    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 
            'mouvements sensuels';

        const floatingTexts = this.generateFloatingWords('part1');

        // Construction du début commun
        let part1Text = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables, conservés avec précision

👇 INSTRUCTIONS POUR UN VISAGE HUMAIN AUTHENTIQUE - NIVEAU ULTRA-RÉALISTE MAXIMUM 👇

TEXTURE DE PEAU CINÉMATOGRAPHIQUE :
- Rendu hyper réaliste style photo professionnelle haute définition (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle complexe : pores visibles à différentes échelles, relief cutané granuleux
- Sous-tons de peau multiples : zones plus rouges (joues, nez, oreilles), zones plus pâles (paupières)
- Transparence aux tempes : veines très légèrement visibles sous la peau
- La circulation sanguine donne des nuances changeantes selon l'éclairage

MICRO-EXPRESSIONS INVOLONTAIRES :
- Infime tressaillement de la paupière en battant des cils
- Pulsation sanguine très subtile visible aux tempes
- Légère dilatation des pupilles en fixant la caméra
- La peau s'étire et se comprime avec les expressions (pores qui se déforment)

YEUX ULTRA-RÉALISTES 8K AVEC VIE :
- Iris hyper détaillés avec motifs complexes uniques (comme une photo macro médicale)
- Film lacrymal humide recouvrant l'œil - les yeux ne sont JAMAIS secs
- Reflets humides qui bougent avec le regard
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Saccades oculaires : micro-mouvements involontaires (les yeux ne sont jamais totalement fixes)
- Pupilles qui réagissent à la lumière en temps réel
- Les deux yeux ont des motifs d'iris LÉGÈREMENT différents (asymétrie naturelle)
- Cils individuels, courbés naturellement, avec différentes longueurs et directions
- Au clignement, les cils s'entremêlent légèrement avant de se séparer

LÈVRES VIVANTES :
- Texture naturelle avec ridules verticales visibles
- La peau des lèvres est plus fine et légèrement translucide sur les bords
- Très légères craquelures naturelles (invisibles à l'œil nu mais perceptibles en texture)
- Reflets humides qui changent selon l'angle (salive naturelle)
- Léger brillant aux commissures quand elle ouvre la bouche
- La lèvre inférieure a une texture différente de la lèvre supérieure

DENTS NATURELLES (si sourire) :
- Dents légèrement jaunâtres (pas blanches artificielles)
- Petites imperfections naturelles : léger chevauchement, dent légèrement de travers
- Transparence au bord des dents quand éclairées
- Gencives avec texture naturelle (pas roses uniformes)
- Salive aux commissures quand elle sourit largement

RESPIRATION ET VIE :
- Très léger mouvement de la cage thoracique (même à l'arrêt)
- Les épaules bougent imperceptiblement avec la respiration
- Le ventre se soulève très légèrement
- La respiration influence la posture de façon infime

MAINS (si visibles) :
- Veines visibles sur le dos des mains
- Tendons qui bougent quand elle plie les doigts
- Plis des jointures marqués
- Petites cicatrices/imperfections naturelles sur les doigts
- La peau des mains est texturée différemment du visage
- Cuticules autour des ongles visibles

IMPERFECTIONS CONSERVÉES :
- Petits grains de beauté (qui bougent naturellement avec la peau)
- Rougeurs légères sur les joues et le nez
- Variations de teinte (pas de couleur uniforme)
- Poils de duvet très fins visibles sur les joues et le contour du visage
- Asymétries naturelles conservées (pas de symétrie parfaite)
- Cernes très légers sous les yeux (naturels)

👁️ YEUX ULTRA-RÉALISTES 8K :
- Iris hyper détaillés avec motifs complexes (comme une photo macro)
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Reflets multiples dans les yeux (catchlights) nets et naturels
- Pupilles qui réagissent à la lumière
- Netteté maximale sur les yeux (point focal de l'image)

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage de type Rembrandt doux : triangle de lumière sur la joue
- Source principale à 45°, ombres naturelles qui sculptent les volumes
- Reflets naturels dans les yeux qui donnent de la vie au regard
- La lumière révèle la texture de la peau, ne la gomme pas

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger pour éviter l'aspect "plastique" des IA
- Pas de filtre beauté, pas de lissage excessif
- Le visage doit être indiscernable d'une vraie photo professionnelle
- Asymétries naturelles du visage conservées (pas de symétrie parfaite)

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
Regards complices et coquins

🖐️🖐️🖐️ MAINS PEINTES - VISIBLES PENDANT TOUTE LA PARTIE 1 🖐️🖐️🖐️
COULEURS ANNONÇATRICES (RESTENT VISIBLES EN PERMANENCE) :
- Paume GAUCHE : peinture ${this.userData.leftPalmColorName} (COULEUR RESTE VISIBLE)
- Paume DROITE : peinture ${this.userData.rightPalmColorName} (COULEUR RESTE VISIBLE)
- Poudre scintillante sur les doigts (VISIBLE À CHAQUE MOUVEMENT)
- Les deux couleurs restent parfaitement distinctes et ne se mélangent PAS
- ELLE GARDE SES MAINS VISIBLES PENDANT TOUTE LA DANSE
- Elle joue avec ses mains face caméra, les tourne, les admire - LES COULEURS RESTENT
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

⚠️ IMPORTANT - PENDANT TOUTE LA PARTIE 1 :
- LES COULEURS DES PAUMES SONT VISIBLES EN PERMANENCE
- JAMAIS les couleurs ne disparaissent ou ne s'effacent
- La peinture reste INTACTE et VIBRANTE du début à la fin
- Même quand elle danse, les paumes colorées sont TOUJOURS visibles

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMovesText}
    - Elle montre RÉGULIÈREMENT ses paumes colorées à la caméra
    - Les couleurs ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} sont TOUJOURS visibles

GESTES DE SÉDUCTION :
${gesturesText}
- Elle tend SES MAINS PEINTES vers la caméra pour bien montrer les couleurs
- Les paumes colorées restent VISIBLES dans tous ses gestes

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

${floatingTexts}`;

        // ===== TRANSITION ADAPTÉE SELON LE MODE =====
        if (this.userData.mirrorMode.enabled) {
            // Mode miroir - transition DIRECTE (OPTION 4)
            part1Text += `

🪞 TRANSITION MIROIR DIRECTE (dernière seconde) :

ÉTAPE 1 (5.0s) : Elle se RETOURNE vers le miroir (mouvement lent)
ÉTAPE 2 (5.3s) : Elle POSE SA MAIN À PLAT sur le miroir
ÉTAPE 3 (5.5s) : FLASH DE LUMIÈRE BLANCHE (très bref, 0.5 seconde)
ÉTAPE 4 (6.0s) : FIN PARTIE 1 - Écran blanc

⚠️ CONSIGNES SIMPLES :
- PAS de coupure brutale
- PAS d'apparition magique du clone
- Le flash est un simple effet de lumière blanche
- La transition doit être FLUIDE

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant ce flash blanc, elle a le temps de SE CHANGER COMPLÈTEMENT
- Son clone apparaît à côté d'elle pendant le flash
- La transformation a lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
        } else {
            // Mode normal - transition avec les mains
            part1Text += `

TRANSITION STANDARD :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie. Elle laisse deviner un sourire mystérieux juste avant que ses mains ne couvrent l'objectif.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif (fin de cette partie), elle aura le temps de SE CHANGER COMPLÈTEMENT
- La transformation (nouvelle tenue, nouveaux cheveux, nouveau maquillage, effets) aura lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
        }

        return part1Text;
    }

    // ===== MODE BÉBÉ ANIMAL CÂLIN =====
    generateAnimalBabyMode() {
        if (!document.getElementById('enableAnimalBabyMode')?.checked) return '';
        
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const intensity = document.getElementById('animalBabyIntensity')?.value || 'tendre';
        const positions = document.getElementById('animalBabyPositions')?.value || 'variees';
        
        const animal = window.animalBabyData?.types[animalType] || window.animalBabyData?.types.chiot;
        
        let babyText = '\n\n🐶 MODE BÉBÉ ANIMAL CÂLIN - INTERACTION ULTRA-RÉALISTE 🐱\n';
        babyText += `\n👶 ANIMAL PRÉSENT : ${animal ? animal.name : (animalType === 'chiot' ? '🐶 Chiot' : '🐱 Chaton')} - ${animal ? animal.description : (animalType === 'chiot' ? 'bébé chien mignon, joueur et affectueux' : 'bébé chat tout doux, câlin et espiègle')}\n`;
        
        babyText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INSTRUCTION PRIORITAIRE ABSOLUE - INTÉGRATION DE L'IMAGE ANIMALE 🎯
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- L'image fournie du bébé animal est INTÉGRÉE PHYSIQUEMENT dans la scène
- L'animal est RÉEL, pas une image incrustée - il a du volume, du poids
- Il interagit avec elle de façon PARFAITEMENT RÉALISTE
- Leurs peaux/poils se touchent, les textures sont respectées
- Elle le tient DANS SES MAINS, contre son corps - CONNEXION PHYSIQUE RÉELLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖼️ PLAN CADRAGE - INSTRUCTION PRÉCISE :
- PLAN MOYEN RAPPROCHÉ : cadre de la taille à la tête
- L'animal est tenu DROIT DEVANT ELLE, au niveau des seins
- VISIBLE FACE CAMÉRA : les deux (elle et l'animal) regardent le spectateur
- Elle le tient à deux mains, bien en évidence, comme pour le présenter
- Ce plan est MAINTENU pendant toute l'interaction, avec des variations

💞 COMPORTEMENT DE L'ANIMALE HUMAIN (LA DANSEUSE) :
- Elle danse TOUT EN INTERAGISSANT avec l'animal (mouvements doux)
- Mouvements de danse ADAPTÉS : ondulations lentes, rotations douces, pas glissés
- Pas de mouvements brusques qui pourraient effrayer l'animal
- Elle ALTERNE entre :
  * Danser SENSuellement avec l'animal dans les bras
  * S'arrêter pour des MOMENTS CÂLINS intenses
  * Regarder l'animal avec TENDRESSE
  * Regarder la CAMÉRA avec un sourire COMPLICE
  * Montrer fièrement l'animal au spectateur

🐾 COMPORTEMENT DE L'ANIMAL (RÉALISME ABSOLU) :
  * Il est PARFAITEMENT INTÉGRÉ dans ses bras - ne flotte pas
  * Sa fourrure/peau a une texture RÉALISTE qui bouge avec ses gestes
  * Il réagit à ses caresses en temps réel
  * Ses yeux suivent ses mouvements, il est ATTENTIF à elle
  ${animalType === 'chiot' ? 
    `* remue la queue frénétiquement
  * lèche son visage avec sa petite langue
  * jappe doucement de joie
  * se blottit contre sa poitrine
  * lui mordille les doigts délicatement
  * fait des petits bruits de contentement` : 
    `* ronronne fort contre elle
  * frotte sa tête contre son cou
  * lui donne des petits coups de patte joueurs
  * se love dans le creux de ses bras
  * lèche ses mains avec sa petite langue râpeuse
  * fait des 'miaou' tout doux`}

🤱 INTERACTIONS PHYSIQUES - CÂLINS ET JEUX :
- Elle le SERT CONTRE ELLE, le serrant doucement
- Elle pose sa JOUE sur sa tête en fermant les yeux (moment de tendresse)
- Elle lui fait des BISOUS sur le front, le nez, la tête
- Elle le BERCE comme un bébé en se balançant
- Elle le SOULÈVE pour le regarder dans les yeux
- Elle joue avec ses PATTES, les bouge doucement
- Elle lui GRATTOUILLE le ventre, derrière les oreilles
- Elle le CACHE partiellement dans son décolleté (il dépasse)
- Elle le PRÉSENTE à la caméra comme pour dire "regarde comme il est mignon"

👁️ JEUX DE REGARDS ULTRA-IMPORTANTS :
- Regards DOUX vers l'animal (amour maternel/tendre)
- Regards SÉDUCTEURS vers la CAMÉRA (pour le spectateur)
- Alternance RAPIDE entre les deux pour créer du lien
- Elle sourit en regardant l'animal, puis reporte ce sourire à la caméra
- Elle cherche l'APPROBATION du spectateur ("il est pas beau ?")

💃 DANSE ADAPTÉE (PLUS DOUCE) :
- Mouvements plus LENTS, plus FLUIDES qu'une danse normale
- Ondulations douces du bassin tout en tenant l'animal
- Rotations lentes sur elle-même
- Pas glissés pour ne pas le brusquer
- BALANCEMENT doux d'un pied sur l'autre
- La danse est comme une berceuse VISUELLE

⏱️ CHRONOLOGIE DÉTAILLÉE (6 secondes) - ELLE TIENT DÉJÀ L'ANIMAL :

SECONDE 0-1 (RÉVÉLATION) :
- Ses mains s'écartent de l'objectif, révélant qu'elle tient DÉJÀ l'animal dans ses bras
- L'animal est blotti contre elle, installation naturelle
- Premier regard CAMÉRA avec un sourire "surprise ! regarde qui est là"

SECONDE 1-2 (PRÉSENTATION) :
- Elle ajuste l'animal pour le tenir face caméra au niveau des seins (PLAN MOYEN)
- Elle le montre fièrement au spectateur
- L'animal la regarde ou regarde la caméra

SECONDE 2-3 (PREMIERS CÂLINS) :
- Elle le serre contre elle, pose sa joue sur lui
- Yeux fermés, expression de pur bonheur
- L'animal réagit (ronronne/remue la queue)

SECONDE 3-4 (DANSE CÂLINE) :
- Elle danse DOUCEMENT avec lui dans les bras
- Ondulations lentes, rotations
- Regards alternés animal/caméra

SECONDE 4-5 (JEUX ET BISOUS) :
- Elle lui fait des bisous sur la tête
- Joue avec ses pattes
- Moment de complicité INTENSE

SECONDE 5-6 (FINALE - CONNEXION TOTALE) :
- Elle le serre TRÈS FORT contre elle dans un dernier CÂLIN intense
- Elle pose sa joue sur sa tête, FERME LES YEUX avec un sourire de pur bonheur
- Puis elle OUVRE LENTEMENT LES YEUX vers la CAMÉRA, regard SÉDUCTEUR et COMPLICE
- Elle lui fait un dernier BISOU TENDRE sur le front tout en fixant le spectateur
- Elle le PRÉSENTE fièrement à la caméra au niveau des seins
- Son expression alterne entre AMOUR pour l'animal et SENSUALITÉ pour le spectateur
- L'animal fait un dernier câlin (lèche ou frotte sa tête contre elle)
- FREEZE sur cette image de BONHEUR PARTAGÉ entre elle, l'animal et le spectateur
- MOMENT PARFAIT de CONNEXION TOTALE - SENSUALITÉ DOUCE et MAGNÉTIQUE

💡 RAPPELS CRUCIAUX :
- L'animal est PHYSIQUEMENT PRÉSENT, pas un effet spécial
- Elle le tient VRAIMENT dans ses bras (ombre, poids, volume)
- La danse est ADAPTÉE à sa présence (plus douce)
- Les regards alternés sont ESSENTIELS pour créer du lien
- Le RÉALISME est ABSOLUMENT PRIORITAIRE
- L'émotion doit être VISCÉRALE - on doit SENTIR l'amour
- La sensualité EST PRÉSENTE mais plus DOUCE, plus MATERNELLE
- C'est le MÉLANGE PARFAIT de SEXY et de TENDRE

${intensity === 'tendre' ? 
  '🎯 INTENSITÉ : TENDRE - Priorité aux câlins, bisous, moments doux' : 
  intensity === 'joueur' ? 
  '🎯 INTENSITÉ : JOUEUR - Priorité aux jeux, aux rires, à l\'espièglerie' : 
  '🎯 INTENSITÉ : MIXTE - Équilibre parfait entre câlins et jeux'}

${positions === 'variees' ? 
  '📍 POSITIONS : VARIÉES - Toutes les positions sont explorées naturellement' : 
  positions === 'fixe' ? 
  '📍 POSITIONS : FIXE - Principalement tenu face caméra au niveau des seins' : 
  '📍 POSITIONS : DYNAMIQUES - Changements de positions fluides'}
`;
        
        return babyText;
    }

    // ===== MODE MIROIR (CORRIGÉ - TRANSITION DIRECTE OPTION 4) =====
    generateMirrorMode() {
        if (!document.getElementById('enableMirrorMode')?.checked) return '';
        
        const mirrorType = document.getElementById('mirrorType')?.value || 'classique';
        const duoStyle = document.getElementById('mirrorDuoStyle')?.value || 'synchronise';
        const poseFinale = document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote';
        
        const mirrorData = window.mirrorModeData || {};
        const type = mirrorData.types?.[mirrorType] || { name: "Clone identique", description: "" };
        const duo = mirrorData.duo_styles?.[duoStyle] || { name: "Synchronisé", description: "" };
        
        let mirrorText = '\n\n🪞 MODE MIROIR - DOUBLE SENSUEL 🪞\n';
        mirrorText += `\n🎭 TYPE DE CLONE : ${type.name} - ${type.description}\n`;
        
        mirrorText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INSTRUCTION PRIORITAIRE - SORTIE RÉALISTE DU MIROIR 🎯
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🪞 SITUATION DE BASE (PARTIE 1) :
- L'image de référence montre : ELLE FACE CAMÉRA, MIROIR DERRIÈRE, REFLET DE SON DOS VISIBLE
- Elle danse FACE CAMÉRA (son visage visible), son REFLET dans le miroir l'imite
- Elle ALTERNE les regards : CAMÉRA (séduction) / REFLET (complicité)
- Le REFLET fait EXACTEMENT les mêmes mouvements qu'elle (miroir parfait)
- Ambiance INTIME, CHAUDE, SENSUELLE - éclairage tamisé

🔄 TRANSITION RÉALISTE - DÉJÀ EFFECTUÉE PENDANT LE FLASH :

✨ PARTIE 2 - LE DUO FACE CAMÉRA (6 secondes) :

SECONDE 0-1 (INSTALLATION) :
- Les DEUX femmes sont maintenant côte à côte, FACE CAMÉRA
- ${mirrorType === 'classique' ? 'Elles sont STRICTEMENT IDENTIQUES (mêmes traits, même tenue)' : 
   mirrorType === 'tenue_inversee' ? 'Elles sont identiques mais le clone a les COULEURS INVERSÉES (effet négatif élégant)' : 
   'Elles ont le même visage mais le clone a un REGARD PLUS INTENSE, plus magnétique'}
- Premier regard COMPLICE entre elles

SECONDE 1-2 (PRÉSENTATION) :
- Elles se regardent, SOURIENT
- ${mirrorType === 'tenue_inversee' ? 'Le contraste des couleurs est magnifique' : ''}
- Première interaction : elles se prennent la main

SECONDE 2-4 (DANSE À DEUX SENSUELLE) :
STYLE DE DANSE : ${duo.name} - ${duo.description}
${duoStyle === 'synchronise' ? 
  `- Mouvements PARFAITEMENT SYNCHRONISÉS
- On dirait un miroir de l'autre, mais en vrai
- Leur synchronicité est HYPNOTIQUE` : 
  duoStyle === 'miroir' ? 
  `- Mouvements EN MIROIR : quand l'une va à droite, l'autre va à gauche
- Effet de symétrie PARFAIT
- Leurs corps se répondent` : 
  duoStyle === 'complementaire' ? 
  `- Mouvements DIFFÉRENTS mais COMPLÉMENTAIRES
- L'une fait une figure, l'autre la complète
- Chorégraphie à deux unique` : 
  `- Mouvements LENTS et SENSUELS
- Jeux de regards intenses
- Se caressent en dansant`}

- Regards complices entre elles
- Clins d'œil échangés
- Caresses légères sur le bras
- Se frôlent en dansant
- L'une passe la main dans les cheveux de l'autre
- Se prennent par la taille
- Regards vers la caméra en duo

SECONDE 4-5 (MONTÉE DE TENSION) :
- Elles se RAPPROCHENT
- Se touchent (bras, taille, épaules)
- Regards de plus en plus INTENSES
- Sourires COQUINS

SECONDE 5-6 (FINALE - POSE FACE CAMÉRA) :

POSE FINALE CHOISIE : ${poseFinale === 'cote_a_cote' ? 'Côte à côte, main dans la main' : 
                       poseFinale === 'lune_derriere' ? 'L\'une derrière l\'autre, mains sur épaules' : 
                       poseFinale === 'face_a_face' ? 'Face à face, puis regard caméra' : 
                       poseFinale === 'bras_dessus' ? 'Bras dessus bras dessous' : 
                       'Tête sur l\'épaule, puis regard caméra'}

${poseFinale === 'cote_a_cote' ? 
  `- Côte à côte, se tenant par la main
- Hanches LÉGÈREMENT décalées
- Regards DROIT DANS LA CAMÉRA
- Sourires COMPLICES et SENSUELS
- FREEZE sur cette image de DUO PARFAIT` : 
  poseFinale === 'lune_derriere' ? 
  `- L'une DERRIÈRE l'autre
- Celle devant regarde caméra
- Celle derrière a les mains sur ses épaules
- Regard de l'autre vers le côté, mystérieuse
- FREEZE : image de PROTECTION SENSUELLE` : 
  poseFinale === 'face_a_face' ? 
  `- Face à face, se regardant avec INTENSITÉ
- Leurs fronts se touchent presque
- Puis TOURNENT LA TÊTE vers la caméra
- EN MÊME TEMPS, regard caméra
- FREEZE : connexion DOUBLE` : 
  poseFinale === 'bras_dessus' ? 
  `- Bras dessus bras dessous
- Hanches COLLÉES
- Têtes inclinées l'une vers l'autre
- Regards CAMÉRA, sourires ÉCLATANTS
- FREEZE : complicité totale` : 
  `- L'une pose la tête sur l'épaule de l'autre
- Yeux MI-CLOS, expression de pur bonheur
- Puis OUVRE LES YEUX vers la caméra
- L'autre regarde caméra en souriant
- FREEZE : TENDRE et SENSUEL`}

💡 RAPPELS CRUCIAUX :
- Les DEUX femmes sont STRICTEMENT IDENTIQUES (sauf option choisie)
- La transition a eu lieu pendant le flash blanc (invisible)
- Leurs expressions sont VIVANTES (micro-expressions, respiration)
- La sensualité est PRÉSENTE mais DOUCE (complicité avant tout)
- Leurs regards vers la caméra créent une connexion avec le spectateur
- La pose finale est MAINTENUE 2 secondes avant freeze
- L'émotion doit être : "Elles sont deux, mais c'est DOUBLE LE BONHEUR"

${mirrorType === 'regard_different' ? 
  '⚠️ LE CLONE A UN REGARD PLUS INTENSE : plus sombre, plus magnétique, comme un alter ego plus LIBÉRÉ' : ''}
`;
        
        return mirrorText;
    }

    // ===== PARTIE 2 - TOUTES LES TRANSFORMATIONS APPLIQUÉES =====
    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs et victorieux\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés et complices\n';
        if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
        if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra pendant la danse\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois, de plus en plus charmeur\n`;
        }

        // Instructions de danse adaptée pour le mode bébé animal
        const animalBabyDanceInstructions = this.userData.animalBabyMode.enabled ? 
            `- Danse ADAPTÉE : mouvements PLUS DOUX, PLUS LENTS pour ne pas brusquer l'animal
- Ondulations LÉGÈRES du bassin en le tenant
- Rotations DOUCES sur elle-même
- BALANCEMENTS tendres d'un pied sur l'autre
- La danse devient une CARESSE VISUELLE\n` : '';

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 
            'mouvements encore plus intenses';

        const actionType = this.getActionType(this.userData.country);
        const decorText = this.getUnifiedDecor();
        const actionAleatoire = this.getRandomAction(actionType);
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();
        const floatingTexts = this.generateFloatingWords('part2');
        
        // TOUTES LES TRANSFORMATIONS SONT GÉNÉRÉES ICI (UNIQUEMENT EN PARTIE 2)
        const alienTransformations = this.generateAlienTransformations();
        const avatarTransformations = this.generateAvatarTransformations();
        const animalTransformations = this.generateAnimalTransformations();
        const animalBabyMode = this.generateAnimalBabyMode();
        const mirrorMode = this.generateMirrorMode();
        const specialFeatures = this.generateSpecialFeatures();
        
        const advancedEffects = this.generateAdvancedEffects();
        const script = this.generateScript();

        const baseEffects = [];
        if (document.getElementById('effectConfettis')?.checked) baseEffects.push('confettis aux couleurs de la tenue');
        if (document.getElementById('effectPoudre')?.checked) baseEffects.push('poudre scintillante');
        if (document.getElementById('effectPétales')?.checked) baseEffects.push('pluie de pétales');
        if (document.getElementById('effectFumee')?.checked) baseEffects.push('fumée légère');
        if (document.getElementById('effectLumières')?.checked) baseEffects.push('lumières colorées');
        if (document.getElementById('effectPaillettes')?.checked) baseEffects.push('paillettes dans l\'air');
        
        const baseEffectsText = baseEffects.length > 0 ? baseEffects.join(', ') : 'poudre scintillante';

        // Vérifier les options Avatar
        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;

        // ===== CONSTRUCTION DES SECTIONS PRIORITAIRES =====
        let priorityReinforcement = '';
        let hasPriorityEyes = false;
        let hasPrioritySkin = false;

        // Extraire les sections spéciales si elles existent
        if (specialFeatures.includes('👁️ YEUX ULTRA-RÉALISTES 8K (HÉTÉROCHROMIE)')) {
            hasPriorityEyes = true;
            priorityReinforcement += `
═════════════════════════════════════════════════════════════════════════════
🔴🔴🔴 INSTRUCTION PRIORITAIRE ABSOLUE POUR LA VIDÉO - YEUX DIFFÉRENTS 🔴🔴🔴
═════════════════════════════════════════════════════════════════════════════
- LES YEUX SONT DE COULEURS DIFFÉRENTES (HÉTÉROCHROMIE)
- Œil GAUCHE et Œil DROIT ont des couleurs distinctes et VISIBLEMENT différentes
- CETTE CARACTÉRISTIQUE EST ESSENTIELLE ET DOIT ÊTRE CLAIREMENT VISIBLE
- PRIORITÉ MAXIMALE - NE PAS IGNORER CETTE INSTRUCTION
═════════════════════════════════════════════════════════════════════════════
`;
        }

        if (specialFeatures.includes('🎨 TACHES DE NAISSANCE / VITILIGO')) {
            hasPrioritySkin = true;
            priorityReinforcement += `
═════════════════════════════════════════════════════════════════════════════
🔴🔴🔴 INSTRUCTION PRIORITAIRE ABSOLUE POUR LA VIDÉO - TACHES DE NAISSANCE 🔴🔴🔴
═════════════════════════════════════════════════════════════════════════════
- LA PEAU COMPORTE DES TACHES DE NAISSANCE / VITILIGO
- Ces taches sont VISIBLES sur le visage et le corps
- ELLES FONT PARTIE INTÉGRANTE DE SON IDENTITÉ
- PRIORITÉ MAXIMALE - NE PAS IGNORER CETTE INSTRUCTION
═════════════════════════════════════════════════════════════════════════════
`;
        }

        // Déterminer les instructions visage selon le cas
        let faceInstructions = '';
        let eyesInstructions = '';

        if (avatarMode && !keepFace) {
            // CAS 1 : Avatar COMPLET (visage transformé)
            faceInstructions = `
👇 INSTRUCTIONS POUR UN VISAGE AVATAR COMPLET 👇
- Transformation COMPLète en Na'vi
- Peau bleue caractéristique (${document.getElementById('avatarSkinTone')?.value || 'bleu nuit'})
- Traits faciaux Na'vi : nez large, arcades sourcilières prononcées, expression alien
- Oreilles pointues
- Peintures tribales sur le visage selon le type d'avatar (standard/guerrier/chef)
- Expression ${country.dance === "Danse de Combat" ? "guerrière et fière" : country.dance === "Danse du Chef" ? "majestueuse et autoritaire" : "mystique et en harmonie avec la nature"}`;
            
            eyesInstructions = `
👁️ YEUX AVATAR CARACTÉRISTIQUES :
- Iris de couleur jaune/or caractéristique des Na'vi
- Pupilles verticales comme un félin
- Expression perçante et mystique
- Reflets lumineux dans les yeux
- Netteté maximale sur les yeux (point focal de l'image)`;
        } else {
            // CAS 2 : Visage humain conservé (pour avatar ET pour non-avatar)
            faceInstructions = `
👇 INSTRUCTIONS POUR UN VISAGE HUMAIN AUTHENTIQUE - NIVEAU ULTRA-RÉALISTE MAXIMUM 👇

TEXTURE DE PEAU CINÉMATOGRAPHIQUE :
- Rendu hyper réaliste style photo professionnelle haute définition (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle complexe : pores visibles à différentes échelles, relief cutané granuleux
- Sous-tons de peau multiples : zones plus rouges (joues, nez, oreilles), zones plus pâles (paupières)
- Transparence aux tempes : veines très légèrement visibles sous la peau
- La circulation sanguine donne des nuances changeantes selon l'éclairage
${hasPrioritySkin ? '- Les taches de naissance prioritaires décrites ci-dessus sont intégrées avec cette texture' : ''}

MICRO-EXPRESSIONS INVOLONTAIRES :
- Infime tressaillement de la paupière en battant des cils
- Pulsation sanguine très subtile visible aux tempes
- Légère dilatation des pupilles en fixant la caméra
- La peau s'étire et se comprime avec les expressions (pores qui se déforment)

YEUX ULTRA-RÉALISTES 8K AVEC VIE :
- Iris hyper détaillés avec motifs complexes uniques (comme une photo macro médicale)
- Film lacrymal humide recouvrant l'œil - les yeux ne sont JAMAIS secs
- Reflets humides qui bougent avec le regard
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Saccades oculaires : micro-mouvements involontaires (les yeux ne sont jamais totalement fixes)
- Pupilles qui réagissent à la lumière en temps réel
- Les deux yeux ont des motifs d'iris LÉGÈREMENT différents (asymétrie naturelle)
- Cils individuels, courbés naturellement, avec différentes longueurs et directions
- Au clignement, les cils s'entremêlent légèrement avant de se séparer

LÈVRES VIVANTES :
- Texture naturelle avec ridules verticales visibles
- La peau des lèvres est plus fine et légèrement translucide sur les bords
- Très légères craquelures naturelles (invisibles à l'œil nu mais perceptibles en texture)
- Reflets humides qui changent selon l'angle (salive naturelle)
- Léger brillant aux commissures quand elle ouvre la bouche
- La lèvre inférieure a une texture différente de la lèvre supérieure

DENTS NATURELLES (si sourire) :
- Dents légèrement jaunâtres (pas blanches artificielles)
- Petites imperfections naturelles : léger chevauchement, dent légèrement de travers
- Transparence au bord des dents quand éclairées
- Gencives avec texture naturelle (pas roses uniformes)
- Salive aux commissures quand elle sourit largement

RESPIRATION ET VIE :
- Très léger mouvement de la cage thoracique (même à l'arrêt)
- Les épaules bougent imperceptiblement avec la respiration
- Le ventre se soulève très légèrement
- La respiration influence la posture de façon infime

MAINS (si visibles) :
- Veines visibles sur le dos des mains
- Tendons qui bougent quand elle plie les doigts
- Plis des jointures marqués
- Petites cicatrices/imperfections naturelles sur les doigts
- La peau des mains est texturée différemment du visage
- Cuticules autour des ongles visibles

IMPERFECTIONS CONSERVÉES :
- Petits grains de beauté (qui bougent naturellement avec la peau)
- Rougeurs légères sur les joues et le nez
- Variations de teinte (pas de couleur uniforme)
- Poils de duvet très fins visibles sur les joues et le contour du visage
- Asymétries naturelles conservées (pas de symétrie parfaite)
- Cernes très légers sous les yeux (naturels)

- Le visage doit être STRICTEMENT IDENTIQUE à l'image de référence - AUCUNE modification des traits`;
            
            eyesInstructions = `
👁️ YEUX :
${hasPriorityEyes ? 
  `⚠️ CONFORMÉMENT AUX INSTRUCTIONS PRIORITAIRES CI-DESSUS, LES YEUX SONT DE COULEURS DIFFÉRENTES (HÉTÉROCHROMIE) AVEC PRÉCISION 8K :
- Iris hyper détaillés avec motifs complexes uniques (comme une photo macro médicale)
- Film lacrymal humide recouvrant l'œil - les yeux ne sont JAMAIS secs
- Reflets humides qui bougent avec le regard
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Saccades oculaires : micro-mouvements involontaires (les yeux ne sont jamais totalement fixes)
- Pupilles qui réagissent à la lumière en temps réel
- Les deux yeux ont des motifs d'iris VISIBLEMENT différents (hétérochromie)
- Cils individuels, courbés naturellement, avec différentes longueurs et directions
- Au clignement, les cils s'entremêlent légèrement avant de se séparer
- Netteté maximale sur les yeux (point focal de l'image)` 
  : 
  `- Iris hyper détaillés avec motifs complexes (comme une photo macro médicale)
- Film lacrymal humide recouvrant l'œil - les yeux ne sont JAMAIS secs
- Reflets humides qui bougent avec le regard
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Saccades oculaires : micro-mouvements involontaires (les yeux ne sont jamais totalement fixes)
- Pupilles qui réagissent à la lumière en temps réel
- Cils individuels, courbés naturellement, avec différentes longueurs et directions
- Au clignement, les cils s'entremêlent légèrement avant de se séparer
- Netteté maximale sur les yeux (point focal de l'image)`}`;
        }

        const detailsMicroscopiques = `
DÉTAILS MICROSCOPIQUES SUPPLÉMENTAIRES :
- La peau autour des yeux est plus fine et légèrement translucide
- Les cernes naturels sont présents mais subtils
- Les paupières ont des plis naturels et une texture différente du reste du visage
- Le nez a des pores plus larges et visibles
- Les oreilles ont du cartilage visible et de fins poils de duvet
- Le cou a des plis naturels et une texture de peau différente
`;

        // 👇 GESTION DE LA TENUE POUR LE RAPPEUR URBAIN (5 STYLES)
        let outfitText = this.userData.finalOutfit;
        
        if (this.userData.country === 'rapper' && countries.rapper.tenues) {
            const style = this.userData.rapperStyle;
            const tenue = countries.rapper.tenues[style];
            if (tenue) {
                outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
            }
        }
        
        // 👇 GESTION DE LA TENUE POUR LE RAPPEUR AMÉRICAIN LUXE (5 STYLES)
        if (this.userData.country === 'rapperluxe' && countries.rapperluxe.tenues) {
            const style = this.userData.rapperluxeStyle;
            const tenue = countries.rapperluxe.tenues[style];
            if (tenue) {
                outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
            }
        }

        return `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE - ABSOLUMENT CRUCIAL :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE, expression encore plus intense
- RECONNAISSABLE AU PREMIER COUP D'ŒIL - AUCUNE ERREUR POSSIBLE
- La transformation ne concerne QUE les vêtements, le corps et les accessoires
${avatarTransformations.includes('VISAGE HUMAIN CONSERVÉ') ? '- ⚠️ Le visage reste HUMAIN et IDENTIQUE à la partie 1 - seuls les éléments Na\'vi sont ajoutés' : ''}

${priorityReinforcement}

${faceInstructions}

${eyesInstructions}

${detailsMicroscopiques}

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage de type Rembrandt doux : triangle de lumière sur la joue
- Source principale à 45°, ombres naturelles qui sculptent les volumes
- Reflets naturels dans les yeux qui donnent de la vie au regard
- La lumière révèle la texture de la peau, ne la gomme pas

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger pour éviter l'aspect "plastique" des IA
- Pas de filtre beauté, pas de lissage excessif
${!avatarMode || keepFace ? `
- Le visage doit être indiscernable d'une vraie photo professionnelle
- Asymétries naturelles du visage conservées (pas de symétrie parfaite)` : `
- Le visage doit être parfaitement intégré au corps Na'vi
- Rendu cohérent et réaliste de la transformation`}

⚠️ TRANSITION NATURELLE - INSTRUCTION CAPITALE ⚠️ :
- Pendant le court instant où les mains masquaient l'objectif (fin de la PARTIE 1), elle a eu le temps de SE CHANGER COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA - RIEN de magique ou d'instantané
- Dès que les mains s'écartent, le résultat FINAL est déjà visible
- AUCUN changement ne doit être visible pendant cette PARTIE 2 (cheveux déjà colorés, tenue déjà portée, maquillage déjà appliqué)
- LA TRANSFORMATION DOIT SEMBLER NATURELLE, comme un simple changement de tenue en coulisses
- PAS d'effet de morphing, pas de transition magique - c'est DÉJÀ FAIT quand les mains se retirent
- Le réalisme est PRIMORDIAL - on doit croire qu'elle s'est changée pendant que l'écran était noir
${script}

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE RETRAIT DES MAINS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA dès que ses mains se retirent' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI" avec son doigt, lentement, en vous fixant' : ''}
- Sourire victorieux et charmeur

NOUVELLE TENUE (TOTALEMENT REMPLACÉE - DÉJÀ PORTÉE) :
Elle porte maintenant une tenue spectaculaire (déjà enfilée pendant la transition) :
${outfitText}

CHEVEUX TRANSFORMÉS - COULEURS FLUO (DÉJÀ COLORÉS) :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille à chaque mouvement (DÈS LA PREMIÈRE IMAGE)
- Reflets néon qui attirent le regard` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})
- Coiffés élégamment (déjà fait)`}

${alienTransformations}
${avatarTransformations}
${animalTransformations}
${animalBabyMode}
${mirrorMode}
${!hasPriorityEyes && !hasPrioritySkin ? specialFeatures : ''}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux (déjà appliqué)
- Yeux intensifiés (déjà maquillés)
- Lèvres brillantes (déjà fait)
- Paillettes subtiles (déjà présentes)
- Peau légèrement huilée pour faire scintiller la lumière (déjà préparée)

DANSE APRÈS TRANSFORMATION - MOUVEMENTS ENCORE PLUS INTENSES :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    ${animalBabyDanceInstructions}
    - ${danceMovesText}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}
- Elle exécute cette action TOUT EN DANSANT DE FAÇON SENSUELLE
- Ses mouvements de danse s'intègrent parfaitement à l'action

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA NOUVELLE TENUE (DÉJÀ PORTÉE) :
- Jeux avec les éléments de la tenue
- Mise en valeur des atouts
- Découvertes subtiles

JEUX AVEC LES CHEVEUX FLUO (DÉJÀ COLORÉS) :
- Elle passe ses mains dans ses cheveux fluo (déjà colorés)
- Les fait virevolter en tournant
- Joue avec les mèches colorées
- Les cheveux fluo deviennent un élément central de la séduction

${floatingTexts}

ARRIÈRE-PLAN - DÉCOR UNIFIÉ :
${decorText}

${advancedEffects}

EFFETS SPECTACULAIRES DE BASE :
Au moment où ses mains révèlent la transformation, explosion de ${baseEffectsText}

🎬 FINALE SPECTACULAIRE - CONNEXION AVEC LE PUBLIC :

⏱️ CHRONOLOGIE DE LA FIN (6 secondes totales) :
- SECONDES 1 à 5 : Danse intense et sensuelle comme décrite ci-dessus
- SECONDE 5 à 6 (DERNIÈRE SECONDE) : ${finale}

🎯 INTERACTION DIRECTE AVEC LE PUBLIC :
- Pendant TOUTE cette séquence finale, ${publicInteraction}
- Elle danse POUR le spectateur, PAS pour elle-même
- Chaque geste est une OFFANDE au public, une invitation à la désirer
- Ses expressions faciales sont EXAGÉRÉMENT SENSUELLES, comme si elle voulait séduire chaque personne derrière l'écran

📸 MAINTIEN DE POSE SENSUEL (${document.getElementById('finalMaintien')?.value || '2'} secondes) :
- Pendant le maintien, son corps reste figé mais SON VISAGE CONTINUE DE VIVRE
- Ses yeux parcourent lentement l'écran, s'attardant sur chaque spectateur imaginaire
- Sa respiration est AMPLE, sa poitrine se soulève et s'abaisse visiblement
- Un léger sourire ${document.getElementById('finalEmotion')?.value || 'satisfaite'} flotte sur ses lèvres
- Elle semble retenir son souffle, créant une tension sensuelle

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique - elle danse POUR le spectateur, face à lui
- Éclairage cinématographique chaleureux et enveloppant
- Lumières spécifiques pour faire ressortir les cheveux fluo et les effets spéciaux
- Pendant le finale, la lumière se resserre sur elle (spotlight) pour accentuer le moment
- Ambiance intimiste et professionnelle

RAPPEL ULTIME - TRANSITION NATURELLE :
- La transformation est DÉJÀ TERMINÉE au début de cette partie
- AUCUNE métamorphose visible pendant ces 6 secondes
- Tout a eu lieu PENDANT que les mains cachaient l'objectif dans la PARTIE 1
- Le réalisme est ABSOLUMENT CRUCIAL - on doit croire qu'elle s'est changée en coulisses
- La FINALE est le MOMENT CLÉ à retenir - elle doit être PARFAITE`;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        const eyesDiff = document.getElementById('enable-eyes')?.checked || false;
        const skinDiff = document.getElementById('enable-skin')?.checked || false;
        const animalMode = document.getElementById('enableAnimalMode')?.checked || false;
        const animalBabyMode = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const mirrorMode = document.getElementById('enableMirrorMode')?.checked || false;
        
        let avatarLine = '';
        if (avatarMode) {
            if (keepFace) {
                avatarLine = '\n15. ⚠️ MODE AVATAR AVEC VISAGE HUMAIN CONSERVÉ : Le visage reste STRICTEMENT IDENTIQUE à l\'image de référence (mêmes traits, mêmes imperfections), seul le corps devient Na\'vi';
            } else {
                avatarLine = '\n15. MODE AVATAR ACTIVÉ : Transformation COMPLÈTE en Na\'vi (peau bleue, traits alien, yeux jaunes)';
            }
        }
        
        let animalLine = '';
        if (animalMode) {
            const animalType = document.getElementById('animalType')?.value || 'chatte';
            const animalNames = {
                'chatte': 'CHATTE',
                'lapine': 'LAPINE',
                'tigresse': 'TIGRESSE',
                'panthere': 'PANTHÈRE',
                'lionne': 'LIONNE'
            };
            animalLine = `\n16. MODE ANIMAL ACTIVÉ : Transformation en ${animalNames[animalType] || animalType} - Attributs animaux ajoutés au corps`;
        }
        
        let animalBabyLine = '';
        if (animalBabyMode) {
            const typeNames = { chiot: '🐶 CHIOT', chaton: '🐱 CHATON' };
            const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
            animalBabyLine = `\n17. MODE BÉBÉ ANIMAL CÂLIN ACTIVÉ : Interaction réaliste avec ${typeNames[animalType] || 'un animal'}. La danse est PLUS DOUCE pour préserver l'animal. Alternance regards tendres (animal) et séducteurs (caméra). Câlins, bisous, jeux - FINALE SPÉCIALE avec l'animal (remplace les gestes finaux). RÉALISME ABSOLU.`;
        }
        
        let mirrorLine = '';
        if (mirrorMode) {
            const transitionNames = {
                'main_tendue': 'Main tendue',
                'contournement': 'Contournement',
                'derriere': 'Par derrière',
                'danse_progressive': 'Danse progressive'
            };
            const transition = document.getElementById('mirrorTransition')?.value || 'main_tendue';
            mirrorLine = `\n18. MODE MIROIR ACTIVÉ : Transition "${transitionNames[transition]}" - Le clone sort du miroir de façon réaliste. Danse à deux ${document.getElementById('mirrorDuoStyle')?.value || 'synchronisée'}. Pose finale ${document.getElementById('mirrorPoseFinale')?.value || 'côte à côte'}. Les deux sont ${document.getElementById('mirrorType')?.value === 'classique' ? 'identiques' : 'avec variation'}. SENSUALITÉ DOUBLÉE.`;
        }
        
        let specialLine = '';
        if (eyesDiff && skinDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Yeux de couleurs différentes (hétérochromie) + Taches de naissance/vitiligo - Rendu macro 8K avec film lacrymal humide, micro-expressions, respiration visible';
        } else if (eyesDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Yeux de couleurs différentes (hétérochromie) - Rendu macro 8K avec vaisseaux sanguins visibles, film lacrymal humide, saccades oculaires';
        } else if (skinDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Taches de naissance/vitiligo - Rendu hyper-réaliste 8K avec texture de peau préservée, pores visibles, intégration naturelle';
        }
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1 - AUCUNE ERREUR POSSIBLE
2. TRANSITION NATURELLE OBLIGATOIRE : La transformation a eu lieu HORS CAMÉRA pendant que les mains cachaient l'objectif - RIEN de magique, tout est DÉJÀ FAIT au début de la partie 2
3. RENDU ULTRA-RÉALISTE DU VISAGE : ${!avatarMode || keepFace ? 'Peau avec pores, grains de beauté, imperfections - PAS DE PEAU LISSE IA. Micro-expressions involontaires, respiration visible, film lacrymal humide' : 'Peau bleue Na\'vi avec traits alien caractéristiques'}
4. YEUX 8K : ${!avatarMode || keepFace ? 'Iris hyper détaillés, vaisseaux visibles, reflets multiples nets, film lacrymal humide, saccades oculaires naturelles' : 'Iris jaunes/or avec pupilles verticales'}
5. SILENCE TOTAL : Pas un mot - elle communique par sa danse, ses regards et ses sourires
6. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante, elle joue avec le spectateur
7. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS à la caméra' : ''} ${this.userData.gestures.viens ? 'et gestes "VIENS"' : ''}
8. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE : Plus rien de la tenue initiale
9. CHEVEUX ${this.userData.enableFluo ? 'TRANSFORMÉS EN COULEURS FLUO' : 'CONSERVÉS NATURELS'}
10. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} des paumes = couleurs dominantes de la tenue finale
11. MOUVEMENTS PRÉCIS : Chorégraphie technique et sensuelle
12. INSPIRATION CULTURELLE : ${country.name} - ${country.dance}
13. ⚠️ TRANSFORMATION DÉJÀ ACCOMPLIE - CRUCIAL : AUCUN changement visible pendant la PARTIE 2 - tout a eu lieu PENDANT que les mains cachaient l'objectif
14. FINALE SPECTACULAIRE : À la dernière seconde, elle exécute son geste final face au public, maintient la pose, puis effet de fin choisi${avatarLine}${animalLine}${animalBabyLine}${mirrorLine}${specialLine}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        
        let part1 = this.generatePart1();
        let part2 = this.generatePart2();
        let consignes = this.generateConsignes();
        
        return {
            part1: part1,
            part2: part2,
            consignes: consignes,
            full: part1 + '\n\n' + part2 + '\n\n' + consignes
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) {
        console.error("❌ Grille des personnages non trouvée!");
        return;
    }
    
    if (typeof countries === 'undefined') {
        console.error("❌ countries n'est pas défini!");
        grid.innerHTML = '<div style="color: red; padding: 20px;">Erreur: Personnages non chargés</div>';
        return;
    }
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
    console.log(`✅ ${Object.keys(countries).length} personnages chargés`);
    
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const selectedSpan = document.querySelector('#selectedCountry span');
        if (selectedSpan) {
            selectedSpan.textContent = countries[firstCard.dataset.country].name;
        }
    }
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const selectedSpan = document.querySelector('#selectedCountry span');
            if (selectedSpan) {
                selectedSpan.textContent = countries[this.dataset.country].name;
            }
        });
    });
    
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(search) ? 'block' : 'none';
            });
        });
    }
}

function initEvents() {
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    
    if (!uploadArea || !imageInput || !imagePreview || !previewImg || !removeBtn) return;
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#00f3ff';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImage(file);
    });
    
    imageInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleImage(e.target.files[0]);
    });
    
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        imageInput.value = '';
        previewImg.src = '#';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON';
    const alienActive = document.getElementById('enableAlienMode')?.checked ? '👽' : '';
    const avatarActive = document.getElementById('enableAvatarMode')?.checked ? '🔵' : '';
    const keepFace = document.getElementById('avatarKeepFace')?.checked ? '👤' : '';
    const animalActive = document.getElementById('enableAnimalMode')?.checked ? '🐾' : '';
    const animalBabyActive = document.getElementById('enableAnimalBabyMode')?.checked ? '🐶' : '';
    const mirrorActive = document.getElementById('enableMirrorMode')?.checked ? '🪞' : '';
    const eyesActive = document.getElementById('enable-eyes')?.checked ? '👁️' : '';
    const skinActive = document.getElementById('enable-skin')?.checked ? '🎨' : '';
    
    const recap = `
🌍 Personnage : ${country.name}
💃 Danse : ${country.dance}
💇 Cheveux fluo : ${fluoActive} ${alienActive} ${avatarActive} ${keepFace} ${animalActive} ${animalBabyActive} ${mirrorActive} ${eyesActive} ${skinActive}
    `;
    
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

// ==================== GESTION DES OPTIONS CONDITIONNELLES ====================

function setupConditionalOptions() {
    // Mode Alien
    const alienSkin = document.getElementById('alienSkin');
    const alienEyes = document.getElementById('alienEyes');
    const alienAntenna = document.getElementById('alienAntenna');
    const alienGlow = document.getElementById('alienGlow');
    const alienTattoos = document.getElementById('alienTattoos');
    const alienHolograms = document.getElementById('alienHolograms');
    
    if (alienSkin) {
        alienSkin.addEventListener('change', function() {
            const options = document.getElementById('alienSkinOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (alienEyes) {
        alienEyes.addEventListener('change', function() {
            const options = document.getElementById('alienEyesOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (alienAntenna) {
        alienAntenna.addEventListener('change', function() {
            const options = document.getElementById('alienAntennaOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (alienGlow) {
        alienGlow.addEventListener('change', function() {
            const options = document.getElementById('alienGlowOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (alienTattoos) {
        alienTattoos.addEventListener('change', function() {
            const options = document.getElementById('alienTattoosOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (alienHolograms) {
        alienHolograms.addEventListener('change', function() {
            const options = document.getElementById('alienHologramsOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    // Mode Avatar
    const avatarTail = document.getElementById('avatarTail');
    const avatarStripes = document.getElementById('avatarStripes');
    
    if (avatarTail) {
        avatarTail.addEventListener('change', function() {
            const options = document.getElementById('avatarTailOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    if (avatarStripes) {
        avatarStripes.addEventListener('change', function() {
            const options = document.getElementById('avatarStripesOptions');
            if (options) options.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    // Avatar Keep Face - vérification que le corps est coché
    const avatarKeepFace = document.getElementById('avatarKeepFace');
    const avatarFullBody = document.getElementById('avatarFullBody');
    
    if (avatarKeepFace && avatarFullBody) {
        avatarKeepFace.addEventListener('change', function() {
            if (this.checked && !avatarFullBody.checked) {
                avatarFullBody.checked = true;
            }
        });
    }
    
    // Mode Animal - mise à jour des couleurs
    document.getElementById('enableAnimalMode')?.addEventListener('change', updateAnimalColors);
    document.getElementById('animalType')?.addEventListener('change', updateAnimalColors);
    
    // Options spéciales (yeux + taches)
    document.getElementById('enable-eyes')?.addEventListener('change', function() {
        const controls = document.getElementById('eye-controls');
        if (controls) controls.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enable-skin')?.addEventListener('change', function() {
        const controls = document.getElementById('skin-controls');
        if (controls) controls.style.display = this.checked ? 'block' : 'none';
    });
}

function updateAnimalColors() {
    const type = document.getElementById('animalType')?.value;
    const colorSelect = document.getElementById('animalColor');
    if (!colorSelect || !type || !window.animalData) return;
    
    const animal = window.animalData[type];
    if (!animal) return;
    
    colorSelect.innerHTML = '';
    animal.couleursDisponibles.forEach(couleur => {
        const option = document.createElement('option');
        option.value = couleur;
        option.textContent = couleur.charAt(0).toUpperCase() + couleur.slice(1);
        colorSelect.appendChild(option);
    });
}

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération du prompt...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            displayPrompt(prompts, activeTab.id);
        }
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Prompt copié!'));
    });
    
    document.getElementById('exportPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    // BOUTON TRADUCTION SIMPLE (Google Translate)
    document.getElementById('translatePrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const url = `https://translate.google.com/?sl=fr&tl=en&text=${encodeURIComponent(text)}&op=translate`;
        window.open(url, '_blank');
    });
    
    document.getElementById('clearPrompt')?.addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    
    document.getElementById('suggestColors')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        let outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. `;
        outfitDesc += `Éléments : ${country.finalOutfit.elements.join(', ')}. `;
        outfitDesc += `Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    // Toggles principaux
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() {
        const options = document.getElementById('magicTextsOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() {
        const options = document.getElementById('customDecorOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAlienMode')?.addEventListener('change', function() {
        const options = document.getElementById('alienOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() {
        const options = document.getElementById('avatarOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() {
        const options = document.getElementById('animalOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    // ===== MODE BÉBÉ ANIMAL CÂLIN =====
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() {
        const options = document.getElementById('animalBabyOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    // ===== MODE MIROIR =====
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() {
        const options = document.getElementById('mirrorOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableScript')?.addEventListener('change', function() {
        const options = document.getElementById('scriptOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    // Setup des options conditionnelles
    setupConditionalOptions();
    
    // Sliders
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) {
        fluoIntensity.addEventListener('input', function() {
            const val = parseInt(this.value);
            const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
            document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
        });
    }
    
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) {
        seductionLevel.addEventListener('input', function() {
            seductionValue.textContent = this.value + '/10';
        });
    }
    
    // Checkbox dépendantes
    const bisousCheckbox = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisousCheckbox && bisousCount) {
        bisousCount.disabled = !bisousCheckbox.checked;
        bisousCheckbox.addEventListener('change', function() {
            bisousCount.disabled = !this.checked;
        });
    }
    
    const viensCheckbox = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viensCheckbox && viensCount) {
        viensCount.disabled = !viensCheckbox.checked;
        viensCheckbox.addEventListener('change', function() {
            viensCount.disabled = !this.checked;
        });
    }
}

// ==================== FONCTION POUR REMPLIR LES SELECTS SPÉCIAUX ====================

function populateSpecialSelects() {
    // Yeux
    const eyeLeft = document.getElementById('eye-left-select');
    const eyeRight = document.getElementById('eye-right-select');
    
    if (eyeLeft && eyeRight && typeof eyeColorsData !== 'undefined') {
        eyeLeft.innerHTML = '';
        eyeRight.innerHTML = '';
        eyeColorsData.forEach(color => {
            const option1 = document.createElement('option');
            option1.value = color.label.toLowerCase();
            option1.textContent = color.label;
            eyeLeft.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = color.label.toLowerCase();
            option2.textContent = color.label;
            eyeRight.appendChild(option2);
        });
    }
    
    // Peau
    const skinSelect = document.getElementById('skin-color-select');
    if (skinSelect && typeof skinColorsData !== 'undefined') {
        skinSelect.innerHTML = '';
        skinColorsData.forEach(color => {
            const option = document.createElement('option');
            option.value = color.label.toLowerCase();
            option.textContent = color.label;
            skinSelect.appendChild(option);
        });
    }
}

// ==================== DÉMARRAGE ====================

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    
    // Remplir les selects des options spéciales
    populateSpecialSelects();
    
    // Initialiser les couleurs animales
    setTimeout(updateAnimalColors, 500);
    
    initCharacters();
    initEvents();
    initImageUpload();
    attachEvents();
    console.log("✅ Application prête!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

window.PromptGenerator = PromptGenerator;
window.initCharacters = initCharacters;
window.displayPrompt = displayPrompt;
window.updateRecap = updateRecap;

console.log("📦 script.js chargé avec TOUS les effets - MODE ANIMAL INTÉGRÉ - MAINS PEINTES CORRIGÉES - 5 TENUES POUR LES 2 RAPPEURS - NIVEAU ULTRA-RÉALISTE MAXIMUM (micro-expressions, yeux humides, respiration, mains) - MODE BÉBÉ ANIMAL CÂLIN AJOUTÉ - MODE MIROIR - OPTION 4 (TRANSITION DIRECTE)");
