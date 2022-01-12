//Função ES5 = é referenciada pelo contexto que esta inserida, no caso 'this' referenciou o objeto user
// Funcção ES6,ArrowFn = Sempre Referencia o bloco em que esta insereida, no caso do 'this' referenciou o this original.

(() =>{
    this.name = 'Arrpw Function'

    const getNameArrowFn = () => this.name

    function getName(){
        return this.name
    }
    const user = {
        name: 'Nome de execução do objeto',
        getNameArrowFn,
        getName

    }
    console.log(user.getNameArrowFn())
    console.log(user.getName())

})()