function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  var currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
  try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

// Add event listener for Enter key press
document.getElementById('display').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      calculate();
  }
});
