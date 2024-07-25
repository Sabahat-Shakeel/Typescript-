

//================================================================================================

//              ============== optional function  =============
 
//================================================================================================


//NAME FUNCTION WITH OPTOINAL PARAMETERS
function optional ( a: string, b?: string ) :string {
if ( b) { return a + " " + b} else 
{ return a }; 
}; 
console.log(optional ("sabahat" ) ) ;  
console.log(optional  ("sabahat", "shakeel" ) );

// ANONYMOUS FUNCTION 
let funAnony : (a: string , b?: string)=> string = function (a:string, b? : string): string{
if(b)
return a + " "+ b;
else return a;
 }
console.log(funAnony("sabahat"));
console.log(funAnony ("Sabahat", "Shakeel"));



//CONDITION
let fun : (name: string , surname? : string ) => string = function  (name: string , surname? : string ): string {
    if(surname ){
    return name +" "+ surname
    
    }else return name ;
     };
    
    console.log(fun ("Sabahat" ) );
    console.log(fun ("Syeda Sabahat", "Shakeel" ) );




function album (a:string, b?:string){
  if (b){
    console.log(`Song : ${a.toUpperCase()}, Singer: ${b.toUpperCase()}`)

  }else  { console.log(`Song : ${a.toUpperCase()}`)}
}
album("never be");
album("3D");
album("seven", "jungkook");
album("freinds", "taehyung")
