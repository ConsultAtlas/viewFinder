
// ES5
function Movie(movieData) {
  // This is the constructor
  this.movieData = movieData;

}

Movie.prototype.like = function(){

}
Movie.prototype.dislike = function(){

}
Movie.prototype.generateHTML = function(){

}
Movie.prototype.addToWatchList = function(){
  // Add this movie instance to local stoarge

  var watchlist = localStorage.getItem('myWatchList');
  watchlist = JSON.parse(watchlist);

  //check to see if we have a saved watchlist in localstorage. If not, we set an empty watchlist as a placeholder.
  if (!watchlist) {
    watchlist = {};
  }

  // let's add this movie to the watchlist
  watchlist[this.movieData.imdbID] = this.movieData; //imdbID is unique is what we can assume

  var stringifiedWatchList = JSON.stringify(watchlist);
  localStorage.setItem('myWatchList', watchlist);
}

Movie.prototype.removeFromWatchList = function(){

}


/*
// ES6
class Movie() {

    constructor(movieData) {
      this.movieData = movieData;
    }

    like() {

    }
    unLike() {

    }
    generateHTML() {

    }

    addToWatchList() {

    }
    removeFromWatchList() {

    }
}}
*/
