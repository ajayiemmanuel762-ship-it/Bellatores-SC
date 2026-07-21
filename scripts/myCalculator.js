//calculator program

let updateDisplay = localStorage.getItem('calculate') || '';

function appendToDisplay(input) {
  updateDisplay += input;

  updateCalculator();

  localStorage.setItem('calculate', calculate);
}

function clearDisplay() {
  updateDisplay = '';

  updateCalculator();
  localStorage.setItem('calculate', calculate);
}

function calculate() {
  updateDisplay = eval(updateDisplay);

  updateCalculator();
  localStorage.setItem('calculate', calculate);
}

function updateCalculator() {
document.querySelector('.calculate-btn')
  .innerHTML = updateDisplay;
}


console.log(display);
