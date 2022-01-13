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

// console.log(add(2, 5));
// console.log(subtract(6, 2))
// console.log(multiply(3, 5))
// console.log(divide(10, 2))

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    exponentiate,
    remainder
}
