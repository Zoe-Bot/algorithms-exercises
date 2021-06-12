function merge(left, right) {
    let res = []

    while(left.length && right.length) {
        if (left[0] < right[0]) 
            res.push(left.shift())
        else
            res.push(right.shift())
    }

    return [...res, ...left, ...right]
}

//console.log(merge([3, 4, 5], [2, 9, 11]))

function mergeSort(arr) {
    const half = arr.length / 2

    if (arr.length < 2)
        return arr

    const left = arr.splice(0 , half)
    //console.log(left, arr)
    return merge(mergeSort(left), mergeSort(arr))
}

arr = [4, 2, 6, 11, 3]
mergeSort(arr)
