import PropTypes from 'prop-types';
import React from 'react';
import { Text, StyleSheet, View, ViewPropTypes, TouchableOpacity, } from 'react-native';
import Color from './Color';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    quickReply: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Color.leftBubbleBackground,
        borderWidth: 1,
        maxWidth: 160,
        paddingVertical: 7,
        paddingHorizontal: 12,
        height: 50,
        borderRadius: 13,
        margin: 3,
    },
});
export default function QuickReplies({ currentMessage, onQuickReply, }) {
    if (!currentMessage && !currentMessage.quickReplies) {
        return null;
    }
    return (<View style={styles.container}>
      {currentMessage.quickReplies.values.map((quickReply) => {
        return (<TouchableOpacity onPress={() => {
            if (onQuickReply) {
                onQuickReply(quickReply);
            }
        }} style={styles.quickReply} key={quickReply.value}>
            <Text numberOfLines={2} ellipsizeMode={'tail'}>
              {quickReply.title}
            </Text>
          </TouchableOpacity>);
    })}
    </View>);
}
QuickReplies.defaultProps = {
    currentMessage: {
        quickReplies: [],
    },
    containerStyle: {},
    quickReplyProps: {},
};
QuickReplies.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: ViewPropTypes.style,
    quickReplyProps: PropTypes.object,
};
//# sourceMappingURL=QuickReplies.js.map