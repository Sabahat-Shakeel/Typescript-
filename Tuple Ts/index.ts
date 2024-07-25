//====================================================================================

//                  ==================== tuples ====================

//=====================================================================================

let tupless :[boolean, string, undefined, null] = [true, "sabahat", undefined,null];
tupless.push ("syeda sabahat shakeel");
console.log(tupless);
tupless.pop();
console.log(tupless)
tupless.unshift(12); //error because we try to unshift number whenever we not defined in type number
console.log(tupless);

