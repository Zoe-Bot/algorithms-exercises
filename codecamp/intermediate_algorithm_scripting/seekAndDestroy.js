/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as these arguments.
 * Note: You have to use the arguments object.
 */
function destroyer(arr) {
    arr = [].slice.apply(arguments);
    let checkArr = arr[0]
    let resArr = []
    let isInCheckArr = false

    for (let i = 0; i < checkArr.length; i++) {
        isInCheckArr = false
        for (let j = 1; j < arr.length; j++) {
            if (checkArr[i] == arr[j])
                isInCheckArr = true
        }
        if (!isInCheckArr)
            resArr.push(checkArr[i])
    }

    return resArr
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

arr = [1, 2, 3, 1, 2, 3]
console.assert(arraysEqual(destroyer(arr, 2, 3), [1, 1]), "[1, 2, 3, 1, 2, 3], 2, 3")