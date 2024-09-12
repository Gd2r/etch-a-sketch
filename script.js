const container = document.getElementById("container") 

// the function to make the divs with the same size
function makegrid() {

    clearGrid();

    // ask for grid size
    let grid;
    
    do {
        grid = prompt("Enter the Grid size (up to 100):");
    } while (grid > 100 || grid <= 0);
   

    let gridsize = grid * grid;
    for (let i =  0; i < gridsize; i++) {
        createdivs();
    }
}

function createdivs() {
    let divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("griditem");

    divs.addEventListener("mouseover", changeColor)
}


function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetgrid() {
    makegrid();
}

function changeColor(event) {
    const selectedColor = colorPicker.value; 
    event.target.style.backgroundColor = selectedColor;
}