import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {} from 'react-native-elements';

const Subheading = ({children, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {...style}]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 15,
    color: '#7e7e7e',
  },
});

export default Subheading;
