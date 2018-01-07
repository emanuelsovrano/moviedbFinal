import * as React from "react";
import { MovieCard } from "../components/movieCard/MovieCard";

export interface IHomePageProps {
    ka: string;
}

export class HomePage extends React.Component<IHomePageProps, {}> {

    private renderCards(): JSX.Element[] {
        const cards: JSX.Element[] = [];
        for(let i = 0; i < 100; i++) {
            cards.push(<MovieCard key={'MovieCard-' + i} />);
        }
        return cards;
    }
    
    public render(): JSX.Element {
        return <div className="HomePage">
            {this.renderCards()}
        </div>;
    }
}