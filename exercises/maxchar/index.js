// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {}

    // when we interate through charMap if a value if bigger than 0 then we set that = to max, and set maxChar = to the key that holds that value
    let max = 0
    let maxChar = ''

    // for(let char of str){
    //     if(charMap[char]){
    //         chars[char]++
    //     } else {
    //         charMap[char] = 1
    //     }
    // }

    // same as above
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1
    }

    // use FOR IN instead of FOR OF (above) because interating through an Object. FOR OF interates through string or Array. (way to remember: object starts with O and ironically we don't use for OF we use for IN) 
    // char in example below is the key, not the value 
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    console.log(maxChar)
}

maxChar('abbbbbbbcy6')

module.exports = maxChar;
