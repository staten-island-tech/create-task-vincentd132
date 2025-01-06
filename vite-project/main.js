(function () {
  "use strict";
})();

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

const lines = document.querySelectorAll(".line");
document.querySelector("#random").addEventListener("click", spin);
document.querySelector("#reseter").addEventListener("click", init);

async function spin() {
  init(false, 1, 2);
  for (const line of lines) {
    const boxes = line.querySelector(".boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
  }
}
