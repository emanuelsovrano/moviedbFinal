import * as React from "react";

export interface ISearchHistoryPageProps {
    Prop: string;
}

export class SearchHistoryPage extends React.Component<ISearchHistoryPageProps, {}> {

    public render(): JSX.Element {
        return <div className="SearchHistoryPage">
            This is the Search history page :D yey
        </div>;
    }
}