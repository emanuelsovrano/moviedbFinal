import * as React from "react";
import { MovieCard } from "../components/movieCard/MovieCard";
import './FavoritesPage.less';
//FavoritesPage.less

export class FavoritesPage extends React.Component<{}, {}> {

    private getFavorits(): JSX.Element[]{
        //TODO

        //Dummy Result
        const cards: JSX.Element[] = [];
        for(let i = 0; i < 50; i++) {
            cards.push(<MovieCard key={'MovieCard-' + i} />);
        }
        return cards;
    }

    public render(): JSX.Element {
        return <div className="FavoritesPage">
            <div className="TopContainer" >
                {this.getFavorits()}</div>
            <div className="BottomContainer" >
            </div>
        </div>;
    }
}