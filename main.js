/* Step #1 - Create functions for Add, Subtract, Multiply & Divide and test in the browser's console */
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

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
function disp(val) {
    document.getElementById("result").value += val;
}

/* Function to clear the display */
function clr() {
    document.getElementById("result").value = "";
}

/* Step #4 - Make the calculator work. Operate on the numbers chosen when the user presses the "=" key */
function addition() {
    
}