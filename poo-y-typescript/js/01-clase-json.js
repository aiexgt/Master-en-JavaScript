'use strict'

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    },
    cambiaModelo: function(nuevo_modelo){
        this.modelo = nuevo_modelo;
        console.log(this);
    }
};

bicicleta.cambiaColor('azul');

bicicleta.cambiaModelo('Bicicleteameesta');