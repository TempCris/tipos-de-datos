const bicicleta = {
    rodada: 30,
    modelo: 'Mercury',
    marca: 'Benoto',
    precio: 1500,
    retro:false 
}
const patineta = {
    modelo: 'Longboard',
    marca: 'Apache',
    precio: 900,
    retro:false
}
const patines = {
    modelo: 'Cuatro ruedas',
    retro: true,
    marca: 'Apache',
    precio: 2000
}
const animes = ['Yugioh', 'Takagi-San', '86', 'Avatar', 'Hellsing']

export default function consultaProductos(){

    const { retro } = patines;
    console.log('Retro:', retro);
    const { precio } = bicicleta;
    console.log('Precio: $',precio);
    const { marca } = patineta;
    console.log('Marca:', marca);

    const indexes = animes.map((element, i) => {
        //mando imprimir el dato y su indice (i) en el array 
        //el "`" (acento grave: alt+}+space) te permite combinar strings con variables en este caso particular // ${} es la sintaxis para poder agregar la variable 
        console.log(`element: ${element} con index: ${i}`);
        return element; 
    });
    console.log('indexes: ', indexes);
}
