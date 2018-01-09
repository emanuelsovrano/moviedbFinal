import * as React from "react";
import {CompoundButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';  
import {Image, IImageProps, ImageFit} from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
import {autobind} from 'office-ui-fabric-react/lib/Utilities';
import './MovieCard.less';

export interface IMovieCardProps {
    id?: number;
    imgUrl?: string;
    description?: string;
    onOpenMovie?: (id: number) => void;
    onFavorite?: () => void;
}

export class MovieCard extends React.Component<IMovieCardProps, {}> {
    
    public static defaultProps: IMovieCardProps = {
        id: 0,
        imgUrl: 'http://placehold.it/500x500',
        description: 'No title',
        onOpenMovie: (): void => {},
        onFavorite: (): void => {}
    };

    @autobind
    private onClick(): void {
        this.props.onOpenMovie(this.props.id);
    }

    public render(): JSX.Element {
        let imageProps: IImageProps = {
            src: this.props.imgUrl,
            imageFit: ImageFit.cover
          };
        
        return <button className="MovieCard" onClick={this.onClick}>
            <Image className="MovieCard-Cover" { ...imageProps as any } width={ 150 } height={ 150 }/>
            <Label className="MovieCard-Title" >{this.props.description}</Label>
        </button>;
    }
}