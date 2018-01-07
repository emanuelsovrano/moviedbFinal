import * as React from "react";
import { MovieCard } from "../components/movieCard/MovieCard";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Label } from "office-ui-fabric-react/lib/Label";

export interface ISearchResultPageProps {
    search: string;
}

export class SearchResultPage extends React.Component<ISearchResultPageProps, {}> {

    private getSearchResult():JSX.Element[] {
        //TODO: Search
        
        //Dummy Result
        const cards: JSX.Element[] = [];
        for(let i = 0; i < 50; i++) {
            cards.push(<MovieCard key={'MovieCard-' + i} />);
        }
        return cards;
    }

    public render(): JSX.Element {
        return <div className="SearchResultPage">
            <h2 className="SearchResultPage-SearchText" >Your search results for: {this.props.search}:</h2>
            <div className="SearchResultPage-SearchResult" >
                {this.getSearchResult()}
            </div>
        </div>;
    }
}