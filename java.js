createInitialGrid();
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


function resetGrid(size) {
    
    container.textContent = '';
    createInitialGrid(size);
    
  }

  function createInitialGrid(size = 4) {
    const container = document.querySelector("#container");
    const totalCells = size * size;
    const squareSize = `${100 / size}%`;

    for (let i = 0; i < totalCells; i++) {
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute('class', 'firstDivs');
        parentDiv.style.flexBasis = squareSize;
        parentDiv.style.width = squareSize;
        parentDiv.style.height = squareSize;
        
        parentDiv.addEventListener("mouseover", () => {
            parentDiv.style.backgroundColor = "red";
        });
        
        container.appendChild(parentDiv);
    }
}

//Create a div to establish one square
//append 15 more squares to first div 
    //--method since changed to createInitialGrid function
//apply a hover effect to each square
//create a reset button
// Implement grid reset logic
    // 1. Clear existing grid
    // 2. Create new grid with 'size' squares per side