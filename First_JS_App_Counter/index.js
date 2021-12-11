let count = 0
let countEl = document.getElementById("count-el") //pass in argument


function increment() {
    count += 1;
    countEl.innerText = count


}
let saveprevEl = document.getElementById("saveEl")

function save() {

    let previouscount = count + " - "
    saveprevEl.textContent += previouscount
    console.log(count)


}

function reset() {
    count = 0
    let resetCount = document.getElementById("count-el")
    resetCount.textContent = count
}
// let name1 = "Gps"

// let greeting = "Welcome to Our Page  "

// let welcomeEl = document.getElementById("welcome-el")

// welcomeEl.innerText = greeting + name1