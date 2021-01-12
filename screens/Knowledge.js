import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Collaterals from './Collaterals';

const Knowledge = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Collaterals />
    </ScrollView>
  );
};


export default Knowledge;
