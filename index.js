var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏴";
} else if (randomNumber2 < randomNumber1) {
    document.querySelector("h1").innerHTML = "🏴 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw!";
};


document.querySelector(".img1").src=`images/dice${randomNumber1}.png`;
document.querySelector(".img2").src=`images/dice${randomNumber2}.png`;


