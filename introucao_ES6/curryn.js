/*
    Curryn retorna uma função para cada parametro. É Utilizada uma variavel para memorizar o primeiro parametro. 
*/ 

function soma(a) {
    return function(b){
        return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))