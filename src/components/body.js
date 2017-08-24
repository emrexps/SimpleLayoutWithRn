import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

class Body extends React.Component {

 render() {
 const{body}=styles;
   
    return (
     <View style={body}>
       {this.props.children}
     </View>
    );

  }
}
const styles={
    body:{
    flex:8,
    backgroundColor:'green'
    }
}

export default Body;