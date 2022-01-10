let user = {
    name:'Julio'
}
//Alterando Propriedade de um objeto
//console.log(user)
user.name= 'Outro Nome 1'
//console.log(user)

user['name'] = 'Outro Nome2'
//console.log(user)

const prop = 'nome';
user[prop] = 'Outro nome 3'

//console.log( user)

//Criando uma propriedade
user.lastname = 'Cesar Lemos'
console.log ( user )

//deletar propriedade
delete user.name
console.log(user)
