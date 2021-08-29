const input = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
let displayValue = "0";

let firstNum = "";
let secondNum = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;

            console.log(firstNum); // Print the first number
            console.log(operator); // Print the operator

        } else { // If equals button clicked
            console.log(secondNum); // Print 2nd number

            switch (operator) { // Calculate and print output
                case "+":
                    console.log(parseInt(firstNum) + parseInt(secondNum));
                    break;
                case "-":
                    console.log(parseInt(firstNum) - parseInt(secondNum));
                    break;
                case "x":
                    console.log(parseInt(firstNum) * parseInt(secondNum));
                    break;
                case "/":
                    console.log(parseInt(firstNum) / parseInt(secondNum));
                    break;
                default:
                    break;
            }
        }

    });
});

//Math function 
let add = (a, b) => a + b 
let substract = (a, b) => a - b 
let multiply = (a, b) => a * b
let divide = (a, b) => a / b



/* 

- When I press a key, displays the key on the screen.
     x Display the key in the console.log
     - Display the key on the screen.
     - Link these keys to the inputs of the functions
    
- When I click on Equal shows the result.
     - Take the two inputs.
     - Calculate them (do functions x / - / + /).
     - Return the result to the screen.

- When I click on ESC, delete. 

solution: https://github.com/anth-dev/calculator/blob/master/scripts.js
*/

// function handle(event) {
//     if (isOperator(event)) {
//         // store operator in a variable 
//         currentOperator = event.target.innerText
//         console.log(currentOperator)
//         if(isNumber(event)) {
//             currentNumberB = event.target.innerText
//             console.log(currentNumberB)
//         }
//     } else {
//         currentNumber = event.target.innerText
//         console.log(currentNumber)
//         // it's a number for sure
//         // if not operatorStored
//         // concatenate a
//         // otherwise
//         // concatenate b
//     }

    
// }

// function isOperator(event) {
//     return event.target.className.includes("operator");
// }
// function isNumber(event) {
//     return event.target.className.includes("number")
// }

// The algorithm:

// 1. one or more digits are hit -> concatenate them to one number in var a
// 2. when operator gets hit, save current operator
// 3. one or more digits are hit -> concetenate in var b
// 4. only allow equals to be hit next