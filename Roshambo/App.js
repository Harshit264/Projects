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

// Controls
const func = (element, value) => {
    
    element.addEventListener("click", () => {
        playerChoice = value
        playerMove()
        moveFunc()
        computer()
        console.log(playerChoice)
    })
        
}

func(rock, 0)
func(paper, 1)
func(scissors, 2)
// 

// Chooses and displays the move
const moveFunc = () => {
    
    let num = Math.floor(Math.random()*3)

    switch(num){
        case 0:
            computerChoice = 0 
            move.textContent = "The Computer Choose: Rock"
        break
        case 1:
            computerChoice = 1
            move.textContent = "The Computer Choose: Paper"
        break
        case 2:
            computerChoice = 2
            move.textContent = "The Computer Choose: Scissors"
        break
    }

    console.log(computerChoice)
}

const playerMove = () => {
    
    switch(playerChoice){
        case 0: 
            info.textContent = "You Choose: Rock"
        break
        case 1:
            info.textContent = "You Choose: Paper"
        break
        case 2:
            info.textContent = "You Choose: Scissors"
        break
    }
} 
//

// The brain of the operation
const computer = () => {
    
    if (playerChoice === 0){

        switch(computerChoice){
            case 0: 
                winnerDiv.textContent = "Tie!"
            break
            case 1:
                winnerDiv.textContent = "You lost :("
            break
            case 2: 
                winnerDiv.textContent = "You Won :)"
                increaseScore()
            break
        }

    }

    else if (playerChoice === 1){
        
        switch(computerChoice){
            case 0: 
                winnerDiv.textContent = "You Won :)"
                increaseScore()
            break
            case 1:
                winnerDiv.textContent = "Tie!"
            break
            case 2: 
                winnerDiv.textContent = "You Lost :("
            break
        }

    }

    else if (playerChoice === 2){

        switch(computerChoice){
            case 0: 
                winnerDiv.textContent = "You Lost :("
            break
            case 1:
                winnerDiv.textContent = "You Won :)"
                increaseScore()
            break
            case 2: 
                winnerDiv.textContent = "Tie!"
            break
        }
    
    }
}
//