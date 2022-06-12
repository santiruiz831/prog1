let models = require('../database/models');
var movies = movies;
var actors = actors;
var generos = generos;

let peliculasController = {
    peliculas: function (req, res) {
        models.Movie.findAll()
        .then(movies => {
            models.Actor.findAll()})
            .then(actors => {
                models.Genre.findAll()})
                .then(genres => {
                    res.render('generos', {title: 'pelis', peliculas: movies, title: 'actores', acotres: actors, title:'generos', generos: genres})
        })
       .catch(function(error){
            console.log(error);
       })
        
    }

}

module.exports = peliculasController;