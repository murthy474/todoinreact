import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todolist from './src/Todolist';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Todolist/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
