//Random Number Generate

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

function startGame(){
    let userNumber = parseInt(document.getElementById("userInput").value);
    let resultDisplay = document.getElementById("display");

    // Correct Guess
    if (randomNumber === userNumber){
        resultDisplay.innerHTML =
        `Congrats, you Guessed the right number`;

        resultDisplay.style.backgroundColor = "green";

        //Guessed Number is Less
    }else if (randomNumber < userNumber){
        resultDisplay.innerHTML = `Number is less than ${userNumber}`;
        resultDisplay.style.backgroundColor = "red";

        //Guessed Number is Greater
    }else if(randomNumber > userNumber){
        resultDisplay.innerHTML = `Number is greater than ${userNumber}`;
        resultDisplay.style.backgroundColor = "red";
    }
    }
    function reset(){
        window.location.reload();
    }
    
