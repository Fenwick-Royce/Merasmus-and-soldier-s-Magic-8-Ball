const body = document.querySelector('body')
body.style.backgroundImage = 'linear-gradient(red, blue)'; 
body.style.backgroundRepeat = 'no-repeat';

function RNG() {
    return Math.round(Math.random());
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {

    let randomNumber = 3;

    let answerText = "";
    //proceedure goes here
    //0-> "yeah"
    if (randomNumber == 0) {
        answerText = "AFIRMATIVE!!"
    }
    //1-> nah
    else if (randomNumber == 1) {
        answerText = "down and give me twenty!!"
    }
    //2-> "try again"
    else if (randomNumber == 2) {
        answerText = "Last one alive lock the door!!"
    }
    //3-> "doomkoft!"
    else     if (randomNumber == 3) {
        answerText = "SPY!!!"
    }
    answer.innerHTML = answerText;

    console.log(answerText)
    //generate a rando number from the question.
})