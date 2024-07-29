//================================================================================================

//              ============== OOPS =============
 
//================================================================================================

//METHOD
const car2 = {
    make : 'toyota',
    model : 'corolla',
display : function (){
    console.log(`make : ${this.make}, model ${this.model}`    )
}
}

car2.display()


//BLUE PRINT 

class car {
    make : string = "toyota";
    model : string = "corolla";
   display(){ //METHOD
    console.log(`make : ${this.make}, model : ${this.model}`);
   }
}
const myCar = new car();

myCar.display();
console.log(myCar);

