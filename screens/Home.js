import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import {} from 'react-native-reanimated';
import {Card, Icon} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
import {ABOUT, KNOWLEDGE} from '../constants/data';

class Home extends Component {
  state = {
    enabled: false,
    enabled2: false,
    rotateValueHolder: new Animated.Value(0),
  };

  componentDidMount() {
    this.startImageRotateFunction();
  }

  startImageRotateFunction = () => {
    this.state.rotateValueHolder.setValue(0);
    Animated.timing(this.state.rotateValueHolder, {
      toValue: 1,
      duration: 4000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  RotateData = this.state.rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  render() {
    const {enabled, enabled2} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            <Animated.Image
              source={require('../assets/images/logo.png')}
              resizeMode={'contain'}
              style={{
                width: width,
                height: 150,
                transform: [{rotate: this.RotateData}],
              }}
            />
          </View>
          <View style={[styles.content, {marginTop: 30}]}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Expertise')}>
              <Card containerStyle={styles.card}>
                <Text style={styles.text}>Expertise</Text>
              </Card>
            </TouchableWithoutFeedback>

            <Card containerStyle={[styles.card]}>
              <TouchableOpacity
                onPress={() => this.setState({enabled: !enabled})}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.text}>About Us</Text>
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
                  renderItem={({item}) => (
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
                        <Text
                          style={{
                            fontFamily: 'Lato-Italic',
                            fontWeight: '100',
                          }}>
                          {item.title}
                        </Text>
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
                  <Text style={styles.text}>Knowledge Center</Text>
                  <Icon name="chevron-down" type="entypo" size={20} />
                </View>
              </TouchableOpacity>
              {enabled2 && (
                <FlatList
                  data={KNOWLEDGE}
                  renderItem={({item}) => (
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
                        <Text style={{fontFamily: 'Lato-Italic'}}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                  numColumns={2}
                />
              )}
            </Card>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Career')}>
              <Card containerStyle={styles.card}>
                <Text style={styles.text}>Career</Text>
              </Card>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Contact')}>
              <Card containerStyle={styles.card}>
                <Text style={styles.text}>Contact Us</Text>
              </Card>
            </TouchableWithoutFeedback>
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
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: 90,
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
  text: {
    fontFamily: 'Lato-Italic',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Home;
