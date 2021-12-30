'use strict'

$(document).ready(()=>{
    var caja = $("#caja");
    //MouseOver (mouse sobre) y MouseOut (mouse fuera)
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });
    */
    // Hover

    function cambiaRojo(){
        $(this).css("background","red");
    };

    function cambiaVerde(){
        $(this).css("background","green");
    };

    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click

    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });
    
    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","yellow");
    });
    
    //Focus y blur (cuando se esta en el elemento y cuando se sale)
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    
    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        datos.text($(this).val()).show();
    });

    // MouseDown y MouseUp
    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    // Mousemove
    $(document).mousemove(function(){
        /*
        console.log("En X: " + event.clientX);
        console.log("En Y: " + event.clientY);
        */
        $("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                        .css("top",event.clientY);
    })

});