import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => {        pressHandler(item.id);
      }}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    padding: 16,
    borderRadius: 15,
    margin: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    backgroundColor: 'pink',
  },
});
