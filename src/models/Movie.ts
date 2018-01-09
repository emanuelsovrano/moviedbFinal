
export class Movie {
    private static baseUrl: string = 'https://image.tmdb.org/t/p/w500';
    public id: number;
    public title: string;
    public description: string;
    public cover: string;
    public releaseDate: string;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.overview;
        this.cover = Movie.baseUrl + data.backdrop_path;
        this.releaseDate = data.release_date;
    }
}