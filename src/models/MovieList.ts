import { Movie } from "./Movie";


export class MovieList {
    public movies: Movie[] = [];

    constructor(data: any) {
        if (data.results != null) {
            data.results.forEach((movie: any) => {
                this.movies.push(new Movie(movie));
            });
        }
    }
}