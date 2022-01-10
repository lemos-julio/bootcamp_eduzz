const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são unicos
console.log('Symbol 1 é igual ao 2?', symbol1 == symbol2 )
//Previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')


const user = {
    [nameSymbol1]: Symbol('Julio'),
    [nameSymbol2]: Symbol('Cesar'),
    lastname:'Lemos'
}

console.log(user)

//Symbols Criam propriedades que não são enumeraveis
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\n Valor da chave ${key}: ${user[key]}`)
    }
}

console.log('Proprieedades do objeto User', Object.keys(user))
console.log(' Valores das propriedades do objeto User', Object.values(user))

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto use:', Object.getOwnPropertySymbols(user))

//Acessando todas as propriedades do objeto
console.log('Todas as Propriedades do bjeto user:', Reflect.ownKeys(user))

//Cria um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}

