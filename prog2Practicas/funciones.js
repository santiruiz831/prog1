function calcularConsumo (edadActual, consumoPorDia, producto){
const edadMaxima = 90;
let edad = edadMaxima - edadActual;
let dias = edad * 365;
let cantidad = edad * consumoPorDia;
return `Necesitaras ${cantidad} de ${producto} para que dure el resto de tu vida`
}

let edadActual1 = 38;
let producto1 = 'Arroz con Pollo';
let consumoPorDia1 = 1;

//console.log(calcularConsumo(edadActual1, consumoPorDia1, producto1,));

let arrayDeDatos = ["Hola", "Como andas", "Fiumba"];
function cambiarElUltimo(array, input){
array.pop(2)
array.push(input)
return array;
}
//console.log(cambiarElUltimo(arrayDeDatos, "como te va"))

const libro = {
    nombre: "El principito",
    genero: "Aventura",
    cantidadDePalabras: 150000,
    paraAdultos: false,
    describirse: function () {
        return (`Hola soy ${libro.nombre} y mi genero es ${libro.genero}`)  
    },
    puedeLeerlo: function (edad) {
        if (edad < 18) {
            return false
        } else return true
    }
}
console.log (`Hola soy ${libro.nombre} y mi genero es ${libro.genero}`);
console.log(libro.puedeLeerlo(14));


let saludar = () => 'Hola'
let multiplicar = (valor1, valor2) => valor1 * valor2
let anonima = () => "Soy una funion sin nombre :("
let esPar = (numero) => numero%2===0; //Si es divisible por 2

console.log(saludar());
console.log(multiplicar(1,2));
console.log(anonima());
console.log(esPar(2))