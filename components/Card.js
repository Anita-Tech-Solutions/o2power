import React from 'react';
import {Dimensions, View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';

const {width} = Dimensions.get('window');

import Title from './Title';
import {theme} from '../constants';


const renderItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon
          name={item.iconName}
          type={item.iconType}
          size={35}
          color={item.color}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          textAlign: 'center',
          fontFamily: 'Lato-Light',
        }}>
        {item.title}
      </Text>
    </View>
  );
};

const CardComponent = ({item}) => {

  return (
    <View style={[styles.cardContainer]} key={item.id}>
      <Title style={{color: theme.COLORS.BUTTON, padding: 15}}>
        {item.title}
      </Title>
      <FlatList
        data={item.subtitle}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: width / 2.3,
    height: 120,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.4,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#e6f9ff',
    justifyContent: 'center',
    borderRadius: 35,
  },
});

export default CardComponent;
