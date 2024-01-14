function appendValue(value) {
  document.calculatorForm.display.value += value;
}

function clearDisplay() {
  document.calculatorForm.display.value = "";
}

function deleteLastCharacter() {
  var currentValue = document.calculatorForm.display.value;
  document.calculatorForm.display.value = currentValue.slice(0, -1);
}
