import React from 'react';
import {Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Title} from '../components';
import {LINKEDIN, MEDIA} from '../constants/data';

const {width} = Dimensions.get('window');

const Newsmedia = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>LINKEDIN</Title>
        <FlatList
          data={LINKEDIN}
          renderItem={({item, index}) => (
            <>
              <View style={styles.card}>
                <SocialIcon type="linkedin" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'Lato-Thin',
                    color: 'gray',
                  }}>
                  {item.title}
                </Text>
              </View>
            </>
          )}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
        />
        <Title>MEDIA</Title>
        <FlatList
          data={MEDIA}
          renderItem={({item, index}) => (
            <>
              <View style={styles.card}>
                <SocialIcon type="vimeo" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'Lato-Thin',
                    color: 'gray',
                  }}>
                  {item.title}
                </Text>
              </View>
            </>
          )}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: width / 3.3,
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.6,
  },
});

export default Newsmedia;
