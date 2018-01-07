import * as React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { Label } from "office-ui-fabric-react/lib/Label";
import './RevertRemovalButton.less';

export interface IRevertRemovalButtonProps {
    isEnabled:  boolean;
}

export class RevertRemovalButton extends React.Component<IRevertRemovalButtonProps, {}> {

    public render(): JSX.Element {
        return <button className="RevertRemovalButton">
            <Icon className="RevertRemovalButton-Icon" iconName="RevToggleKey" />
            <Label className="RevertRemovalButton-Label" />
        </button>;
    }
}