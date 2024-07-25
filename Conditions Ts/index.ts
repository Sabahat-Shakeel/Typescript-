//================================================================================================

//              ============== ternary operators condition =============
 
//================================================================================================


let name1 : boolean = false ;
 let ternary = name1 ? "sabahat" : false; 
console.log(ternary);


 let name2 :string |number ; 
 name2 = 12;
 name2 = "sabahat"; 
 
let ternary2 = name2 ? name2.toUpperCase() /*ok*/ : name2.toFixed() ; //error
 console.log(ternary2);

let namey = Math.random() > 0.6 ? "sabahat" : undefined;
 console.log(namey);

let name3 : string = "Syeda Sabahat " ; 
let name4 : string = "Student Of Giaic"; 
let twoName = Math.random() > 0.6 ? name3 : name4 ; 
console.log(twoName);

let ternary3 = Math.random () > 0.6 ? true : false;
 console.log(ternary3);