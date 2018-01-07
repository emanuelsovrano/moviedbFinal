import * as React from "react";
import { MovieCard } from "../components/movieCard/MovieCard";
import './FavoritesPage.less';
import { RevertRemovalButton } from "../components/revertRemovalButton/RevertRemovalButton";

export class FavoritesPage extends React.Component<{}, {}> {

    private getFavorits(): JSX.Element[]{
        //TODO

        //Dummy Result
        const cards: JSX.Element[] = [];
        for(let i = 0; i < 10; i++) {
            cards.push(<MovieCard key={'MovieCard-' + i} />);
        }
        return cards;
    }

    public render(): JSX.Element {
        return <div className="FavoritesPage">
            <div className="FavoritesPage-TopContainer" >
                {this.getFavorits()}</div>
            <div className="FavoritesPage-BottomContainer" >
                <RevertRemovalButton isEnabled={true} />
            </div>
        </div>;
    }
}