// --- data lists ---
const class_list = ['Bard', 'Barbarian', 'Wizard', 'Rogue', 'Cleric', 'Paladin', 'Fighter', 'Ranger', 'Druid', 'Monk', 'Sorcerer'];
const eyecolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple'];
const haircolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple'];
const level_list = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
const mood_list = ['Angry','Sad','Happy','Afraid','Surprised','Disgusted','Contemptuous','Love','Lustful','Shy','Raging','Trustful','Anticipation','Indifference','Amused','Anxious','In Awe','Interested','Envious','Blah'];
const personality_list = ['loyal and sensible','responsible and caring','humanitarian and pragmatic','logical and systematic','independent and spontaneous','introspective and creative','quiet and sensitive','curious and intellectual','free spirit','entertainer','innovative and endlessly positive','out of the box thinker and quiet','hard working and pragmatic','personable and go-getting','helper and networker','born leader','angry and spiteful','hateful and jealous','wrathful and vengeful','psychotic and unstable'];
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
document.getElementById("genChar").addEventListener("click", generateOutput);



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


