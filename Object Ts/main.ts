//=======================================================================================

//        ======================== object and with types ===========================

//=======================================================================================


//TYPE DECLARATION 
type Obj = {
    name :string,
    class: number,
    rollno :number
}

const student :Obj = {
    name:"kim",
    class : 12,
    rollno : 1223
}

console.log(student.name); //dot notation
console.log(student["rollno"]); //dynamic notation