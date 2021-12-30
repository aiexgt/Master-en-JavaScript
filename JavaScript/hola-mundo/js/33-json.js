'use strict'

// JSON (Javascript Object Notation) - es mas liviano

var pelicula = {
    titulo: 'Alerta Roja',
    year: 2021,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "Eternals", year: 2021, pais: "Guatemala"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}

//MongoDB almacena la información asi