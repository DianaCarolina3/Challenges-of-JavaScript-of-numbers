// Factorial Number
/*
indica la multiplicación de todos los números enteros desde un
número dado, descendiendo hasta el número 1.
 */

function Factorial(n) {
  console.log("Factorial")
  if (n === 0 || n === 1) {
    console.log(1)
    return 1
  } else {
    //n-1 es porque toma el numero que le sigue(en este caso el anterior) y lo multiplica sucesivamente (no se multiplica por si mismo)
    //si es n se multiplica por si mismo el primer numero y despues si por los demas que le continuan
    for (let i = n-1; i >= 1; i--) {
      n = n * i
    }
    console.log(n)
  }
}
Factorial(5);