/*

- Use the OpenMovie API Database to get movie information
and movie post images
- save movies to a to-watch list
  - dave it to local storage
- mark movies as watched
- give watched moview a thumbs up or down

- we want it to look good
  - use bootstrap
  - search box should be an <input> and a <button>, aligned inline
  - search box results should be displayed as cards
  - use bootstrap cards and columns

*/

$(function(){

  function renderMovies(movies){
    $('.card-columns').empty();

      movies.forEach(function(movie){
          // for each results, generate card HTML, incjecting movie info
          //make h2 with title
          var card = $('<div class="card" style="width: 20rem;"></div>');
          var cardImage = $('<img class="card-img-top" src="" alt="Card image cap">');
          var cardBody = $('<div class="card-body"></div>');
          var cardTitle = $('<h4 class="card-title"></h4>');
          var cardBadge = $('<span class="badge badge-secondary float-right"></span>');
          var cardAddButton = $('<a href="#" data-movie="'+ movie.imdbID +'" class="btn btn-primary addBtn">Add!</a>');

          if (movie.Poster == "N/A") {
            cardImage.attr('src', "No_Photo_Available.jpg");
          } else {
            cardImage.attr('src', movie.Poster); // inject url of movie poster into src of image
          }

          cardTitle.text(movie.Title); // inject title from api request
          cardBadge.text(movie.Year); // inject movie year from api int the badge

          cardTitle.append(cardBadge); // append badge to the title
          cardBody.append(cardTitle); // append the title to the card body
          cardBody.append(cardAddButton) // append the add button to the card body
          card.append(cardImage); // append the image to the card
          card.append(cardBody); // add the card body to the body
          // add the card to the screen
          $('.card-columns').append(card);

      });
  }

  // Listen for when the form submits
  $( ".searchBar" ).submit(function( event ) {
    event.preventDefault();
    // When it submits, get the value of the search box
    var searchTerm = $('.form-control').val();
    var url = "http://www.omdbapi.com/?apikey=3430a78&s=" + searchTerm;
    // use $.get() to hit up the OMDB API
    $.get( url, function(data) {
      renderMovies(data.Search);
    })
  });
    // loop over the results
    $('.card-columns').on('click', '.addBtn', function(e){
      var addButton = $(this);
      var movieID = addButton.data('movie');
      console.log(movieID);

      var url = "http://www.omdbapi.com/?apikey=3430a78&i=" + movieID;
      $.get(url, function(data){
        var movieInstance = new Movie(data);
        movieInstance.addToWatchList();
      })
    });

    // make the watchlist populate when the modal shows
    $('.watchlist').on('shown.bs.modal', function(){
      console.log('hello');
      // fetch watchlist from local storage
      var currentWatchlist = localStorage.getItem('watchlist')
      // JSON.parse turns currentWatchlist back into an object
      currentWatchlist = JSON.parse(currentWatchlist);

      //check to see if there is anything currently in currentWatchlist
      if (!currentWatchlist) {
        currentWatchlist = {};
      }
      //turn our object into an array so that we can use the forEach loop on it
      Object.keys(currentWatchlist).forEach(function(imdbID){
        var currentMovieData = currentWatchlist[imdbID];

        var movieInstance = new Movie(currentWatchlist);

        var movieHTML = movieInstance.generateHTML();

        $('.modal-body').append(movieHTML);
      })

    })
});













/*
  //Save to local storage prep
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
  JSON.parse(localStorage.getItem('watchlist'));

    var watchlist = [
      {
        Title: "Dark Knight",
        Poster: "img.jpg",
        likeValue: 1
      },
      {
        Title: "Happy Gilmore",
        Poster: "img2.jpg",
        likeValue: 1
      },
    ]
*/



  // add the card to the screen
