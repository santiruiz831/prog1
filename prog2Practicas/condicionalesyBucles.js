let idioma = "de";

if (idioma == 'es') {
    console.log('Hola Mundo ¡volvió JavaScript!')
} else if (idioma == 'en') {
    console.log('Hello world, Javascript is back')
} else if (idioma == 'fr') {
    console.log('Bonjour tout le mond, retour de JavaScript!')
} else if (idioma == 'de'){
    console.log('Hello World JavaScript er tilbage')
}

let diaSemana = "domingo"

if (diaSemana == 'lunes') {
    console.log('Buen lunes')
} else if (diaSemana == 'martes') {
    console.log('Buen martes')
} else if (diaSemana == 'miercoles') {
    console.log('Buen miercoles')
} else if (diaSemana == 'jueves') {
    console.log('Buen jueves')
} else if (diaSemana == 'viernes') {
    console.log('Buen viernes')
} else if (diaSemana == 'sabado') {
    console.log('Buen sabado')
} else if (diaSemana == 'domingo') {
    console.log('Buen domingo')
}

const person = {
    name:'San',
    lastName: 'Ruiz',
    age: 20,
    city: 'winterfell'
}

if (person.age < 18 && person.city == '') {
    console.log(`Hola ${person.name} ${person.lastName} criatura viajera`) 
} else if (person.age > 18 && person.city == '') {
    console.log(`Hola mayor ${person.name} ${person.lastName} eminencia viajera`)
} else if (person.age < 18 && person.city != '') {
    console.log(`Hola mini ${person.name} ${person.lastName} de ${person.city}`)
} else if (person.age > 18 && person.city != '') {
    console.log(`Hola mayor ${person.name} ${person.lastName} de ${person.city}`)
}

if (person.name.length < 4) {
    console.log('Ay pero que nombre cortito')
} 

if (person.city.toLowerCase == 'Winterfell'.toLowerCase) {
    console.log('Winter is coming')
}

let base = 3;
let results = [];

for (let i = 1; i < 11; i++) {
    console.log(i * base);
}

let destinos = ['Bariloche', 'Madrid', 'Cancun', 'Salta', 'Mendoza']
for (let i = 0; i < destinos.length; i++) {
    console.log(`Mi destino ${i+1} es ${destinos[i]}`)
    }

let notas = [10,20,30,40,50,60,70,80,90,100];
let nota = 65
for (let i = 0; i< notas.length; i++) {
  const element = notas[i];
    } if (nota > 90) {
        console.log('A')
    } else if (nota > 80) {
        console.log('B')
    } else if (nota > 70) {
        console.log('C')
    } else if (nota >= 65) {
        console.log('D')
    } else if (nota < 65) {
        console.log('F')
    }

    let ganancias = [
        {
            mes: 'Enero',
            saldo: 12000
        },
        {
            mes: 'Febrero',
            saldo: 13000
        },
        {
            mes: 'Marzo',
            saldo: 14000
        },
        {
            mes: 'Abril',
            saldo: 15000
        },
        {
            mes: 'Mayo',
            saldo: 16000
        },
        {
            mes: 'Junio',
            saldo: 17000
        },
        {
            mes: 'Julio',
            saldo: 18000
        },
        {
            mes: 'Agosto',
            saldo: 19000
        },
        {
            mes: 'Septiembre',
            saldo: 20000
        },
        {
            mes: 'Octubre',
            saldo: -21000
        },
        {
            mes: 'Noviembre',
            saldo: -22000
        },
        {
            mes: 'Diciembre',
            saldo: -23000
        },
    ]

    let balance = 0;
    for (let i = 0; i < ganancias.length; i++) {
        console.log(`El mes ${ganancias[i].mes} tuvo un saldo de ${ganancias[i].saldo}`)
        if (ganancias[i].saldo > 0) {
            console.log(`El mes ${ganancias[i].mes} fue positivo`)
            balance += ganancias[i].saldo
            console.log(balance) 
        } else if (ganancias[i].saldo < 0) {
            console.log(`El mes ${ganancias[i].mes} fue negativo`)   
        }
    } 

    let personas = [
        {
            nombre: "Jon",
            apellido: "Snow",
            edad: 23,
            ciudad: "Winterfell"
        },
        {
            nombre: "Daenerys",
            apellido: "Targaryen",
            edad: 19
        },
        {
            nombre: "Arya",
            apellido: "Stark",
            edad: 12,
            ciudad: "Winterfell"
        },
        {
            nombre: "Tyrion",
            apellido: "Lannister",
            edad: 32,
            ciudad: "Casterly Rock"
        }
    ]
for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < 18 && personas[i].ciudad == '') {
        console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} criatura viajera`)
    }    
    else if (personas[i].edad > 18 && personas[i].ciudad == '') {
        console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} eminencia viajera`)
    }    
    else if (personas[i].edad < 18 && personas[i].ciudad != '') {
        console.log(`Hola mini ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}`)
    }    
    else if (personas[i].edad > 18 && personas[i].ciudad != '') {
        console.log(`Hola mayor ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}`)
    } 
    
    if (personas[i].nombre.length < 4) {
        console.log('Ay pero que nombre cortito')
    } 
    
    if (personas[i].ciudad == 'Winterfell') {
        console.log('Winter is coming')
    }    
}    

