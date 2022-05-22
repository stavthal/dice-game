var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;



// const image1 = document.getElementsByClassName("img1");
// const image2 = document.getElementsByClassName("img2");


// console.log(image1);
// console.log(image2);


// image1.src =`images/dice${randomNumber1}.png`;
// image2.src =`images/dice${randomNumber2}.png`;


document.querySelector(".img1").src=`images/dice${randomNumber1}.png`;
document.querySelector(".img1").src=`images/dice${randomNumber2}.png`;


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏴";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏴 Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}