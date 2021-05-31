/**
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects 
 * that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present 
 * in the object from the collection if it is to be included in the returned array.
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and 
 * the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the 
 * name and its value, that was passed on as the second argument.
 */
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    var sourceKeys = Object.keys(source);
    for (let i = 0; i < collection.length; i++) {
        let isInSourceKeys = true;
        for (let j = 0; j < sourceKeys.length; j++) {
            console.log(collection[i][sourceKeys[j]])
            console.log(source[sourceKeys[j]])
            if (!(collection[i][sourceKeys[j]] === source[sourceKeys[j]])) {
                isInSourceKeys = false;
            }
        }
        if (isInSourceKeys) {
            arr.push(collection[i]);
        }
    }
    // Only change code above this line
    return arr;
}

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
