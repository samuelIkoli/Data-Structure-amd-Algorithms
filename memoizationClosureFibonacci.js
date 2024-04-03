function fibo(n) {
    let cache = {
        1: 0,
        2: 1
    };
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
            console.log(cache)
            return cache[n];
        }
    }
}

const memoized = fibo();

console.log(memoized(2))
console.log(memoized(76))


// console.log(3, memoized(6))
// console.log(4, memoized(6))
// console.log(5, memoized(5))
// console.log(6, memoized(5))