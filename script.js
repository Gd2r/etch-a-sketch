const container = document.getElementById("container") 

// the function to make the divs with the same size
function makegrid() {

    // ask for grid size
    let grid = prompt("Enter the Grid size");

    let gridsize = grid * grid;
    for (let i =  0; i < gridsize; i++) {
        createdivs();
    }

}

function createdivs() {
    let divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("griditem");
}

