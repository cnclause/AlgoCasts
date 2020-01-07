// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution two - maybe not ideal because don't have to compare every element but only up to the center one but this double compares. 
function palindrome(str) {
    // i (index), need to subtract index and minus 1 from str.length to compare to correct Element Because str.length gives overall length and arrays index start at 0 
    // example str = 'abcba'
    // str.length = 5 
    // you need to compare first letter with last, so 5 -0 -1 = 4 
    // compare first letter with letter that has index of 4 which is the last letter
    return str.split('').every((char, i) => {
        return char === str[str.length -i -1]
    })
}


// solution one
// function palindrome(str) {
//     const reversedString = str
//     .split('')
//     .reverse()
//     .join('')

//     return str === reversedString
// }

module.exports = palindrome;
