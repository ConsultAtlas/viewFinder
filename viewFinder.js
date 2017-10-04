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
  // Listen for when the form submits
  $( ".searchBar" ).submit(function( event ) {

    event.preventDefault();
    // When it submits, get the value of the search box
    var searchTerm = $('.form-control').val();
    console.log(searchTerm);
    alert( searchTerm );
    // use $.get() to hit up the OMDB API
    $.get( "http://www.omdbapi.com/?apikey=3430a78", { s: searchTerm }, function(data) {
      for (var i = 0; i < data.Search.length; i++) {
        //make h2 with title
        var card = '<div class="card" style="width: 20rem;"></div>';
        var cardImage = '<img class="card-img-top" src="" alt="Card image cap">';
        var cardBody = '<div class="card-body"></div>';
        var cardTitle = '<h4 class="card-title"><span class="badge badge-secondary float-right"></span></h4>'
        var cardAddButton = '<a href="#" class="btn btn-primary">Add!</a>'

        $('')
      }
    } );
    // loop over the results

});



  // for each results, generate card HTML, incjecting movie info
  // add the card to the screen
})
