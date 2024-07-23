//================================================================================================

//              ============== SetTimeout async =============
 
//================================================================================================


console.log('started/.');  //synchronous

setTimeout(()=>{
    console.log("ended/.")  //asynchronous
},3000)  //3 thousand milli second = 3s

console.log("HelLo SetTimeoutout"); //synchronous