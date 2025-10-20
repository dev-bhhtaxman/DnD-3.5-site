

const class_list = ['Bard', 'Barbarian', 'Wizard', 'Rogue', 'Cleric', 'Paladin', 'Fighter', 'Ranger', 'Druid', 'Monk', 'Sorcerer',]

const eyecolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple']

const haircolor_list = ['Blue', 'Gray', 'Brown', 'Black', 'Green', 'Yellow', 'Red', 'Orange', 'White', 'Purple']

const level_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']

const mood_list = ['Angry', 'Sad', 'Happy', 'Afraid', 'Surprised', 'Disgusted', 'Contemptuous', 'Love', 'Lustful', 'Shy', 'Raging', 'Trustful', 'Anticipation', 'Indifference', 'Amused', 'Anxious', 'In Awe', 'Interested', 'Envious', 'Blah']

const personality_list = ['loyal and sensible', 'responsible and caring', 'humanitarian and pragmatic', 'logical and systematic', 'independent and spontaneous', 'introspective and creative', 'quiet and sensitive', 'curious and intellectual', 'free spirit', 'entertainer', 'innovative and enlessly positive', 'outof the box thinker and quiet', 'hard working and pragmatic', 'personable and go-getting', 'helper and networker', 'born leader', 'angry and spiteful', 'hateful and jelous', 'wrathful and vengeful', 'psychotic and unstable']

const quest_list = ['Yes', 'No']

const gender_list = ['Male', 'Female', 'Other', 'Nonbinary']

const race_list = ['Human', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Half-orc', 'Halfling', 'Goblin', 'Orc', 'Kobold', 'Gnoll', 'Lizardfolk', 'Merfolk', 'Troglodyte', 'Aasimar', 'Tiefling', 'Drow', 'Githyanki']

const Map = {'Human' : 'Stats',}


function generateOutput() {
   let result = "";
   for (let i = 0; i < 1; i++) {
      const class_list = class_list[Math.floor(Math.random() * class_list.length)];
      const eyecolor_list = eyecolor_list[Math.floor(Math.random() * eyecolor_list.length)];
      const haircolor_list = haircolor_list[Math.floor(Math.random() * haircolor_list.length)];
      const level_list = level_list[Math.floor(Math.random() * level_list.length)];
      const mood_list = mood_list[Math.floor(Math.random() * mood_list.length)];
      const personality_list = personality_list[Math.floor(Math.random() * personality_list.length)];
      const quest_list = quest_list[Math.floor(Math.random() * quest_list.length)];
      const gender_list = gender_list[Math.floor(Math.random() * gender_list.length)];
      
      
      result += `${class_list} ${eyecolor_list} ${haircolor_list} ${level_list} ${mood_list} ${personality_list} ${quest_list} ${gender_list}\n`;
   }
   document.getElementById("outputBox").value = result;
}
document.getElementById("genChar").addEventListener("click", generateOutput);








