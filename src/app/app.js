var apiKey = '8dce3f182f08900d69796df3ce6f31f0';

// jQuery verwendet um einen event zu registrieren (sobald die seite / document geladen / ready ist)
$(document).ready(function () {
    var query = 'Pirates';
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;

    // jQuery get funktion um einen Ajax call (HTTP GET Methode) abzusetzen
    $.get(url, function (data) {
        var movies = data.results; // die Response (data) ist bereits ein Json Objekt.
        _.each(movies, function (movie, index) {// Lodash each Funktion verwenden um über die File zu iterieren.
            $('<li>') // JQuery verwendet um ein neues HTML Element zu erstellen und ins DOM einzufügen.
                .appendTo('#result')
                .addClass('list-group-item')
                .text(movie.title)
                .append(
                    $('<button>')
                        .text('>')
                        .on('click', showDetails)
                );
        });
    });
});

function showDetails() {
    console.log('movie clicked');
}