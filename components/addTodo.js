import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default AddNewTodo = ({submitHandler}) => {
  const [text, setText] = useState('');

  const textHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='ohhh new task'
        onChangeText={textHandler}
      >
        Add Todo
      </TextInput>
      <Button
        onPress={()=>{submitHandler(text)}}
        title='Add Todo'
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
