function binarySearch(array, target) {
    let min = 0
    let max = array.length - 1
    let guess

    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        guess = array[mid]

        if (guess === target) {
            return mid
        }

        if (guess > target) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    }

    return null
}

const list = [0, 1, 2, 5, 11, 22, 35, 45, 102]

const indexOfFindedTarget = binarySearch(list, 11)