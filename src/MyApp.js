import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import Container from './components/container';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


class MyApp extends React.Component {
  render() {
    return (
    <Container>
        <Header>
          <Text>Header Text!</Text>
        </Header>
        <Body>
          <Text>Body Text!</Text>
        </Body>
        <Footer>
          <Text>Footer Text!</Text>
        </Footer>
     </Container>
    );
  }
}

export default MyApp;