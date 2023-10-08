//Interactive game
let playGame = confirm("Do you want to play rock paper scissors?");
if (playGame) {
    //play 
    let playerChoice = prompt("Choose rock, paper, or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() *3 + 1);
            
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            let result = 
                playerOne === "rock" && computer === "scissors" ||
                playerOne === "paper" && computer === "rock" ||
                playerOne === "scissors" && computer === "paper" ? "You win!" : playerOne === computer ? "It's a tie!" : "You lose!";
        
        alert(`You chose ${playerOne} and the computer chose ${computer}. Result: ${result}`);
        let playAgain = confirm("Do you want to play again?");
        playAgain ? location.reload() : alert("No problem. Goodbye");
    } else {
        alert("You must choose rock, paper, or scissors");
    }
} else {
    //don't play
    alert("No problem. Goodbye");
}
}