'use strict'

// Evento Load para que cargue todo antes de lanzarlo
window.addEventListener('load',()=>{
    // Eventos del Raton

    function cambiarColor(){
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";

        }else{
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");

    //evento al hacer clic
    boton.addEventListener('click',function(){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    // Mouse over - evento al poner el puntero sobre
    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";    
    });

    // Mouse out - evento al quitar el puntero sobre
    boton.addEventListener('mouseout',function(){
        boton.style.background = "#ccc";    
    });

    // Focus  - cuando selecciono en el input
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus',function(){  
        console.log("[Focus] Estas dentro del imput");
    });
    // Blur - cuando esta fuera del input
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('blur',function(){  
        console.log("[Blur] Estas fuera del imput");
    });

    // Keydown - la tecla que se este pulsando
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown',function(evento){  
        console.log("[Keydown] Pulsando esta tecla ", String.fromCharCode(evento.keyCode));
    });

    // Keypress - la tecla que se presiono
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keypress',function(evento){  
        console.log("[Keypress] Tecla presionada ", String.fromCharCode(evento.keyCode));
    });

    // Keyup - la tecla se deja de presionar
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keyup',function(evento){  
        console.log("[Keyup] Tecla soltada ", String.fromCharCode(evento.keyCode));
    });
});