'use strict'

/*
    Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

do{
    var numero1 = parseInt(prompt("Ingrese primer valor: ", 0));
    var numero2 = parseInt(prompt("Ingrese segundo valor: ", 0));
}while(isNaN(numero1) || isNaN(numero2) || numero1 == numero2)

if(numero1 > numero2){
    document.write("<h1>De " + numero2 + " a " + numero1 + " estan los numeros impares: </h1>")
    for(var i=numero2; i<=numero1; i++){
        if((i % 2) != 0){
            document.write(i + "<br/>");
        }else{
            //no hacer nada
        }
    }
}else if(numero1 < numero2){
    document.write("<h1>De " + numero1 + " a " + numero2 + " estan los numeros impares: </h1>")
    for(var i=numero1; i<=numero2; i++){
        if((i % 2) != 0){
            document.write(i + "<br/>");
        }else{
            //no hacer nada
        }
    }
}else{
    alert("Valores no validos");
}