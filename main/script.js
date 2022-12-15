const body = document.querySelector('body')
body.style.backgroundImage = 'linear-gradient(red, blue)'; 
body.style.backgroundRepeat = 'no-repeat';

function RNG() {
    return Math.round(Math.random());
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {

    const answer = document.querySelector("#answer");

    let randomNumber = Math.floor(Math.random() * 11)


    let answerText = "";
    //proceedure goes here
    //0-> "yeah"
    if (randomNumber == 0) {
        answerText = "AFIRMATIVE!!"
    }
    //1-> nah
    else if (randomNumber == 1) {
        answerText = "down and give me twenty!!!"
    }
    //2-> "try again"
    else if (randomNumber == 2) {
        answerText = "Last one alive lock the door!!"
    }
    //3-> "doomkoft!"
    else     if (randomNumber == 3) {
        answerText = "SPY!!!"
    }
    else if (randomNumber == 5) {
        answerText = "Merasmus: sounds like the question the Yakuza would ask if they feel my debt is due. I will pass"
    }
    else if (randomNumber == 6) {
        answerText = "Merasmus: You cannot escape the terror.....OF READING!!"
    }
    else if (randomNumber == 7) {
        answerText = "Soldier: George washington beleived in that, Jesus beleived in that, PATTINGTON BELEIVED IN THAT! If that idea is good for those two heros, its damn well good enough for us!!"
    }
    else if (randomNumber == 8) {
        answerText = "Soldier: DO NOT DO IT!! Do not think about doing it, DO NOT EVEN THINK ABOUT NOT DOING IT!!"
    }
    else if (randomNumber == 9) {
        answerText = "Soldier: Are you asking for a section 8?!"
    }
    else if (randomNumber == 10) {
        answerText = "Merasmus and Soldier: as roommates, we both agree its a good idea....TO ASK FOR TROUBLE!!"
    }
    answer.innerHTML = answerText;

    console.log(answerText);
    //generate a rando number from the question.
});