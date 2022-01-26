/* Iterarando e buscando elementos do array*/ 
//foreach 
/*
const frutas  = ['maça', 'banana' , 'uva', 'pera', 'melao' ]
frutas.forEach(frutas => console.log(frutas))
frutas.forEach((frutas,index) => console.log( frutas , index))


//Map = cria um novo array, de mesmo tamanho, e itera cada item
let frutas1 = [ 'maçã', 'pera', 'laranja', 'uva']
let printFrutas = frutas1.map((fruta, index) => `${index} - ` + `${fruta}` )
console.log(printFrutas)

//flat = retorna um novo array com todos os elementos de um subarray dependendo dos parametros insreidos "value.flat(n)"
let  idade = [20,36,[35,60,[40,70]]]
let printIdade = idade.flat(3)
console.log(printIdade)


//flatmap = Retorna um novo array assim momo uma função map e executa um flat de profundidade
const num = [1,2,3,4]
const printNum = num.flatMap(x => [x * 2])
console.log(printNum)

//Key = retorna um Array Iterator que contem as chaves pra cada elemenot do array
const chaves = [1,2,3,4]
const arrIterator = chaves.keys()




//value
const chaves1 = [1,2,3,4]
const arrayI = chaves1.values()



//Entries
const chaves2 = [1,2,3,4]
const arrayII = chaves1.entries()


//Find = Retorna o primeiro item de um array
const encontrar = [1,2,3,4]
const firsGreaterThanTwo =  encontrar.find( y => y > 1)
console.log(firsGreaterThanTwo)


//Find Index = Busca pelo index
const findIndex = [1,2,3,4]
const firstIndexGreaterThanTwo =  findIndex.findIndex( y => y >2)
console.log(firstIndexGreaterThanTwo)

//filter
const a3 = ['fruta','b', 'c', 2,5,7]
let inteiros = a3.filter(function(item){return typeof item === 'number'})
console.log(inteiros)*/


//indexOf = retorna o primeiro indice em que um elemento pode ser encontrado no array
const arrayindex = [1,2,3,4,5,6]
const findIndexItem = arrayindex.indexOf(3)
console.log(findIndexItem)

//includes = Retorna um bool verificando se determinado elemento existe
const incluir = [1,3,3,4,3]
const hasItem = incluir.includes(5)
console.log(hasItem)

//Some = retorna um bool verificano se pelo meons um item existe
const someItem = [1,3,3,4,3]
const someHasItem = someItem.some(z => z % 2 == 0)
console.log(someHasItem)

//Reverse = inverte elementos de um array
const reverse = [1,2,3]
const rev = reverse.reverse()
console.log(rev)


//Joi = junta elementos  de um array
const joinItem = [1,2,3]
let jj= joinItem.join('-')
console.log(jj)

//reduce = Retorna um novo tipo de dado iterano cada posição de um array
const red = [1,2,3,4,5]
let redResult = red.reduce((total, red)=>  total += red,0)
console.log(redResult)

//Split
const namesSp = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand'
var re = /\s*;\s*/;
const nameList = namesSp.split(re)
console.log(nameList)