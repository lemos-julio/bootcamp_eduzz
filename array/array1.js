const users = ['Julio','Bianca','Lucas']

const gender = {
    MAN: Symbol('M'),
    WOMAN:Symbol('W')
}

const persons =[ 
{
    name:'Julio',
    age: 21,
    gender: gender.MAN
},
{
    name: 'Bianca',
    age: 20,
    gender: gender.WOMAN
},
{
    name:'Lucas',
    age: 20,
    gender: gender.MAN
}


]

//console.log(persons[0])

//Retornar a quantidade de itens
console.log('items:', persons.length)


//verificar se array
console.log('A variavel pe um array:', Array.isArray(persons))



//iterar array
persons.forEach((persons, index, arr)=> {
    console.log(`Nome:${persons} index:${index}`, arr)
})
//Filtrar array
const mens = persons.filter(person => person.gender == gender.MAN )
console.log('\n Nova lista com apenas homens', mens)


//Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'Intrdução JS'
    return person
})

console.log('\n Pessoas com a adição Course:', personWithCourse)


//Transformar um array em outro tipo 
const totalage = persons.reduce((age, person) =>{
    age += person.age
    return age
}, 0)

console.log('Soma de idade de pessoas', totalage)

//Juntando operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 == 0)
                            .reduce((age, person) => {
                                age += person.age
                                return age
                            },0)

console.log('\n Soma de idades das ésspas que possuem idade par:' ,  totalEvenAges)