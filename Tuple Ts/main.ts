//====================================================================================

//                  ==================== tuples ====================

//=====================================================================================



let tuple :[(boolean), (string),(undefined)] = [ true, "", undefined]

let tuples :[string, boolean, undefined] = ["", true, undefined]

let tupes :[(string), number, boolean, string]= ["", 9, false, ""]

console.log(tuples[1]);
console.log(tupes[2]);
console.log(tuple);
console.log(tuple[3]) //error because Tuple type '[boolean, string, undefined]' of length '3' has no element at index '3'
