//================================================================================================

//              ============== Callback function =============
 
//================================================================================================


//CALLBACK
function washing(callback: () => void) {
  console.log('Washing started...');
  
  setTimeout(() => {
    console.log('washing done!');

    callback();
  }, 5000);
}


function soaking(callback: () => void) {
  console.log('Soaking started...');
  
  setTimeout(() => {
    console.log('Soaking done!');

    callback();
  }, 3000);
}


function drying() {
  console.log('Drying started...');
  
  setTimeout(() => {
    console.log('Drying done!');
  }, 2000);
}

console.log('folding laundry');

washing(() => {
  soaking(() => {
    drying();
  });
});
