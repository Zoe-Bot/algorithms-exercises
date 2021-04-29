/**
 * Excercise 0.2
 * Multiplikand und Multiplikator nebeneinander schreiben, Bildung von zwei Spalten darunter unter
 * Ausführung folgender Regel: die Zahl des Multiplikanden (bzw. im Folgenden die darunter) durch 2
 * teilen und darunter schreiben (Rest ignorieren), die Zahl des Multiplikators (bzw. im Folgenden die
 * darunter) verdoppeln und ebenfalls darunter schreiben. Solange ausführen, bis die letzte Zahl in der
 * Spalte unter dem Multiplikanden 1 ist.
 * Anschließend alle Zeilen streichen, in denen die Zahl unter dem Multiplikanden gerade ist. Das
 * Addieren aller verbleibenden Zahlen in der Spalte des Multiplikators führt zum Ergebnis.
*/
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


/**
 * Prüft ob Zahl eine Primzahl ist
 * @param {Number} num nummer die geprüft werden soll
 * @param {Number} divider nicht ändern
 * @returns true wenn es eine ist, false wenn nicht
 */
function isPrime(num, divider = num <= 10 ? num - 1 : 10) {    
    if (divider == 1)
        return true
    if (num % divider == 0)
        return false
    else
        return isPrime(num, divider - 1)
}
//console.log(isPrime(7))

/**
 * Erstellt eine Liste von Primzahlen
 * @param {Number} num nummer bis wohin die Primzahlen gehen soll
 * @param {Array} primeList nicht ändern
 * @returns eine array mit allen primzahlen bis zu num
 */
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

/**
 * Erstellt eine Liste mit Nummern
 * @param {Number} num nummer bis wohin ausgegeben werden soll
 * @param {number} i iterator nicht ändern
 * @param {Array} arr ergebnis nicht ändern 
 * @returns eine array mit allen nummern bis zu num
 */
function printNums(num, i = 1, arr = []) {
    //console.log(i)
    if (i == num) 
        return arr
    else 
        return printNums(num, i + 1, [...arr, i])   
}
//console.log(printNums(10))

/**
 * Erstellt eine Liste mit geraden Zahlen
 * @param {Number} num number bis wohin ausgegeben werden soll 
 * @param {Number} i iterator nicht ändern 
 * @param {Array} arr ergebnis nicht ändern
 * @returns eine Array mit allen geraden Zahlen bis num
 */
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


/**
 * Gibt die Stelle zurück an der, der gesuchte String liegt
 * @param {String} str String in dem man suchen möchte
 * @param {String} search gesuchter String
 * @param {Number} i iterator nicht ändern
 * @param {Number} res ergebnis nicht ändern
 * @returns Stelle als Zahl, da wo der gesuchte string liegt
 */
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
 * Gibt einen Substring zurück
 * @param {String} str String in dem der Substring gesucht werden soll
 * @param {Number} start Index wo der Substring beginnen soll
 * @param {Number} length Länge des Substrings
 * @param {String} res ergebnis nicht ändern
 * @returns substring als string ab dem start index
 */
function getSubstring(str, start, length, res = "") {
    if (res.length > length - 1)
        return res
    else {
        return getSubstring(str, start + 1, length, res + str[start])
    }
}
console.assert(getSubstring("Hello", 1, 2) == "el")
console.assert(getSubstring("Michael", 3, 4) == "hael")
console.assert(getSubstring("Sarah ist toll", 6, 3) == "ist")
console.assert(getSubstring("Enjoy", 0, 5) == "Enjoy")


/**
 * Wandelt Dezimalzahl in eine Binärzahl um
 * @param {Number} num dezimalzahl die umgewandelt werden soll
 * @param {Number} erg ergebnis nicht ändern
 * @returns binärzahl
 */
function dezimalToBinary(num, erg = "") {
    if (num == 0 && erg == "") 
        return 0
    else if (num == 0) 
        return parseInt(reverseString(erg))
    else 
        return dezimalToBinary(Math.floor(num / 2), erg += num % 2)
}
console.assert(dezimalToBinary(0) == 0, "0")
console.assert(dezimalToBinary(10) == 1010, "10")
console.assert(dezimalToBinary(100) == 1100100, "100")
console.assert(dezimalToBinary(7) == 111, "7")
console.assert(dezimalToBinary(148) == 10010100, "148")
console.assert(dezimalToBinary(1) == 1, "1")

/**
 * Dreht String um
 * @param {*} str String der umgedreht werden soll
 * @param {*} i iterator nicht ändern
 * @param {*} erg ergebnis nicht ändern
 * @returns den umgedrehten String
 */
function reverseString(str, i = str.length - 1, erg = "") {
    if (i < 0)
        return erg
    else 
        return reverseString(str, i - 1, erg += str[i])  
}
console.assert(reverseString("Hallo") == "ollaH", "Hallo")
console.assert(reverseString("Joy") == "yoJ", "Joy")
console.assert(reverseString("Das ist ein Test") == "tseT nie tsi saD", "Das ist ein Test")