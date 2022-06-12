const autos = require("../data/autos");

let controller = {
index: function(req, res){
    res.send(autos.lista)
}, 
marca: function(req, res){
    res.send(autos.lista);
},
color: function(req, res){
    res.send(autos.lista);
},
modelo: function(req, res){
    res.send(autos.lista);
},
anio: function(req, res){
    res.send(autos.lista);
},







}

module.exports= controller;