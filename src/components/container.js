import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

class Container extends React.Component {

  render() {
    const{container}=styles;

    return (
     <View style={container}>
       {this.props.children}
     </View>
    );
    
  }
}

const styles={
    container:{
     flex:1,
     backgroundColor:'red'
    }
}

export default Container;