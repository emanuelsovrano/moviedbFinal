import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import './MovieInfo.less';

export interface IMovieInfoProps {
    genere: string[];
    title: string;
    releaseDate?: string;
}

//Info: Generes (Array 1...*), Title (1), Duration (0...1), Release Date (0...1)

export class MovieInfo extends React.Component<IMovieInfoProps, {}> {
    public static defaultProps: IMovieInfoProps = {
        genere: ["No genere defined!"],
        title: "No titel defined!",
        releaseDate: "No release date avaible"
    };

    public render(): JSX.Element {
        return <div className="MovieInfo">
            <Label className="MovieInfo-Genere" >{this.props.genere}</Label>
            <Label className="MovieInfo-Title" >{this.props.title}</Label>
            <Label className="MovieInfo-ReleaseDate" >{this.props.releaseDate}</Label>
        </div>;
    }
}