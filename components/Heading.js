import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {} from 'react-native-elements';

const Heading = ({children,style}) => {
  return (
    <View style={styles.container} >
      <Text style={[styles.text,{...style}]} >{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:"center",
  },
  text:{
    fontFamily:"Lato-Regular",
    fontSize:18,
    fontWeight:"500",
    color:"#333333",
  }
});

export default Heading;
