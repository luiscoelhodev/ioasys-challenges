// Imports the 'readline' module and the calculator-math.js file which contains all math functions
const calculatorMath = require('./calculator-math')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const operations = ['+', '-', '*', '/', '^', '**', '%'] // all available math operations

console.log(`Welcome to the Ioasys Calculator! Here's what you can do:
    Addition: '+',
    Subtraction: '-',
    Multiplication: '*',  
    Division: '/',
    Exponentiation: '^' or '**',
    Modulus: '%'   
`);

const calculator = () => {
    rl.question("Enter the first number: ", (firstInput) => {
        const firstNumber = Number(firstInput); // converts firstInput into a number
        if (!firstInput) {
            console.log("Error: you did not enter any input! ")
            calculator();
        }
        if (isNaN(firstNumber)) {
            console.log("Error: You did not enter a valid number! ")
            calculator();
        }
        rl.question("Enter the second number: ", (secondInput) => {
            const secondNumber = Number(secondInput);
            if (!secondInput) {
                console.log("Error: you did not enter any input! ")
                calculator();
            }
            if (isNaN(secondNumber)) {
                console.log("Error: You did not enter a valid number! ")
                calculator();
            }
            rl.question("Enter operator: ", (operator) => {
                if (!(operations.includes(operator))) { // checks if the operator that the user entered is in the 'operations' array
                    console.log("Error: You did not enter a valid operator!");
                    calculator();
                }
                let operationResult = 0 // creates a variable to be updated depending on the operator which will be chosen
                if (operator == '+') {
                    operationResult = calculatorMath.add(firstNumber, secondNumber);
                }
                else if (operator == '-') {
                    operationResult = calculatorMath.subtract(firstNumber, secondNumber);
                }
                else if (operator == '*') {
                    operationResult = calculatorMath.multiply(firstNumber, secondNumber);
                }
                else if (operator == '/') {
                    operationResult = calculatorMath.divide(firstNumber, secondNumber);
                }
                else if (operator == '^' || operator == '**') {
                    operationResult = calculatorMath.exponentiate(firstNumber, secondNumber);
                }
                else if (operator == '%') {
                    operationResult = calculatorMath.remainder(firstNumber, secondNumber);
                }
                console.log(`Result: ${operationResult}`)
                rl.question("Would you like to continue? If not, enter 'no': ", (answer) => {
                    answer.toLowerCase().trim()[0] === "n" ? rl.close() : calculator();
                })
            })
        })
    })
}

calculator();