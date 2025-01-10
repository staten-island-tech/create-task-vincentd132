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
const boxes = document.querySelectorAll(".box"); // Change 'doors' to 'boxes'
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

function init(firstInit = true, groups = 1, duration = 1) {
  for (const box of boxes) {
    if (firstInit) {
      box.dataset.spinned = "0";
    } else if (box.dataset.spinned === "1") {
      return;
    }
  }

  const items = slotMachine.map((slot) => slot.item);
  const pool = firstInit ? ["❓"] : shuffle(items);

  for (const box of boxes) {
    const boxesContainer = box.querySelector(".boxes");
    const boxesClone = boxesContainer.cloneNode(false);

    boxesClone.addEventListener(
      "transitionstart",
      function () {
        box.dataset.spinned = "1";
        this.querySelectorAll(".box").forEach((box) => {
          box.style.filter = "blur(1px)";
        });
      },
      { once: true }
    );

    boxesClone.addEventListener(
      "transitionend",
      function () {
        this.querySelectorAll(".box").forEach((box, index) => {
          box.style.filter = "blur(0)";
          if (index > 0) this.removeChild(box);
        });
      },
      { once: true }
    );

    for (let i = pool.length - 1; i >= 0; i--) {
      const boxItem = document.createElement("div");
      boxItem.classList.add("box");
      boxItem.style.width = box.clientWidth + "px";
      boxItem.style.height = box.clientHeight + "px";
      boxItem.textContent = pool[i];
      boxesClone.appendChild(boxItem);
    }

    box.appendChild(boxesClone);
  }
}

function shuffle(arr) {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
