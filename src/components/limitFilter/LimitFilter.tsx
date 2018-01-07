import * as React from "react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import './LimitFilter.less';

export class LimitFilter extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <TextField className="LimitFilter" label="Type in Limit of last Search Strings:" >
        </TextField>;
    }
}