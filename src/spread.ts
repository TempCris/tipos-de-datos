interface animal {
    nombre: string
    edad: number
}

let gato:animal = {
    nombre: 'Chanchito',
    edad: 15
}

let gato2 = ['amarillo'];

export let gatos= ({...gato2,...gato})

console.log(gatos);
    
