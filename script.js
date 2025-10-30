
function makeGrid(gridSize) {
  const table = document.querySelector(".table");
  for (let i = 1; i <= gridSize; i++) {
    let cols = document.createElement("div");
    cols.className = "cols";

    for (let j = 1; j <= gridSize; j++) {
      let row = document.createElement("div");
      row.className = "box row";
      cols.appendChild(row);
    }

    table.appendChild(cols);
  }
}
makeGrid(16);