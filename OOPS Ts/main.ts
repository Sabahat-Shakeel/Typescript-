//TYPE
type person={
    name1 :string,
    rollno : number,
    class : number,
};

class Person implements person{
name1 = "syeda"
rollno = 1001
class = 12
};

const person = new Person()

console.log(person.name1);



//INTERFACE
interface car  {
    model :string;
    make: string;
    year : number;
};

class Car implements car {

    model = "corolla";
    make = 'toyota';
    year = 2021;

};

const myCar = new Car ();

console.log(myCar);



//METHOD
const car = {
    make  : "toyota",
    model : "corola",
    year : 2021,
};

    function fun(){
console.log(`Make: ${car.make}, Model : ${car.model}, year : ${car.year}`)
};

fun();

