import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// What is the difference between value and reference types?
// const obj1 = {
//   name: 'Tom'
// }
// let obj2 = obj1

// const obj2 = {
//   name: 'Tom'
// }

// let obj2 = obj1
// obj2.name = 'Jason'
// console.log(obj1.name)

// console.log(obj1 === obj2)

// const getSecret = function (secret) {
//   const val = 200

//   return {
//     get: function () {
//       return secret + val
//     }
//   };
// };
// const obj = getSecret(100)

// console.log(obj.get())

// console.log(1 && true && {})

// extends
// Date
// class MyDate extends Date{
//   constructor(){
//     super()
//   }
// }

// const state = { t1: { name: 'John' } }
// const obj = { id: 't2', payload: { name: 'Tom' } }

// // { t1: { name: 'John' }, t2: { name: 'Tom' }}
// const t3 = Object.assign({}, state, { [obj.id]: obj.payload })
// console.log(t3)

// console.log({...state})
// console.log({...obj})

// function newObj (state, obj){
//   let object = {}
//   const newState = {...state}
//   const newobj = {...obj}

//   newState[t1][name]  
// }
// newObj (state, obj)

// function newObject(state, obj){
//   let newObj = {}

//   for(let element in state){
//     newObj[element]
//     for(let element in key){
    
//     }
//   }

// }

// newObject(state, obj)

// const names = ['Tim', 'Helen', 'Timmy', 'Jason']

// console.log(names.filter(name => {
//   return name[0] == 'T'
// }))

// function newNames(names){
//   const newArray = []

//   for(let element of names){
//     if(element[0] === 'T')
//     newArray.push(element)
//   }
//   console.log(newArray)
// }

// newNames(names)

// function getValues() {
//   // return Promise.resolve({ val: [100, 200] })
//   return Promise.reject(new Error('something wrong with api'))
// }

// // [100, 200]
// getValues()
// .then(result => console.log(result.val))
// .catch(error => console.log(error))

/*
  <div class="blue">Hello world</div>

  .blue {
    color: blue
  }

  div {
    color: red
  }
*/

/*
const _$ = new SimpleLib()
_$('#test1').addClass('blue').addClass('bg-lime').removeClass('bold')
*/

class SimpleLib {
  constructor() {
    return (sel) => {
      this.element = document.querySelector(sel)
      return this
    }
  }

  addClass(name) {
    if (this.element) {
      this.element.classList.add(name)
    }
    return this
  }
}

const _$ = new SimpleLib()
_$('.hello').addClass('').addClass('').addClass('')