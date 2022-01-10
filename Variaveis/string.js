//Verfica o tamanho de uma string
const textSize = 'texto'.length
console.log(`Quantidade de letras: ${textSize}`)

//Retorna Um array quebrando a string por um delimitador
const splittedText = 'Text'.split('x')
console.log('\nArray com as posições separadas pelo delimitador', splittedText)

//Busca Por um valor e subistitui por outro 
const replaceText = 'Texto'.replace('Text', 'texT')
console.log('\nSubistituição de Valor: ', replaceText)

//Retorna uma "Fatia" do Valor
console.log('\n*Slice*')
const lastChar = 'texto'.slice(-1)
console.log('\n Ultima letra de uma string:', lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\n Valor da String da primeira letra até a ultima:', allWithoutLastChar )

const secontToEnd = 'Texto'.slice(1)
console.log('\n Valor da String da Segunda letra até a ultima:', secontToEnd )

//Retorna N caracteres a partir de uma posição
const twoChars = 'Texto'.substring(0,2)
console.log('\n As duas primeiras letras são:', twoChars)