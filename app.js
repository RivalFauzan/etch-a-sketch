const container = document.querySelector(".container");

for (let i = 0; i <= 16; i++) {
  for (let j = 0; j <= 16; j++) {
    const titik = document.createElement("div");

    titik.addEventListener("mouseover", () => {
      titik.style.backgroundColor = "black";
    });

    titik.addEventListener("mouseout", () => {
      titik.style.backgroundColor = "black";
    });
    container.appendChild(titik);
  }
}
const newGrid = document.querySelector(".new-grid");
newGrid.addEventListener("click", () => {
  const newSize = prompt("Enter new grid size (max 100):");
  if (newSize > 0 && newSize <= 100) {
    container.innerHTML = "";
    for (let i = 0; i < newSize; i++) {
      for (let j = 0; j < newSize; j++) {
        const titik = document.createElement("div");

        titik.addEventListener("mouseover", () => {
          titik.style.backgroundColor = "black";
        });

        titik.addEventListener("mouseout", () => {
          titik.style.backgroundColor = "black";
        });
        container.appendChild(titik);
      }
    }
  } else {
    alert("Invalid grid size. Please enter a number between 1 and 100.");
  }
});
