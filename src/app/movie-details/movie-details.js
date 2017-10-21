import {apiKey} from "../constants";

export function showDetails(movieId) {
    $.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=' + apiKey, function (data) {
        console.log(data.title);
        console.log('Rating: ' + data.vote_average + ' / 10 (' + data.vote_count + ' votes)');
    });
}