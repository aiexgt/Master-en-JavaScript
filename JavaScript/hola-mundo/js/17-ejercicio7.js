'use strict'

/*
    Tabla de multiplicar de un numero introducido por pantalla
*/

do{
    var numero = parseInt(prompt("Ingrese valor: ", 1));
}while(isNaN(numero))
document.write("<h1>Tabla de multiplicar de " + numero + "</h1>");

for(var i=1;i<=10;i++){
    document.write(numero + " x " + i + " = " + numero*i + "<br/>");
}