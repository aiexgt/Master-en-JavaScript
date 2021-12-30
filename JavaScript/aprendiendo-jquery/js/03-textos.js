'use stritc'

$(document).ready(function(){
    console.log($('a').length);

    reloadLinks();

    $("#add_button")
    .removeAttr('disabled')
    .click(function(){
        $("#menu").prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
        $("#add_link").val(''); 
    });

    /* 
    html - remplaza el codigo que ya esta
    append - lo agrega de ultimo
    prepend - lo agrega al principio
    before - lo agrega en la etiqueta anterior o elemento
    after - lo agrega en la siguiente etiqueta o elemento

    */
    

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");

        that.attr("target","_blank");
        that.text(enlace);
    });
}

});