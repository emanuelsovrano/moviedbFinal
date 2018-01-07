import * as React from "react";
import { MovieCardAndDescription } from "../components/movieCoverAndDescription/MovieCoverAndDescription";
import { FavoriteButton } from "../components/favoriteButton/FavoriteButton";
import { FavoriteIconSizeEnum} from "../components/favoriteButton/FavoriteIconSizeEnum";
import { MovieInfo } from "../components/movieInfo/MovieInfo";

export interface IMoviePageProps {
    Prop: string;
}

export class MoviePage extends React.Component<IMoviePageProps, {}> {

    public render(): JSX.Element {
        return <div className="MoviePage">
            <MovieCardAndDescription movieId={123456} />
            <FavoriteButton iconSize={FavoriteIconSizeEnum.Small}/>
            {/* <FavoriteButton iconSize={FavoriteIconSizeEnum.Large} labelContent="Add / remove from Favorits" /> */}
            <MovieInfo/>
        </div>;
    }
}