/// <reference types="react" />
import PropTypes from 'prop-types';
import { ViewStyle } from 'react-native';
import { IMessage, Reply } from './types';
interface QuickRepliesProps {
    currentMessage?: IMessage;
    onQuickReply?(reply: Reply): void;
}
export default function QuickReplies({ currentMessage, onQuickReply, }: QuickRepliesProps): JSX.Element | null;
export default namespace QuickReplies {
    var defaultProps: {
        currentMessage: {
            quickReplies: never[];
        };
        containerStyle: {};
        quickReplyProps: {};
    };
    var propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        quickReplyProps: PropTypes.Requireable<object>;
    };
}
export {};
