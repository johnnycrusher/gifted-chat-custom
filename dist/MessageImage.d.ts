/// <reference types="react" />
import PropTypes from 'prop-types';
import { ImageProps, ViewStyle, ImageStyle } from 'react-native';
import { IMessage } from './types';
interface MessageImageProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage;
    containerStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    imageProps?: Partial<ImageProps>;
    lightboxProps?: object;
}
export default function MessageImage({ containerStyle, lightboxProps, imageProps, imageStyle, currentMessage, }: MessageImageProps): JSX.Element | null;
export default namespace MessageImage {
    var defaultProps: {
        currentMessage: {
            image: null;
        };
        containerStyle: {};
        imageStyle: {};
        imageProps: {};
        lightboxProps: {};
    };
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        imageStyle: PropTypes.Requireable<object>;
        imageProps: PropTypes.Requireable<object>;
        lightboxProps: PropTypes.Requireable<object>;
    };
}
export {};
