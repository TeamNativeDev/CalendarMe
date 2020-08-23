import React from 'react';
import { borderRadius } from '../../styles/MainStyles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TipFrontRight = ({ onPress, code_snippet, title }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={rightViewStyle.headerText}>{title} </Text>

          <Text>Press to see the description</Text>
        </TouchableOpacity>
      </View>
      <View style={[rightViewStyle.right_side, rightViewStyle.codeSnippetBox]}>
        <Text style={rightViewStyle.codeSnippetText}>
          Code Snippet: {code_snippet}
        </Text>
      </View>
    </View>
  );
};

const rightViewStyle = StyleSheet.create({
  right_side: {
    height: 200,
    width: 215,
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
    alignSelf: 'center',
  },
  codeSnippetBox: {
    ...borderRadius,
    backgroundColor: 'black',
    paddingBottom: 10,
    marginVertical: 15,
    height: 115,
  },
  codeSnippetText: {
    color: 'white',
    paddingBottom: 8,
  },
});

export default TipFrontRight;
