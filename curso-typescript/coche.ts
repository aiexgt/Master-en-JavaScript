interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo:any = null){
        this.color = "Blanco"
        this.velocidad = 0;
        if(modelo == null){
            this.modelo = "BMW Generico";
        }else{
            this.modelo = modelo;
        }
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }
    
    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad
    }
}

var coche = new Coche("Renault Clio");
var coche2 = new Coche();
var coche3 = new Coche();

//coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();
console.log("La velocidad despues de frenar del coche 1 es : " + coche.getVelocidad());

/*
coche2.setColor("Azul");
coche3.setColor("Verde");

console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
*/