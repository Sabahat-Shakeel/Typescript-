//================================================================================================

//              ============== Asynchronous await =============
 
//================================================================================================



function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  

  async function performAsyncTask(): Promise<string> {
    try {
     await delay(2000);
  return 'Task completed successfully';
} catch (error) {
    throw new Error('An error occurred while performing the task');
    }
}
 
  async function main(){
  try {
    const result = await performAsyncTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
main();