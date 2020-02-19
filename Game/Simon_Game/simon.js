var pattern = [];
var buttoncolors = ["red","blue","green","yellow"];
var userclickedpattern = [];
var started = false;
var level = -1;


$(document).keypress(function(){
if(started==false){

    nextsequence();
   started = true;
}
});


function nextsequence(){

  userclickedpattern=[];
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomcolor = buttoncolors[randomNumber];
  pattern.push(randomcolor);
  $("#"+randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
   playsound(randomcolor);

}

$(".btn").click(function(){

  var userchosencolor = $(this).attr("id");
  userclickedpattern.push(userchosencolor);
  playsound(userchosencolor);
  checkAnswer(userclickedpattern.length-1);
});

function checkAnswer(clevel){
  if(pattern[clevel]===userclickedpattern[clevel]){
    console.log("Success");
    if(pattern.length===userclickedpattern.length){
      setTimeout(function(){
        nextsequence();
      },150);
    }
  }
  else {
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)

   $("#level-title").text("Game Over, Press Any Key to Restart");

    startover();
  }
}

function playsound(name){

  var audio_play = new Audio("sounds/"+name+".mp3");
  audio_play.play();
  addAnimation(name);
}

function addAnimation(name){
  $("."+name).addClass("pressed");
  setTimeout(function(){
  $("."+name).removeClass("pressed");
  },100);
}


function startover(){
  started = false;
  pattern = [];
  level = -1;
}
