let val1;
let val2;

function getValues(){
   const userValue1 = prompt ("Please input first value")
   const userValue2 = prompt("Please input second value");
   
   val1 = Number(userValue1);
   val2 = Number(userValue2);
}

    const addRes = val1 + val2;
    const subRes = val1 - val2;
    const multRes = val1 * val2;
    const divRes = val1 / val2;
    
getValues();

alert(
    `${val1}+${val2}=${addRes}
   \n${val1}-${val2}=${subRes} 
   \n${val1}*${val2}=${multRes}
   \n${val1}/${val2}=${divRes}`
);

    
  

