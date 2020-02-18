var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomImage = "images/dice"+randomNumber1+".png";

document.querySelector(".dice .img1").setAttribute("src",randomImage);

// Right dice

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice .img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins but iam a loser";
}

else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins Right at YOUR FACE lOsEr";
}

else{
  document.querySelector("h1").innerHTML = "Nobody wins make Peace OR go again";
}
