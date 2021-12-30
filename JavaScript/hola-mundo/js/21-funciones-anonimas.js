'use strict'

// Funciones anonimas (sirve para hacer callbacks que se ejecuta una funcion en otra)
// Funcion que no tiene nombre y se puede guardar en una variable
/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre
}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(4,7,dato =>{
    console.log("La suma es: ",dato);
},
dato =>{
    console.log("La suma por dos es: ", dato*2)
}
)

// function(dato){} es lo mismo que dato =>{}