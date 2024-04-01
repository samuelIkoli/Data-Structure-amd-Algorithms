let arr = [4, 2, 6, 8, 9, 1, 3, 7, 5, 12, 100, 13, 15, 14, 19, 18, 17, 16, 52, 54, 66, 68, 70, 72, 76, 75, 73, 32, 30, 15, 11, 9, 14, 27]

const sort = (arr) => {
    const length = arr.length
    if (length == 1) {
        return arr;
    }
    let mid = Math.floor(length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(sort(left), sort(right))
}

const merge = (left, right) => {
    let result = []
    while (left) {
        if (!right || right.length === 0) {
            result = [...result, ...left]
            return result
        }
        if (left[0] < right[0]) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    if (right && right.length) {
        result = [...result, ...right]
    }
    return result
}

console.log(sort(arr))


// There is better way to implement this but I prefer to push my own solutions.