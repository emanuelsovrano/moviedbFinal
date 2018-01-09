import * as React from "react";
import * as _ from "underscore";
import { MovieCard } from "../components/movieCard/MovieCard";
import { MovieList } from "../models/MovieList";
import { Movie } from "../models/Movie";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { MoviePage } from "./MoviePage";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { apiKey } from "../constants";

export interface IHomePageProps {
    ka: string;
}

export interface IHomePageState {
    data: MovieList;
    movieId: number;
}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {

    constructor(props: IHomePageProps, context: any) {
        super(props, context);
        this.state = {
            data: null,
            movieId: null
        };
    }

    public componentDidMount(): void {
        let base = "https://api.themoviedb.org/3/genre/12/movies?api_key=";
        let url = base + apiKey + "&language=en-US&include_adult=false&sort_by=created_at.asc";
        $.get(url, (data: any): void => {
            this.setState({
                data: new MovieList(data)
            });
        });
    }

    @autobind
    private onOpenMovie(id: number): void {
        this.setState({
            movieId: id
        });
    }

    private renderCards(): JSX.Element[] {
        const cards: JSX.Element[] = [];
        if (this.state.data != null) {
            this.state.data.movies.forEach((movie: Movie, i: number) => {
                cards.push(<MovieCard
                    id={movie.id}
                    key={'MovieCard-' + i}
                    description={movie.title}
                    imgUrl={movie.cover}
                    onOpenMovie={this.onOpenMovie}
                />);
            })
        }
        return cards;
    }

    @autobind
    private closeMoviePanel(): void {
        this.setState({
            movieId: null
        });
    }
    
    private getMovieFromSelectedId(): Movie {
        return _.find(this.state.data.movies, (movie: Movie): boolean => {
            return movie.id === this.state.movieId;
        });
    }

    private renderMoviePanel(): JSX.Element {
        if (this.state.movieId == null) {
            return null;
        }
        const movie: Movie = this.getMovieFromSelectedId();
        return <Panel
            isOpen={ this.state.movieId != null }
            onDismiss={ this.closeMoviePanel }
            type={ PanelType.largeFixed }
            headerText={movie.title}
        >
            <MoviePage
                movie={movie}
            />
        </Panel>;
    }

    public render(): JSX.Element {
        return <div className="HomePage">
            {this.renderCards()}
            {this.renderMoviePanel()}
        </div>;
    }
}