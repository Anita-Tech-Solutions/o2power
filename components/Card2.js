import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {width} = Dimensions.get('window');

const CardComponent2 = ({item}) => {
  let opacity = new Animated.Value(0);

  useEffect(() => {
    animate();
  },[]);
  const animate = (easing) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  };

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [200, width / 2.3],
  });

  const animatedStyle = [
    {
      opacity,
      width: size,
      height: size,
    },
  ];
  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <View style={styles.iconContainer}>
        <Icon
          name={item.iconName}
          type={item.iconType}
          color={item.color}
          size={30}
        />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2.3,
    height: 120,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor:"white",
    borderWidth: 0.6,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#e6f9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 15,
  },
});

export default CardComponent2;
