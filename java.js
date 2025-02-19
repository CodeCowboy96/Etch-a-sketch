//Create a div to establish one square
//append 15 more squares to first div 
//apply a hover effect to each square
//create a reset button
const resetButton = document.createElement("button") 
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side for the new grid (max 100):");
    
    let number = parseInt(userInput);

    if (isNaN(number) || number < 1 || number > 100) {
        alert("Please enter a valid number between 1 and 100.");
      } else {
        console.log(`Resetting grid with ${number} squares per side.`);

        resetGrid(number);
      }
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





function resetGrid(size) {
    const existingDivs = document.querySelectorAll('.firstDivs');
    existingDivs.forEach(div => div.remove());
    // calculate number of squares
    const totalCells = size * size;

    for (let i=0; i<totalCells; i++) {
        let parentDiv = document.createElement("div");
            parentDiv.setAttribute('class', 'firstDivs');
            parentDiv.addEventListener("mouseover", () => {
        
                parentDiv.style.backgroundColor = "blue";
              });
            
            container.appendChild(parentDiv);
    }
    // Implement grid reset logic
    // 1. Clear existing grid
    // 2. Create new grid with 'size' squares per side
    console.log(`Creating a new ${size}x${size} grid`);
  }


  

