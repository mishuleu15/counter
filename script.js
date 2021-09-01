const numberCount = document.querySelector('h1');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let count = 0;
numberCount.textContent = count;
function decrease() {
  if (count <= 0) {
    numberCount.textContent = 0;
    numberCount.style.color = 'black';
  } else {
    numberCount.textContent = --count;
  }
}

function reset() {
  count = 0;
  numberCount.textContent = count;
  numberCount.style.color = 'black';
}

function increase() {
  numberCount.textContent = ++count;
  numberCount.style.color = 'green';
}

decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
increaseBtn.addEventListener('click', increase);
