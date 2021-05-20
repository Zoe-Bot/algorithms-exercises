/* Aufgabe 1.3 */
/**
 * 
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