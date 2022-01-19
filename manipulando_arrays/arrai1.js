/*Criando e Manipulando Arrays*/

//Criando um array com tres posiões vazias
const arr1 = Array(3)
console.log(arr1)

//Array.of = outra forma de criar um array
const arr2 = Array.of(4)
console.log(arr2)

//Criando um array com a sequencia 1,2,3
const arr3 = Array(1,2,3)
console.log(arr3)

//psuh = Adiciona um ou mais elementos ao final do array
const nome = ['julio', 'Cesar']
console.log(nome)
const inputName = nome.push('Lemos')
console.log(nome)

//pop
const removeName = nome.pop()
console.log(nome)

//Shifit = remove elementos no inicio do array
const removeNameIni = nome.shift(0)
console.log(removeNameIni)
console.log(nome)

//unshift = Adicionar elementos no inicio do array
const inputName2=  nome.unshift('Julio')
console.log(inputName2)
console.log('\n',nome)

//Concat = Junta arrays  e listas
const doces =  ['bolo', 'brigadeiro','torta']
const salgados =['coxinha', 'rizoles', 'kib']
const alimentos = doces.concat(salgados)
console.log(`\n${salgados}, \n ${doces}, \n ${alimentos}`)


//Slice= Retorna um novo array 'fatiando'o array de acordo com inicio e fim
const nomes = [1,2,3,4,5]
let slc = nomes.slice(-3)
console.log(slc)

//Splice = remove e adiciona itens dpendedo do parametro
const numeros = [1,2,3,4,5]
let spc =  numeros.splice(-3)
let inc =  numeros.splice(0,0, 'first')
console.log(spc)
console.log(numeros)

