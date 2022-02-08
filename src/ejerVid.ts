export default function Ejer1(){
    
    let num1 = 2;
    let num2 = 4;
    
    if(num1>0){
        if(num2>0){
            console.log(`${num1} y ${num2} son mayores que 0`);    
        }else if(num2<0) {
            console.log(`${num1} es mayor que 0 y num 2 no es menor que 0`);
        }else{
            console.log(`${num1} es mayor que 0 y num 2 no es igual a 0`);
        }
    }else if(num1<0){
        if(num2>0){
            console.log(`${num1} no es mayor que 0 y ${num2} son mayor que 0`);    
        }else if(num2<0){
            console.log(`${num1} y ${num2} son menores que 0`);
        }else{
            console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
        }
    }else{
        if(num2>0){
            console.log(`${num1} es igual 0 y ${num2} es mayor a 0`);    
        }else if(num2<0) {
            console.log(`${num1} es igual 0 y ${num2} es menor que 0`);
        }else{
            console.log(`${num1} y ${num2} son iguales a 0`);
        }
        
    }
    
};

let word = 'Hol';

if(word.length>4){
    console.log(`${word} tienes mas de 4 letras`);    
}else if(word.length<4) {
    console.log(`${word} tienes menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta = false ;

if(respuesta) console.log(`Respuesta tiene el valor true`);
if(!respuesta) console.log(`Respuesta tiene el valor false`);
