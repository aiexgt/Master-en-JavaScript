'use strict'

$(document).ready(function(){

    var elemento = $(".elemento");
    var lista = $(".lista-seleccionable");

    //Draggable - Mover elemento por la pagina
    elemento.draggable();

    //Resizable - Redimensionar
    elemento.resizable();  

    //Selectable - Seleccionar elementos
    //lista.selectable();

    //Sortable - Ordenar elementos
    lista.sortable({
        update : function(event, ui){
            console.log("Ha cambiado la lista")
        }
    });

    //Droppable - Efecto de soltar y arrastrar
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el area")
        }
    });

    //Efectos
    var mostrar = $("#mostrar");
    var caja = $(".caja-efectos");

    mostrar.click(function(){
        // tipos efectos: explode, blind, slide, drop, fold, puff, scale, shake, 
        caja.toggle("scale",4000);
    });

    //Tooltip - title de los links
    //$(document).tooltip();

    // Dialog - ventanas emergentes
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })

    // Datepicker - calendario
    $("#calendario").datepicker();

    // Tabs 
    $("#pestanas").tabs();
});