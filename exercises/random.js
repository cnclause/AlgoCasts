array = [1, 2, 3, 4, 5, 6, 7]
// how many times to rotate
 r = 10

 function rotateArray(r){
     for(let i =0; i < r; i++){
        x = array.shift()
        array.push(x)
     }

     console.log(array)
 }

 rotateArray(r)

//  given sorted array thats been rotated
sortedArray =[2, 3, 5, 8, 11, 12]
// each element will be shifted to the right and the last element will be at the front 
// circurlary sorted
rotatedOnce=[12, 2, 3, 5, 8, 11]
rotatedTwice=[11, 12, 2, 3, 5, 8]

// need to find min element 
// number of rotations = index of min element

function findRotations(){
    min = rotatedTwice[0]
    minIndex =''
    for(let element in rotatedTwice){
        if(rotatedTwice[element] < min){
            min = rotatedTwice[element]
            minIndex = element
        }
    }
    console.log(min, minIndex)
}

findRotations()
