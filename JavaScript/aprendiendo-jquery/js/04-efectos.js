'use strict'

$(document).ready(function(){

    var caja = $("#caja");
    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");

    caja.hide();
    ocultar.hide();

    //slideDown slideUp
    //fadeTo fadeTo

    mostrar.click(function(){
        $(this).hide();
        caja.slideDown('normal');
        ocultar.show();
    });

    ocultar.click(function(){
        $(this).hide();
        caja.slideUp('normal',function(){
            console.log("Cartel Ocultado");
        });
        mostrar.show();
    });

    //toggle fadeToggle slideToggle
    $("#todoenuno").click(function(){
        caja.slideToggle("fast");
    });

    $("#animame").click(function(){
        caja.animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: "110px"
        }, 'fast')
        .animate({
            borderRadius: "900px",
            marginTop: "80px"
        }, 'slow')
        .animate({
            borderRadius: "0px",
            marginLeft: "0px"
        }, 'slow')
        .animate({
            borderRadius: "100px",
            marginTop:  "0px"
        })
        .animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: "110px"
        }, 'fast')
        ;
    });

});