// script.js

// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to calculate and display the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}