import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Heading, Subheading, Title} from '../components';
import {theme} from '../constants';

const Contact = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title>Contact Us</Title>
          <Heading style={{padding: 10}}>Corporate Office</Heading>
          <Subheading>O2 Power Private Limited, 8th Floor</Subheading>
          <Subheading>DLF Square Jacaranda Marg, DLF Phase 2,</Subheading>
          <Subheading>Sector 25, Gurugram, Haryana 122002</Subheading>
          <Heading style={{padding: 10}}>Registerd Office</Heading>
          <Subheading>O2 Power Private Limited</Subheading>
          <Subheading>
            C-53, Flatted Factory Complex, Jhandewalan, New
          </Subheading>
          <Subheading>Delhi-110055</Subheading>
          <Subheading>CIN: U40106DL2019PTC357623</Subheading>
          <Subheading>Telephone No.: 0124 – 419 7150</Subheading>
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
    marginTop: 10,
    padding: 15,
  },
  card: {
    borderColor: 'white',
    borderRadius: 14,
    borderWidth: 0.6,
    shadowColor: 'gray',
    elevation: 1,
    margin: 10,
    padding: 10,
  },
  inner: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Contact;
