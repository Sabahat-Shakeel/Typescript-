//================================================================================================

//              ==============  function arrow =============
 
//================================================================================================

 let arrow = ()  => { console.log("hello sabahat"); }; // arrow();

 let aroow = (a : number, b :number) => {return a + b}; //console.log(aroow(12,2))

 let arow2 = ()=>(
    console.log(12+12))
 arow2(); //output 24

 let arrow3 = (name :string, age: number) =>{
   let name1 = `Name : ${name}, Age : ${age}`;
   return name1;
 }
 console.log(arrow3("sabahat", 18));


 let arrow2 = (greet:string, name :string):string=>{
    return greet +" "+ name
}
console.log(arrow2('Hello', 'Sabahat'));


