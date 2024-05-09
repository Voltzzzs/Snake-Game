const playground = document.querySelector(".playground");
const snake = document.querySelector(".snake");
const body = document.querySelector("body");

let lastK = "";

let snakes = [];
let ycord = 3;
let xcord = 3;

playground.appendChild(snake);
snake.style.gridColumn = 3;
snake.style.gridRow = 3;

let intervalId;

document.body.addEventListener("keydown", (event) => {
  clearInterval(intervalId);
  switch (event.key) {
    case "w":
      if (lastK !== "s" && lastK !== "w") {
        lastK = "w";
        ycord--;
        intervalId = setInterval(() => {
          ycord--;
        }, 150);
      }
      break;

    case "s":
      if (lastK !== "w" && lastK !== "s") {
        lastK = "s";
        ycord++;
        intervalId = setInterval(() => {
          ycord++;
        }, 150);
      }
      break;

    case "d":
      if (lastK !== "d" && lastK !== "a") {
        lastK = "d";
        xcord++;
        intervalId = setInterval(() => {
          xcord++;
        }, 150);
      }
      break;

    case "a":
      if (lastK !== "a" && lastK !== "d") {
        lastK = "a";
        xcord--;
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          xcord--;
        }, 150);
      }
      break;
  }
});


setInterval(() => {
    snake.style.gridColumn = xcord;
    snake.style.gridRow = ycord;
  }, 10);





let tailR = []
let tailC = []

function getCLocation() {
   
    const computedStyle = window.getComputedStyle(snake);


    const gridColumn = computedStyle.gridColumn;

  
    return gridColumn;
}

function getRLocation(){

    let computedStyle = window.getComputedStyle(snake);
    
    let gridRow = computedStyle.gridRow;

    return gridRow;
}