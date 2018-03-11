// create a Wu-Tang Clan name generator. Present the user with 5 survey questions
// and based on those answers randomly generate their name. ES6+ and bonus points
// for it running on a node server
const wuTang = ["Been 22 hard long years and stil struggling","It's 10 O'Clock HO where the F*** yo seed at?!?!?!",
"Oooh babyyy I like it raaaaaw","The older gods put me on, had to rock this ",
"Wu-Tang Killerrr Bees on a swarm! Rain on ya dollar's ass, disco dorm!",
"Cash rules everything around me, cream get the moeny. Dolla dolla bills yall.",
"We drove expensive whips and took world-wide trips and my dick's been sucked by the finest lips.",
"Shacklin' the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths.",
"Catch the blast of a hype verse, my glock burst, leavin a hearse I did worse.",
"We got stick up kids, corrupt cops and crack rocks and stray shots all of the block it stays hot.",
"I smoke on the mic like smokin joe fraiser",
"I'll sew you're asshole closed and keep feedin you, and feedin you.",
"Next time come strapped with a f***in pamper!",
"First things first man you're f***in with the worst, I'll be stickin pins in your head like a f***in nurse, I'll attack any n!gga who's slack in his mack, Come fully packed with a fat rugged stack.",
"Unbalanced like elepahnats and ants on cee-saws, I throw raps that attack like the Japs on Pearl Harbor, MC's be out like bank robbers, fleain the scene.",
"Be doin artists in like Cain did Abel. Now they money's gettin stuck to the gum under the table. That's what ya get when ya misuse what I invent. Your empire falls and ya lose every cent.",
"In a room full of crackers, I might cut the cheese.",
"thoughts travel at a tremendous speed, clouds of smoke of natural blends of weed.",
"The dumb are mostly entrigued by the drum.",
"Fusion of the 5 elements to search for the higher intelligence, man walk around celebant, believing in relevant..the most benevolent king.",
"Witty unpredictable shots critical to analitical anology",
"These friendly skies aint for you, they for me and mine, this the year of the grimy nigga, Ragtime, peep these niggas on the run, peep my clan emblem, iron lung aint got to tell you where its comin from.",
"throw some water on your wrists, and take off that fucking cologne.",
"od bless the dead, I dont really even like talking about that because that brother is not here to really see what it is and how we could explain it.",
"You gonna hear a lot of loving songs in there, you gonna hear betrayal songs, you gonna hear action that takes place on some of the records ... But it all revolves around that world",
"Cash rules everything around me."];


const buttonPress = document.getElementById("press");

// let name = document.getElementById("firstName");
// let yoHood = document.getElementById("hood");
// let faveSong = document.getElementById("wuSong");
// let yoAge = document.getElementById("age");
// let howTall = document.getElementById("height");
let nameGenerated = document.getElementById("generated");

let inputs = document.getElementsByTagName("input");


buttonPress.addEventListener("click", () => {
  for(let i = 0; i <= inputs.length; i++){
    if(inputs[i].value !== ""){
      let random = wuTang[Math.round(Math.random()* wuTang.length - 1)];
      nameGenerated.innerHTML = random;
    }
  }
});
