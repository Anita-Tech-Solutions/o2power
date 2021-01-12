import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';

import {theme} from '../constants';

class DrawerItem extends Component {
  renderIcon = () => {
    const {title, focused} = this.props;
    switch (title) {
      case 'Home':
        return (
          <Icon
            name="home"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Expertise':
        return (
          <Icon
            name="gear"
            type="evilicon"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'About':
        return (
          <Icon
            name="info"
            type="entypo"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );

      case 'Knowledge Center':
        return (
          <Icon
            name="library-outline"
            type="ionicon"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Career':
        return (
          <Icon
            name="team"
            type="antdesign"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Contact':
        return (
          <Icon
            name="contacts"
            type="antdesign"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Share':
        return (
          <Icon
            name="share"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      default:
        return;
    }
  };

  render() {
    const {title, focused, navigation, progress} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(title);
        }}>
        <View style={[styles.defaultStyle]}>
          <ListItem
            containerStyle={{
              padding: 15,
              margin: 5,
              borderRadius: 10,
              backgroundColor: focused
                ? theme.COLORS.WHITE
                : theme.COLORS.PRIMARY,
            }}>
            {this.renderIcon()}
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: focused ? theme.COLORS.PRIMARY : 'white',
                  fontSize: 20,
                  fontFamily: 'Rubik-Light',
                }}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: theme.COLORS.PRIMARY,
    borderRadius: 10,
  },
  activeStyle: {
    backgroundColor: theme.COLORS.BUTTON_COLOR,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
});
