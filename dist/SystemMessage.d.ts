/// <reference types="react" />
import { ViewStyle, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import { IMessage } from './types';
interface SystemMessageProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage;
    containerStyle?: ViewStyle;
    wrapperStyle?: ViewStyle;
    textStyle?: TextStyle;
}
export default function SystemMessage({ currentMessage, containerStyle, wrapperStyle, textStyle, }: SystemMessageProps): JSX.Element | null;
export default namespace SystemMessage {
    var defaultProps: {
        currentMessage: {
            system: boolean;
        };
        containerStyle: {};
        wrapperStyle: {};
        textStyle: {};
    };
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        wrapperStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        textStyle: PropTypes.Requireable<any>;
    };
}
export {};
