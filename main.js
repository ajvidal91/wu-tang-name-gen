// create a Wu-Tang Clan name generator. Present the user with 5 survey questions
// and based on those answers randomly generate their name. ES6+ and bonus points
// for it running on a node server
const wuTang = ["rza","gza","u-god","odb","method man","raekwon","inspectah deck","masta killa","ghostface killah"];
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


/****************************old code******************************************/
//
// buttonPress.onclick=function wu(){
// console.log("gdjsa")
//  if (name === "");
//   return ("");{
// }else if (yoHood === "");
//  return (""){
// }else if (faveSong === "");
//     return (""){
// }else if (yoAge === "");
//  return (""){
// }else if (howTall === "");
//  return (""){
// }else{
//   return Math.round(Math.random()*wuTang.length - 1)
//   .innerHTML = '<h1> </h1>';
// }
// }
