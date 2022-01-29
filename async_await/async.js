const asyncTimer = () =>{
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(12345)
        },1000)
    })
}


const simpleFunc = async() => {
    const data = await asyncTimer()
    const dataJSON = await fetch('/fetch/data.json').then(resStream => resStream.json())
    return dataJSON
}



console.log(simpleFunc().then(data => {
    console.log(data)
}))