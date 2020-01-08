// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')
//    if(n <0){
//     return parseInt(reversed) * -1
//    }
//    return parseInt(reversed)

// this is the same as above code because Math.sign returns positive 1 if its a postive Number, -1 if its a negative Number, or zero if its zero
    return parseInt(reversed) * Math.sign(n)

}


module.exports = reverseInt;
