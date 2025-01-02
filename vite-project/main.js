let spinCount = 0;

const slotMachine = [
  { number: 1, item: "Cherry", prize: 10, image: "cherry.jpg" },
  { number: 2, item: "Lemon", prize: 5, image: "lemon.jpg" },
  { number: 3, item: "Orange", prize: 7, image: "orange.jpg" },
  { number: 4, item: "Bell", prize: 15, image: "bell.jpg" },
  { number: 5, item: "Diamond", prize: 50, image: "diamond.jpg" },
  { number: 6, item: "Plum", prize: 8, image: "plum.jpg" },
  { number: 7, item: "Bar", prize: 25, image: "bar.png" },
  { number: 8, item: "7", prize: 500, image: "7.jpg" },
  { number: 9, item: "Watermelon", prize: 30, image: "watermelon.jpg" },
];

const button = document.getElementById("random");
const resultDiv = document.getElementById("slotResult");
const imageDiv = document.getElementById("slotImage");

button.addEventListener("click", function () {
  if (spinCount < 3) {
    const randomIndex = Math.floor(Math.random() * slotMachine.length);
    const randomItem = slotMachine[randomIndex];
    if (randomItem.item === "7") {
      resultDiv.innerHTML = `You got a ${randomItem.item}! Prize: $${randomItem.prize}`;
      imageDiv.innerHTML = `<img src="${randomItem.image}" alt="${randomItem.item}">`;
    } else {
      resultDiv.innerHTML = `You got a ${randomItem.item}. Try again!`;
      imageDiv.innerHTML = "";
    }
    spinCount++;
    if (spinCount === 3) {
      button.disabled = true;
      resultDiv.innerHTML += `<br>You have finished all 3 spins! Click reset to play again.`;
    }
  }
});

function resetGame() {
  spinCount = 0;
  resultDiv.innerHTML = "";
  imageDiv.innerHTML = "";
  button.disabled = false;
}
