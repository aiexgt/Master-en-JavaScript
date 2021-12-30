'use strict'

// Arrays, arreglos, matrices

var nombre = "Josue Lima";
var nombres = ["Josue Lima","Miguel Lima","Juan Pedro","Luis Lopez",52,true];
// inician en 0                 1           2               3        4  5
var lenguajes = new Array("PHP","JS","Go","Java","C#","C","Pascal");

/*
console.log(nombres[0]);
console.log(lenguajes);
*/
//Cantidad de elementos
/*
console.log(nombres.length);

var elementos = parseInt(prompt("Que elemento del array quieres", 0));
if(elementos >= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("El usuario seleccionado es "+nombres[elementos]);
}

*/

document.write("<h1>Lenguajes de programacion del 2019</h1>");
document.write("<ul>");

//manera clasica recorrer un array
/*
for(var i=0;i<lenguajes.length;i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
*/
/*
//mostrar todo elemento, indice y arreglo
lenguajes.forEach((elemento, indice, arreglo)=>{
    console.log(arreglo);
    document.write("<li>"+indice+". "+elemento+"</li>");
});
*/

//recorrer arreglo con for in
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul");

//Busquedas

//buscar el contenido
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

//buscar el index
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

var precios = [10,20,50,80,12];

//buscar elementos numericos salida (true/false)
var busqueda = precios.some(precio => precio > 20);

console.log(busqueda);