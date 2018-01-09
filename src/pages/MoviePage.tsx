import * as React from "react";
import { MovieCardAndDescription } from "../components/movieCoverAndDescription/MovieCoverAndDescription";
import { FavoriteButton } from "../components/favoriteButton/FavoriteButton";
import { FavoriteIconSizeEnum} from "../components/favoriteButton/FavoriteIconSizeEnum";
import { MovieInfo } from "../components/movieInfo/MovieInfo";
import './MoviePage.less';
import { Movie } from "../models/Movie";

export interface IMoviePageProps {
    movie: Movie;
}

export class MoviePage extends React.Component<IMoviePageProps, {}> {

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
                    duration="120 min"
                    releaseDate={this.props.movie.releaseDate}
                />
            </div>   
        </div>;
    }
}