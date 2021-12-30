'use strict'

$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > 1){
            $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
            });
    }

    // Posts
    if(window.location.href.indexOf('index') > 1){
        var articulo = $('#posts')
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lectus id magna luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis vehicula, mattis nisl vel, convallis dui. Fusce gravida dui sit amet odio rhoncus maximus. Vivamus fermentum risus sit amet nulla aliquet, a efficitur massa varius. Fusce iaculis eu justo vitae euismod. Duis quis consequat massa. Praesent sagittis elementum vehicula. Cras dignissim lacus non justo commodo pulvinar. In laoreet mattis elit, sit amet consequat quam. Vestibulum imperdiet mauris felis, eu pulvinar enim lacinia eu. Aenean ornare lacinia quam in tempus. Ut scelerisque imperdiet diam, at tempus ligula congue et.'
            }
        ];

        posts.forEach((item, index) =>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            
            articulo.append(post);
        });
    }
    //Selector de tema
    var theme = $("#theme");    
    theme.attr("href",localStorage.getItem("background"));

    $("#to-green").click(function(){
        theme.attr("href","css/green.css")
        localStorage.setItem("background","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css")
        localStorage.setItem("background","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
        localStorage.setItem("background","css/blue.css");
    });

    //Scroll arriba de la web

    $(".subir").click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800);

        return false;
    });

    //Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });
    
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>")

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.removeItem("form_name");
            location.reload()
        });
    };

    //Acordeon
    if(window.location.href.indexOf('about') > 1){
        $("#acordeon").accordion();
    };

    //Reloj
    
    if(window.location.href.indexOf('reloj') > 1){
        setInterval(() => {
            var reloj = moment().format('h:mm:ss a');
            $("#reloj").html(reloj); 
        }, 1000);
    };

    //Validacion
    if(window.location.href.indexOf('contact') > 1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    };
});