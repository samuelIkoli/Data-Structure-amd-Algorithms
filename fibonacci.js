const fib = (value) => {
    if (value == 1 || value == 2) {
        return 1
    }
    return fib(value - 1) + fib(value - 2)
}

console.log(fib(7))