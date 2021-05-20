/* Aufgabe 1.2 a) */
/**
 * Berechnet den Rest wenn man zwei Zahlen dividiert
 * @param {Number} x Erste Zahl
 * @param {Number} y Zweite Zahl
 * @returns Den Resz
 */
function modulo(x, y) {
    if (x < y)
        return x
    else
        return modulo(x - y, y)
}
// Tests
console.assert(modulo(14, 3) == 2)
console.assert(modulo(17, 5) == 2)


/* Aufgabe 1.2 b) */
/**
 * Berechnet den Rest wenn man zwei Zahlen dividiert
 * @param {Number} x Erste Zahl
 * @param {Number} y Zweite Zahl
 * @returns Den Resz
 */
 function sumOfDigits(x) {
    if (x < 0)
        return sumOfDigits(-x)
    else
        if (x < 10)
            return x
        else
            return sumOfDigits(Math.floor(x / 10)) + (x % 10)
}
// Tests
console.assert(sumOfDigits(113) == 5, "113")
console.assert(sumOfDigits(17) == 8, "17")
console.assert(sumOfDigits(-523) == 10, "-523")


/* Aufgabe 1.3 */
/**
 *  Berechnet Größten Gemeinsamen Teiler zweier Zahlen
 * @param {Number} x erste Zahl 
 * @param {*} y zweite Zahl
 * @returns größter Gemeinsamer Teiler von x und y
 */
function ggT(x, y) {
    if (x == 0)
        return y
    else {
        if (x > y)
            return ggT(x % y, y)
        else
            return ggT(y, x)
    }
}
// Tests
console.assert(ggT(63, 27) == 9, "63 27")
console.assert(ggT(24, 36) == 12, "24 36")


/* Aufgabe 1.4 */
/**
 * Gitb zurück ob es sich bei der gegebenen Nummer um einen Primzahl handelt
 * @param {Number} x zu überprüfende Nummer
 * @param {Number} i default
 * @returns boolean ob es eine primzahl ist oder nicht
 */
function isPrime(x, i = 10) {
    if (i == 1)
        return true
    else
        if (x == i)
            return isPrime(x, i - 1)
        else {
            if (x % i == 0)
                return false
            else
                return isPrime(x, i - 1)
        }
}
// Test
console.assert(isPrime(7) == true, "7")
console.assert(isPrime(10) == false, "7")
console.assert(isPrime(37) == true, "7")
console.assert(isPrime(19) == true, "7")
console.assert(isPrime(745) == false, "7")