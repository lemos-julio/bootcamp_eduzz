let arr  = [3,7,5]
arr.foo = 'hello'

for(let i in arr){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}
