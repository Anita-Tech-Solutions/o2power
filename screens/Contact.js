import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Card, Icon, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Subheading, Subtitle, Title} from '../components';
import {theme} from '../constants';
import {OFFICES} from '../constants/data';

const {width} = Dimensions.get('window');

const Contact = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title>Please ask the query for feel free</Title>
          <Subtitle style={{textAlign: 'center'}}>
            Our team will soon be your recommendation Will solve
          </Subtitle>
        </View>
        <View style={styles.section}>
          <Title>Let’s cooperate!</Title>
          <Subtitle style={{textAlign: 'center'}}>
            Let’s become partners to build a better future for today.
          </Subtitle>
        </View>
        <View style={styles.card}>
          <Input
            placeholder="Name *"
            leftIcon={
              <Icon name="user" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Email *"
            leftIcon={
              <Icon name="mail" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Subject *"
            leftIcon={
              <Icon name="book" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Mobile *"
            leftIcon={
              <Icon name="mobile1" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Message *"
            leftIcon={
              <Icon name="message1" type="antdesign" color="purple" size={20} />
            }
          />
          <Button
            title="Send Message"
            buttonStyle={{
              backgroundColor: theme.COLORS.PRIMARY,
              width: 200,
              padding: 10,
              margin: 10,
            }}
          />
        </View>
        <View style={styles.section}>
          <Title>Our Offices</Title>
          <Subtitle style={{textAlign: 'center'}}>
            You’ll need these advantages to take the lead.
          </Subtitle>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{margin: 10}}>
          {OFFICES.map(({id, country, address, email, mobile}) => (
            <View
              key={id}
              style={[
                {width: width / 1.2, justifyContent: 'space-around'},
                styles.card,
              ]}>
              <Icon name="location-pin" size={35} color="purple" />
              <Title>{country}</Title>
              <View style={styles.inner}>
                <Icon name="location-pin" color="purple" size={20} />
                <Subheading>{address}</Subheading>
              </View>
              <View style={styles.inner}>
                <Icon name="mail" type="antdesign" size={20} color="purple" />
                <Subheading>{email}</Subheading>
              </View>
              <View style={styles.inner}>
                <Icon
                  name="mobile1"
                  type="antdesign"
                  color="purple"
                  size={20}
                />
                <Subheading>{mobile}</Subheading>
              </View>
            </View>
          ))}
        </ScrollView>
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
  card: {
    borderColor:"white",
    borderRadius:14,
    borderWidth:.6,
    shadowColor:"gray",
    elevation:1,
    margin:10,
    padding:10,
  },
  inner: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Contact;
