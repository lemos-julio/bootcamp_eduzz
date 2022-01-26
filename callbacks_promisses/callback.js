//Função de Callback ES5
/*function doSomeThing(callback){
    setTimeout(function(){
        callback('First data')
    },1000)
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data')
    },1000)
}
//Printando as funcções de Call Back
function doall(){
    try{
        doSomeThing(function(data){
            var processData = data.split('')
        
            
            doOtherThing(function(data2){
                var processData2 = data.split('')
            
                setTimeout(function(){
                    console.log(processData, processData2)
                },1000)
            
            }) 
            


        })
        


    }catch(err){
        //Handle Error
    }

doall()*/

//Função de CallBack ES6
//Promisses
const doSomeThingPromisse = () =>  new Promise((resolved,reject)=>{
    setTimeout(function(){
        //did something
        resolved('First data')
    },1000)
})

const doOtherPromisse  = () =>  new Promise((resolved,reject)=>{
    setTimeout(function(){
        //did something
        resolved('Second data')
    },1000)
})

/*doSomeThingPromisse
    .then(data=> doOtherPromisse)
    .then(data2 => console.log(data2))
    .catch()*/

doSomeThingPromisse()
    .then(data=> {
        console.log(data)
        return doOtherPromisse()
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error))