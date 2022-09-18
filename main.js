/* Defining DOM elements */
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const showResult = document.querySelector('.result');
const equalsKey = document.querySelector('.equals')
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';


/* Step #1 - Create functions for Add, Subtract, Multiply & Divide and test in the browser's console */
function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

/* Step #2 - Create a new function "Operate" that takes an operator and two numbers, then calls one of the above functions */
function operate (a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
};

/* Step #3 - Create functions that populate the display when you click the number buttons. Store the display value in a variable for later use */
let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (firstNumber && storedNumber) {
            displayResult();
        }
        firstNumber = storedNumber;
        clickedOperator = operator.textContent;
        previousOperand.textContent = storedNumber + clickedOperator;
        storedNumber = '';

        console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
        console.log(clickedOperator);
    })
});

equalsKey.addEventListener('click', function() {
    displayResult();
});

function displayResult() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
};

/* Clear button functionality */
clearButton.addEventListener('click', function() {
    clearEverything();
})

function clearEverything() {
    storedNumber = '';
    clickedOperator = '';
    firstNumber = '';
    result = '';
    currentOperand.textContent = 0;
    previousOperand.textContent = ' ';
};

/* Delete button functionality */
deleteButton.addEventListener('click', function() {
    deleteLast();
})

function deleteLast() {
    currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1);
}



/*
Step #3 - Create functions that populate the display when you click the number buttons. Store the display value in a variable for later use
function disp(val) {
    document.getElementById("result").value += val;
}

Function to clear the display 
function clr() {
    document.getElementById("result").value = "";
}

Step #4 - Make the calculator work. Operate on the numbers chosen when the user presses the "=" key 
function addition() {
    
}
*/