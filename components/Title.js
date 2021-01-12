import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {} from 'react-native-elements';
import {theme} from '../constants';

const Title = ({children,style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,{...style}]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    color: theme.COLORS.BUTTON,
    fontSize:23,
    textAlign:"center"
  },
});

export default Title;
