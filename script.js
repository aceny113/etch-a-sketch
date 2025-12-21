
//make grid
function grid(gridSize = 16) {
  const table = document.querySelector(".table");
  for (let i = 1; i <= gridSize; i++) {
    const cols = createColumn();

    for (let j = 1; j <= gridSize; j++) {
      const row = createRow();
      cols.appendChild(row);
    }

    table.appendChild(cols);
  }
changeBg();
}

function createColumn() {
const columnDiv = document.createElement("div");
columnDiv.classList.add("cols");
return columnDiv;
}

function createRow() {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("box", "row");
  return rowDiv;
}


function changeBg() {
  const rowsList = document.querySelectorAll(".box");
  const colorChoice = document.querySelector("#color-choice");
  
  for (let i = 0; i < rowsList.length; i++) {
    const rows = rowsList[i];
    rows.addEventListener("mouseenter", () => {
      
      // rows.classList.add("change-bg");
      // rows.style.backgroundColor = colorChoice.value;
      rows.style.backgroundColor = randomColor();
    });
  }
  
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


function askNewGrid() {
  const newGrid = Number(prompt("Enter new Grid. 1 - 100"));
  const table = document.querySelector(".table");

  //remove rows and columns
  const colsList = document.querySelectorAll(".cols");
  for (let i = 0; i < colsList.length; i++) {
    const cols = colsList[i];

    const rows = cols.querySelectorAll(".row");
    for (let j = 0; j < rows.length; j++) {
      cols.removeChild(rows[j]);
    }
    table.removeChild(cols);
  }

/*   const cols = table.querySelectorAll(".cols");
  cols.forEach((cols) => {
    cols.remove();
  });

  const rows = document.querySelectorAll(".row");
  rows.forEach((rows) => {
    rows.remove();
  });

} */
grid(newGrid);
}
grid();
