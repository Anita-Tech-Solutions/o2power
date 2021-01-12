import React, {useEffect} from 'react';
import {Share, View, Image, StyleSheet, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import {CommonActions} from '@react-navigation/native';

import {Title} from '../components';
import { theme } from '../constants';

const ShareComponent = ({navigation}) => {
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          //navigation.goBack();
        }
      } else if (result.action === Share.dismissedAction) {
        navigation.dispatch(CommonActions.goBack());
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/share.png')}
        resizeMode={'contain'}
        style={{width: width, height: height / 2}}
      />
      <Title>Share with your friends</Title>
      <Button
        type="solid"
        title="Share"
        onPress={onShare}
        icon={<Icon name="share" color="white" size={20}   />}
        buttonStyle={{
          width:width/2,
          backgroundColor:theme.COLORS.BUTTON,
          padding:20,
          borderRadius:15,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-evenly",
    alignItems:"center",
  },
});

export default ShareComponent;
