/**
 * Search and Replace
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */
function myReplace(str, before, after) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (i <= str.length - before.length) {
            let isMatch = true
            for (let j = 0; j < before.length; j++) {
                if (str.charAt(j + i) != before.charAt(j)) {
                    isMatch = false
                    break
                }
            }
            if (isMatch) {
                if (before.charAt(0) == before.charAt(0).toUpperCase())
                    result += after.charAt(0).toUpperCase() + after.substring(1)
                else
                    result += after.toLowerCase()
                i += before.length
            }
        }
        result += str.charAt(i)
    }
    return result
}

console.assert(myReplace("Let us go to the store", "store", "mall") == "Let us go to the mall", "Let us go to the store 'mall'")
console.assert(myReplace("He is Sleeping on the couch", "Sleeping", "sitting") == "He is Sitting on the couch", "He is Sleeping on the couch")
console.assert(myReplace("I think we should look up there", "up", "Down") == "I think we should look down there", "I think we should look up there")