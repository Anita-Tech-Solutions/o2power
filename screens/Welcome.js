import React, {useState, useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Text} from 'react-native-elements';
import {Subtitle, Title} from '../components';

const {width, height} = Dimensions.get('screen');
// constants
import {theme} from '../constants';

const onBoardings = [
  {
    img: require('../assets/images/welcome/1.jpg'),
  },
  {
    img: require('../assets/images/welcome/2.jpg'),
  },
  {
    img: require('../assets/images/welcome/3.jpg'),
  },
  {
    img: require('../assets/images/welcome/4.png'),
  },
  {
    img: require('../assets/images/welcome/5.png'),
  },
];

const Welcome = ({navigation}) => {
  const [completed, setCompleted] = useState(false);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View key={`img-${index}`} style={styles.imageAndTextContainer}>
            <ImageBackground
              source={item.img}
              resizeMode={'center'}
              style={styles.image}></ImageBackground>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                bottom: 30,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: '#ff9600',
              }}
              onPress={() => {
                navigation.navigate('App');
              }}>
              <Text style={{color: 'white'}}>
                {completed ? "Let's Go" : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, theme.SIZES.BASE);
    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [theme.SIZES.BASE, 17, theme.SIZES.BASE],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotSize, height: dotSize}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
  },
  imageAndTextContainer: {
    width: width,
  },
  image: {
    width: width,
    height: height,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: theme.SIZES.BASE > 700 ? '20%' : '16%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE * 3,
    height: theme.SIZES.BASE,
  },
  dot: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  textContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
