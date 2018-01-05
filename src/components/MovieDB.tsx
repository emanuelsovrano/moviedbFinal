import * as React from "react";
import { Button, IconButton } from 'office-ui-fabric-react/lib/Button';
import {autobind} from 'office-ui-fabric-react/lib/Utilities';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { MovieCard } from "./movieCard/MovieCard";
import './MovieDB.less';
import { IIconStyles } from "office-ui-fabric-react/lib/Icon";

export interface IMovieDBProps {
    compiler: string;
    framework: string;
}

export interface IMovieDBState {
    showNavigation: boolean;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MovieDB extends React.Component<IMovieDBProps, IMovieDBState> {

    constructor(props: IMovieDBProps, context: any) {
        super(props, context);
        this.state = {
            showNavigation: false
        };
    }

    @autobind
    private onSearch(value: string): void {
        //TODO search movie
    }

    @autobind
    private goToFavoritesPage(): void {

    }

    private renderNavigation(): JSX.Element {
        return <Nav
        groups={
          [
            {
              links:
              [
                {
                  name: 'Home',
                  url: 'http://example.com',
                  links: [{
                    name: 'Activity',
                    url: 'http://msn.com',
                    key: 'key1'
                  },
                  {
                    name: 'News',
                    url: 'http://msn.com',
                    key: 'key2'
                  }],
                  isExpanded: true
                },
                { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                {
                  name: 'Favoriten',
                  url: 'http://cnn.com',
                  onClick: this.goToFavoritesPage,
                  icon: 'Edit',
                  key: 'key8'
                }
              ]
            }
          ]
        }
        expandedStateText={ 'expanded' }
        collapsedStateText={ 'collapsed' }
        selectedKey={ 'key3' }
      />;
    }

    private renderPage(): JSX.Element[] {
        const cards: JSX.Element[] = [];
        for(let i = 0; i < 100; i++) {
            cards.push(<MovieCard key={'MovieCard-' + i} />);
        }
        return cards;
    }

    @autobind
    private onOpenCloseNavigation(): void {
        this.setState({
            showNavigation: !this.state.showNavigation
        });
    }

    @autobind
     private closeNavigation(): void {
         this.setState({
             showNavigation: false
         });
     }

    public render(): JSX.Element {
        return <div className="MovieDB">
            <Panel
                isOpen={this.state.showNavigation}
                type={ PanelType.smallFixedNear }
                onDismiss={this.closeNavigation}
            >
                {this.renderNavigation()}
            </Panel>

            <header>
                    <IconButton
                        iconProps={ { iconName: 'GlobalNavButton', styles: { root: 'MovieDB-Menu-Icon' }}}
                        className="MovieDB-Menu"
                        onClick={this.onOpenCloseNavigation}
                    />
                <h1 className="MovieDB-Title">Movie DB</h1>
                <SearchBox
                    className="MovieDB-SearchBox"
                    onSearch={this.onSearch}
                />
            </header>
            <main>
                {this.renderPage()}
            </main>
        </div>;
    }
}