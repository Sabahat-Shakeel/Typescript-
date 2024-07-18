//================================================================================================

//              ============== Asynchronous  await =============
 
//================================================================================================


//function 
function promise1():Promise<string>{
    return new Promise((res,rej)=>{
     setTimeout(()=>{
        res("successfully...")
     },2000) 
    })
}


//error handling 
let async = async()=>{
try{
const promsie = await promise1();
console.log(promsie)

}catch(error){console.log(error)}
finally{console.log("ok bye...!")}  //execute both condition
} 
async();