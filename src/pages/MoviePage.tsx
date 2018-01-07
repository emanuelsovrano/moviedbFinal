import * as React from "react";
import { MovieCardAndDescription } from "../components/movieCoverAndDescription/MovieCoverAndDescription";
import { FavoriteButton } from "../components/favoriteButton/FavoriteButton";
import { FavoriteIconSizeEnum} from "../components/favoriteButton/FavoriteIconSizeEnum";
import { MovieInfo } from "../components/movieInfo/MovieInfo";
import './MoviePage.less';

export interface IMoviePageProps {
    Prop: string;
}

export class MoviePage extends React.Component<IMoviePageProps, {}> {

    public render(): JSX.Element {
        return <div className="MoviePage">
            <div className="MoviePage-rightContainer" >
                <MovieCardAndDescription movieId={123456} />
            </div>
            <div className="MoviePage-leftConatainer" >
                {/* <FavoriteButton iconSize={FavoriteIconSizeEnum.Small}/> */}
                <FavoriteButton iconSize={FavoriteIconSizeEnum.Large} labelContent="Add / remove from Favorits" />
                <MovieInfo genere={["Action", "Comedy"]} title="Men in Black" duration="120 min" releaseDate="1998" />
            </div>   
        </div>;
    }
}