//================================================================================================

//              ============== Promise chaining =============
 
//================================================================================================



function washing() {
    console.log('Washing started...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('washing done!');
      }, 5000);
    });
  }
  
  function soaking() {
    console.log('Soaking started...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Soaking done!');
      }, 3000);
    });
  }
  
  function drying() {
    console.log('Drying started...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Drying done!');
      }, 2000);
    });
  }
  
  // THEN CATCH error handling
  
  washing()
    .then((value) => {
      console.log(value);
      return soaking();
    })
    .then((value) => {
      console.log(value);
      return drying();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
  