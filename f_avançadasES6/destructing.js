//*var arr  = ['Apple', 'Banana', 'Orange', ['Tomato']]
/*
var apple = arr[0]
var banana = arr[1]
var orange =  arr[2]
var tomato = arr[3][0]

//Destructing Assigment

var [apple2, banana2, orange] = ['Apple', 'Banana', 'Orange']

console.log(apple2)
console.log(banana2)

//Objeto
 
var obj = {
    nome: 'Cleo'
}

 
console.log(obj.nome)
//Destruindo Objeto e encontrando variavel name
var{nome} = obj

console.log(nome)
 */

var arr = ['Maçã', 'Laranja']
var objeto = {
    nome: 'Julio',
    props:{
        age:20
    }
}

console.log(objeto)

var[apple2] = arr;
var{
    props:{age:age2}
} = objeto

console.log(age2)