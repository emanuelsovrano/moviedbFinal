import * as React from "react";
import * as $ from 'jquery';
import { Button, IconButton } from 'office-ui-fabric-react/lib/Button';
import {autobind} from 'office-ui-fabric-react/lib/Utilities';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Nav, INavProps, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { MovieCard } from "./movieCard/MovieCard";
import './MovieDB.less';
import { IIconStyles } from "office-ui-fabric-react/lib/Icon";
import { PageConfiguration } from "../pages/PageConfiguration";

export interface IMovieDBProps {
    pageName?: string;
}

export interface IMovieDBState {
    showNavigation: boolean;
    page: PageConfiguration;
    search: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MovieDB extends React.Component<IMovieDBProps, IMovieDBState> {

    constructor(props: IMovieDBProps, context: any) {
        super(props, context);
        this.state = {
            showNavigation: false,
            page: PageConfiguration.HOME,
            search: ''
        };
    }

    @autobind
    private onSearchReset(): void {
        this.onSearch();
    }

    @autobind
    private onSearch(value: string = ''): void {
        if (value.length > 0) {
            this.setState({
                page: PageConfiguration.SEARCH_RESULTS,
                search: value
            });
        } else {
            this.setState({
                page: PageConfiguration.HOME,
                search: value
            });
        }
    }

    private goToPage(page: PageConfiguration): void {
        this.setState({
            page: page,
            showNavigation: false,
            search: ''
        });
    }

    private getNavigationConfiguration(): INavLinkGroup[] {
        return  [{
            links: [
                PageConfiguration.HOME.config(this.goToPage.bind(this, PageConfiguration.HOME)),
                PageConfiguration.FAVORITES.config(this.goToPage.bind(this, PageConfiguration.FAVORITES)),
                PageConfiguration.SEARCH_HISTORY.config(this.goToPage.bind(this, PageConfiguration.SEARCH_HISTORY)),
    
            ]
          }];
    }
    
    private renderNavigation(): JSX.Element {
        return <Nav
            groups={this.getNavigationConfiguration()}
            expandedStateText={ 'expanded' }
            collapsedStateText={ 'collapsed' }
            selectedKey={ 'key3' }
        />;
    }

    private getPageProps(): any {
        return {
            search: this.state.search,
        };
        //movie: this.state.movie
    }

    private renderPage(): JSX.Element {
        return React.createElement(this.state.page.getPage(), this.getPageProps());
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
                <h1 className="MovieDB-Title">{this.state.page.getName()}</h1>
                <SearchBox
                    className="MovieDB-SearchBox"
                    onSearch={this.onSearch}
                    onReset={this.onSearchReset}
                />
            </header>
            <main>
                {this.renderPage()}
            </main>
        </div>;
    }
}