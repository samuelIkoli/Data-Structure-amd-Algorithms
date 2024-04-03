function memoizeAddTo80(n) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            const answer = n + 80;
            cache[n] = answer;
            return answer;
        }
    }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
console.log(2, memoized(6))

console.log(3, memoized(6))
console.log(4, memoized(6))
console.log(5, memoized(5))
console.log(6, memoized(5))