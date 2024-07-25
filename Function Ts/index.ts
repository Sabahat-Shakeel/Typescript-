
//================================================================================================

//              ============== function and anonymous function =============
 
//================================================================================================


// NAME FUNCTION
function add (greet : string , name : string):string{
return greet + " " + name
}; 
console.log( add ("Hello", "Sabahat" ) );

// ANONYMOUS
let fun : (a: number, b: number)=>number = function (a: number, b: number ): number {
 return a * b 
}; 
console.log( fun(2 , 4) ) ;


//TYPE USES
type greetfun = (a: string) => void; function fun1 (fn : greetfun) { 
   // ....
};



function user (name : string, num : number= 404){
    return name + "\n" + num;
    };
    
    console.log( user("Sabahat", 200) );
console.log("----.------.------.-----")
    console.log( user("Page not founded") );

