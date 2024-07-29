//================================================================================================

//              ============== OOPS =============
 
//================================================================================================

// ABSTRACT
abstract class person {
    name : string = 'syeda'
    age : number = 17
abstract fun():void;
};
 
class person1 extends person{
    fun(){
console.log(`name : ${this.name}, age : ${this.age}`)
    }
};
const per = new person1();

per.fun();


abstract class student{
   public name : string = "syeda";
    public rollno : number = 2010;
   private age : number = 17;
   abstract fun():void;
   
};

class student1 extends student{
    fun(){
        console.log(`name : ${this.name}, rollno ${this.rollno}, age ${this.age}`)} // error in age propertyProperty 'age' is private and only accessible within class 'student'
};

const Student = new student1();
Student.fun();

