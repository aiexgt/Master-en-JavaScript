'use strict'

/*
    Mostrar todos los numeros divisores de un numero introducido en prompt
*/

var numero = parseInt(prompt("Ingresa un numero: ", 1));

for(var i=0;i<=numero;i++){
    if(numero%i == 0){
        console.log("Divisor: " + i);
    }
}