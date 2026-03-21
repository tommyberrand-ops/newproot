// script.js - VERSION COMPLÈTE CORRIGÉE
// AFFICHAGE DES 73 PERSONNAGES

// ==================== VARIABLES GLOBALES ====================
let currentSelectedCharacter = null;
let currentPrompt = {
    full: "",
    part1: "",
    part2: "",
    instructions: ""
};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🟢 DOM chargé, initialisation de l'interface...");
    
    // Vérifier que countries existe
    if (typeof countries === 'undefined') {
        console.error("❌ La variable 'countries' n'est pas définie !");
        console.log("Vérifiez que data/countries.js est bien chargé avant script.js");
        return;
    }
    
    console.log(`✅ ${Object.keys(countries).length} personnages chargés depuis countries.js`);
    
    // Initialiser tous les composants
    initializeCharactersList();
    initializeEventListeners();
    initializeMagicTextsOptions();
    initializeFinaleOptions();
    initializeAlienOptions();
    initializeAvatarOptions();
    initializeAnimalBabyOptions();
    initializeMirrorOptions();
    initializeSelfieOptions();
    initializeEyeOptions();
    initializeSkinOptions();
    
    console.log("✅ Tous les composants initialisés");
});

// ==================== AFFICHAGE DES PERSONNAGES ====================
function initializeCharactersList() {
    const countryGrid = document.getElementById('countryGrid');
    if (!countryGrid) {
        console.error("❌ Élément 'countryGrid' non trouvé");
        return;
    }
    
    // Vider la grille
    countryGrid.innerHTML = '';
    
    // Récupérer tous les personnages
    const characterKeys = Object.keys(countries);
    console.log(`📋 Génération de la liste des ${characterKeys.length} personnages...`);
    
    // Trier les personnages par nom
    const sortedCharacters = characterKeys.sort((a, b) => {
        const nameA = countries[a].name;
        const nameB = countries[b].name;
        return nameA.localeCompare(nameB);
    });
    
    // Créer les cartes pour chaque personnage
    sortedCharacters.forEach(key => {
        const character = countries[key];
        const card = document.createElement('div');
        card.className = 'character-card';
        card.setAttribute('data-character-key', key);
        card.setAttribute('data-character-name', character.name);
        card.innerHTML = `<i class="fas fa-user"></i> ${character.name}`;
        
        card.addEventListener('click', function() {
            selectCharacter(key);
        });
        
        countryGrid.appendChild(card);
    });
    
    console.log(`✅ ${sortedCharacters.length} personnages affichés dans l'interface`);
    
    // Ajouter un événement de recherche
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterCharacters(e.target.value.toLowerCase());
        });
    }
}

function filterCharacters(searchTerm) {
    const cards = document.querySelectorAll('.character-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.getAttribute('data-character-name').toLowerCase();
        if (name.includes(searchTerm) || searchTerm === '') {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`🔍 Recherche "${searchTerm}" : ${visibleCount} personnage(s) trouvé(s)`);
}

function selectCharacter(characterKey) {
    console.log(`✨ Personnage sélectionné : ${characterKey}`);
    
    const character = countries[characterKey];
    if (!character) {
        console.error(`❌ Personnage "${characterKey}" non trouvé`);
        return;
    }
    
    currentSelectedCharacter = characterKey;
    
    // Mettre à jour l'affichage du personnage sélectionné
    const selectedSpan = document.querySelector('#selectedCountry span');
    if (selectedSpan) {
        selectedSpan.textContent = character.name;
    }
    
    // Supprimer la classe 'selected' de tous les cards
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Ajouter la classe 'selected' à la carte correspondante
    const selectedCard = document.querySelector(`.character-card[data-character-key="${characterKey}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Mettre à jour les couleurs des paumes
    if (character.palmColors) {
        const leftColorInput = document.getElementById('leftPalmColor');
        const rightColorInput = document.getElementById('rightPalmColor');
        if (leftColorInput) leftColorInput.value = character.palmColors.left;
        if (rightColorInput) rightColorInput.value = character.palmColors.right;
    }
    
    // Mettre à jour la tenue finale
    const finalOutfitTextarea = document.getElementById('finalOutfitDescription');
    if (finalOutfitTextarea && character.finalOutfit) {
        let outfitText = character.finalOutfit.description + "\n";
        if (character.finalOutfit.colors) {
            outfitText += "\nCouleurs: " + character.finalOutfit.colors.join(", ");
        }
        if (character.finalOutfit.elements) {
            outfitText += "\n\nÉléments:\n- " + character.finalOutfit.elements.join("\n- ");
        }
        if (character.finalOutfit.accessories) {
            outfitText += "\n\nAccessoires:\n- " + character.finalOutfit.accessories.join("\n- ");
        }
        finalOutfitTextarea.value = outfitText;
    }
    
    // Mettre à jour les cheveux fluo
    const fluoSelect = document.getElementById('fluoColor');
    if (fluoSelect && character.hairFluo && character.hairFluo.length > 0) {
        // Ajouter les couleurs fluo du personnage au select s'il n'y est pas déjà
        character.hairFluo.forEach(color => {
            let exists = false;
            for (let i = 0; i < fluoSelect.options.length; i++) {
                if (fluoSelect.options[i].value === color) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                const option = document.createElement('option');
                option.value = color;
                option.textContent = getColorEmoji(color) + " " + color.toUpperCase();
                fluoSelect.appendChild(option);
            }
        });
    }
    
    // Mettre à jour le style de coiffure selon le personnage
    updateHairStyleForCharacter(character);
    
    // Déclencher un événement personnalisé pour informer les autres modules
    const event = new CustomEvent('characterSelected', { detail: { characterKey, character } });
    document.dispatchEvent(event);
    
    console.log(`✅ Personnage chargé : ${character.name}`);
}

function updateHairStyleForCharacter(character) {
    const hairStyleSelect = document.getElementById('hairStyle');
    if (!hairStyleSelect) return;
    
    // Adapter le style de coiffure selon le type de personnage
    if (character.type === 'geisha') {
        hairStyleSelect.value = 'chignon';
    } else if (character.type === 'fairy' || character.type === 'elf') {
        hairStyleSelect.value = 'détachés';
    } else if (character.type === 'siren') {
        hairStyleSelect.value = 'détachés';
    } else if (character.type === 'vampire') {
        hairStyleSelect.value = 'attachés';
    } else if (character.type === 'witch') {
        hairStyleSelect.value = 'détachés';
    } else if (character.type === 'avatar' || character.type === 'avatarwarrior' || character.type === 'avatarchief') {
        hairStyleSelect.value = 'tresses';
    } else if (character.type === 'alien' || character.type === 'spaceship') {
        hairStyleSelect.value = 'alien';
    }
}

function getColorEmoji(color) {
    if (color.includes('rouge')) return '🔴';
    if (color.includes('rose')) return '🌸';
    if (color.includes('bleu')) return '💙';
    if (color.includes('vert')) return '💚';
    if (color.includes('jaune')) return '💛';
    if (color.includes('violet')) return '💜';
    if (color.includes('orange')) return '🧡';
    if (color.includes('argent')) return '✨';
    if (color.includes('or')) return '🌟';
    return '🎨';
}

// ==================== INITIALISATION DES ÉVÉNEMENTS ====================
function initializeEventListeners() {
    // Upload d'image
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const removeImageBtn = document.getElementById('removeImage');
    
    if (uploadArea) {
        uploadArea.addEventListener('click', () => imageInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#00f3ff';
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                handleImageUpload(file);
            }
        });
    }
    
    if (imageInput) {
        imageInput.addEventListener('change', (e) => {
            if (e.target.files[0]) {
                handleImageUpload(e.target.files[0]);
            }
        });
    }
    
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', () => {
            const imagePreview = document.getElementById('imagePreview');
            const uploadAreaDiv = document.getElementById('uploadArea');
            if (imagePreview) imagePreview.style.display = 'none';
            if (uploadAreaDiv) uploadAreaDiv.style.display = 'block';
            if (imageInput) imageInput.value = '';
        });
    }
    
    // Suggérer les couleurs
    const suggestColorsBtn = document.getElementById('suggestColors');
    if (suggestColorsBtn) {
        suggestColorsBtn.addEventListener('click', suggestColors);
    }
    
    // Générer la tenue
    const generateOutfitBtn = document.getElementById('generateOutfit');
    if (generateOutfitBtn) {
        generateOutfitBtn.addEventListener('click', generateOutfit);
    }
    
    // Générer le prompt
    const generatePromptBtn = document.getElementById('generatePrompt');
    if (generatePromptBtn) {
        generatePromptBtn.addEventListener('click', generatePrompt);
    }
    
    // Onglets
    const tabFull = document.getElementById('tabFull');
    const tabPart1 = document.getElementById('tabPart1');
    const tabPart2 = document.getElementById('tabPart2');
    const tabConsignes = document.getElementById('tabConsignes');
    
    if (tabFull) tabFull.addEventListener('click', () => switchTab('full'));
    if (tabPart1) tabPart1.addEventListener('click', () => switchTab('part1'));
    if (tabPart2) tabPart2.addEventListener('click', () => switchTab('part2'));
    if (tabConsignes) tabConsignes.addEventListener('click', () => switchTab('instructions'));
    
    // Copier le prompt
    const copyBtn = document.getElementById('copyPrompt');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyPrompt);
    }
    
    // Exporter le prompt
    const exportBtn = document.getElementById('exportPrompt');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportPrompt);
    }
    
    // Traduire en anglais
    const translateBtn = document.getElementById('translatePrompt');
    if (translateBtn) {
        translateBtn.addEventListener('click', translatePrompt);
    }
    
    // Effacer le prompt
    const clearBtn = document.getElementById('clearPrompt');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearPrompt);
    }
    
    // Niveau de séduction
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) {
        seductionLevel.addEventListener('input', () => {
            seductionValue.textContent = `${seductionLevel.value}/10`;
        });
    }
}

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const previewImg = document.getElementById('previewImg');
        const imagePreview = document.getElementById('imagePreview');
        const uploadArea = document.getElementById('uploadArea');
        
        if (previewImg) previewImg.src = e.target.result;
        if (imagePreview) imagePreview.style.display = 'block';
        if (uploadArea) uploadArea.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

function suggestColors() {
    // Suggérer des couleurs aléatoires harmonieuses
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff6600', '#ff0066'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const complementaryIndex = (randomIndex + 3) % colors.length;
    
    const leftColorInput = document.getElementById('leftPalmColor');
    const rightColorInput = document.getElementById('rightPalmColor');
    
    if (leftColorInput) leftColorInput.value = colors[randomIndex];
    if (rightColorInput) rightColorInput.value = colors[complementaryIndex];
}

function generateOutfit() {
    if (!currentSelectedCharacter) {
        alert("Veuillez d'abord sélectionner un personnage");
        return;
    }
    
    const character = countries[currentSelectedCharacter];
    const finalOutfitTextarea = document.getElementById('finalOutfitDescription');
    
    if (character.finalOutfit && finalOutfitTextarea) {
        let outfitText = character.finalOutfit.description + "\n";
        if (character.finalOutfit.colors) {
            outfitText += "\nCouleurs: " + character.finalOutfit.colors.join(", ");
        }
        if (character.finalOutfit.elements) {
            outfitText += "\n\nÉléments:\n- " + character.finalOutfit.elements.join("\n- ");
        }
        if (character.finalOutfit.accessories) {
            outfitText += "\n\nAccessoires:\n- " + character.finalOutfit.accessories.join("\n- ");
        }
        finalOutfitTextarea.value = outfitText;
    }
}

// ==================== OPTIONS DES TEXTES MAGIQUES ====================
function initializeMagicTextsOptions() {
    const enableMagicTexts = document.getElementById('enableMagicTexts');
    const magicTextsOptions = document.getElementById('magicTextsOptions');
    
    if (enableMagicTexts && magicTextsOptions) {
        enableMagicTexts.addEventListener('change', () => {
            magicTextsOptions.style.display = enableMagicTexts.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DE LA FINALE ====================
function initializeFinaleOptions() {
    const enableFinale = document.getElementById('enableFinale');
    const finaleOptions = document.getElementById('finaleOptions');
    
    if (enableFinale && finaleOptions) {
        enableFinale.addEventListener('change', () => {
            finaleOptions.style.display = enableFinale.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DU MODE ALIEN ====================
function initializeAlienOptions() {
    const enableAlienMode = document.getElementById('enableAlienMode');
    const alienOptions = document.getElementById('alienOptions');
    
    if (enableAlienMode && alienOptions) {
        enableAlienMode.addEventListener('change', () => {
            alienOptions.style.display = enableAlienMode.checked ? 'block' : 'none';
        });
    }
    
    // Gérer les sous-options
    const alienSkin = document.getElementById('alienSkin');
    const alienSkinOptions = document.getElementById('alienSkinOptions');
    if (alienSkin && alienSkinOptions) {
        alienSkin.addEventListener('change', () => {
            alienSkinOptions.style.display = alienSkin.checked ? 'block' : 'none';
        });
    }
    
    const alienEyes = document.getElementById('alienEyes');
    const alienEyesOptions = document.getElementById('alienEyesOptions');
    if (alienEyes && alienEyesOptions) {
        alienEyes.addEventListener('change', () => {
            alienEyesOptions.style.display = alienEyes.checked ? 'block' : 'none';
        });
    }
    
    const alienAntenna = document.getElementById('alienAntenna');
    const alienAntennaOptions = document.getElementById('alienAntennaOptions');
    if (alienAntenna && alienAntennaOptions) {
        alienAntenna.addEventListener('change', () => {
            alienAntennaOptions.style.display = alienAntenna.checked ? 'block' : 'none';
        });
    }
    
    const alienGlow = document.getElementById('alienGlow');
    const alienGlowOptions = document.getElementById('alienGlowOptions');
    if (alienGlow && alienGlowOptions) {
        alienGlow.addEventListener('change', () => {
            alienGlowOptions.style.display = alienGlow.checked ? 'block' : 'none';
        });
    }
    
    const alienTattoos = document.getElementById('alienTattoos');
    const alienTattoosOptions = document.getElementById('alienTattoosOptions');
    if (alienTattoos && alienTattoosOptions) {
        alienTattoos.addEventListener('change', () => {
            alienTattoosOptions.style.display = alienTattoos.checked ? 'block' : 'none';
        });
    }
    
    const alienHolograms = document.getElementById('alienHolograms');
    const alienHologramsOptions = document.getElementById('alienHologramsOptions');
    if (alienHolograms && alienHologramsOptions) {
        alienHolograms.addEventListener('change', () => {
            alienHologramsOptions.style.display = alienHolograms.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DU MODE AVATAR ====================
function initializeAvatarOptions() {
    const enableAvatarMode = document.getElementById('enableAvatarMode');
    const avatarOptions = document.getElementById('avatarOptions');
    
    if (enableAvatarMode && avatarOptions) {
        enableAvatarMode.addEventListener('change', () => {
            avatarOptions.style.display = enableAvatarMode.checked ? 'block' : 'none';
        });
    }
    
    const avatarTail = document.getElementById('avatarTail');
    const avatarTailOptions = document.getElementById('avatarTailOptions');
    if (avatarTail && avatarTailOptions) {
        avatarTail.addEventListener('change', () => {
            avatarTailOptions.style.display = avatarTail.checked ? 'block' : 'none';
        });
    }
    
    const avatarStripes = document.getElementById('avatarStripes');
    const avatarStripesOptions = document.getElementById('avatarStripesOptions');
    if (avatarStripes && avatarStripesOptions) {
        avatarStripes.addEventListener('change', () => {
            avatarStripesOptions.style.display = avatarStripes.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DU MODE BÉBÉ ANIMAL ====================
function initializeAnimalBabyOptions() {
    const enableAnimalBabyMode = document.getElementById('enableAnimalBabyMode');
    const animalBabyOptions = document.getElementById('animalBabyOptions');
    
    if (enableAnimalBabyMode && animalBabyOptions) {
        enableAnimalBabyMode.addEventListener('change', () => {
            animalBabyOptions.style.display = enableAnimalBabyMode.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DU MODE MIROIR ====================
function initializeMirrorOptions() {
    const enableMirrorMode = document.getElementById('enableMirrorMode');
    const mirrorOptions = document.getElementById('mirrorOptions');
    
    if (enableMirrorMode && mirrorOptions) {
        enableMirrorMode.addEventListener('change', () => {
            mirrorOptions.style.display = enableMirrorMode.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DU MODE SELFIE ====================
function initializeSelfieOptions() {
    const enableSelfieMode = document.getElementById('enableSelfieMode');
    const selfieOptions = document.getElementById('selfieOptions');
    
    if (enableSelfieMode && selfieOptions) {
        enableSelfieMode.addEventListener('change', () => {
            selfieOptions.style.display = enableSelfieMode.checked ? 'block' : 'none';
        });
    }
}

// ==================== OPTIONS DES YEUX ====================
function initializeEyeOptions() {
    const enableEyes = document.getElementById('enable-eyes');
    const eyeControls = document.getElementById('eye-controls');
    
    if (enableEyes && eyeControls) {
        enableEyes.addEventListener('change', () => {
            eyeControls.style.display = enableEyes.checked ? 'block' : 'none';
        });
    }
    
    // Remplir les selects des couleurs d'yeux
    const eyeColors = [
        "Bleu ciel", "Bleu océan", "Bleu glacier", "Bleu électrique",
        "Vert émeraude", "Vert forêt", "Vert amande",
        "Marron noisette", "Marron foncé", "Ambré",
        "Noir de jais", "Gris acier", "Gris perle",
        "Violet", "Violet améthyste", "Violet lavande",
        "Rouge rubis", "Rose pâle", "Or", "Argent"
    ];
    
    const eyeLeftSelect = document.getElementById('eye-left-select');
    const eyeRightSelect = document.getElementById('eye-right-select');
    
    if (eyeLeftSelect && eyeRightSelect) {
        eyeColors.forEach(color => {
            const option1 = document.createElement('option');
            option1.value = color;
            option1.textContent = color;
            eyeLeftSelect.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = color;
            option2.textContent = color;
            eyeRightSelect.appendChild(option2);
        });
    }
}

// ==================== OPTIONS DE LA PEAU ====================
function initializeSkinOptions() {
    const enableSkin = document.getElementById('enable-skin');
    const skinControls = document.getElementById('skin-controls');
    
    if (enableSkin && skinControls) {
        enableSkin.addEventListener('change', () => {
            skinControls.style.display = enableSkin.checked ? 'block' : 'none';
        });
    }
    
    // Remplir le select des couleurs de taches
    const skinColors = [
        "Marron clair", "Marron foncé", "Beige", "Rouge brun",
        "Rose pâle", "Blanc cassé", "Ambre", "Café au lait"
    ];
    
    const skinColorSelect = document.getElementById('skin-color-select');
    if (skinColorSelect) {
        skinColors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            skinColorSelect.appendChild(option);
        });
    }
}

// ==================== GÉNÉRATION DU PROMPT ====================
function generatePrompt() {
    if (!currentSelectedCharacter) {
        alert("Veuillez d'abord sélectionner un personnage");
        return;
    }
    
    const character = countries[currentSelectedCharacter];
    const prompt = buildPrompt(character);
    
    currentPrompt = prompt;
    
    // Afficher dans l'interface
    const promptDisplay = document.getElementById('promptDisplay');
    if (promptDisplay) {
        promptDisplay.textContent = prompt.full;
    }
    
    // Mettre à jour le récapitulatif
    updateRecap(character);
    
    console.log("✅ Prompt généré avec succès");
}

function buildPrompt(character) {
    // Récupérer toutes les valeurs des inputs
    const leftColor = document.getElementById('leftPalmColor').value;
    const rightColor = document.getElementById('rightPalmColor').value;
    const startingTop = document.getElementById('startingTop').value;
    const startingBottom = document.getElementById('startingBottom').value;
    const startingDetails = document.getElementById('startingDetails').value;
    const finalOutfit = document.getElementById('finalOutfitDescription').value;
    
    const enableFluo = document.getElementById('enableFluo').checked;
    const naturalHair = document.getElementById('naturalHair').value;
    const fluoColor = document.getElementById('fluoColor').value;
    const fluoIntensity = document.getElementById('fluoIntensity').value;
    const hairStyle = document.getElementById('hairStyle').value;
    
    const seductionLevel = document.getElementById('seductionLevel').value;
    const bisousCount = document.getElementById('bisousCount').value;
    const viensCount = document.getElementById('viensCount').value;
    
    // Récupérer les gestes de séduction
    const seductionGestures = [];
    if (document.getElementById('gesteRegards')?.checked) seductionGestures.push("regards charmeurs");
    if (document.getElementById('gesteSourires')?.checked) seductionGestures.push("sourires coquins");
    if (document.getElementById('gesteClins')?.checked) seductionGestures.push("clins d'œil");
    if (document.getElementById('gesteLevres')?.checked) seductionGestures.push("lèvre mordue");
    if (document.getElementById('gesteMains')?.checked) seductionGestures.push("mains caressantes");
    if (document.getElementById('gesteCheveux')?.checked) seductionGestures.push("jeux avec les cheveux");
    if (document.getElementById('gesteBisous')?.checked) seductionGestures.push(`envoi de ${bisousCount} bisous`);
    if (document.getElementById('gesteViens')?.checked) seductionGestures.push(`${viensCount} gestes "viens vers moi"`);
    
    // Récupérer les effets
    const effects = [];
    const effectCheckboxes = [
        'effectConfettis', 'effectPoudre', 'effectPétales', 'effectFumee',
        'effectLumières', 'effectPaillettes', 'effectExplosion', 'effectTeleportation',
        'effectMirror', 'effectTimeLapse', 'effectHologram', 'effectClone',
        'effectFeu', 'effectEau', 'effectGlace', 'effectEclairs',
        'effectPapillons', 'effectPlumes', 'effectLaser', 'effectBulles'
    ];
    
    effectCheckboxes.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.checked) {
            const effectNames = {
                effectConfettis: "confettis colorés",
                effectPoudre: "poudre scintillante",
                effectPétales: "pétales de fleurs",
                effectFumee: "fumée mystérieuse",
                effectLumières: "jeux de lumières",
                effectPaillettes: "paillettes dorées",
                effectExplosion: "explosion de lumière",
                effectTeleportation: "téléportation",
                effectMirror: "effet miroir",
                effectTimeLapse: "accéléré temporel",
                effectHologram: "hologrammes",
                effectClone: "clones",
                effectFeu: "flammes",
                effectEau: "vagues d'eau",
                effectGlace: "cristaux de glace",
                effectEclairs: "éclairs",
                effectPapillons: "papillons",
                effectPlumes: "plumes",
                effectLaser: "lasers",
                effectBulles: "bulles"
            };
            effects.push(effectNames[id]);
        }
    });
    
    // Récupérer le décor personnalisé
    const enableCustomDecor = document.getElementById('enableCustomDecor')?.checked;
    const customDecorText = document.getElementById('customDecorText')?.value;
    const background = enableCustomDecor && customDecorText ? customDecorText : character.background;
    
    // Récupérer les mouvements de danse
    const danceMovesData = danceMoves[character.type] || danceMoves[currentSelectedCharacter] || danceMoves.default || {
        part1: ["mouvements gracieux", "ondulations sensuelles"],
        part2: ["mouvements endiablés", "final spectaculaire"]
    };
    
    const part1Moves = danceMovesData.part1 || danceMovesData;
    const part2Moves = danceMovesData.part2 || danceMovesData;
    
    // Construire les parties du prompt
    const part1 = `PARTIE 1 - DÉBUT DE LA DANSE (0-3 secondes) :

- Tenue de départ : ${startingTop}, ${startingBottom}, ${startingDetails}
- Couleurs des paumes : GAUCHE = ${leftColor}, DROITE = ${rightColor}
${enableFluo ? `- Cheveux : ${naturalHair} avec mèches ${fluoColor} (intensité ${fluoIntensity}/10), coiffure ${hairStyle}` : `- Cheveux : ${naturalHair}, coiffure ${hairStyle}`}
- Mouvements de danse : ${Array.isArray(part1Moves) ? part1Moves.slice(0, 6).join(", ") : part1Moves}
- Gestes de séduction (intensité ${seductionLevel}/10) : ${seductionGestures.slice(0, 4).join(", ")}
- Effets visuels : ${effects.slice(0, 4).join(", ")}
- Décor : ${background}`;

    const part2 = `PARTIE 2 - TRANSFORMATION ET FINALE (3-6 secondes) :

- Tenue finale : ${finalOutfit}
- Transformation spectaculaire HORS CAMÉRA : la tenue change en un éclair de lumière magique
- Mouvements de danse : ${Array.isArray(part2Moves) ? part2Moves.slice(0, 6).join(", ") : part2Moves}
- Gestes de séduction : ${seductionGestures.slice(4, 8).join(", ")}
- Effets visuels : ${effects.slice(4, 8).join(", ")}
- Finale : ${getFinaleDescription()}`;

    const instructions = `CONSIGNES TECHNIQUES - QUALITÉ ULTRA-RÉALISTE :

1. FORMAT : Vidéo 6 secondes, 8K Ultra HD, 60 fps
2. VISAGE : Ultra-réaliste 8K, pores visibles, cils individuels, reflets dans les yeux, expressions faciales naturelles
3. CORPS : Anatomie parfaite, mouvements fluides et naturels, transitions douces
4. ÉCLAIRAGE : Dynamique, met en valeur le personnage et les effets
5. TRANSITION : Le changement de tenue se fait HORS CAMÉRA (entre les parties 1 et 2)
6. EFFETS : Réalistes, bien intégrés dans la scène
7. FINALE : ${getFinaleDescription()}
8. QUALITÉ : Photoréalisme absolu, aucune imperfection technique`;

    const full = `${part1}\n\n${part2}\n\n${instructions}`;
    
    return { full, part1, part2, instructions };
}

function getFinaleDescription() {
    const enableFinale = document.getElementById('enableFinale')?.checked;
    if (!enableFinale) return "Pas de geste final spécifique, fondu au noir naturel";
    
    const finaleType = document.getElementById('finaleType')?.value;
    const finalOption = document.getElementById('finalOption')?.value;
    const finalMaintien = document.getElementById('finalMaintien')?.value;
    const finalEmotion = document.getElementById('finalEmotion')?.value;
    const finalInteraction = document.getElementById('finalInteraction')?.value;
    
    const finaleNames = {
        bisou: "💋 Bisou langoureux - doigts sur les lèvres, baiser envoyé au public",
        coeur: "💖 Cœur avec les mains - forme un cœur, le porte à sa poitrine",
        clin: "😉 Clin d'œil appuyé - slow blink sensuel",
        cascade: "💋 Cascade de bisous - 3 bisous rapides + 1 lent",
        revelation: "✨ Révélation - bras écartés, offre son corps au public",
        viens: "👉 Dernier geste 'viens' - index qui invite",
        freeze: "📸 Freeze frame - corps figé, visage vivant",
        souffle: "💨 Souffle sensuel - baiser soufflé",
        epaule: "🔥 Découverte épaule - tissu qui glisse"
    };
    
    const finalOptions = {
        freeze: "Freeze frame (image figée)",
        fondu: "Fondu au noir",
        fonduBlanc: "Fondu au blanc",
        zoom: "Zoom sur son visage",
        flou: "Flou artistique"
    };
    
    const emotions = {
        satisfaite: "😌 Satisfaite",
        coquine: "😏 Coquine",
        intense: "🔥 Intense",
        victorieuse: "👑 Victorieuse",
        mysterieuse: "🖤 Mystérieuse"
    };
    
    const interactions = {
        regard: "Regard dans les yeux du spectateur",
        sourire: "Sourire éclatant",
        clin: "Clin d'œil complice",
        main: "Main tendue vers le spectateur",
        tous: "Alternance des trois"
    };
    
    return `${finaleNames[finaleType] || finaleType} - ${emotions[finalEmotion]} - ${interactions[finalInteraction]} - Fin : ${finalOptions[finalOption]} (maintien ${finalMaintien} secondes)`;
}

function updateRecap(character) {
    const recapContent = document.getElementById('recapContent');
    if (!recapContent) return;
    
    const enableFluo = document.getElementById('enableFluo')?.checked;
    const fluoColor = document.getElementById('fluoColor')?.value;
    const seductionLevel = document.getElementById('seductionLevel')?.value;
    
    recapContent.innerHTML = `
        <p><strong>👤 Personnage :</strong> ${character.name}</p>
        <p><strong>💃 Danse :</strong> ${character.dance}</p>
        <p><strong>🎨 Couleurs paumes :</strong> ${document.getElementById('leftPalmColor')?.value} / ${document.getElementById('rightPalmColor')?.value}</p>
        <p><strong>💇 Cheveux :</strong> ${enableFluo ? `Naturels + mèches ${fluoColor}` : 'Naturels'}</p>
        <p><strong>💕 Séduction :</strong> ${seductionLevel}/10</p>
        <p><strong>✨ Effets actifs :</strong> ${getActiveEffectsCount()}</p>
    `;
}

function getActiveEffectsCount() {
    let count = 0;
    const allCheckboxes = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        if (cb.checked) count++;
    });
    return count;
}

function switchTab(tabName) {
    // Mettre à jour les boutons d'onglet
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (tabName === 'full') document.getElementById('tabFull')?.classList.add('active');
    if (tabName === 'part1') document.getElementById('tabPart1')?.classList.add('active');
    if (tabName === 'part2') document.getElementById('tabPart2')?.classList.add('active');
    if (tabName === 'instructions') document.getElementById('tabConsignes')?.classList.add('active');
    
    // Afficher le contenu correspondant
    const promptDisplay = document.getElementById('promptDisplay');
    if (!promptDisplay) return;
    
    if (tabName === 'full') promptDisplay.textContent = currentPrompt.full;
    else if (tabName === 'part1') promptDisplay.textContent = currentPrompt.part1;
    else if (tabName === 'part2') promptDisplay.textContent = currentPrompt.part2;
    else if (tabName === 'instructions') promptDisplay.textContent = currentPrompt.instructions;
}

function copyPrompt() {
    const promptDisplay = document.getElementById('promptDisplay');
    if (!promptDisplay) return;
    
    navigator.clipboard.writeText(promptDisplay.textContent).then(() => {
        alert("✅ Prompt copié dans le presse-papier !");
    }).catch(() => {
        alert("❌ Erreur lors de la copie");
    });
}

function exportPrompt() {
    const promptDisplay = document.getElementById('promptDisplay');
    if (!promptDisplay) return;
    
    const blob = new Blob([promptDisplay.textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

function translatePrompt() {
    const promptDisplay = document.getElementById('promptDisplay');
    if (!promptDisplay) return;
    
    // Simple traduction basique des termes clés
    let text = promptDisplay.textContent;
    
    const translations = {
        'PARTIE 1 - DÉBUT DE LA DANSE': 'PART 1 - DANCE START',
        'PARTIE 2 - TRANSFORMATION ET FINALE': 'PART 2 - TRANSFORMATION AND FINALE',
        'CONSIGNES TECHNIQUES': 'TECHNICAL INSTRUCTIONS',
        'Tenue de départ': 'Starting outfit',
        'Tenue finale': 'Final outfit',
        'Couleurs des paumes': 'Palm colors',
        'GAUCHE': 'LEFT',
        'DROITE': 'RIGHT',
        'Cheveux': 'Hair',
        'Mouvements de danse': 'Dance moves',
        'Gestes de séduction': 'Seduction gestures',
        'Effets visuels': 'Visual effects',
        'Décor': 'Background',
        'Transformation spectaculaire': 'Spectacular transformation',
        'Finale': 'Finale',
        'FORMAT': 'FORMAT',
        'VISAGE': 'FACE',
        'CORPS': 'BODY',
        'ÉCLAIRAGE': 'LIGHTING',
        'TRANSITION': 'TRANSITION',
        'EFFETS': 'EFFECTS',
        'QUALITÉ': 'QUALITY'
    };
    
    Object.keys(translations).forEach(fr => {
        text = text.replace(new RegExp(fr, 'g'), translations[fr]);
    });
    
    promptDisplay.textContent = text;
    alert("✅ Traduction anglaise appliquée (version basique)");
}

function clearPrompt() {
    const promptDisplay = document.getElementById('promptDisplay');
    if (promptDisplay) {
        promptDisplay.textContent = '';
    }
    currentPrompt = { full: "", part1: "", part2: "", instructions: "" };
}

// ==================== FONCTIONS GLOBALES ====================
// Exposer les fonctions nécessaires globalement
window.selectCharacter = selectCharacter;
window.filterCharacters = filterCharacters;
window.generatePrompt = generatePrompt;
window.copyPrompt = copyPrompt;
window.exportPrompt = exportPrompt;
window.translatePrompt = translatePrompt;
window.clearPrompt = clearPrompt;
window.switchTab = switchTab;

console.log("✅ script.js - Version complète chargée avec 73 personnages");
