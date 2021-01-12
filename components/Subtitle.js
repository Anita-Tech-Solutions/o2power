import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {} from 'react-native-elements';
import {theme} from '../constants';

const Subtitle = ({children, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {...style}]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    top:10
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 15,
    color: theme.COLORS.GRAY,
  },
});

export default Subtitle;
