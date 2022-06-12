let autos = require('../../../npm/autos');
let result = [];
let controller = {
    index:function(req, res){
        res.send (autos.lista);
    },
    marca: function(req, res){
      let autoPedido = autos.porMarca(req.params.marca)
      res.send(autoPedido);
    },
    color: function(req, res){
        let autoPedido = autos.porColor(req.params.color)
        res.send(autoPedido);
    },
    year: function(req, res){
        let autoPedido = autos.porModelo(req.params.model)
        if(req.params.year) {
            let autosFinales = []
            for (let i = 0; i < autoPedido.length; i++) {
                const element = autoPedido[i];
                if (element.anio > req.params.year){
                    autosFinales.push(element)
                }
                
            }
            res.send(autosFinales)
        }
        res.send(autoPedido);
    }
   
}
module.exports = controller;
