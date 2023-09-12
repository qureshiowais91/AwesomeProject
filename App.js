import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './components/header';
import React, { useState } from 'react';
import TodoItem from './components/todoItem';
import AddNewTodo from './components/addTodo';
export default function App() {
  const todoList = [
    { id: 1, text: 'English Assingment DL 20/11' },
    { id: 2, text: 'Buy Mirchi' },
    { id: 3, text: 'Send Developer $1' },
  ];

  const [todos, setTodos] = useState(todoList);

  const pressHandler = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (todo) => {
    setTodos((prevTodo) => {
      return [{ id: Math.random()*10, text: todo }, ...prevTodo];
    });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <AddNewTodo submitHandler={submitHandler}></AddNewTodo>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <TodoItem item={item} pressHandler={pressHandler} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  },
});
