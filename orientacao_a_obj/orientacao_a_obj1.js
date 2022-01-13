/* Herança
    Baseada em protótiopos
    portotype = Armazena as definições do objeto
    __proto__ = Aponta para o prototyoe do tipo que criamos
    constructor =  tipo do prototype criado.
    __proto__-> prototype -> Constructor
    

    Proto aponta para o prototype e o prototype é criado a partir de um constructor
    
    */

    'use strict';

    const myText = 'Helow Prototype'
    myText.split('')//<- De onde Vem esse "split"



    //Mesma declaração que a de Cima
   const myText = String('Hellow World')

    console.log(myText.__proto__.split)

    const myText = 'Hellow prototype'

    //myText.constructor -> String
    //myText.__proto__ -> String.prototype
// Constructor do mytext = string e __proto__ é igual string.prototype
