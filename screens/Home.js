import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import {Card, Icon, ListItem} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

const ABOUT = [
  {
    title: 'Who we are',
    link: 'About',
    iconName: 'info',
    iconType: 'entypo',
    color: '',
  },
  {
    title: 'Our Team',
    link: 'Team',
    iconName: 'team',
    iconType: 'antdesign',
    color: '',
  },
  {
    title: 'Investors',
    link: 'Investors',
    iconName: 'inr',
    iconType: 'fontisto',
    color: '',
  },
];

const KNOWLEDGE = [
  {
    title: 'News & Media',
    link: 'Newsmedia',
    iconName: 'newspaper-outline',
    iconType: 'ionicon',
    color: 'black',
  },
  {
    title: 'Collaterals',
    link: 'Collaterals',
    iconName: 'paperclip',
    iconType: 'antdesign',
    color: '',
  },
];

class Home extends Component {
  state = {
    enabled: false,
    enabled2: false,
  };

  render() {
    const {enabled, enabled2} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{marginTop: 15}}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode={'contain'}
              style={{width: width, height: 100}}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Card containerStyle={styles.card}>
              <Text>Expertise</Text>
            </Card>

            <Card containerStyle={[styles.card]}>
              <TouchableOpacity
                onPress={() => this.setState({enabled: !enabled})}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>About Us</Text>
                  <Icon
                    name={enabled ? 'chevron-up' : 'chevron-down'}
                    type="entypo"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              {enabled && (
                <FlatList
                  data={ABOUT}
                  renderItem={({item, index}) => (
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate(item.link)}>
                      <View
                        style={[
                          styles.card,
                          {
                            padding: 15,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 150,
                            width: 150,
                          },
                        ]}>
                        <View
                          style={[
                            styles.card,
                            {
                              width: 50,
                              height: 50,
                              borderRadius: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                            },
                          ]}>
                          <Icon
                            name={item.iconName}
                            type={item.iconType}
                            size={20}
                          />
                        </View>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                  numColumns={2}
                />
              )}
            </Card>

            <Card containerStyle={[styles.card]}>
              <TouchableOpacity
                onPress={() => this.setState({enabled2: !enabled2})}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Knowledge Center</Text>
                  <Icon name="chevron-down" type="entypo" size={20} />
                </View>
              </TouchableOpacity>
              {enabled2 && (
                <FlatList
                  data={KNOWLEDGE}
                  renderItem={({item, index}) => (
                    <TouchableWithoutFeedback
                      onPress={() =>
                        navigation.navigate('Knowledge', {screen: item.link})
                      }>
                      <View
                        style={[
                          styles.card,
                          {
                            padding: 15,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 150,
                            width: 150,
                          },
                        ]}>
                        <View
                          style={[
                            styles.card,
                            {
                              width: 50,
                              height: 50,
                              borderRadius: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                            },
                          ]}>
                          <Icon
                            name={item.iconName}
                            type={item.iconType}
                            size={20}
                          />
                        </View>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                  numColumns={2}
                />
              )}
            </Card>
            <Card containerStyle={styles.card}>
              <Text>Career</Text>
            </Card>
            <Card containerStyle={styles.card}>
              <Text>Contact Us</Text>
            </Card>
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
    flexGrow: 100,
    marginBottom: 100,
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.4,
  },
});

export default Home;
