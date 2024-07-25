//================================================================================================

//           ============== Structural literal fresh object and stale object ===============

//=================================================================================================




let fresh = {
    name : "sabahat",
    rollno : 126543,
    class : "quater 1"
    };
    let freshB = {
    name : "syeda sabahat",
    rollno : 12654321
    };
    
    freshB = fresh  //ok
    console.log(freshB) //ok
    console.log(freshB.class) //error 

    fresh = freshB  //error because missing property "class" .