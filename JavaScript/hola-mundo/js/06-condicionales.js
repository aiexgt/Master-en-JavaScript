'use strict'

//Condicional IF
//Si a es igual a b entonces has algo

var edad = 29;
var nombre = 'David Suarez';

/*
//operadores relacionales
    Mayor >
    Menor <
    Mayor o igual >=
    Menor o igual <=
    Igual ==
    Distinto !=
*/

//Si pasa esto
if(edad >= 18){
    //Ejecuta esto
    console.log(nombre + " tiene " + edad + " años, es mayor de edad" )

    if(edad <= 33){
        console.log('Todavia es millenial')
    }else if(edad >= 70){
        console.log('Eres anciano')
    }else{
        console.log('Ya no eres millenial')
    }
}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad" )
}

/*
//operadores logicos
AND(Y): &&
OR(O): ||
Negacion: !
*/
var year = 2018;

//Negacion
if(year != 2016){
    console.log("El año no es 2016, realmente es "+ year)
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era post moderna")
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8")
}else{
    console.log("Año no registrado")
}

