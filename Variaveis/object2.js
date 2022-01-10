const user = {
    name:'Julio',
    lastname:'Cesar Lemos'
}

//Retorna as chaves do Objeto
console.log('\n Prorprieades do objeto user:', Object.keys(user))

//Retorna os Valores das chaves
console.log('\n Valores das propriedaes user:', Object.values(user))

//Retorna um arruy de arrays contendo [nome_prop, valor_prop]
console.log('\n lista de propriedades e valores ', Object.entries(user))


//Mergerar (juntar) propridades dos objetos
Object.assign(user,{fullName:'Julio Cesar Lemos'})
console.log('\n Adiciona a propriedade fullname no objeto user', user)
console.log('\n Retorna um novo objeto juntando dois ou mais obejetos', Object.assign({}, user, {age:26}))