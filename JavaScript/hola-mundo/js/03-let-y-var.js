'use strict'

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 40

//Prueba con let
var texto = "Prueba var";
console.log(texto); //valor var

if(true){
	let texto = "Prueba let"
	console.log(texto); //valor let
}

console.log(texto); //valor var