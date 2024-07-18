//================================================================================================

//              ============== Promise chaining =============
 
//================================================================================================



let promise = new Promise((res,rej)=>{
setTimeout(()=>{
     res("successfully..."); 
     rej("request failure")

},2000)
})

promise.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error);console.log("Error...")})




//promise type number
let num : Promise<number> = new Promise((resolved, reject)=>{
    let numb = Math.random () > 0.6? 200 : 404
    if(numb === 404){return resolved(200)}
    else {
        return reject(404)
    }
})
num.then((result)=>{console.log(result)})
num.catch((error)=>{console.log(error)})
