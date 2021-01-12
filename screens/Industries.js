import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, CardComponent} from '../components';

import {theme} from '../constants';
import {INDUSTRIES} from '../constants/data';

const Industries = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon name="layers" type="fontawesome" size={45} color="white" />
          <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
            Industries
          </Title>
        </View>
        <View>
          {INDUSTRIES.map((item, index) => (
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

export default Industries;
