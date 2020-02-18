

//DETECTING BUTTON PRESSES

var length = document.querySelectorAll("button").length;

for (var i = 0; i < length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    sound(button);
    addanimation(button);
  });
}

//DETECTING KEYBOARD PRESSES
document.addEventListener("keydown",function(event){
 sound(event.key);
 addanimation(event.key);
});
//NOTE PRESS KEYS WITH CAPSLOCK ON BECAUSE THEY ARE CAPITAL;

//MAKING SOUND
function sound(key){

  switch (key) {
    case "W":
    var tom_1 = new Audio("sounds/tom-1.mp3");
    tom_1.play();
      break;
    case "A":
    var tom_2 = new Audio("sounds/tom-2.mp3");
    tom_2.play();
      break;
    case "S":
    var tom_3 = new Audio("sounds/tom-3.mp3");
    tom_3.play();
      break;
    case "D":
    var tom_4 = new Audio("sounds/tom-4.mp3");
    tom_4.play();
      break;
    case "J":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
      break;
    case "K":
    var crash= new Audio("sounds/crash.mp3");
    crash.play();
      break;
    case "L":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
      break;
    default:
  }
}

//Animation
function addanimation(currentkey){
  var button = document.querySelector("."+currentkey);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
