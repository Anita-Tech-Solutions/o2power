import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Collaterals from './Collaterals';

const Knowledge = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Collaterals navigation={navigation} />
    </ScrollView>
  );
};


export default Knowledge;
