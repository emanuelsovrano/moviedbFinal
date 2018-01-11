import * as React from "react";
import { MovieCardAndDescription } from "../components/movieCoverAndDescription/MovieCoverAndDescription";
import { FavoriteButton } from "../components/favoriteButton/FavoriteButton";
import { FavoriteIconSizeEnum} from "../components/favoriteButton/FavoriteIconSizeEnum";
import { MovieInfo } from "../components/movieInfo/MovieInfo";
import './MoviePage.less';
import { Movie } from "../models/Movie";
import { apiKey } from "../constants";

export interface IMoviePageProps {
    movie: Movie;
}

export class MoviePage extends React.Component<IMoviePageProps, {}> {
    private listOfGenereIds: number[];

    constructor(props: IMoviePageProps, context: any) {
        super(props, context);
    }

    private getSepartedGenereString(movie: Movie):string{
        let baseUrl = "";
        return
    }

    public render(): JSX.Element {
        return <div className="MoviePage">
            <div className="MoviePage-rightContainer" >
                <MovieCardAndDescription
                    movieId={this.props.movie.id}
                    imgUrl={this.props.movie.cover}
                    description={this.props.movie.description}
                />
            </div>
            <div className="MoviePage-leftConatainer" >
                {/* <FavoriteButton iconSize={FavoriteIconSizeEnum.Small}/> */}
                <FavoriteButton iconSize={FavoriteIconSizeEnum.Large} labelContent="Add / remove from Favorits" />
                <MovieInfo
                    genere={["Action", "Comedy"]}
                    title={this.props.movie.title}
                    releaseDate={this.props.movie.releaseDate}
                />
            </div>   
        </div>;
    }
}