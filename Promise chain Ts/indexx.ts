//================================================================================================

//              ============== Promise chaining =============
 
//================================================================================================




let promisee : Promise<number> = new Promise((res,rej)=>{
    if (res){return res(200)}
    else {return rej(404)}
})
promisee.then((value)=>{console.log(value)})
promisee.catch((error)=>{console.log(error)})


//async promise
async function promise(): Promise <number>{
    return new Promise ((res,rej)=>{
   if(res){
    setTimeout(()=>{res(200)

},2000)
}else rej(400)

    })
}

async function resolved (){
    const data = await promise()
    console.log(data)
}
resolved()