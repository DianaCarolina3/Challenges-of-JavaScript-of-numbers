//Primality test
/*
Un número primo (o primo) es un número natural mayor que 1 que no se puede formar multiplicando
dos números naturales más pequeños. Un número natural mayor que 1 que no es primo se llama número
compuesto.
*/

// Number.isInteger(value) me dice si el valor es entero o no, con true and false

function numberPrime(number) {
  if (number === 1) {
    console.log('1 no number prime')
  }
  if (number > 1) {
    let prime = true
    for (let i = 2; i < number; i++) {
      //% este opereador calcula el resto de la division. 0 resto exacto, 1 resto no exacto
      if (number % i === 0) {
        prime = false
      }
    }
    if(prime) {
      console.log(`${number} is number prime`)
    } else {
      console.log(`${number} no number prime`)
    }
  }
}
numberPrime(43)