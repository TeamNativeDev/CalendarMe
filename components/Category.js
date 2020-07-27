import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Category = (props, { navigation }) => {
  const { categoryName, hexCode } = props;
  const containerColor = {
    backgroundColor: hexCode,
  };
  // console.warn(props, navigation);
  return (
    <View style={[styles.categoryBox, containerColor]}>
      <Text style={styles.boxText}>{categoryName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    // backgroundColor: 'bisque',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
});

export default Category;
