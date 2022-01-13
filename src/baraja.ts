//prototipo del objeto
//tipo de dato 
//objeto vacio

interface baraja {
    nombre: string 
    codigo: string
    atk: number
    def: number
    tipo: string
    normal: boolean 
}

let carta: baraja = {
    nombre: 'baby dragon',
    codigo: 'JW-025',
    atk: 1200,
    def: 850,
    tipo: 'normal',
    normal:true,
};

/*let carta2: baraja = {
    nombre: 'time wizard',
    atk: 300,
    def: 450,
    tipo: 'monster effect',
    normal: true,
    codigo: 'JW-048',
}*/
export default function llenadoCartas(){
    const cartaNew = { ...carta, normal: true, nivel: '8' };
    console.log(cartaNew);
    
}
//arreglo de objetos de tipo baraja 
//const baraja2: Array<baraja> = []