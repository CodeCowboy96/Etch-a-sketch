//Create a div to establish one square
//append 15 more squares to first div 
//apply a hover effect to each square
//create a reset button
const resetButton = document.createElement("button") 
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    console.log("Button clicked!");
  });


const container = document.querySelector("#container")
container.parentNode.insertBefore(resetButton, container);

let num = 1;

for (let i=0; i<16; i++) {
    let parentDiv = document.createElement("div");
        parentDiv.setAttribute('class', 'firstDivs');
        parentDiv.addEventListener("mouseover", () => {
    
            parentDiv.style.backgroundColor = "blue";
          });
        
        container.appendChild(parentDiv);
}









