//================================================================================================

//              ============== Callback function =============
 
//================================================================================================



//NAME FUNCTION
function add (callback:()=>void){
    console.log("starting...");
    callback();
}
add(function(){setTimeout(()=>{console.log("Hello World...")},2000)});



//ANONYMOUS FUNCTION
let anon :(callback:()=>void)=>void = function(callback:()=>void){
    console.log("starting...")
    callback()
    
};
 anon(function(){console.log("Hello World...")});



