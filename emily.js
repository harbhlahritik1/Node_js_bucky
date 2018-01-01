var movies = require('./movies');

var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's favourite movie is: " + emilysMovies.favMovie);


//movies.favMovie = "The Notebook";
//console.log("Emily's favourite movie is: " + movies.favMovie);
