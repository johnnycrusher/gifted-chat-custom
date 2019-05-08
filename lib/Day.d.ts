/// <reference types="react" />
import PropTypes from 'prop-types';
import { ViewStyle, TextStyle } from 'react-native';
import { IMessage } from './types';
interface DayProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    containerStyle?: ViewStyle;
    wrapperStyle?: ViewStyle;
    textStyle?: TextStyle;
    dateFormat?: string;
    inverted?: boolean;
}
export default function Day({ dateFormat, currentMessage, previousMessage, nextMessage, containerStyle, wrapperStyle, textStyle, inverted, }: DayProps, context: any): JSX.Element | null;
export default namespace Day {
    var contextTypes: {
        getLocale: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        currentMessage: {
            createdAt: null;
        };
        previousMessage: {};
        nextMessage: {};
        containerStyle: {};
        wrapperStyle: {};
        textStyle: {};
        dateFormat: string;
    };
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        wrapperStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        textStyle: PropTypes.Requireable<any>;
        dateFormat: PropTypes.Requireable<string>;
    };
}
export {};
