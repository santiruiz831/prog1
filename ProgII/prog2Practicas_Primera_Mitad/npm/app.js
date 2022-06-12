const popularMovieQuotes= require('popular-movie-quotes')
const autos = require('./autos')
for (let index = 0; index < autos.lista.length; index++) {
    const element = autos.lista[index];
    console.log(element.describirse())
}
//console.log(autos.porColor("AZUL"))
console.log(autos.porMarca("Toyota")) 
//console.log(autos.porAnio(2015))

for (let i = 0; i < 3; i++) {
    console.log(popularMovieQuotes.getRandomQuote())
}
