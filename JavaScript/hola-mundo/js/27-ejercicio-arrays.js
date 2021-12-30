'use strict'

/* 
    1. pida 6 numeros por pantalla y que los meta en un array
    2. mostrar el array entero en el cuerpo de la pagina y en la consola
    3. Ordenarlo y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Mostrar cuantos elementos tiene el array
    6. Busqueda de un valor introducido por el usuario y que diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+" </h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

var numeros = [];
var ingreso;

//pedir 6 numeros e ingresarlos al array
for(let i=0;i<=5;i++){
    numeros.push(parseInt(prompt("Ingrese valor: ", 0)));
}

//mostrar en consola
console.log(numeros);

//mostrar en cuerpo de la pagina
mostrarArray(numeros);

//ordenar y mostrar
numeros.sort((a,b) => a-b);
mostrarArray(numeros, "ordenado");

//invertido
numeros.reverse();
mostrarArray(numeros, "revertido");

//cantidad de elementos
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//busqueda

var busqueda = parseInt(prompt("Busca un numero: ", 0));

var buscado = numeros.findIndex(numero => numero == busqueda);

if(buscado && buscado != -1){
    document.write("</hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: " +buscado+"</h1>");
}else{
    document.write("<h1>No encontrado</h1>");
}