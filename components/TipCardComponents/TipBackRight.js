import React from 'react';
import { borderRadius } from '../../styles/MainStyles';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TipBackRight = ({ title, description, onPress }) => {
  return (
    <View style={rightViewStyle.containerView}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[rightViewStyle.headerText, rightViewStyle.transformContent]}
          >
            {title}
          </Text>

          <Text style={[rightViewStyle.transformContent, { paddingBottom: 6 }]}>
            Press to see the Code Snippet
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        nestedScrollEnabled={true}
        style={[rightViewStyle.scroll, rightViewStyle.descriptionView]}
        scrollEnabled={true}
      >
        <Text
          style={[
            rightViewStyle.descriptionText,
            rightViewStyle.transformContent,
          ]}
        >
          Description: {description}
        </Text>
      </ScrollView>
    </View>
  );
};

const rightViewStyle = StyleSheet.create({
  containerView: {
    padding: 8,
  },
  right_side: {
    height: 200,
    width: 215,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'aliceblue',
  },
  headerText: {
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
  descriptionText: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  descriptionView: {
    ...borderRadius,
    paddingTop: 8,
    height: '70%',
  },

  transformContent: { transform: [{ rotateY: '180deg' }] },

  scroll: {
    flexGrow: 1,
  },
});

export default TipBackRight;
