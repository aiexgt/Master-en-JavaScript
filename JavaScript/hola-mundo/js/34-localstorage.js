'use strict'

// LocalStorage - informacion persiste durante la navegacion de la sesion

// Comprobar si es compatible
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony")

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos

// No se puede enviar en objeto sin convertir a string al localstorage
var usuario = {
    nombre: "Alex",
    email: "lima14florian14@gmail.com",
    web: "aiexgt.com"
};
// Hay que convertirlo a string con JSON.stringify
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto con JSON.parse
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

// Eliminar informacion del localstorage

// Individual
localStorage.removeItem("usuario");

// Todo
localStorage.clear();