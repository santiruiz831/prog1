const autos = require('../../npm/autos'); 

const controller = {
    index: function(req, res){
        res.send(autos.lista)
    },
    marca: function(req, res){
        res.send(autos.porMarca(req.params.marca))       
    },
    color: function(req, res){
       res.send(autos.porColor(req.params.color))
    },
    anio: function(req, res) {
        res.send(autos.anio(req.params.anio))
        }
}  
    
    

module.exports = controller;