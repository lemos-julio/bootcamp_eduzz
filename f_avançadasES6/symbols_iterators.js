//Symbols = Identificador unico, mesmo duas variaveis contendo o mesmo conteudo
const uniqueid =  Symbol('Hello');

const obj = {
    [uniqueid]: 'Hello'
}


console.log(Object.getOwnPropertySymbols(obj))

//Well Knows Symbols
/*Symbol.iterator
Symbol.split
Symbol.toPrimitive*/

const objs = [1,2,3,4]
const it = objs[Symbol.iterator]()
    while(true){
        let{value, done} = it.next()
        console.log(value)
        if(done)
        break;
    }

    for (const value of objs) {
        console.log(value)
    }

    