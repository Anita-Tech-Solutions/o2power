import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Header, Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants';

class HeaderComponent extends Component {
  state = {
    modalVisible: false,
  };

  handleLeftPress = () => {
    const {back, navigation} = this.props;
    back ? navigation.goBack() : navigation.openDrawer();
  };

  handlePress = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  LeftComponent = () => {
    const {back} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.handleLeftPress}>
          <Icon
            name={back ? 'chevron-left' : 'menu'}
            type="entypo"
            color="white"
            size={25}
          />
        </TouchableOpacity>
      </View>
    );
  };

  CenterComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode={'contain'}
          style={{width: 30, height: 30}}
        />
        <Text h4 h4Style={{color: 'white', fontWeight: 'bold'}}>
          O2
        </Text>
        <Text
          h4
          h4Style={{
            color: 'white',
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          Power
        </Text>
      </View>
    );
  };

  render() {
    return (
      <Header
        barStyle="light-content"
        statusBarProps={{
          backgroundColor: "#008398",
        }}
        containerStyle={styles.container}
        leftComponent={this.LeftComponent}
        centerComponent={this.CenterComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#008398",
    borderBottomLeftRadius: theme.SIZES.BASE,
    borderBottomRightRadius: theme.SIZES.BASE,
  },
});

export default HeaderComponent;
