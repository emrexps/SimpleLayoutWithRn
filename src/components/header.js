import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {

  render() {
   const{header}=styles;

    return (
     <View style={header}>
       {this.props.children}
     </View>
    );
    
  }
}

const styles={
    header:{
     flex:2,
     backgroundColor:'blue',
     alignItems:'center',
     justifyContent:'center'
    }
}

export default Header;