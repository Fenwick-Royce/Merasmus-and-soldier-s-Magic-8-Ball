const body = document.querySelector('body')
body.style.backgroundImage = 'linear-gradient(red, blue)'; 
body.style.backgroundRepeat = 'no-repeat';

function RNG(max_number) {
    return Math.round(Math.random() * max_number);
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener(click, function(event) {
    alert("clicked!")
    //proceedure goes here
    //0-> "yeah"
    //1-> nah
    //2-> "try again"
    //3-> "doomkoft!"
    let randomNumber = RNG(3);
    aleart(randomNumber)
    //generate a rando number from the question.
})