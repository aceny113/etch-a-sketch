let gridSize = 16;

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


for(i = 0; i < document.querySelectorAll(".box").length; i++) {
  let row = document.querySelectorAll(".box")[i];
row.addEventListener("mouseover", (event) => {
  row.classList.add("change-bg");
});
}

function askUserGridSize() {
  gridSize = Number(prompt("Enter Grid Size You Want. Minimum of 1 and Maximum of 100"));
} 