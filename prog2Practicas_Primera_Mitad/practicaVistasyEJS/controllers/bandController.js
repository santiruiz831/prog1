let bands = require('../data/bandas');
let controller = {

listadoBandas: function(req,res){
    res.render('listadoBanda', {bands: bands.lista, title: 'Pagina principal' })
},
id: function(req,res){
    let result;
    if(bands.lista[req.params.id] != null){
        result = bands.lista[req.params.id -1];
        res.render('detalleBanda', {band: result, title: 'Pagina de ID'});
    }
    else{
        res.render('detalleBanda', {band: 'empty', title:'Pagina de ID'})
    }
},
genre: function(req,res){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (bands.lista[i].genero == req.params.genre) {
           result.push(bands.lista[i]);
        }
    }
    res.render('porGenero', {band: result, title: "Pagina de genero"});
}



}

module.exports = controller;