///list down all the winning combinations
let winningCombinations = [
  [1,2,3],
  [4,5,6],     //vertical
  [7,8,9],

  [1,4,7],
  [2,5,8],     // horizontal
  [3,6,9],  
  
  [1,5,9],     //diagonal
  [3,5,7]
]

// accessing all boxes 
let boxelement = document.querySelectorAll(".box")

// providing event listener to all the boxes
for(elem of boxelement){
  elem.addEventListener("click",handleClick);
}
let click=0;
let xAttempts = []
let oAttempts =[]

function handleClick(event){
  let ptag = document.createElement("p");
  let id = event.target.id;
  ptag.style.color = "#FAB201"
  boxelement[id-1].appendChild(ptag)

  if(click%2==0){
      ptag.textContent = "X"
      click++
      xAttempts.push(parseInt(id))
      result(xAttempts, "X")

  }else{
      ptag.textContent = "O"
      click++
      oAttempts.push(parseInt(id))
      result(oAttempts, "O")
  }
  if(click==9){
      resultBox.style.visibility = "visible";
      messageBox.textContent = "It's a Draw"
  }

}
let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")
function result(playArray, player){
  for (let i = 0; i < winningCombinations.length; i++) {
      let check = true
      for (let j = 0; j < winningCombinations[i].length; j++){
          if(playArray.includes(winningCombinations[i][j])==false){
              check=false
              break
          }
      }
      if(check==true){
          resultBox.style.visibility = "visible";
          messageBox.textContent = player + " Won the match"
      }
  
  }
}
let playAgain = document.getElementById("button")
playAgain.addEventListener('click', ()=>{
  location.reload()
})