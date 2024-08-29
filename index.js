function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const currentText = display.value;
    
    if (currentText && !['+', '-', '*', '/'].includes(currentText.slice(-1))) {
        display.value += operator;
    }
}

function appendParenthesis(parenthesis) {
    const display = document.getElementById('display');
    display.value += parenthesis;
}

function appendDecimal() {
    const display = document.getElementById('display');
    const currentText = display.value;
    
    if (currentText && !['+', '-', '*', '/'].includes(currentText.slice(-1)) && !currentText.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error'; 
    }
}
