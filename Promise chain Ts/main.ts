//================================================================================================

//              ============== Promise chaining =============
 
//================================================================================================

// Promise chaining
let promise : Promise<string> = new Promise ((res,rej)=>{
    if(res){
        setTimeout(()=>{
            console.log("HELLO SABAHAT...");
            return res("PROMISE RESOLVED!");
        },2000)
    } else {
        return rej("error");
    }
})

promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})


//arrow fucntion promise 


let arrow : Promise <boolean> = new Promise((resolved, reject)=>{
    if (resolved){
        return resolved(true);
    } else {
        return reject (false)
    }
})
arrow.then((value)=>{
    console.log(value)
})
arrow.catch((error)=>{
    console.log(error)
})
