'use strict'

// Parametros REST y SPREAD

//REST ...resto_de_frutas y lo mete en un array
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

//SPREAD crear array y pasarlo
var frutas = ['Naranja','Manzana'];
listadoFrutas(...frutas ,"Sandia","Pera","Melon","Coco");

