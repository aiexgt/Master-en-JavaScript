'use strict'

/* 
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales. 
PLUS: si los numeros no son numero o son menores o iguales a cero, nos los vuelta a pedir
*/

var numero1 = parseInt(prompt("Ingrese el primer valor: ", 0));
var numero2 = parseInt(prompt("Ingrese el segundo valor: ", 0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingrese el primer valor: ", 0));
    var numero2 = parseInt(prompt("Ingrese el segundo valor: ", 0));
}

if(numero1 == numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es " + numero1);
    alert("El numero menor es " + numero2);
}else if(numero1 < numero2){
    alert("El numero mayor es " + numero2);
    alert("El numero menor es " + numero1);
}else{
    alert("Introduce numeros correctos");
}


