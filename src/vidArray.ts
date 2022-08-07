/*
    Arrays - Propiedad
        Arrat.length - devuelve el numero de posiciones que contiene el array
*/

/*
    Arrays - Metodos
        array.is Array() - Devuelve true si es la variable de un array
*/

/*
        Eliminar un elemmento
            .shift() - Elimina el primer elemento del array y devuelve ese elemento
            .pop() - Elimina el ultimo elemento de un array y devuelve ese elemento
*/

/*
        Añadir elementos
            .push(element1, elente 2,...) - Añade uno o mas elementos al final del array
            y devuelve la nueva longitud.
            .unshift(element1,element2,...) - Añade uno o mas elementos a comienzo del
            array y decuelve la nueva longitud
*/

/*
        .indexOf() - Devuleve el primer indice del elemento que coincida con
        el valor especificado, o -1 si ninguno es encontrado.
*/

/*
        .lastIndexOf() - Devuelve el último índice del elemento que coincida
        con el valor especicficado, o -1 si ninguno es encontrado.
*/

/*
        .reverse() - invierte el orden de los elementos del array
*/
/*
        .join('separador') - Devuelve un string con el separador que
        indiquemos, por defecto son comas
*/

/*
        .splice(a,b,items)  - Cambia el contenido de un array eliminado
        elementos existentes y/o agregando nuevos elementos.
            a - Indice de inicio
            b - Numero de elementos (opcional)
            items - elementos a añadir en el caso de que se añadan (opcional  )
        ejemplos:
            obj.splice(3) - eliminana desde la posicion "a" hasta el final
            obj.splice(2,2) - eliniman desde la posicion "a" el numero de valores que le indiquemos
            obj.splice(2.2,10,54,30) - si "b" es un valor distinto de 0 elimina el numero
            de valores que indiquemos en "b" y añade los valores de items a partir de la posicion"a"
            obj.splice(4,0,10,23,54) - si "b" vale 0 añade los elementos a parter de la posicion "a"
            y no elimina ninguno.
*/
/*
        .slice(a,b) - extra elementos de un array desde el indice "a" hasta el indice "b.
        Si no existe "b" lo hace desde "a" hasta el final, si no existe ni "a" ni "b" hace una copia
        del original.
*/
