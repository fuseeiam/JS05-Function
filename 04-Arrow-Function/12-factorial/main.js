const factorial = n => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

const number = n;
const result = factorial(number);

console.log(`The factorial of ${number} is ${result}`);