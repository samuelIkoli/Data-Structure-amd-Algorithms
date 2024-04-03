function fib(n) {
    let cache = {
        1: 0,
        2: 1
    };
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = fib(n - 1) + fib(n - 2)
            return cache[n];
        }
    }
}

const memoized = fib();

console.log(1, memoized(6))
console.log(2, memoized(6))

console.log(3, memoized(6))
console.log(4, memoized(6))
console.log(5, memoized(5))
console.log(6, memoized(5))