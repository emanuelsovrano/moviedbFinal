import * as React from "react";

export interface IFavoritesPageProps {
    ka: string;
}

export class FavoritesPage extends React.Component<IFavoritesPageProps, {}> {

    public render(): JSX.Element {
        return <div className="FavoritesPage">
            This is the Favorites Page :D
        </div>;
    }
}