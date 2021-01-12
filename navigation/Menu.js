import React from 'react';
import {Text} from 'react-native';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerItem as DrawerCustomItem, Subtitle, Title} from '../components/';
import {theme} from '../constants/';

const CustomDrawerContent = ({drawerPosition, navigation, state}) => {
  const insets = useSafeAreaInsets();
  const screens = [
    'Home',
    'Expertise',
    'About',
    'Knowledge Center',
    'Career',
    'Contact',
    'Share',
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>
      <View style={{paddingLeft: 7, paddingRight: 14}}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.2,
              paddingLeft: drawerPosition === 'left' ? insets.left : 0,
              paddingRight: drawerPosition === 'right' ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.version}>
        <Text style={{bottom: 10, color: 'white', fontFamily: 'Rubik-Light'}}>
          App Version 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  header: {
    backgroundColor: theme.COLORS.BUTTON_COLOR,
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },

  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  image: {
    width: 250,
    height: 100,
  },
  version: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CustomDrawerContent;
