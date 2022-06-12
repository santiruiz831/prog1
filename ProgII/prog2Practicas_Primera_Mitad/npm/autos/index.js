let autos = {
    lista: [
        {
            patente: 'ABC123',
            marca: 'Volkswagen',
            modelo: 'Gol',
            anio: 2015,
            color: 'Rojo',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'ABC124',
            marca: 'Audi',
            modelo: 'Q5',
            anio: 2016,
            color: 'Blanco',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'AVC123',
            marca: 'Toyota',
            modelo: 'Yaris',
            anio: 2018,
            color: 'Blanco',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'BBC123',
            marca: 'Volkswagen',
            modelo: 'Golf',
            anio: 2016,
            color: 'Negro',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'ABP123',
            marca: 'Audi',
            modelo: 'A2',
            anio: 2019,
            color: 'Gris',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'ABC923',
            marca: 'Toyota',
            modelo: 'Hilux',
            anio: 2015,
            color: 'Negro',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'ABO123',
            marca: 'Volkswagen',
            modelo: 'Gol',
            anio: 2020,
            color: 'Azul',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'ABL123',
            marca: 'Toyota',
            modelo: 'SW-4',
            anio: 2016,
            color: 'Blanco',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'AMC123',
            marca: 'Audi',
            modelo: 'A1',
            anio: 2020,
            color: 'Azul',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        },
        {
            patente: 'AGC123',
            marca: 'Volkswagen',
            modelo: 'Nivus',
            anio: 2021,
            color: 'Rojo',
            describirse: function(){
                return `Hola soy el auto marca ${this.marca}, modelo ${this.modelo} fabricado en el anio ${this.anio} y de color ${this.color}`
            }
        }
    ],

    porPatente: function(patente){
        for (let i = 0; i < autos.listalength; i++) {
            if (autos.lista[i].patente == patente) {
                return autos.lista[i];
            }
            
        }
    },

    porColor: (colorPedido) => {
        let resultados = []
        for (let i = 0; i < autos.lista.length; i++) {
            const element = autos.lista [i];
            if (element.color.toLowerCase() == colorPedido.toLowerCase()) {
                resultados.push(element)
            }
        }
        if (resultados.length == 0) {
            return "No hay autos del color " + colorPedido
        }else {
            return resultados
        }

 
    },
    porMarca: (marcaPedida) => {
        let resultados = []
        for (let i = 0; i < autos.lista.length; i++) {
            const element = autos.lista[i];
            if(element.marca.toLowerCase() == marcaPedida.toLowerCase()){
                resultados.push(element)
            }
        }
        if (resultados.length == 0) {
            return "No hay autos de la marca " + marcaPedida
       } else {
            return resultados
        }
    },
    porAnio: (anioPedido) => {
        let resultados = []
        for (let i = 0; i < autos.lista.length; i++) {
            const element = autos.lista[i];
            if (element.anio == anioPedido){
                resultados.push(element)
            }
            if(resultados.length == 0){
                return "No hay autos del anio " + anioPedido
            } else {
                return resultados
            }
        }
    },
    porModelo: (modeloPedido) => {
        let resultados = []
        for (let i = 0; i < autos.lista.length; i++) {
            const element = autos.lista[i];
            if (element.modelo.toLowerCase() == modeloPedido.toLowerCase()){
                resultados.push(element)
            }
        }
       return resultados
    }
  
}

module.exports = autos;