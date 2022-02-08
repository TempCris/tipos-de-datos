//prototipo del objeto
//tipo de dato 
//objeto vacio

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
    const cartaNew = { ...carta, nivel: '4' };
    console.log(cartaNew);
    
}
//arreglo de objetos de tipo baraja 
//const baraja2: Array<baraja> = []