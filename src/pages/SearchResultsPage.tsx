import * as React from "react";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

export interface ISearchResultPageProps {
    search: string;
}

export class SearchResultPage extends React.Component<ISearchResultPageProps, {}> {

    public render(): JSX.Element {
        return <div className="SearchResultPage">
            <h2>Your search results for: {this.props.search} are coming:</h2>
            <Spinner size={ SpinnerSize.large } label='Seriously, still loading...' />
        </div>;
    }
}