'use strict'

$(document).ready(()=>{
    
    //Selector ID
    $("#rojo").css("background","red")
                .css("color","white");
    $("#amarillo").css("background","yellow")
                .css("color","green");
    $("#verde").css("background","green")
                .css("color","white");

    //Selector de clases
    var mi_clase = $(".zebra").css("padding","5px");

    $(".sin_borde").click(function(){
        console.log("Click dado");
        $(this).addClass("zebra");
    });

    //console.log(mi_clase.eq(1));

    //Selector de etiqueta
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
    });

    //Selectores de atributo
    $('[title="Google"]').css("background","#ccc");
    $('[title="Facebook"]').css("background","blue");

    //Otros 
    //$('p, a').addClass('margen-superior');

    //find para buscar en todo
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    //Parent para ir saliendo en etiquetas

    console.log(busqueda);
});