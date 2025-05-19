function appendToDisplay(value) {
  document.getElementById('display').value += value;
  updateLiveResult();
}

function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('live-result').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
  updateLiveResult();
}

function calculateResult() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    document.getElementById('live-result').value = '';
  } catch (e) {
    alert('Invalid Expression');
    clearDisplay();
  }
}

function updateLiveResult() {
  try {
    const expression = document.getElementById('display').value;
    if (expression) {
      const result = eval(expression);
      document.getElementById('live-result').value = result;
    } else {
      document.getElementById('live-result').value = '';
    }
  } catch {
    document.getElementById('live-result').value = '';
  }
}