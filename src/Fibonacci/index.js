//Fibonacci
/*
Consiste en sumar, en una sucesión de números que comienza en 0+1,
los dos números anteriores para hallar el segundo.
*/

function Fibonacci() {
  let numberA = 0;
  let numberB = 1;
  console.log("Fibonacci")
  while (numberA < 100 && numberB < 100) {
    numberA = numberA + numberB;
    numberB = numberB + numberA;
    let array = [numberA, numberB];
    for(let i = 0; i < array.length; i++) {
    const secuense = array[i]
    console.log(secuense)
    }
  }
}
Fibonacci()