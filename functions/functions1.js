//ES5
function fn(){
    return'Code Here'
}

//ES6
const arrowFn = () => 'code Here';
const arrrowFn = () => {
    //Mais de uma expressão
    return'Code Here'
}

//Funções também são objetos
fn.prop = 'Posso Criar propriedades'

console.log(fn())
console.log(fn.prop)

// Receber Parametros
const logValue = value => console.log(value)
const logFnResult = fnParm => console.log(fnParm())


logFnResult(fn)

//Receber e Retornar Parametros ES6
const controlFnExec = fnParm => allowed => {
    if(allowed){
        fnParm()
    }
}