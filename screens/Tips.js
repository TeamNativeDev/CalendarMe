import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import Tip from '../components/Tip';

const Tips = ({ route }) => {
  const { color, id } = route.params;
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`https://flatiron-cheat-sheet.herokuapp.com/api/v1/categories/${id}`)
      .then((resp) => resp.json())
      .then((data) => setTips(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TextInput onChangeText={(text) => setInput(text)} value={input} />
      </View>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Tip {...item} hexCode={color} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Tips;
