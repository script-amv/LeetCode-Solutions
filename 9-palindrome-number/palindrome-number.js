/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true
    r = ""
    x = String(x)
    for(let i = x.length - 1; i >= x.length/2; i--) {
        r += x[i]
    }
    l = x.slice(0, x.length/2)
    return l == r ? true : false
 };