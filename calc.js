let currentInput = "";
let display = document.getElementById("display");

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result;
    } catch (error) {
        display.innerText = "Error";
    }
}
