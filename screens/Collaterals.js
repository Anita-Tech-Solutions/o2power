import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card} from 'react-native-elements';
import {Title} from '../components';
import {COLLATERALS} from '../constants/data';
import {theme} from '../constants';

const {width} = Dimensions.get('window');

const Collaterals = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <Title>Collaterals</Title>
        {COLLATERALS.map(({title, img}, index) => (
          <Card containerStyle={styles.card} key={index}>
            <Card.Image source={img} />
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontFamily: 'Lato-Thin',
                fontSize: 12,
              }}>
              {title}
            </Text>
            <Button
              type="solid"
              title="Read More"
              buttonStyle={{
                backgroundColor: theme.COLORS.BUTTON,
                width: 100,
              }}
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.6,
  },
  imageContainer: {
    backgroundColor: 'red',
  },
});

export default Collaterals;
