// String (multiples tipos de datos)
var cadena = "Josue Lima";
cadena = 15;
// Number
var numero = 12;
// Booleano
var verdadero_falso = true;
// Any
var cualquiera = "hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14];
// Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2_1 = 55;
    console.log(numero1_1, numero2_1); //let
}
console.log(numero1, numero2); //var
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
