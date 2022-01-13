// Importing the 'readline' module and the calculator-math.js file which contains all math functions
const calculatorMath = require('./calculator-math')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const operations = ['+', '-', '*', '/', '^', '**', '%']

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
        const firstNumber = Number(firstInput);
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
            rl.question("Enter operator: ", (operator) => {
                if (operator == '+') {
                    console.log(calculatorMath.add(firstNumber, secondNumber));
                }
                else if (operator == '-') {
                    console.log(calculatorMath.subtract(firstNumber, secondNumber));
                }
                else if (operator == '*') {
                    console.log(calculatorMath.multiply(firstNumber, secondNumber));
                }
                else if (operator == '/') {
                    console.log(calculatorMath.divide(firstNumber, secondNumber));
                }
                else if (operator == '^' || operator == '**') {
                    console.log(calculatorMath.exponentiate(firstNumber,secondNumber));
                }
                else if (operator == '%') {
                    console.log(calculatorMath.remainder(firstNumber, secondNumber));
                }
            })
        })
    })
}

calculator();

// const calculator = () => {
//     rl.question("Enter the first number: ", (firstInput) => {
//         const firstNumber = Number(firstInput);
//     })

//     rl.question("Enter the second number: ", (secondInput) => {
//         const secondNumber = Number(secondInput);
//     })
// }

// calculator()

/* 
Leonardo Fernandes Costa7:38 PM
multiply(number1,number2) 
add(...)
switch case
case '+' add ()
case '-' sub()
Leonardo Fernandes Costa7:39 PM
math.js => as 4 operacoes
handleInput.js -> implementacao da lib externa + switch case
Leonardo Fernandes Costa7:41 PM
n1 
number1
*/