// This file contains the functions to be called out in calculator-inputs.js to perform each math operation

const add = (number1, number2) => {
    const result = number1 + number2;
    return result;
}

const subtract = (number1, number2) => {
    const result = number1 - number2;
    return result;
}

const multiply = (number1, number2) => {
    const result = number1 * number2;
    return result;
}

const divide = (number1, number2) => {
    const result = number1 / number2;
    return result;
}

const exponentiate = (number1, number2) => {
    const result = number1 ** number2;
    return result;
}

const remainder = (number1, number2) => {
    const result = number1 % number2;
    return result;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    exponentiate,
    remainder
}
