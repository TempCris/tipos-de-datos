/* eslint-disable dot-notation */
const objeto = {  //se declara un objeto y se le empieza a dar propiedades
  nombre: 'Cris', //tipo String
  edad: 28,       //tipo Number
  puto: false,    //tipo Boolean
  ropa: {         //se abre otro objeto con mas propiedades
    tenis: 'Blancos', //tipo String
    pantalon: 'Mezclilla' //tipo String
  },
  yugi: ['exodia', 'mago oscuro', 'hyudra'] //arreglo de Strings
};
//se manda a imprimir una propiedad especifica del objeto 
console.log('lista de cartas', objeto.yugi);

const arreglo = ['Cris', 28, false, { tenis: 'Blancos', pantalon: 'Mezclilla' }]; //arreglo de datos
//como llamar a las propiedades de un objeto
export default function consulta() { //se exporta la funcion que se esta declarando
  console.log('--------------OBJETOS-------------\n'); //se manda imprimir en consola un mensaje
  //con operador punto
  console.log('Operador punto: ', objeto.nombre); //se manda imprimir texto, se hace referencia al objeto declarado anteriormente y a una de sus propiedades la cual es "nombre" con el operador punto
  //con destructuracion, ya solo se hace referencia al propiedad en particular que queremos extraer del obejeto
  const { nombre } = objeto;
  console.log('Destructuracion: ', nombre);
  // con indireccion que es hacer referencia a la propiedad del objeto con []
  console.log('Indireccion por nombre: ', objeto['edad']);

  console.log('--------------ARREGLOS-------------\n');
  //se mandar llamar un subIndice del arrreglo especificando su indice.
  console.log('especificando subIndice', arreglo[3]);
  //mandar a imprimir los indices del arreglo por medio del operador .map que devuelve un los datos del arreglo
  const indexes = arreglo.map((element, i) => {
    //mando imprimir el dato y su indice (i) en el array 
    //el "`" (acento grave: alt+}+space) te permite combinar strings con variables en este caso particular // ${} es la sintaxis para poder agregar la variable 
    console.log(`element: ${element} con index: ${i}`);
    return element; 
  });
  console.log('indexes: ', indexes);
}