    // ===== MODE MIROIR AVEC RENFORT ABSOLU =====
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
        
        // RÈGLE ABSOLUE
        if (mirrorData.regle_absolue) {
            mirrorText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚫 RÈGLE ABSOLUE - INTERACTION PHYSIQUE STRICTEMENT RÉGLEMENTÉE 🚫
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${mirrorData.regle_absolue.consigne}

📋 INTERDICTIONS ABSOLUES :
${mirrorData.regle_absolue.interdictions.map(i => `- ${i}`).join('\n')}

✅ CONTACTS AUTORISÉS (UNIQUEMENT) :
${mirrorData.regle_absolue.contacts_autorises.map(c => `- ${c}`).join('\n')}

💡 JUSTIFICATION : ${mirrorData.regle_absolue.justification}
`;
        }
        
        // RENFORT APPARITION
        if (mirrorData.renfort_apparition) {
            mirrorText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴🔴🔴 RENFORT ABSOLU - LE CLONE DOIT APPARAÎTRE 🔴🔴🔴
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${mirrorData.renfort_apparition.consigne}

🔍 VÉRIFICATION OBLIGATOIRE :
- ${mirrorData.renfort_apparition.verification}
- ${mirrorData.renfort_apparition.sanction}

📋 DÉTAILS DE L'APPARITION :
${mirrorData.renfort_apparition.details.map(d => `- ${d}`).join('\n')}

⚠️ RAPPEL : LE CLONE N'EST PAS UNE OPTION - C'EST UNE EXIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
        } else {
            // Fallback
            mirrorText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴🔴🔴 INSTRUCTION PRIORITAIRE - LE CLONE DOIT APPARAÎTRE 🔴🔴🔴
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- PENDANT LE FLASH BLANC (fin PARTIE 1), LE CLONE APPARAÎT INSTANTANÉMENT
- CETTE APPARITION EST OBLIGATOIRE ET NON NÉGOCIABLE
- AU DÉBUT DE LA PARTIE 2, LES DEUX FEMMES SONT FACE CAMÉRA
- LE CLONE EST AUSSI RÉEL QU'ELLE : même texture, même poids, même présence
- SI LE CLONE N'APPARAÎT PAS, LA VIDÉO NE CORRESPOND PAS AUX ATTENTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
        }
        
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

SECONDE 0-1 (INSTALLATION - VÉRIFICATION CLONE) :
- Les DEUX femmes sont maintenant côte à côte, FACE CAMÉRA
- VÉRIFICATION : À CETTE SECONDE, ON DOIT VOIR CLAIREMENT DEUX FEMMES
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

    // ===== PARTIE 2 =====
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

        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;

        // Construction de la partie 2
        let part2Text = `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE - ABSOLUMENT CRUCIAL :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE, expression encore plus intense
- RECONNAISSABLE AU PREMIER COUP D'ŒIL - AUCUNE ERREUR POSSIBLE
- La transformation ne concerne QUE les vêtements, le corps et les accessoires
${avatarTransformations.includes('VISAGE HUMAIN CONSERVÉ') ? '- ⚠️ Le visage reste HUMAIN et IDENTIQUE à la partie 1 - seuls les éléments Na\'vi sont ajoutés' : ''}

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
${this.userData.finalOutfit}

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
${specialFeatures}

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

        // VÉRIFICATION FINALE - MODE MIROIR
        if (this.userData.mirrorMode.enabled) {
            part2Text += `

🔴 RAPPEL ULTIME - VÉRIFICATION CLONE 🔴
- CONFIRMATION : LE MODE MIROIR EST ACTIVÉ
- VÉRIFICATION VISUELLE : À 0.0s DE LA PARTIE 2, ON DOIT VOIR DEUX FEMMES FACE CAMÉRA
- LE CLONE EST PRÉSENT À CÔTÉ D'ELLE
- ELLES SONT DEUX PENDANT TOUTE LA DANSE
- LA TRANSITION A FONCTIONNÉ PARFAITEMENT
- SI UNE SEULE FEMME EST VISIBLE, LA VIDÉO EST INVALIDE
`;
        }

        return part2Text;
    }

    // ===== CONSIGNES =====
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
            animalBabyLine = `\n17. MODE BÉBÉ ANIMAL CÂLIN ACTIVÉ : Interaction réaliste avec ${typeNames[animalType] || 'un animal'}. La danse est PLUS DOUCE. FINALE SPÉCIALE avec l'animal (remplace les gestes finaux).`;
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
            mirrorLine = `\n18. MODE MIROIR ACTIVÉ : Transition "${transitionNames[transition]}" - Le clone sort du miroir de façon réaliste. Danse à deux ${document.getElementById('mirrorDuoStyle')?.value || 'synchronisée'}. Pose finale ${document.getElementById('mirrorPoseFinale')?.value || 'côte à côte'}. SENSUALITÉ DOUBLÉE.`;
        }
        
        let specialLine = '';
        if (eyesDiff && skinDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Yeux de couleurs différentes (hétérochromie) + Taches de naissance/vitiligo';
        } else if (eyesDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Yeux de couleurs différentes (hétérochromie)';
        } else if (skinDiff) {
            specialLine = '\n19. OPTIONS SPÉCIALES 8K : Taches de naissance/vitiligo';
        }
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1
2. TRANSITION NATURELLE : La transformation a eu lieu HORS CAMÉRA
3. RENDU ULTRA-RÉALISTE : Peau avec pores, imperfections, micro-expressions, respiration
4. YEUX 8K : Iris hyper détaillés, film lacrymal, vaisseaux visibles
5. SILENCE TOTAL : Pas un mot
6. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante
7. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS' : ''} ${this.userData.gestures.viens ? 'et VIENS' : ''}
8. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE
9. CHEVEUX ${this.userData.enableFluo ? 'FLUO' : 'NATURELS'}
10. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName}
11. MOUVEMENTS PRÉCIS : Chorégraphie technique
12. INSPIRATION CULTURELLE : ${country.name} - ${country.dance}
13. TRANSFORMATION DÉJÀ ACCOMPLIE : AUCUN changement visible pendant la PARTIE 2
14. FINALE SPECTACULAIRE : À la dernière seconde${avatarLine}${animalLine}${animalBabyLine}${mirrorLine}${specialLine}`;
    }

    // ===== PROMPT COMPLET =====
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
    document.getElementById('alienSkin')?.addEventListener('change', function() {
        document.getElementById('alienSkinOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('alienEyes')?.addEventListener('change', function() {
        document.getElementById('alienEyesOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('alienAntenna')?.addEventListener('change', function() {
        document.getElementById('alienAntennaOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('alienGlow')?.addEventListener('change', function() {
        document.getElementById('alienGlowOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('alienTattoos')?.addEventListener('change', function() {
        document.getElementById('alienTattoosOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('alienHolograms')?.addEventListener('change', function() {
        document.getElementById('alienHologramsOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    // Mode Avatar
    document.getElementById('avatarTail')?.addEventListener('change', function() {
        document.getElementById('avatarTailOptions').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('avatarStripes')?.addEventListener('change', function() {
        document.getElementById('avatarStripesOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    // Avatar Keep Face
    const avatarKeepFace = document.getElementById('avatarKeepFace');
    const avatarFullBody = document.getElementById('avatarFullBody');
    if (avatarKeepFace && avatarFullBody) {
        avatarKeepFace.addEventListener('change', function() {
            if (this.checked && !avatarFullBody.checked) {
                avatarFullBody.checked = true;
            }
        });
    }
    
    // Options spéciales
    document.getElementById('enable-eyes')?.addEventListener('change', function() {
        document.getElementById('eye-controls').style.display = this.checked ? 'block' : 'none';
    });
    document.getElementById('enable-skin')?.addEventListener('change', function() {
        document.getElementById('skin-controls').style.display = this.checked ? 'block' : 'none';
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
        document.getElementById('magicTextsOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() {
        document.getElementById('customDecorOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAlienMode')?.addEventListener('change', function() {
        document.getElementById('alienOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() {
        document.getElementById('avatarOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() {
        document.getElementById('animalOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() {
        document.getElementById('animalBabyOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() {
        document.getElementById('mirrorOptions').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableScript')?.addEventListener('change', function() {
        document.getElementById('scriptOptions').style.display = this.checked ? 'block' : 'none';
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
    
    populateSpecialSelects();
    
    initCharacters();
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

console.log("📦 script.js chargé avec TOUS les effets - MODE MIROIR RENFORCÉ - LE CLONE APPARAÎT TOUJOURS");
