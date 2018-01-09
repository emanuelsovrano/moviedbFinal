import * as React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { Label } from "office-ui-fabric-react/lib/Label";
import './GoToSearchButton.less';

export class GoToSearchButton extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <div className="GoToSearchButton">
            <Icon className="GoToSearchButton-Icon" iconName="DrillThrough" />
            <p className="GoToSearchButton-Label">Go to search...</p>
        </div>;
    }
}