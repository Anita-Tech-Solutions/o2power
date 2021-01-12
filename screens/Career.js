import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Card, Icon, Input} from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';

//components
import {Heading, Subheading, Title} from '../components';
import {theme} from '../constants';

const Career = () => {
  const [singleFile, setSingleFile] = useState(null);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title style={{padding: 10}}>Career</Title>
        <Heading style={{padding: 10}}>JOIN THE FINEST WORKSPACE</Heading>
        <Card containerStyle={styles.card}>
          <Card.Title>Working with us</Card.Title>
          <Subheading>
            Problem solvers and innovative thinkers. A place where your
            expertise explores limitless opportunities executing every day with
            a difference. Be ready for a challenging and rewarding next step in
            your career.
          </Subheading>
        </Card>
        <Title style={{padding: 10}}>Why Join O2 Power</Title>
        <View style={[styles.card, {padding: 20}]}>
          <Heading style={{padding: 10}}>Make a difference</Heading>
          <Subheading>Help change the world</Subheading>
        </View>
        <View style={[styles.card, {padding: 20}]}>
          <Heading style={{padding: 10}}>Our environment</Heading>
          <Subheading>
            Joining O2 is exploring numerous opportunities, ethos & culture,
            association, trust, liberty at work. Culture with continuous
            learning and flexible environment
          </Subheading>
        </View>
        <View style={[styles.card, {padding: 20}]}>
          <Heading style={{padding: 10}}>Learn and Grow with us</Heading>
          <Subheading>
            Diverse experiences, unlimited exposure, long lasting , long way.
            Recognition, growth & development opprtunities
          </Subheading>
        </View>
        <View style={[styles.card, {padding: 10}]}>
          <Title>Explore Opportunities</Title>
          <Input
            placeholder="Your Name *"
            leftIcon={<Icon name="user" type="antdesign" size={20} />}
          />
          <Input
            placeholder="Your Email *"
            leftIcon={<Icon name="mail" type="antdesign" size={20} />}
          />
          <Input
            placeholder="Contact"
            leftIcon={<Icon name="contacts" type="antdesign" size={20} />}
          />
          <Input
            placeholder={singleFile ? singleFile.name : 'Resume'}
            leftIcon={<Icon name="paperclip" type="antdesign" />}
            onFocus={selectFile}
            onChange={selectFile}
            multiline={true}
          />
          <Button
            title="Send"
            icon={{name: 'send', color: 'white'}}
            buttonStyle={{backgroundColor: theme.COLORS.BUTTON}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.6,
  },
});

export default Career;
