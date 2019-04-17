const calculator = require('./dist/calculator')

let soma = calculator.sum(2, 2)
let sub = calculator.subtract(2, 2)

console.log('A soma é: ' + soma)
console.log('A subtração é: ' + sub)
