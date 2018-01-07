import * as React from "react";
import { List } from 'office-ui-fabric-react/lib/List';
import './HistoryList.less';

export interface IHistoryListProps {
    listContent: string[];
}

export class HistoryList extends React.Component<IHistoryListProps, {}> {

    public render(): JSX.Element {
        return <List className="HistoryList" items={this.props.listContent} >            
        </List>;
    }
}