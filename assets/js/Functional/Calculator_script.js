// ==================================== CALCULATOR ==================================== //

console.log("JS Loaded");

// Initialization of the variable in textfield
let userInput = document.getElementById('displayInput');

// Initialization of the variable in every button
let buttons = document.querySelectorAll('button');

// Empty string
let string = "";

// Appending the user input every click of the button
let appendText = Array.from(buttons);

// For each loop to append the text in the textfield
appendText.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Function to handle input from both mouse and keyboard
function handleInput(input) {
    const lastChar = string[string.length - 1]; // Get the last character in the string

    // Prevent invalid inputs at the start
    if (string === "" && ['+', '*', '/', '÷'].includes(input)) {
        return; // Don't allow starting with these operators
    }

    // Prevent double operators
    if (['+', '-', '*', '/', '÷'].includes(input) && ['+', '-', '*', '/', '÷'].includes(lastChar)) {
        return;
    }

    // Prevent multiple dots in the same number
    if (input === '.' && (lastChar === '.' || (string.split(/[\+\-\*\/÷]/).pop().includes('.')))) {
        return;
    }

    switch (input) {
        // Result of the user input
        case '=':
        case 'Enter':
            try {
                if (string === "" || /[\+\-\*\/÷]$/.test(string)) {
                    userInput.value = "Error"; // Prevent evaluation of empty or incomplete input
                    string = "";
                    return;
                }
                string = eval(string.replace(/÷/g, '/').replace(/x/g, '*'));

                // Prevent division by zero
                if (string === "Infinity" || string === "-Infinity") {
                    userInput.value = "Cannot divide by zero";
                    string = "";
                } else {
                    userInput.value = string;
                }
            } catch (e) {
                userInput.value = "Error";
                string = "";
            }
            break;

        // Resetting the calculator
        case 'AC':
        case 'Escape':
            string = "";
            userInput.value = string;
            break;

        // Division
        case '÷':
        case '/':
        case 'x':
        case '*':
        case '+':
        case '-':
            // Check if the last character is not already an operator
            if (!['+', '-', '*', '/', '÷'].includes(lastChar)) {
                string += input === '÷' ? '/' : (input === 'x' ? '*' : input);
                userInput.value = string;
            }
            break;

        // Positive-Negative
        case '+/-':
            if (string !== "" && !isNaN(string)) {
                string = (parseFloat(string) * -1).toString();
                userInput.value = string;
            }
            break;

        // Percentage
        case '%':
            if (string !== "" && !isNaN(string)) {
                string = (parseFloat(string) / 100).toString();
                userInput.value = string;
            }
            break;

        // Backspace: Remove the last character
        case 'Backspace':
            string = string.slice(0, -1);
            userInput.value = string;
            break;

        // Default case for numbers and decimal
        default:
            string += input;
            userInput.value = string;
            break;
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Map keyboard keys to calculator buttons
    const keyMap = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '.': '.', '+': '+', '-': '-', '*': 'x', '/': '÷', 'Enter': '=', '=': '=', 'Escape': 'AC',
        '%': '%', 'Backspace': 'Backspace'
    };

    if (keyMap[key]) {
        handleInput(keyMap[key]);
    }
});