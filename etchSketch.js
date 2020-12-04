const container = document.querySelector('#container');

function grids (rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell);
  }
  colourChange = document.querySelectorAll('.grid-item');
  colourChange.forEach(colourChange => colourChange.addEventListener('mouseover', colourGrid));
}

function reload () {
	window.location.reload(true);
}

function colourGrid () {
     this.style.backgroundColor = 'blue';
}

resetBtn = document.querySelector('#reset');
resetBtn.classList.add('resetBtn');
resetBtn.addEventListener('click', reload);

gridSizeValue = Number(prompt('Enter a single number between 0-100 for the grid-size.'));
if (gridSizeValue > 100) {
	alert('You entered above 100. Try Again');
	reload();
}

else if (gridSizeValue < 0) {
	alert('You entered below 0. Try again!');
	reload();
}
else {
	grids(gridSizeValue, gridSizeValue);
}
