export default function Ejer2(a:number,b:number, c:number){

    console.log(`Los numeros introducidos son: ${a}, ${b}, ${c}`);

    if(a>=b && a>=c ){
        if(b > c ){
            console.log(`El orden es: ${a}, ${b}, ${c}`)
        }else{
            console.log(`El orden es: ${a}, ${c}, ${b}`)
        }
    }else if(b>=a && b>=c){
        if(a>c){
            console.log(`El orden es: ${b}, ${a}, ${c}`);
        }else{
            console.log(`El orden es: ${b}, ${c}, ${a}`);
        }
    }else if(c>=a && c>=b){
        if(a>b){
            console.log(`El orden es: ${c}, ${a}, ${b}`);
        }else{
            console.log(`El orden es: ${c}, ${b}, ${a}`);
        }
    }
}

//compraracion por capitulos 