//Create a div to establish one square
//append 15 more squares to first div 
const container = document.querySelector("#container")

let num = 1;

for (let i=0; i<16; i++) {
    let parentDiv = document.createElement("div");
        parentDiv.setAttribute('class', 'firstDivs');
        parentDiv.addEventListener("mouseover", () => {
    
            parentDiv.style.backgroundColor = "blue";
          });
        
        container.appendChild(parentDiv);
}








