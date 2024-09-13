let currentGridSize = 16; // Store the grid size globally for reset

function makegrid() {
    clearGrid();
    
    let grid;
    do {
        grid = prompt("Enter the Grid size (up to 100):");
    } while (grid > 100 || grid <= 0);

    currentGridSize = grid;  // Store the selected grid size for later use
    createGrid(grid);
}

function createGrid(grid) {
    let gridsize = grid * grid;
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

    for (let i = 0; i < gridsize; i++) {
        createdivs(grid);
    }
}
// hello saif
function createdivs(gridSize) {
    let divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("griditem");

    let size = container.clientWidth / gridSize;
    divs.style.width = `${size}px`;
    divs.style.height = `${size}px`;

    divs.addEventListener("mouseover", changeColor);
    divs.addEventListener("mousedown", () => isDrawing = true);
    divs.addEventListener("mouseup", () => isDrawing = false);
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Reset the grid without asking for a new size, just clear the colors
function resetgrid() {
    clearGrid();
    createGrid(currentGridSize);  // Use the stored grid size to recreate the grid
}

function changeColor(event) {
    if (isDrawing) {
        const selectedColor = colorPicker.value;
        event.target.style.backgroundColor = selectedColor;
    }
}

// Track mouse clicks for drawing
document.body.addEventListener("mousedown", () => isDrawing = true);
document.body.addEventListener("mouseup", () => isDrawing = false);
