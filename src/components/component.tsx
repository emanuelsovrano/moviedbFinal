import * as React from "react";

export interface IComponentProps {
    Prop:  PropType;
}

export interface IComponentStats {
    
}

export class Component extends React.Component<IComponentProps, {}> {

    public render(): JSX.Element {
        return <div className="Component">
            
        </div>;
    }
}