function dynamicFibonacci(n) {
    let cache = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        cache.push(cache[i - 1] + cache[i - 2])
    }
    // console.log(cache)
    return cache[n]
}


console.log(dynamicFibonacci(0))
console.log(dynamicFibonacci(45))


// console.log(3, memoized(6))
// console.log(4, memoized(6))
// console.log(5, memoized(5))
// console.log(6, memoized(5))