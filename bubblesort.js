arr = [4, 2, 6, 8, 9, 1, 3, 7, 5, 12, 100, 13, 15, 14, 19, 18, 17, 16]

const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(sort(arr))
