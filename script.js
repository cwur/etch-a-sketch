containerNode = document.querySelector(".container");

clearGrid();
drawGrid(16);

clearNode = document.querySelector("button");
clearNode.addEventListener("click", askGridSize);

function askGridSize() {
  getGridSize = prompt("# of elements in grid (max 100)");
  clearGrid();
  drawGrid(getGridSize);
}

function drawGrid(elementsInColumn) {
  elementsInColumnNumber = Math.abs(Math.round(Number(elementsInColumn)));
  if (elementsInColumnNumber > 100) elementsInColumnNumber = 100;
  elementsInGrid = elementsInColumnNumber ** 2

  containerNode.style['grid-template-columns'] = `repeat(${elementsInColumnNumber}, 1fr)`;
  for (i = 0; i < elementsInGrid; i++) {
    elementNode = document.createElement("div");
    elementNode.dataset.colorLevel = 0;
    elementNode.addEventListener('mouseenter', draw);
    containerNode.appendChild(elementNode);
  }
}

function clearGrid() {
  containerNode.textContent = "";
}

function draw(event) {
  const elementNode = event.srcElement;

  const colorLevel = Number(elementNode.dataset.colorLevel);
  const newColorLevel = (colorLevel + 0.1).toFixed(1);
  elementNode.dataset.colorLevel = newColorLevel;
  elementNode.style.backgroundColor = `rgba(0, 255, 0, ${newColorLevel})`;
}