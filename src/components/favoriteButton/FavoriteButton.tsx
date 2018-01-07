import * as React from "react";
import {FavoriteIconSizeEnum} from "./FavoriteIconSizeEnum";
import {autobind} from 'office-ui-fabric-react/lib/Utilities';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import './FavoriteButton.less';
import { Label } from "office-ui-fabric-react/lib/Label";

export interface IFavoriteButtonProps {
    iconSize: FavoriteIconSizeEnum;
    labelContent?: string;
}

export interface IFavoriteButtonState {
    isEnabled: boolean;
}

export class FavoriteButton extends React.Component<IFavoriteButtonProps, IFavoriteButtonState> {
    constructor(props: IFavoriteButtonProps, context: any) {
        super(props, context);
        this.state = {
            isEnabled: false
        };
    }

    @autobind
    private onButtonClicked() {
        this.setState({
            isEnabled: !this.state.isEnabled
        });
        //TODO: Add / remove to Favorit List
    }

    private getIconName():string {
        if(this.state.isEnabled){
            return "AddFavoriteFill"
        }
        return "AddFavorite";
    }

    private getIconLayout():JSX.Element {
        let icon = this.getIconName();
        if(this.props.iconSize == FavoriteIconSizeEnum.Large){
            return <Icon className="FavoriteButton-IconLarge" iconName={icon}></Icon>
        }
        return <Icon className="FavoriteButton-IconSmall" iconName={icon}></Icon>
    }

    private getLabelLayout():JSX.Element {
        if(this.props.labelContent != null){
            return <Label className="FavoriteButton-Label" >{this.props.labelContent}</Label>
        }
        return null;
    }

    public render(): JSX.Element {        
        return <button className="FavoriteButton" onClick={this.onButtonClicked} >
                {this.getIconLayout()}
                {this.getLabelLayout()}
            </button>
    }
}