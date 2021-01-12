import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {theme} from '../constants';

const {width, height} = Dimensions.get('window');

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const IconNames = ['home', 'gear', 'library-outline', 'team'];
        const IconTypes = ['feather', 'evilicon', 'ionicon', 'antdesign'];

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.main}>
            <Icon
              name={IconNames[index]}
              size={25}
              type={IconTypes[index]}
              color={isFocused ? theme.COLORS.BUTTON : 'white'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: width / 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor: theme.COLORS.PRIMARY,
    borderColor: 'purple',
    borderRadius: 30,
    width: '80%',
    marginLeft: 40,
    marginRight: 40,
    shadowColor: 'purple',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  main: {
    width: (width * 13) / 25 / 2,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
  },
});

export default MyTabBar;
