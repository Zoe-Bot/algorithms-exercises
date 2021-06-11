function bubblesort(arr) {
    let cache = 0

    for (let j = 1; j < arr.length; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                cache = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = cache
            }
        }
    }

    return arr
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

//test
arr = [6, 4, 9, 2]
console.assert(arraysEqual(bubblesort(arr), [2, 4, 6, 9]), arr)