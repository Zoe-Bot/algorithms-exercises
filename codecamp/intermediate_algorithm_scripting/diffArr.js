/**
 * Diff Two Array
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */
function diffArray(arr1, arr2) {
    let res = []
    let isInArr2 = false;

    for (let i = 0; i < arr1.length; i++) {
        isInArr2 = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                isInArr2 = true
            }
        }
        if (!isInArr2) {
            res.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        isInArr2 = false
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                isInArr2 = true
            }
        }
        if (!isInArr2) {
            res.push(arr2[i])
        }
    }

    return res
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

console.assert(arraysEqual(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]), "[1, 2, 3, 5], [1, 2, 3, 4, 5]")
arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
console.assert(arraysEqual(diffArray(arr1, arr2), ["pink wool"]), "pink wool")