let cards = []
let hasBlackJack = false
let sum = 0
let isAlive = false
let Message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Harshit",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1){
        return 11
    } else if (random > 10){
        return 10
    } else{
        return random
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        Message = "Do you want to draw another card?"
    } else if(sum === 21){
        Message = "Woohoo! You have got a blackjack!"
        hasBlackJack = true
    } else{
        Message = "You're are out of game!"
        isAlive = false
    }
    messageEl.textContent = Message
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}