//console.log('hola');

let subject = 'Hola';
let year = 2022;

const favoriteSites = ['Instagram', 'Facebook', 'Whatsapp']
//console.log(2);
favoriteSites.pop();
favoriteSites.push('Linkedin');
//console.log(favoriteSites);

const person = {
    name: 'Mike',
    lastName: 'Wazow',
    age: 37,
    sites: favoriteSites
}

console.log(`Hola mi nombre es ${person.name} ${person.lastName} y tengo ${person.age} anios`);
console.log(person.sites[1]);

const cursos = [
    {
        nombre: 'Prog III',
        descripcion: 'Muy divertido',
        alumnos: 30,
        cursada: ['Lunes', 'Miercoles', 'Viernes'],
        alumnos: [
            {
                primerNombre: 'Pedro',
                apellido: 'Gonzalez'
            },
            {
                primerNombre: 'Pablo',
                apellido: 'Gutierrez'
            },
            {
                primerNombre: 'Santiago',
                apellido: 'Ruiz'
            }
        ]
    },
    {
        nombre: 'Prog II',
        descripcion: 'Un embole',
        alumnos: 31,
        cursada: ['Martes', 'Miercoles', 'Jueves'],
        alumnos: [
            {
                primerNombre: 'Jose',
                apellido: 'Gimenez'
            },
            {
                primerNombre: 'Martin',
                apellido: 'Perez'
            },
            {
                primerNombre: 'Gustavo',
                apellido: 'Alfaro'
            }
        ]
    }, 
    {
        nombre: 'Prog I',
        descripcion: 'Maso',
        alumnos: 32,
        cursada: ['Martes', 'Miercoles', 'Sabado'],
        alumnos: [
            {
                primerNombre: 'Juan Carlos',
                apellido: 'Martinez'
            },
            {
                primerNombre: 'Gonzalo',
                apellido: 'Ruiz'
            },
            {
                primerNombre: 'Pehuen',
                apellido: 'Romani'
            }
        ]
    }, 
    {
        nombre: 'GPD I',
        descripcion: 'Re piola',
        alumnos: 42,
        cursada: ['Jueves', 'Viernes', 'Sabado'],
        alumnos: [
            {
                primerNombre: 'Lorenzo',
                apellido: 'Gonzalez'
            },
            {
                primerNombre: 'Coco',
                apellido: 'Basile'
            },
            {
                primerNombre: 'Peti',
                apellido: 'Alonso'
            }
        ]
    }, 
    {
        nombre: 'GPD II',
        descripcion: 'Solido',
        alumnos: 35,
        cursada: ['Domingo', 'Martes', 'Jueves'],
        alumnos: [
            {
                primerNombre: 'Alfio',
                apellido: 'Basile'
            },
            {
                primerNombre: 'Diego',
                apellido: 'Martinez'
            },
            {
                primerNombre: 'Leo',
                apellido: 'Messi'
            }
        ]
    }, 
    {
        nombre: 'GPD III',
        descripcion: 'Una masa',
        alumnos: 39,
        cursada: ['Martes', 'Viernes', 'Domingo'],
        alumnos: [
            {
                primerNombre: 'Gabriel',
                apellido: 'Perez'
            },
            {
                primerNombre: 'Cynthia',
                apellido: 'Gutierrez'
            },
            {
                primerNombre: 'Lorena',
                apellido: 'Alfonso'
            }
        ]
    },
]

//console.log(cursos[2]);
//console.log(cursos[4]);

cursos[2].cursada.push('Miercoles')
//console.log(cursos[2]);

console.log(cursos[2].alumnos[0])





 

