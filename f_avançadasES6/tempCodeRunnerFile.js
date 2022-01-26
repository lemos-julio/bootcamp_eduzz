function sum(a, b){
    let value = 0
    for (var  i= 0; 1 < arguments.length; i++){
        value += arguments[i]
    } 
    return value
}

console.log(sum(5,5,5,2,3))