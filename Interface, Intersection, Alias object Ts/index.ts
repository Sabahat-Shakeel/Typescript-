//===================================================================================

//             ======================== Type alias  =============================

//===================================================================================

//TYPE ALIAS
interface Student {
      name:string ,
      class : number
      rollNo : number
};

interface Person {
    name : string;
    class : number;
    rollNo: number;
    gender : string
};


let person :Person ={name :"syeda", class :12, rollNo:1846, gender:'female'};
console.log(person.rollNo)

let student :Student = {name:'sabahat', class : 12, rollNo:1024};
console.log(student.name.toUpperCase());


student = person  //ok
person = student // type missing boo in toy student and type required in  perso

