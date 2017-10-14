var apiKey = '8dce3f182f08900d69796df3ce6f31f0';

$( document ).ready(function() {
    var query = 'Pirates';
    var url = 'https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&query='+query;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {


        if (this.readyState == 4 && this.status == 200) {
            var movies = JSON.parse(xhttp.responseText).results;
            _.each(movies, function (movie, index) {
                $('<div>')
                    .appendTo('#result')
                    .text(movie.title)
                    .addClass('well')
                    .append(
                        $('<button>')
                            .text('>')
                            .on('click', showDetails)
                    )
                    .append('<br>');
            });
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
});

function showDetails() {
    console.log('movie clicked');
}