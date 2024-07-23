//================================================================================================

//              ============== Callback function =============
 
//================================================================================================


//ARROW FUNCTION

let arrowfunc = (callback:()=>void)=>{
    console.log("starting/...");
    callback()
}
arrowfunc(function(){setTimeout(()=>{console.log("Hello World... !")},2000)});


function cb(callback:()=>void){
    console.log("Hello Sabahat");
    callback();
}
cb(function(){
    setTimeout(()=>{
        console.log("How was the day/." )
    },1000)
})