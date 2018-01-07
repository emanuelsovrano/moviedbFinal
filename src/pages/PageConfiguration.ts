import { HomePage } from "./HomePage";
import { FavoritesPage } from "./FavoritesPage";
import { MoviePage } from "./MoviePage";
import { SearchHistoryPage } from "./SearchHistoryPage";
import { SearchResultPage } from "./SearchResultsPage";
import { INavLink } from "office-ui-fabric-react/lib/Nav";

export class PageConfiguration {

    public static HOME: PageConfiguration = new PageConfiguration('Home', HomePage);
    public static FAVORITES: PageConfiguration = new PageConfiguration('Favorites', FavoritesPage);
    public static MOVIE: PageConfiguration = new PageConfiguration('Movie', MoviePage);
    public static SEARCH_HISTORY: PageConfiguration = new PageConfiguration('Search History', SearchHistoryPage);
    public static SEARCH_RESULTS: PageConfiguration = new PageConfiguration('Search Results', SearchResultPage);

    private readonly name: string;
    private readonly page: React.ComponentClass;
    private readonly key: string;

    constructor(pageName: string, page: React.ComponentClass) {
        this.name = pageName;
        this.page = page;
        this.key = pageName;
    }

    public config(onClick: () => void): INavLink {
        return {name: this.name, key: this.key, url: '', onClick: onClick};
    }

    public getPage(): React.ComponentClass {
        return this.page;
    }

    public getName(): string {
        return this.name;
    }

}