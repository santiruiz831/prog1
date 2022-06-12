// Array y for

let amigos = ['Milton', 'Santiago', 'Martin', 'Julian']

for (let i = 0; i < amigos.length; i = i + 1) {
    const element = amigos[i]; // Este es cada uno de los elementos del array.
    // console.log(element)
}

let amigosGordos = require('./modulos/amigosGordos')

for (let i = 0; i < amigosGordos.length; i++) {
    const element = amigosGordos[i];
   
    if (element.peso > 20 && element.altura > 130)  {
        console.log('Mi amigo '+ element.nombre + ' esta re gordo pero es alto');
    } else{
        console.log('Mi amigo '+ element.nombre+' es flaco');
    }

}


