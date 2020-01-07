// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// reduce option
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

// for loop option
function reverse(str) {
    let reversed = ''
    // newer way of doing for loop same as: 
    // for(i=0; i<str.length; i++){
    //     reversed = str.charAt(i) + reversed
    // }
    for(let character of str){
        reversed = character + reversed
    }
     
    return reversed
}


// .reverse option

function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('')
}


module.exports = reverse;

