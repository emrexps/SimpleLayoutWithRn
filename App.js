import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import MyApp from './src/MyApp';
export default class App extends React.Component {
  render() {
    return (
     <MyApp/>
    );
  }
}

AppRegistry.registerComponent('App', () => App)