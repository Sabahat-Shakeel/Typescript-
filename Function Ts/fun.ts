//================================================================================================

//              ============== default parameter  =============
 
//================================================================================================

 function defaultPara (a: string = "Page Not Founded", b : number = 404 ) {
 return a + "\n" + b  }; 
 console.log(defaultPara ("sabahat", 200 ) );
  console.log (defaultPara () ); 

let defPara : (a:string, b? : number  ) => string = function (a:string = "Page Not Founded", b : number = 404   ){ if(b) return a+ "\n" + b;
    else return a

}
; 
console.log(defPara( "sabahat", 200) ) 
let result = defPara("Page not founded");
console.log(result);





//================================================================================================

//              ============== rest parameter  =============
 
//================================================================================================


function rest1 (teacher : string, ...resst: string[] ) : string{ 
    return teacher + " " + resst.join(" ") ;

}; 
console.log(rest1 ("Teacher : Syeda Sabahat Shakeel\n", "Students : ", "Saba", "Zara", "Fara" )  );  
console.log(rest1 (" illy", "ann", "jimin" ));


function rest (str: string, ...rest: number[] ) {
   console.log(str);
   console.log(rest.join(" "))
     };
   rest("Page Founded...! ", 404,400,402)
    


   
//================================================================================================

//              ============== Function spread operators =============
 
//================================================================================================



//NAME FUNCTION
function restt (str: string, ...spread:string[] ) {
    console.log(str);
    console.log(...spread)
      };
      restt("sabahat","Page Founded or maybe not...! ", );
      restt("sheikh","welcome to the page\nor page not founded", ) 
     
     


//ARROW
let arrow1 = (name : string, ...spread: string[])=>{
console.log(name);
console.log(...spread.join(" "));
};

arrow1("sabahat", "WElOME USER...,TO GO YOUR HOME PAGE...");

