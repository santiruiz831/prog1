let science = require('../data/science');

let controller = {
    main: function(req, res){
        res.send (science.lista)
    },
    detalle: function(req, res){
        if (req.params.id < science.lista.length){
            res.send(`hola mi nombre es ${science.lista[req.params.id].nombre} y mi profesion es ${science.lista[req.params.id].profesion}`) 
        } else {
            res.send ('No encontramos al científico indicado. Por favor, elija otro id.')
        }
    },
    bio: function(req, res) {
        if (!science.lista[req.params.id]){
            res.send ('No encontramos al científico indicado para mostrar su biografía')
        } else {
            if (req.params.ok == 'ok') {
                res.send(`Mi nombre es ${science.lista[req.params.id].nombre} y mi reseña es ${science.lista[req.params.id].resenia}`) 
            } else {
                res.send ('Lamento que no desees saber más de mi.')
            }
        }
    }
}

module.exports = controller;