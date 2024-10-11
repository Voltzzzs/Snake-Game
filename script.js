
for (i = 0; i < 121; i++){
    let tile = document.createElement('div')
    let row;




    tile.classList.add("tile")

    document.querySelector(".playground").appendChild(tile);
}

const tiles = document.querySelectorAll(".tile")
let tailSize = 0;
let headRow = 5;
let headColumn = 5;



let headIndex = (headRow * 11) + headColumn
let headToRemove = headIndex
let tail =  []











setColor()

let keypress;



document.querySelector("body").addEventListener("keypress",(event)=>{
       keypress = event.key
       
 })


function verifyCatch(){
    if(headIndex === randomNum){
        tailSize++
        manzana()
    }
}

function deColorTail(){
    let bunda = tail.shift()
    if(tailSize > 0 ){
        tiles[bunda].style.backgroundColor = "brown"
    }
}




 function moving (){


    if(keypress === "w"){
     headToRemove = headIndex
     tail.push(headToRemove)
     headRow--
     headIndex = (headRow * 11) + headColumn
    }else if(keypress === "s"){
        headToRemove = headIndex
        tail.push(headToRemove)
        headRow++
        headIndex = (headRow * 11) + headColumn
       } else if(keypress === "a"){
        headToRemove = headIndex
        tail.push(headToRemove)
        headColumn--
        headIndex = (headRow * 11) + headColumn
       } else if(keypress === "d"){
        headToRemove = headIndex
        tail.push(headToRemove)
        headColumn++
        headIndex = (headRow * 11) + headColumn
       }

    if(headColumn > 10 || headColumn < 0 || headRow < 0 || headRow > 10){
        document.querySelector("body").style.backgroundColor = "black"
    }
        verifyCatch()
        setColor()





    console.log(tailSize)
     
 }


 function setColor (rowNum, columnNum){
  

    tiles[headToRemove].style.backgroundColor = "brown"
    tiles[headIndex].style.backgroundColor = 'black'


     deColorTail()

    tail.forEach((element)=>{
       tiles[element].style.backgroundColor = "black"
    })
    

}

 setInterval(moving,160);


let randomNum;

function manzana (){
    randomNum = Math.round(Math.random()*120)
    tiles[randomNum].style.backgroundColor = "blue"

    return randomNum;
} 

manzana()