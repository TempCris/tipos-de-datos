/* eslint-disable no-unused-expressions */
/*
Operador ternario
(condicion) ? true:false

(condicion) ?
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function operation():any {
  const num = 4;
  (num % 2 === 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);
}
