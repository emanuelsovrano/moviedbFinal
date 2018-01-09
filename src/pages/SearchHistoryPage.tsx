import * as React from "react";
import { HistoryList } from "../components/historyList/HistoryList";
import { DateFilter } from "../components/dateFilter/DateFilter";
import { LimitFilter } from "../components/limitFilter/LimitFilter";
import { GoToSearchButton } from "../components/goToSearchButton/GoToSearchButton";
import './SearchHistoryPage.less';

export interface ISearchHistoryPageProps {
    Prop: string;
}

export class SearchHistoryPage extends React.Component<ISearchHistoryPageProps, {}> {

    public render(): JSX.Element {
        return <div className="SearchHistoryPage">
            <div className="SearchHistoryPage-RightContainer">
                <HistoryList listContent={["search string 1","search string 2","search string 3","search string 4","search string 5","search string 6","search string 7","search string 8","search string 9"]} />
            </div>
            <div className="SearchHistoryPage-LeftContainer">
                <DateFilter  />
                <LimitFilter />
                <GoToSearchButton />
            </div>
        </div>;
    }
}