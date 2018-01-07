import * as React from "react";
import {Image, IImageProps, ImageFit} from 'office-ui-fabric-react/lib/Image';
import './MovieCoverAndDescription.less';

export interface IMovieCardAndDescriptionProps {
    movieId: number;
    imgUrl?: string;
    description?: string;
}

export class MovieCardAndDescription extends React.Component<IMovieCardAndDescriptionProps, {}> {

    public static defaultProps: IMovieCardAndDescriptionProps = {
        imgUrl: 'http://placehold.it/500x500',
        description: 'No description avaible',
        movieId: 123456
    };

    public render(): JSX.Element {
        let imageProps: IImageProps = {
            src: this.props.imgUrl,
            imageFit: ImageFit.cover
          };

        return <div className="MovieCardAndDescription">
            <Image className="MovieCardAndDescription-Cover" { ...imageProps as any } width={ 500 } height={ 500 }/>
            <p className="MovieCardAndDescription-Description">{this.props.description}</p>
        </div>;
    }
}