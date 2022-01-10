/**
 * Imutabilidade, utiliza as referencias porém as referencias não são alteradas.
 */

const user ={
    name: 'Julio',
    lastname: 'Cesar Lemos'
}

function getUserWithFullName(user){
    return{
        ...user,
        fullname:`${user.name} ${user.lastname}` 
    }
}

const userFullName = getUserWithFullName(user)
console.log(userFullName)

/*Seria o mesmo que fazer isso*/

function getUserWithFullName2(user){
    return{
        ...user,
        fullname: user.name +' ' + user.lastname 
    }
}


const fullName = getUserWithFullName2(user)
console.log(fullName)