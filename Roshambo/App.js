const startScreen = document.getElementById("startScreen")
const game = document.getElementById("game")
const startBtn = document.getElementById("startBtn")
const backBtn = document.getElementById("backBtn")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const info = document.getElementById("info")
const move = document.getElementById("move")
const winnerDiv = document.getElementById("winner")
const score = document.getElementById("score")
const gameScore = document.getElementById("gamescore")

let playerChoice
let computerChoice
let playerScore = 0

// Chooses and displays the move
const moveFunc = () => {
    
    let num = Math.floor(Math.random()*3)

    switch(num){
        case 0:
            computerChoice = "rock" 
            move.textContent = "The Computer Choose: Rock"
        break
        case 1:
            computerChoice =  "paper"
            move.textContent = "The Computer Choose: Paper"
        break
        case 2:
            computerChoice =  "scissors"
            move.textContent = "The Computer Choose: Scissors"
        break
    }
}

const playerMove = () => {
    
    switch(playerChoice){
        case 0:
            playerChoice = "rock" 
            info.textContent = "You Choose: Rock"
        break
        case 1:
            playerChoice =  "paper"
            info.textContent = "You Choose: Paper"
        break
        case 2:
            playerChoice =  "scissors"
            info.textContent = "You Choose: Scissors"
        break
    }
} 
//


// The brain of the operation
const computer = () => {

    let compare = (playerChoice, computerChoice) => {
        if(playerChoice === computerChoice) {
        winnerDiv.textContent = "The result is a tie!"
    }

    if(playerChoice === "rock") {
        if(computerChoice === "scissors") {
            winnerDiv.textContent = "You won :)"
            increaseScore()
        } else {
            winnerDiv.textContent = "You lost :("
        }
    }
    if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            winnerDiv.textContent = "You won :)"
            increaseScore()
        } else {
            if(computerChoice === "scissors") {
                winnerDiv.textContent = "You lost :("
        }
    }
    if(playerChoice === "scissors") {
        if(computerChoice === "rock") {
            winnerDiv.textContent = "You lost :("
        } else {
            if(computerChoice === "paper") {
                winnerDiv.textContent = "You won :)"
                increaseScore()
            }
        }
    }
}
}

compare(playerChoice, computerChoice)
playerChoice = ""
computerChoice = ""

}
//

// Controls
const func = (element, value) => {
    
    element.addEventListener("click", () => {
        playerChoice = value
        playerMove()
        moveFunc()
        computer()
    })
        
}

func(rock, 0)
func(paper, 1)
func(scissors, 2)
// 

const increaseScore = () => {
    playerScore = playerScore + 1 
    score.textContent = "Score: " + playerScore
    gameScore.textContent = "Score: " + playerScore
}

backBtn.addEventListener("click", () => {
    game.style.display = "none"
    startScreen.style.display = "block"
})

startBtn.addEventListener("click", () => {
    game.style.display = "block"
    startScreen.style.display = "none"
})