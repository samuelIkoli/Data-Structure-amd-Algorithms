const factorial = (value) => {
    let ans = 1;
    for (let i = value; i > 0; i--) {
        ans = ans * i
    }
    return ans
}

console.log(factorial(5))