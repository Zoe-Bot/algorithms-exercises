laRusse = (left, right) => {
    _laRusse(left, right, sum = 0)
} 

_laRusse = (left, right, sum) => {
    console.log(left, right, sum)
    if (left == 1)
        console.log(sum + right)
    else
        if (left % 2 != 0)
            _laRusse(Math.floor(left / 2), right * 2, sum + right)
        else
            _laRusse(left / 2, right * 2, sum)
}
//laRusse(45, 19)


//Math.min(num - 1, 10)
function isPrime(num, divider = num <= 10 ? num - 1 : 10) {    
    if (divider == 1)
        return true
    if (num % divider == 0)
        return false
    else
        return isPrime(num, divider - 1)
}

//console.log(isPrime(7))

function listPrime(num, primeList = []) {
    if (num == 1)
        return primeList
    else  {
        if (isPrime(num))
            return listPrime(num - 1, [...primeList, num])
        else
            return listPrime(num - 1, primeList)
    }
}

//console.log(listPrime(100))

function printNums(num, i = 1, arr = []) {
    //console.log(i)
    if (i == num) 
        return arr
    else 
        return printNums(num, i + 1, [...arr, i])   
}

//console.log(printNums(10))

function printEvenNums(num, i = 1, arr = []) {
    if (i > num)
        return arr
    else {
        if (i % 2 == 0)
            return printEvenNums(num, i + 1, [...arr, i])
        else
            return printEvenNums(num, i + 1, arr)
    }      
}
//console.log(printEvenNums(10))

function searchString(str, search, i = 0, res = 0) {
    if (i > str.length)
        return res
    else {
        if (getSubstring(str, i, search.length) == search) {
            return searchString(str, search, i + 1, res = i)
        } else {
            return searchString(str, search, i + 1, res)   
        }
    }
}

console.assert(searchString("This text is a", "text") ==  5)
console.assert(searchString("Hello this is amazing!", "g!") == 20)
/**
 * get Substring
 */
function getSubstring(str, start, length, res = "") {
    if (res.length > length - 1)
        return res
    else {
        return getSubstring(str, start + 1, length, res + str[start])
    }
}

// Test driven development
console.assert(getSubstring("Hello", 1, 2) == "el")
console.assert(getSubstring("Michael", 3, 4) == "hael")
console.assert(getSubstring("Sarah ist toll", 6, 3) == "ist")
console.assert(getSubstring("Enjoy", 0, 5) == "Enjoy")

