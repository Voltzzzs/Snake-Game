const playground = document.querySelector(".playground")
const snake = document.querySelector(".snake")
const body = document.querySelector("body")

let lastK = ""

let snakes = []
let ycord = 3
let xcord = 3


playground.appendChild(snake)
snake.style.gridColumn = 3
snake.style.gridRow = 3


let intervalId; 

document.body.addEventListener("keydown", (event) => {
    clearInterval(intervalId); 
    switch(event.key){
        case 'w':
            if(lastK !== "s" && lastK !== "w"){
                lastK = "w"
                intervalId = setInterval(() => {
                    ycord--;
                }, 100);
            }
            break;
        
        case "s":
            if(lastK !== "w" && lastK !== "s"){
                lastK = "s"
                intervalId = setInterval(() => {
                    ycord++;
                }, 100);
            }
            break;

        case "d":
            if(lastK !== "d" && lastK !== "a"){
                lastK = "d"
                    intervalId = setInterval(() => {
                        xcord++;
                    }, 100);
                }
                break;
            
        case "a":
            if(lastK !== "a" && lastK !== "d"){
                lastK = "a"
                clearInterval(intervalId); 
                    intervalId = setInterval(() => {
                        xcord--;
                    }, 100);
                }
                break;

    }
});



setInterval(()=>{
    snake.style.gridColumn = xcord
    snake.style.gridRow = ycord
},100)

