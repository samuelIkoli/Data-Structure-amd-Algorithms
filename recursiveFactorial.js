const factorial = (value) => {
    if (value === 1) {
        return 1
    }
    return factorial(value - 1) * value
}

console.log(factorial(5))