const myNumber = 12.0255
//Transformar Numero para Str
const NumberAsString = myNumber.toString()
console.log('Numero e tipo de dado:', typeof NumberAsString)

// Retorna NUmero com um numero  de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\n NUmero com casas decimais:', fixedTwoDecimals)

//Tranasforma string em float
console.log('\nString passada para float', parseFloat('12.03'))

//Transforma um STR em INT
console.log('\nString passada para Inteiro:', parseInt('12.03'))