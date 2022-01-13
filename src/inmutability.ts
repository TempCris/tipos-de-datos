//tipos de datos 
const type1 = true;           //Boolean
const type2 = 'Hello world';  //String
const type3 = 20;             //Number
//tipos de datos especiales 
const esp1 = {                //Objeto con propiedades
  nombre: 'Kros',
  edad: 28,
  puto: false,
  ropa: {
    tenis: 'Blancos',
    pantalon: 'Mezclilla'
  },
  type3
};
const esp2 = ['kros', 28, false, { tenis: 'Blancos', pantalon: 'Mezclilla' }, type3]; // se declara una variable con un array y sus indices 

export default function inmutability() {
  //se trabaja con las propiedades del objeto
  //aqui se esta creando una nueva constante la cual esta trayendo una copia de un objeto ya declarado (esp1) con el spread operator "..." y se le añade un nuevo valor.
  const esp1New = { ...esp1, puto: true, nuevoValor: 'machote' };
  //aqui se esta trabajando con un arreglo y se le esta añadiendo una constante ya declarada
  const esp2New = [...esp2, type2];
  //se mandan a imprimir las funciones con las que estuvimos trabajando
  console.log('type1: ', type1);
  console.log('type2: ', type2);
  console.log('type3: ', type3);

  console.log('esp1New: ', esp1New);
  console.log('esp1: ', esp1);
  console.log('esp2New: ', esp2New);
  console.log('esp2: ', esp2);
}
