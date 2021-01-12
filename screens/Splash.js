import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import {CommonActions} from '@react-navigation/native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'App'}],
        }),
      );
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode={'contain'}
          style={{width: width, height: 250}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Splash;
