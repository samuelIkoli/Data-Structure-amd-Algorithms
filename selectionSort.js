arr = [4, 2, 6, 8, 9, 1, 3, 7, 5, 12, 100, 2, 13, 15, 14, 13, 19, 18, 17, 16]

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

console.log(sort(arr))
