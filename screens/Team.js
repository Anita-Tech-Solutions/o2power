import React from 'react';
import {Image} from 'react-native';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Heading, Subheading, Subtitle, Title} from '../components';
import {BIO} from '../constants/data';

const {width} = Dimensions.get('window');

const Team = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title>Our Teams</Title>
        <Subtitle style={{padding: 10}}>
          Professional Management team with strong established track record
        </Subtitle>
        {BIO.map(({name, bio, image}, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.imageContainer}>
              <Image
                source={image}
                resizeMode={'contain'}
                style={{width: 120, height: 100, borderRadius: 50}}
              />
            </View>
            <Heading>{name}</Heading>
            <Subheading>{bio}</Subheading>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.4,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 50,
  },
});

export default Team;
