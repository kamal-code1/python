const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'pink', 'brown', 'gray'];

const colorPalette = document.getElementById('colorPalette');
const grid = document.getElementById('grid');

let selectedColor = null;
let isDrawing = false;

colors.forEach(color => {
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('color');
  colorDiv.style.backgroundColor = color;
  colorPalette.appendChild(colorDiv);

  colorDiv.addEventListener('click', () => {
    
    document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
 
    colorDiv.classList.add('selected');
    selectedColor = color;
  });
});


for (let i = 0; i < 400; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  grid.appendChild(square);


  square.addEventListener('mousedown', () => {
    if (selectedColor) {
      square.style.backgroundColor = selectedColor;
      isDrawing = true;
    }
  });

  square.addEventListener('mouseover', () => {
    if (isDrawing && selectedColor) {
      square.style.backgroundColor = selectedColor;
    }
  });
}


document.addEventListener('mouseup', () => {
  isDrawing = false;
});
