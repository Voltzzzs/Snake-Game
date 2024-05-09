const playground = document.querySelector(".playground");
const snake = document.querySelector(".snake");
const head = document.querySelector(".head");
const body = document.querySelector("body");

let lastK = "";

let snakes = [];
let ycord = 3;
let xcord = 3;

head.style.gridColumn = 3;
head.style.gridRow = 3;

playground.appendChild(head);

let intervalId;

document.body.addEventListener("keydown", (event) => {
  clearInterval(intervalId);
  switch (event.key) {
    case "w":
      if (lastK !== "s" && lastK !== "w") {
        lastK = "w";
        intervalId = setInterval(() => {
          ycord--;
        }, 100);
      }
      break;

    case "s":
      if (lastK !== "w" && lastK !== "s") {
        lastK = "s";
        intervalId = setInterval(() => {
          ycord++;
        }, 100);
      }
      break;

    case "d":
      if (lastK !== "d" && lastK !== "a") {
        lastK = "d";
        intervalId = setInterval(() => {
          xcord++;
        }, 100);
      }
      break;

    case "a":
      if (lastK !== "a" && lastK !== "d") {
        lastK = "a";
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          xcord--;
        }, 100);
      }
      break;
  }
});

let tailR = [];
let tailC = [];
let numtails = 0;

createTail();
createTail();
createTail();
createTail();
createTail();
createTail();
createTail();
createTail();





setInterval(() => {
    head.style.gridColumn = xcord;
    head.style.gridRow = ycord;
  
    for (let i = 1; i <= numtails; i++){
      let tailElement = document.querySelector(`.po${i}`)
  
      tailElement.style.gridColumn = tailC[i];
      tailElement.style.gridRow = tailR[i];
  }
  
  }, 1);

setInterval(() => {
    if (tailC.length > numtails) {
      tailC.pop();
      tailR.pop();
    }
  
    let c = getCLocation();
    let r = getRLocation();
  
    tailC.unshift(c);
    tailR.unshift(r);
  
    console.log(tailC, tailR);
  }, 100);
  





function getCLocation() {
  const computedStyle = window.getComputedStyle(snake);

  const gridColumn = computedStyle.gridColumn;

  return gridColumn;
}

function getRLocation() {
  let computedStyle = window.getComputedStyle(snake);

  let gridRow = computedStyle.gridRow;

  return gridRow;
}



function createTail() {
    numtails++;
    let tailler = document.createElement("div");
    playground.appendChild(tailler);
    tailler.className = `snake po${numtails}`;
  }
  

