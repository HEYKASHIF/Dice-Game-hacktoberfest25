// //image2
// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// let randomImage1 = "images/dice" + randomNumber1 + ".png";
// document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

// //image2
// let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// let randomImage2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Won!";
// } else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Won!";
// } else {
//   document.querySelector("h1").innerHTML = "Match Draw!";
// }

// let btn = document.getElementsByTagName("button");

function playGame() {
  // Dice 1
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomImage1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

  // Dice 2
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

  // Result
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
  } else {
    document.querySelector("h1").innerHTML = "Match Draw!";
  }
}

// Button listener
let btn = document.querySelector("button");
btn.addEventListener("click", playGame);
