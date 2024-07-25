//================================================================================================

//              ==============  expilict casting =============
 
//================================================================================================

let exp : unknown = "zia"; 
console.log((exp as string).length); 
console.log((<string> exp).toUpperCase());

let num :unknown = 10
let number : number = num // error

num = number //ok


