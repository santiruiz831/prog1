// 1)Declara las variables subject y year. La primera debe ser de tipo string y la segunda de tipo numérica. Estas variables deberán poder sobreescribirse ó pisarse si el programador lo desea a futuro… ¿te acordás qué tipo de variable permite esto?


// 2)Declara la variable favoriteSites, la cual deberá guardar una colección de tus sitios web favoritos. Sí esta variable se definiera dentro de un bloque de código de una función, no deberíamos poder utilizarla por fuera de este ¿Que tipo de variable permite este comportamiento?


//  Imprime en consola el valor que está en la posición 3 de favoriteSites.


//  A la variable favoriteSites, que guarda la colección de sitios favoritos, deberás remover el último elemento. ¿Que método que vimos sirve?


//  Luego de remover el último ítem de favoriteSites, debes agregar otro ítem al final de la colección.



// 3) Declara la variable person la cual deberá tener las siguientes propiedades/métodos:
// - name
// - lastName
// - age
// Deberás poner los tipos de dato que creas que corresponda en cada una.

// Una vez que lo hayas hechos imprimí en consola el texto: “Hola mi nombre es Mike Wazowski y tengo 37 años” donde el nombre, apellido y edad deben provenir de la variable declarada.

// Por otro lado, la variable person no debe permitir modificar datos de su interior ¿qué tipo de variable corresponde para esto?



// 4)Sin modificar el código del punto 3, agrega una propiedad sites que tenga como valor la variable favoriteSites.


// Imprimí en consola la propiedad sites de person.
// Imprimí en la consola el segundo sitio favorito de la persona. 

// 5) 
// Procesando cursos
// Generar un array con 6 elementos
// Cada elemento debe ser un objeto literal con las propiedades
// Nombre del curso
// Descripción del curso
// Cantidad de alumnos
// Array de días de la semana que se cursa
// ¿Se te ocurre cómo obtener el tercer curso?
// ¿Se te ocurre cómo obtener el nombre del cuarto curso?
// ¿Se te ocurre cómo agregarle un día de cursada al curso número 2?
// Agregale a cada curso un array de alumnos
// Cada alumno debe ser un objeto literal con nombre y apellido
// ¿Cómo puedo obtener el nombre del primer alumno del curso 3?


let subject = 'Hola';
let year = 2021;

"Ej 2"
let favoriteSites = ["Buenos Aires", "Bariloche", "Mar del Plata", "Mendoza"]
console.log(favoriteSites[3])
favoriteSites.pop
favoriteSites.push('Jujuy')

"Ej 3"
const person = {
    name: "Mike",
    lastName: "Wazowski",
    age: 37,
    sites: ["Bs As", "Bariloco", "MDQ", "Cordoba"],
    saludar: function(){
        return `Hola mi nombre es ${person.name} ${person.lastName} y tengo ${person.age}`
    }
}
console.log(person.saludar)


"Ej 4"
console.log(person.sites[3])

"Ej 5"
let cursos = [
    {
        name: "Programacion I",
        description: "Este es un curso introductorio de Programacion",
        students: 30,
        days: ["lunes", "martes", "viernes"]
    },
    {
        name: "Programacion II",
        description: "Este curso tiene un nivel mas avanzado",
        students: 27,
        days: ["lunes", "martes", "sabado"]
    },
    {
        name: "Programacion III",
        description: "Este es el ultimo curso de programacion",
        students: 20,
        days: ["lunes", "jueves", "sabado"]
    },
    {
        name: "Big Data",
        description: "En este curso se estudian las utilidades de Big Data",
        students: 26,
        days: ["martes", "jueves", "sabado"]
    },
    {
        name: "Marketing Digital",
        description: "Este curso te ensenia a potenciar tus ventas online",
        students: 45,
        days: ["lunes", "jueves", "domingo"]
    },
    {
        name: "Data Analytics",
        description: "Este curso te ensenia a analizar datos",
        students: 20,
        days: ["lunes", "miercoles", "sabado"]
    }
]
console.log(cursos[3]);
console.log(cursos[4].name);
cursos[2].days.push('miercoles'); //Revisar
cursos.push(["alumnos"]); //Mal
