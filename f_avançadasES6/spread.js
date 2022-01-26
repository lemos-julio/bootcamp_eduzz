/*function sum(a, b){
    let value = 0
    for (var  i= 0; i < arguments.length; i++){
        value += arguments[i]
    } 
    return value
}

console.log(sum(5,5,5,2,3))*/

//rest operator '...'
/*function sum(...args){
    console.log(args)
    console.log(arguments)
}

console.log(sum(1,5,8,6,3))

//usando rest operator = transforma os itens de um parametro em um array
function sum(...args){
    return args.reduce((acc, value) => acc + value, 0)

}
console.log(sum(5,5,5,2,3))*/

//Spread operator '...' pega todos os itens do array e transforma em parametro
const multiply2 = (...args) => args.reduce((acc3, value3)=> acc3 * value3, 1)
const sum = (...rest)=>{
    return multiply2(...rest)
} 

console.log(sum(5,4,5,9,9))