//Definição Design Patterns(Padrões de Projetos)
/*  Soluções Generalistas para problemas recorrentes durante o desenvolvimento de um software   */


//Observer
class observable{
    constructor(){
        this.observers = [];
    }

    subscribe(f){
        this.observers.push(f)
    }

    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber !== f )
    }

    notify(data){
        this.observers.forEach(observer => observer(data))
    }


}

const OB = new observable()
const logdata1 = data => console.log(`Subiscribe 1: ${data}`)
const logdata2 = data => console.log(`Subiscribe 2: ${data}`)

OB.subscribe(logdata1)
OB.notify('Notified 1')
