'use strict'

// BOM - Browser Object Model
function getBom(){
    //tamaño pestaña
    console.log(window.innerHeight);
    console.log(window.innerWidth); 
    //tamaño pantalla
    console.log(screen.width);
    console.log(screen.height);
}

function redirect(url){
    //enviar a un url
    window.location.href = url;
}

function abrirVentana(url){
    //enviar a una ventana extra url (con tamaño con width y height)
    window.open(url,"","width=400,height=200");
}

getBom();