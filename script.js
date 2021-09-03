// Set initial count
let count = 0;

// Select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
      value.style.color = 'green';
    } else if (styles.contains('decrease')) {
      if (count <= 0) {
        value.textContent = 0;
        value.style.color = 'black';
      } else {
        value.style.color = 'red';
        count--;
      }
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
