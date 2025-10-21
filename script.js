// --- data lists ---
const class_list = ['Bard', 'Barbarian', 'Wizard', 'Rogue', 'Cleric', 'Paladin', 'Fighter', 'Ranger', 'Druid', 'Monk', 'Sorcerer'];
const eyecolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple'];
const haircolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple'];
const level_list = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
const mood_list = ['angry','sad','happy','afraid','surprised','disgusted','contemptuous','love','lustful','shy','rage','trustful','anticipatory','indifferent','amused','anxious','awe','interested','envious','blah'];
const personality_list = ['loyal and sensible','responsible and caring','humanitarian and pragmatic','logical and systematic','independent and spontaneous','introspective and creative','quiet and sensitive','curious and intellectual','a free spirit','an entertainer','innovative and endlessly positive','an out of the box thinker and quiet','hard working and pragmatic','personable and go-getting','helpful and engaging','a born leader','angry and spiteful','hateful and jealous','wrathful and vengeful','psychotic and unstable'];
const gender_list = ['Male', 'Female', 'Nonbinary'];



// --- helper function ---
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



// --- main generator ---
function generateOutput() {
  const selectedClass = pickRandom(class_list);
  const eyeColor = pickRandom(eyecolor_list);
  const hairColor = pickRandom(haircolor_list);
  const level = pickRandom(level_list);
  const mood = pickRandom(mood_list);
  const personality = pickRandom(personality_list);
  const gender = pickRandom(gender_list);

  const result = `${gender} Level ${level} ${selectedClass} with ${eyeColor} eyes, ${hairColor} hair, and feeling ${mood} while usually ${personality}.`;
  document.getElementById("outputBox").textContent = result;
}

// --- connect button ---
document.getElementById("charGenBox").addEventListener("click", generateOutput);



//structure for objects

const human = {
  Str: '',
  Dex: '',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: '+1 feat at 1st level, 4 bonus skill points at 1st level, +1 per level thereafter, Favored Class: Any'

}


const dwarf = {
  Str: '+2',
  Dex: '',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '-2',
  Notes: 'Darkvision 60 ft. Stonecunning, weapon familiarity (dwarven weapons), stability, +2 vs poison, spells, and spell-like effects. Favored Class: Fighter'
}

const elf = {
  Str: '',
  Dex: '+2',
  Con: '-2',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Low-light vision, Proficient with longsword, rapier, longbow, and shortbow, Immune to magic sleep; +2 vs enchantments, +2 Listen, Search, Spot. Favored Class: Wizard'
}


const gnome = {
  Str: '-2',
  Dex: '',
  Con: '+2',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Small size, Low-light vision, +2 saving throws vs illusions, Speak with animals (burrowing mammals), +1 to DCs of illusion spells. Favored Class: Bard'
}


const half_elf = {
  Str: '',
  Dex: '',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: '+1 Listen, Search, Spot, Immune to sleep spells, +2 Diplomacy, Gather Information, Low-light vision. Favored Class: Any'
}
const half_orc = {
  Str: '+2',
  Dex: '',
  Con: '',
  Int: '-2',
  Wis: '',
  Cha: '-2',
  Notes: 'Darkvision 60 ft. Favored Class: Barbarian'
}
const halfling = {
  Str: '-2',
  Dex: '+2',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Small size, +1 all saving throws, +2 Climb, Jump, Move Silently. Favored Class: Rogue'
}
const goblin = {
  Str: '',
  Dex: '',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Small humanoid, +4 Move Silently, Darkvision 60 ft. +1 racial bonus on Ride and Move Silently'
}
const orc = {
  Str: '+4',
  Dex: '',
  Con: '',
  Int: '-2',
  Wis: '-2',
  Cha: '-2',
  Notes: 'Darkvision 60 ft. Light sensitivity'
}
const kobold = {
  Str: '-4',
  Dex: '+2',
  Con: '-2',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Darkvision 60 ft. +1 Craft (trapmaking), Profession (miner), Search (stonework)'
}
const gnoll = {
  Str: '+2',
  Dex: '',
  Con: '',
  Int: '-2',
  Wis: '',
  Cha: '',
  Notes: 'Darkvision 60 ft.'
}
const lizardfolk = {
  Str: '+2',
  Dex: '',
  Con: '+2',
  Int: '-2',
  Wis: '',
  Cha: '',
  Notes: 'Natural armor +5, swim speed 15 ft.'
}
const merfolk = {
  Str: '-2',
  Dex: '+2',
  Con: '',
  Int: '',
  Wis: '',
  Cha: '',
  Notes: 'Swim speed 50 ft., low-light vision, Amphibious (can breathe air and water)'
}
const troglodyte = {
  Str: '+4',
  Dex: '-2',
  Con: '+4',
  Int: '-2',
  Wis: '',
  Cha: '-2',
  Notes: 'Darkvision 90 ft., stench aura, Natural armor +6'
}
const aasimar = {
  Str: '',
  Dex: '',
  Con: '',
  Int: '',
  Wis: '+2',
  Cha: '+2',
  Notes: 'Darkvision 60 ft., daylight 1/day, Resistance to acid, cold, electricity 5. Favored Class: Paladin Level Adjust +1'
}
const tiefling = {
  Str: '',
  Dex: '+2',
  Con: '',
  Int: '+2',
  Wis: '',
  Cha: '-2',
  Notes: 'Darkvision 60 ft., darkness 1/day, Resistance to cold, fire, electricity 5. Favored Class: Rogue, Level Adjustment +1'
}
const drow = {
  Str: '',
  Dex: '+2',
  Con: '-2',
  Int: '+2',
  Wis: '',
  Cha: '+2',
  Notes: 'Darkvision 120 ft., spell resistance, light blindness, Spell-like abilities: dancing lights, darkness, faerie fire, Proficient with rapiers, longswords, hand crossbows, Level Adjustment +2'
}
const githyanki = {
  Str: '',
  Dex: '+2',
  Con: '',
  Int: '',
  Wis: '-2',
  Cha: '',
  Notes: 'Darkvision 60 ft. Natural armor +1, Psi-like abilities: daunt, dimension door, psionic teleport (levels vary), Level Adjustment +2'
}





// for the random adventures

const adventureIdeasList = [
  "Abandon village is haunted by a restless spirit.",
  "Abductions in the city lead to a cult.",
  "Adventurers must retrieve a stolen artifact.",
  "Ancient evil awakens beneath the town.",
  "Assassins target a noble; PCs must protect him.",
  "Bandits threaten trade routes.",
  "Baron has gone mad; stop his tyranny.",
  "Beast terrorizes countryside.",
  "Break a siege laid on a friendly city.",
  "Bridge collapse isolates a region.",
  "Build an outpost in monster-infested territory.",
  "Capture a notorious criminal.",
  "City is overrun by vermin—unnatural cause suspected.",
  "Clerics lose powers; find the reason.",
  "Compete in a grand tournament.",
  "Convince a dragon to aid a kingdom.",
  "Cult attempts to summon a demon.",
  "Curse afflicts a town; discover the source.",
  "Darkness falls permanently on a region.",
  "Defend a caravan from attacks.",
  "Defend town from invading orcs.",
  "Demons run rampant in the wilderness.",
  "Destroy a vampire lord.",
  "Diplomatic mission to hostile territory.",
  "Discover source of poisoned well.",
  "Disgraced noble seeks redemption.",
  "Dragon demands tribute; deal with it.",
  "Escort an important NPC.",
  "Evacuate a village from natural disaster.",
  "Evil artifact must be destroyed.",
  "Expose a traitor in the king’s court.",
  "Face trial for crimes you didn’t commit.",
  "Find a lost explorer.",
  "Find the cure for a strange disease.",
  "Find the heir to a fallen house.",
  "Fire ravages the countryside—arson suspected.",
  "Follow map to legendary treasure.",
  "Forbidden magic causes unnatural effects.",
  "Free slaves from underground mines.",
  "Fugitive hides in monster-infested forest.",
  "Giant sea creature attacks ships.",
  "Goblin uprising threatens region.",
  "Haunted mansion holds family secrets.",
  "Help a ghost find peace.",
  "Hostage situation in a fortress.",
  "Hunt the beast that killed a prince.",
  "Important message must reach city fast.",
  "Investigate mysterious disappearances.",
  "Jewel heist points to insider job.",
  "King cursed by a mysterious figure.",
  "Liberate a temple from evil control.",
  "Lost city found in the jungle.",
  "Magical mishap alters reality.",
  "Marauders raid coastal villages.",
  "Merchant’s goods are cursed.",
  "Messenger never arrived—find out why.",
  "Mine collapses—workers trapped inside.",
  "Missing children linked to fairy ring.",
  "Monster terrorizes local farmlands.",
  "Mysterious island appears off the coast.",
  "Necromancer raises ancient army.",
  "Noble's son joins evil cult.",
  "Old prophecy foretells coming doom.",
  "Oracle sends players on cryptic quest.",
  "Outbreak of lycanthropy in city.",
  "PCs framed for theft of artifact.",
  "Pirates block important shipping lane.",
  "Plague decimates city—find the cause.",
  "Players inherit a haunted castle.",
  "Poisoned crops spark famine.",
  "Political unrest leads to civil war.",
  "Powerful relic causes weather havoc.",
  "Prevent assassination of a ruler.",
  "Protect village during eclipse ritual.",
  "Rare creature is dying out—protect it.",
  "Rebel faction rises in remote area.",
  "Recover a stolen spellbook.",
  "Rescue a kidnapped noble.",
  "Retrieve relic from cursed tomb.",
  "Rival adventurers sabotage your mission.",
  "Sacred spring dries up mysteriously.",
  "Save an ancient tree spirit.",
  "Scrying shows a looming disaster.",
  "Sealed crypt starts leaking undead.",
  "Secrets in dreams must be uncovered.",
  "Seer’s death leads to cursed town.",
  "Shipwreck survivors tell strange tales.",
  "Solve a murder mystery.",
  "Spirits of the past cry for justice.",
  "Stop a rampaging elemental.",
  "Stop volcano from erupting magically.",
  "Storm spirits demand tribute.",
  "Strange portal appears in wilderness.",
  "Strangers arrive bearing dark tidings.",
  "Take over command in losing battle.",
  "Temple vanishes overnight.",
  "Thieves’ guild war spills into streets.",
  "Town celebrates eerie festival.",
  "Train a militia to resist attack.",
  "Travel to other plane to fix problem.",
  "Trolls block crucial mountain pass.",
  "Uncover ancient truth hidden in ruins.",
  "Undead rise during full moon.",
  "Village cursed to forget each day.",
  "Warlord builds fortress—attack imminent.",
  "Warriors return as ghostly avengers.",
  "Weird dreams reveal ancient threat.",
  "Wild magic zone expands dangerously.",
  "Wizard tower erupts with chaos."
];


function generateAdventure() {
  const randomAdventure = pickRandom(adventureIdeasList);
  const randomAdventureResult = `${randomAdventure}`
  document.getElementById("adventure_output_box").textContent = randomAdventureResult;
}
document.getElementById("random_adventures").addEventListener("click", generateAdventure);