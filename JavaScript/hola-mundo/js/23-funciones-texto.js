'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de javascript curso";
var texto2 = "Es un buen curso";


    //convertir de numerico a texto
    var dato = numero.toString();
    //convertir a mayusculas
    dato = texto1.toUpperCase();
    //convertir a minusculas
    dato = texto1.toLowerCase();
    //console.log(dato);

    //Calcular longitud de un texto
    var nombre = "Josue Lima";
    nombre = ["hoa","hola"];

    //console.log(nombre.length);

    //Concatenar o unir textos

    //var textoTotal = texto1 + " " + texto2;

    var textoTotal = texto1.concat(" " + texto2);

    console.log(textoTotal);


//Buscar caracter o en array

//En que caracter inicia el primero
var busqueda = texto1.indexOf("curso");

//En que caracter inicia el ultimo
var busqueda = texto1.lastIndexOf("curso");

//Lo mismo que indexOf
var busqueda = texto1.search("curso");

//Coleccion de las busquedas encontradas
var busqueda = texto1.match(/curso/gi);

//Muestra desde el caracter # hasta los valores que se le indiquen
var busqueda = texto1.substr(14,5);

//Sacar una letra
var busqueda = texto1.charAt(30);

//Verifica si empieza con el valor ingresado
var busqueda = texto1.startsWith("Bienvenido");

//Verifica si termina con el valor ingresado
var busqueda = texto1.endsWith("curso");

//Verifica si existe la palabra en el texto
var busqueda = texto1.includes("javscript");
console.log(busqueda);


//Funciones de remplazo
var busqueda = texto1.replace("javascript", "phyton");

//Eliminar desde el caracter que se indique hasta al que se ingrese;
var busqueda = texto1.slice(14, 22);

//Meter en un array y dentro de parentesis el separador
var busqueda = texto1.split(" ");

//Quitar espacios al principio y al final del texto
var busqueda = texto1.trim()


console.log(busqueda);
