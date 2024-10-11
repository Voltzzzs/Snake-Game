for (i = 0; i < 121; i++){
    let tile = document.createElement('div')
    let row;




    tile.classList.add("tile")

    document.querySelector(".playground").appendChild(tile);
}


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

 function moving (){


    if(keypress === "w"){
     headToRemove = headIndex
     headRow--
     headIndex = (headRow * 11) + headColumn
    }else if(keypress === "s"){
        headToRemove = headIndex
        headRow++
        headIndex = (headRow * 11) + headColumn
       } else if(keypress === "a"){
        headToRemove = headIndex
        headColumn--
        headIndex = (headRow * 11) + headColumn
       } else if(keypress === "d"){
        headToRemove = headIndex
        headColumn++
        headIndex = (headRow * 11) + headColumn
       }

    if(headColumn > 11 || headColumn < 0 || headRow < 0 || headRow > 11){
        document.querySelector("body").style.backgroundColor = "black"
    }
       setColor()
    console.log(headColumn)
    console.log(headIndex)
    console.log(headToRemove)
     
 }


 function setColor (rowNum, columnNum){
    let tiles = document.querySelectorAll(".tile")
  

    tiles[headToRemove].style.backgroundColor = "red"
    tiles[headIndex].style.backgroundColor = 'black'
    
    tail.forEach((element)=>{
        tiles[element].style.backgroundColor = 'black'
    })
   

}

 setInterval(moving,200);

 