class Calculator {
  constructor() {
    this.result = "";
  }

  appendValue(value) {
    this.result += value;
  }

  clear() {
    this.result = "";
  }

  calculate() {
    try {
      return eval(this.result);
    } catch (error) {
      return "Eroare";
    }
  }
}

const calculator = new Calculator();

function clearScreen() {
  calculator.clear();
  document.getElementById("result").value = "";
  document.getElementById("resultB").value = "";
}

function appendValue(value) {
  calculator.appendValue(value);
  document.getElementById("result").value += value;
}

function calculate() {
  const result = calculator.calculate();
  document.getElementById("result").value = result;
  document.getElementById("resultB").value = calculator.result;
}
