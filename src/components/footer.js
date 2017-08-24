import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

class Footer extends React.Component {

  render() {
   const{footer}=styles;

    return(
     <View style={footer}>
      {this.props.children}
     </View>
    );
    
  }
}

const styles={
    footer:{
     flex:2,
     backgroundColor:'blue',
     flexDirection:'row'
    }
}
export default Footer;