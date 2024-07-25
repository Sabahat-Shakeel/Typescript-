//===================================================================================

//             ======================== Interface & Intersection =============================

//===================================================================================

 
type Student ={name : string , class :number, rollNo :number};
type Person = {name : string , class :number, rollNo :number, isEducation: boolean, gender: string};


//INTERSECTION COMBINE THE BOTH TYPES
type intersection = Student & Person

let student :Student = {name:"syeda", class : 21,rollNo:2223 }
let person :Person = {name :"sabahat", rollNo:123, class : 123, isEducation :true, gender:'female'}
 
