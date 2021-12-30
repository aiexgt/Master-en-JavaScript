'use strict'

/*
    Que nos diga si un numero es par o impar
    1. Ventana prompt
    2. Si no es valido que nos vuelva a pedir el numero
*/

do{
    var numero1 = parseInt(prompt("Ingrese valor: ", 0));
}while(isNaN(numero1))

if(numero1%2 == 0){
    alert("El numero "+ numero1 + " es par");
}else{
    alert("El numero "+ numero1 + " es impar");
}