
//================================================================================================

//              ==============  Unknown and any =============
 
//================================================================================================



let an : any ;  
an = "syeda sabahat";  
an =404;  
an = undefined ;  
an = null; 
an = "shakell uddin ahmed";  
console.log(an);

const vall :string = an


let ann : unknown ;  
ann = "syeda sabahat";  
ann =404;  
ann = undefined ;  
ann = null; 
ann = "shakell uddin ahmed";  console.log(ann);

let val : unknown;
const val1 : unknown = val;
const val2 : any = val;
const val3 : boolean = val; //will throw an error
const val4 : string = val //will throw an error

