/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
 * @param {Array} arr 
 */
function sumAll(arr) {
    //sort
    if (arr[0] > arr[1]) {
        let a = arr[0]
        arr[0] = arr[1] 
        arr[1] = a
    }

    let sum = 0
    for (let i = arr[0]; i < arr[1] + 1; i++) {
        sum += i
    }
    return sum
}

console.assert(sumAll([1, 4]) == 10, "[1, 4]")
console.assert(sumAll([4, 1]) == 10, "[4, 1]")
console.assert(sumAll([5, 10]) == 45, "[5, 10]")
console.assert(sumAll([10, 5]) == 45, "[10, 5]")