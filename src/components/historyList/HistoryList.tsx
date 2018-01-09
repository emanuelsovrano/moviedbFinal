import * as React from "react";
import { List } from 'office-ui-fabric-react/lib/List';
import './HistoryList.less';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';

export interface IHistoryListProps {
    listContent: string[];
}

export class HistoryList extends React.Component<IHistoryListProps, {}> {

    public render(): JSX.Element {
        return (
            <FocusZone direction={ FocusZoneDirection.vertical }>
                <List className="HistoryList" items={this.props.listContent} onRenderCell={ this._onRenderCell } >            
                </List>
            </FocusZone>
        );
        
        
    }

    private _onRenderCell(item: any, index: number | undefined): JSX.Element {
        return (
            <div className='ms-ListBasicExample-itemCell' data-is-focusable={ true }>
                <div className='ms-ListBasicExample-itemContent'>
                    <div className='ms-ListBasicExample-itemName'>{ item.name }</div>
                </div>
            </div>     
        );
    }
}