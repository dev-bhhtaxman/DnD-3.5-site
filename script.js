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
  document.getElementById("outputBox").value = result;
}

// --- connect button ---
document.getElementById("genChar").addEventListener("click", generateOutput);
