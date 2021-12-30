'use strict'

window.addEventListener('load',()=>{

    function intervalo(){
        // Timers - ejecutar algo cada x segundos
        var tiempo = setInterval(() => {
            console.log("Set interval ejecutado"); 
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            } 
        },1000);

        // solo se ejecutara una sola vez
        /*
        var tiempo = setTimeout(() => {
            console.log("Set interval ejecutado"); 
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            } 
        },5000);
        */
       return tiempo;
    }

    var tiempo = intervalo();

    // parar un timer
    var stop = document.querySelector("#stop");

    stop.addEventListener("click",()=>{
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    // iniciar un timer
    var start = document.querySelector("#start");

    start.addEventListener("click",()=>{
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
});