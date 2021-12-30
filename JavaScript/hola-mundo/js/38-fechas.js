'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    El minuto es: ${minutos}
`;
console.log(textoHora);

console.log(Math.ceil(Math.random()*10000));

//Funciones matematicas
//https://www.w3schools.com/js/js_math.asp
