'use strict'

// Array Multidimensional

var categorias = ['accion','terror','comedia'];
var peliculas = ['la verdad duele','la vida es bella','gran torino'];

//ordenar por orden alfabetico
console.log(peliculas.sort());
//ordenar al inverso del orden alfabetico
console.log(peliculas.reverse());

var cine = [categorias, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

//Operaciones con arrays
/*
var elementos = "";
do{
    elementos = prompt("Introduce tu pelicula")
    //agregar elementos al array
    peliculas.push(elementos);
}while(elementos != "ACABAR")

//eliminar ultimo elemento del array
peliculas.pop();

//cambiar a undefined a un elemento
//peliculas[0] = undefined;
*/

var indice = peliculas.indexOf('gran torino');

if(indice > -1){
    //eliminar un elemento y cuantos mas despues de ese
    peliculas.splice(indice, 1);
}

//convertir array a texto

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";

//convertir texto a array
var cadena_array = cadena.split(", ");

console.log(cadena_array);


