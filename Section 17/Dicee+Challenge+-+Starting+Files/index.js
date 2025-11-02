let randomNumber1 = Math.floor(Math.random() * 6 ) + 1
let randomNumber2 = Math.floor(Math.random() * 6 ) + 1

let player1 = document.querySelector(".img1")
player1.setAttribute("src", `./images/dice${randomNumber1}.png`)

let player2 = document.querySelector(".img2")
player2.setAttribute("src", `./images/dice${randomNumber2}.png`)

let h1 = document.querySelector("h1")
if (randomNumber1 === randomNumber2) {
  h1.textContent =`🚩 Draw! 🚩`
}
else if (randomNumber1 > randomNumber2) {
  h1.textContent = `🚩 Player 1 Wins!`
} else {
  h1.textContent = `Player 2 Wins 🚩`
}