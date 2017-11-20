import model from '../movie-model';

export function showDetails(movieId) {
    const movie = model.getMovie(movieId);
    console.log(movie.title);
    console.log('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)');
}