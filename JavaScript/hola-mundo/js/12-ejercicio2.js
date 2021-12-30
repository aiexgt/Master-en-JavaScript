'use strict'

/*
Utiliza un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo",0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0)

var media = suma/contador;

alert("Suma: "+ suma);
alert("Media: "+ media);