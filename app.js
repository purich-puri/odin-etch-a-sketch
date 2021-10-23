const container = document.querySelector("#container");

function setupGrid() {
  for (let i = 0; i < 64; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", changeBG);
    container.appendChild(div);
  }
}

function changeBG(e) {
  if (e.target.style.backgroundColor === "#000") {
    e.target.style.backgroundColor = "#fff";
  } else {
    e.target.style.backgroundColor = "#000";
  }
}

setupGrid();
