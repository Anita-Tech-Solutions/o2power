import React, {Component, useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Alert} from 'react-native';
import {Icon} from 'react-native-elements';

import {Title, CardComponent} from '../components';
import {theme} from '../constants';
import {SERVICES} from '../constants/data';

const {width} = Dimensions.get('window');

class Services extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Icon name="settings" color="white" size={45} />
            <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
              Services
            </Title>
          </View>
          <View>
            {SERVICES.map((item, index) => (
              <CardComponent item={item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom:100,
  },
  main: {
    backgroundColor: theme.COLORS.PRIMARY,
    padding: theme.SIZES.BASE,
    margin:theme.SIZES.BASE,
    borderRadius: theme.SIZES.BASE * 2,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: width / 3.2,
    height: 120,
    borderColor: theme.COLORS.GRAY,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#e6f9ff',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

export default Services;
