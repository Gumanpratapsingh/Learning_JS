let firstCard = Math.floor(Math.random() * 11) + 2;

let secondCard = Math.floor(Math.random() * 11) + 2;

let cards = []
cards.push(firstCard)
cards.push(secondCard)
let sum = firstCard + secondCard

let sumofBoth = document.getElementById("sum")


let hasBlackJack = 0
let isAlive = 1
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")


let cardEl = document.querySelector("#cardsEl")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "


    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw new card"
    } else if (sum === 21) {
        hasBlackJack = 1
        message = "Wooho,You've got the BlackJack"
    } else {
        isAlive = 0
        message = "You're out of the game"
    }
    messageEl.textContent = message

}


function Submit() {
    let Age = document.getElementById("Age").value
    if (Age >= 21) {
        document.getElementById("Age-response").innerHTML = "Yes,You can Go!"

    } else {
        document.getElementById("Age-response").innerHTML = "Go Out!"

    }


}

if (hasBlackJack === 1) {

}

function newCard() {
    let newcard = Math.floor(Math.random() * 11) + 2
    sum += newcard
    cards.push(newcard)
    renderGame()


}

function resetGame() {
    sumEl.textContent = "Sum: "
    sum = 0
    cards = []

    cardEl.textContent = "Cards: "
}