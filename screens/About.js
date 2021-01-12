import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button, Icon, Input, SocialIcon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Subheading, Subtitle, Title} from '../components';
import {theme} from '../constants';
import Investors from './Investors';
import Team from './Team';

const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title:
      'O2 Power Private Limited is a renewable energy platform, jointly established by EQT Infrastructure and Temasek to develop and execute utility scale renewable energy projects in India with a total equity commitment of up to US$ 500m over the next 5 years.',
    iconName: 'flash',
    iconType: 'entypo',
    color: 'red',
  },
  {
    id: 1,
    title:
      'O2 Power aims to scale up to a sizeable portfolio capacity (both Solar and Wind) with good quality off-takers with primary focus on greenfield project development and including selective M&A. O2 Power envisions to build an industry leading platform upholding high standards in corporate governance, compliance, social and EH&S.',
    iconName: 'spinner-fidget',
    iconType: 'fontisto',
    color: 'blue',
  },
  {
    id: 1,
    title:
      'Management is helmed by a very experienced set of professional management team with an established track record in the renewables sector.',
    iconName: 'users',
    iconType: 'feather',
    color: 'gray',
  },
];

const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title>Who we are</Title>
          <Subtitle>
            O2 Power is a premier Renewable Energy Platform in India
          </Subtitle>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 20}}>
            {data.map(({title, iconName, iconType, color},index) => (
              <View style={styles.card2} key={index} >
                <View style={styles.iconContainer}>
                  <Icon
                    name={iconName}
                    type={iconType}
                    size={25}
                    color={color}
                  />
                </View>
                <Subheading>{title}</Subheading>
              </View>
            ))}
          </ScrollView>
        </View>
        <Team />
        <Investors />
        <View style={styles.section}>
          <Title>Connect With us</Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="instagram" />
            <View
              style={{
                backgroundColor: 'green',
                width: 50,
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="whatsapp" type="fontisto" size={25} color="white" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    marginTop: 20,
    padding: 15,
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    margin: 5,
    color: theme.COLORS.GRAY,
  },
  card: {
    margin: 10,
    padding: 15,
    borderWidth: 0.6,
    borderRadius: 15,
    shadowColor: 'gray',
    borderColor: 'white',
    elevation: 2,
  },
  card2: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.6,
  },
  iconContainer: {
    padding: 20,
    borderRadius: 50,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
});

export default About;
