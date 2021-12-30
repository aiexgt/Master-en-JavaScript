'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

// Conseguir elementos con ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
    
}
seccion.append(hr);

/*
// Esto solo sirve para recorrer arrays creados (no funciona en este caso)
todosLosDivs.forEach((valor,indice) =>{
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
})
*/

/*
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";
*/

//console.log(contenidoEnTexto);

// Conseguir elementos por su clase (para seleccionar varios o un elemento)
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}

//Query selector (para seleccionar un solo elemento)
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

