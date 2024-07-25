
//================================================================================================

//              ==============  array and their method =============
 
//================================================================================================



let number : Array<Number> = [1,2,3,5,6,7,8,9];
console.log(number[4])
console.log(number[10]) //complier but undefined 
number.splice(3,0,4)
console.log(number)
console.log(number.length)
console.log(number.indexOf(6))
let n = number.indexOf(3)
console.log(n)

let number1 :number[]= [1,2,3,4,5,6]
let slice = number1.slice(1,2)
console.log(slice) //output 2