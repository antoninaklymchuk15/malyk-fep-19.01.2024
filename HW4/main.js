let userOperator;
let val1;
let val2;

   
getOperator();
getValues();

function getOperator() {
  userOperator = prompt("Please choose operation: sum, sub, mult, div ", "");
  
}

function getValues() {
  const userValue1 = prompt("Please input first value");
  const userValue2 = prompt("Please input second value");

  val1 = Number(userValue1);
  val2 = Number(userValue2);
}
 
if (userOperator == "sum") {
  const addRes = val1 + val2;
  alert(`${val1}+${val2}=${addRes}`);
} else if (userOperator == "sub") {
  const subRes = val1 - val2;
  alert(`${val1}-${val2}=${subRes}`);
} else if (userOperator == "mult") {
  const multRes = val1 * val2;
  alert(`${val1}*${val2}=${multRes}`);
} else if (userOperator == "div") {
  const divRes = val1 / val2;
  alert(`${val1}/${val2}=${divRes}`);
} else{
    alert(`Wrong operator chosen`);
}


