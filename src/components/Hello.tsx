import * as React from "react";
import { Button } from 'office-ui-fabric-react/lib/Button';
import {autobind} from 'office-ui-fabric-react/lib/Utilities';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export interface IHelloState {
    showText: boolean;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor(props: IHelloProps, context: any) {
        super(props, context);
        this.state = {
            showText: false
        };
    }

    private renderText(): JSX.Element {
        if (!this.state.showText) {
            return null;
        }

        return <div>
            I should show you some text :D
        </div>; 
    }

    @autobind
    private onShowTextButtonClick(): void {
        this.setState({
            showText: !this.state.showText
        });
    }

    public render(): JSX.Element {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <div>
                <Button checked={this.state.showText} onClick={this.onShowTextButtonClick}>{this.state.showText ? 'Hide Text' : 'Show Text'}</Button>
            </div>
            {this.renderText()}
        </div>;
    }
}