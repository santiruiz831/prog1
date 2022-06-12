let alumno = {
  nombre: "Martin",
  curso: "Prog III",
};

//destructuring
let { nombre, curso } = alumno;
//console.log(nombre);
//console.log(curso);

//Practica

let numeros = [1, 5, 7, 12, 89, 23];

let numToString = numeros.map(function (num) {
  return num.toString();
});

//console.log(numToString);

let numerosDoble = numeros.map(function (num) {
  return num * 2;
});

//console.log(numerosDoble);

let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];
let mayuscula = nombres.map(function (name) {
  return name.toUpperCase();
});

//console.log(mayuscula)

let personas = [
  {
    nombre: "Angelina Jolie",
    edad: 59,
  },
  {
    nombre: "Eric Jones",
    edad: 2,
  },
  {
    nombre: "Paris Hilton",
    edad: 5,
  },
  {
    nombre: "Kayne West",
    edad: 70,
  },
  {
    nombre: "Bob Ziroll",
    edad: 61,
  },
];

let soloNombres = personas.map(function (nom) {
  return nom.nombre;
});
//console.log(soloNombres)

let nuevoNombre = personas.map(function (nom) {
  if (nom.edad >= 60) {
    return nom.nombre + " puede entrar a la matrix";
  } else //No lleva condicion
  return nom.nombre + " es demasiado peque";
});
//console.log(nuevoNombre)

let html = personas.map(function (nom) {
  return ["<h2>" + nom.nombre + "<h2>", "<p>" + nom.edad + "</p>"];
});
//console.log(html);

//filter
let numerosDos = [66, 3, 2, 5, 26, 101];
let cincoOMas = numerosDos.filter(function (mayores) {
  return mayores > 5;
});

//console.log(cincoOMas)

let pares = numerosDos.filter(function (numPar) {
  return numPar % 2 == 0;
}); 

let words = ["dog", "wolf", "by", "family", "eaten", "camping"];
let menosDeCinco = words.filter(function (palabra) {
  return palabra.length < 5;
});
//console.log(menosDeCinco)

let listaPersonas = [
  {
    nombre: "Angelina Jolie",
    afiliado: true,
  },
  { nombre: "Eric Jones", 
    afiliado: false 
  },
  { nombre: "Paris Hilton", 
    afiliado: true },
  {
    nombre: "Kayne West",
    afiliado: false,
  },
  { nombre: "Bob Ziroll",
   afiliado: true
  },
];

let miembroIlluminati = listaPersonas.filter(function(illuminati){
    return illuminati.afiliado
})

//console.log(miembroIlluminati)
