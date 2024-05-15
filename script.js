const playground = document.querySelector(".playground");
const head = document.createElement("div");
head.className = "snake head";
let lastK = "";

let xcord = 3;
let ycord = 3;
let numtails = 8;
let tailC = [xcord];
let tailR = [ycord];

head.style.gridColumn = xcord;
head.style.gridRow = ycord;
playground.appendChild(head);

for (let i = 1; i <= numtails; i++) {
  createTail(i);
}

document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (lastK !== "s") {
        lastK = "w";
      }
      break;
    case "s":
      if (lastK !== "w") {
        lastK = "s";
      }
      break;
    case "d":
      if (lastK !== "a") {
        lastK = "d";
      }
      break;
    case "a":
      if (lastK !== "d") {
        lastK = "a";
      }
      break;
  }
});

function moveSnake() {
  switch (lastK) {
    case "w":
      ycord--;
      break;
    case "s":
      ycord++;
      break;
    case "d":
      xcord++;
      break;
    case "a":
      xcord--;
      break;
  }

  head.style.gridColumn = xcord;
  head.style.gridRow = ycord;

  tailC.unshift(xcord);
  tailR.unshift(ycord);

  for (let i = 1; i <= numtails; i++) {
    let tailElement = document.querySelector(`.po${i}`);
    tailElement.style.gridColumn = tailC[i];
    tailElement.style.gridRow = tailR[i];
  }

  if (tailC.length > numtails + 1) {
    tailC.pop();
    tailR.pop();
  }
}

setInterval(moveSnake, 100);

function createTail(index) {
  let tailSegment = document.createElement("div");
  tailSegment.className = `snake po${index}`;
  playground.appendChild(tailSegment);
}
