'use strict'

/*
    Calculadora que pida dos numeros por pantalla
    Si metemos uno mal que nos los vuelva a pedir
    Mostrar en el body de la pagina, en una alerta y por la consola el resultado de
    sumar, restar, multiplicar y dividir esas dos cifras
*/

do{
    var numero1 = parseInt(prompt("Ingrese primer valor: ", 0));
    var numero2 = parseInt(prompt("Ingrese segundo valor: ", 0));
}while(numero1 < 0 || numero2 < 0 ||isNaN(numero1) || isNaN(numero2))

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

//body de pagina
document.write("<h1> Calculadora </h1><br/>");
document.write("Suma :" + suma + "<br/>");
document.write("Resta :" + resta + "<br/>");
document.write("Multiplicacion :" + multiplicacion + "<br/>");
document.write("Division :" + division + "<br/>");

//alert
alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicacion: " + multiplicacion);
alert("Division: "+ division);

//console
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multiplicacion);
console.log("Division: "+ division);
