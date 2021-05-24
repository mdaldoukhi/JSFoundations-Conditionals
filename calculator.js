//Decalre the varibles 
/*
const numberOne = prompt("Please enter the first number: ");
const numberTwo = prompt("Please enter the second number: ");
const operation = prompt("Please choose the operation (+, -, /, *): ");
*/
const numberOne = 5;
const numberTwo = 7;
const operation = "*";

//check the opreation
if (operation === "+"){
console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne + numberTwo}`)
}else if (operation === "-"){
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne - numberTwo}`)
}else if (operation === "/"){
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne / numberTwo}`)
}else {
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne * numberTwo}`)
}