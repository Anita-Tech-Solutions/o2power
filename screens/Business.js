import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Title, CardComponent} from '../components';

import {theme} from '../constants';
import {BUSSINESS} from '../constants/data';

const Business = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon name="user" type="evilicon" color="white" size={45} />
          <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
            Business
          </Title>
        </View>
        <View>
          {BUSSINESS.map((item, index) => (
            <CardComponent item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  main: {
    backgroundColor: theme.COLORS.PRIMARY,
    padding: theme.SIZES.BASE,
    margin: theme.SIZES.BASE,
    borderRadius: theme.SIZES.BASE * 2,
  },
});

export default Business;
