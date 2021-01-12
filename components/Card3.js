import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

const {width} = Dimensions.get('window');

const CardComponent3 = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name={item.iconName} type={item.iconType} color={item.color} size={30} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2.3,
    height: 120,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'purple',
    shadowOpacity:.5,
    borderColor: 'purple',
    borderWidth: 1.3,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius:50,
    backgroundColor: '#e6f9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize:15,
  },
});

export default CardComponent3;
