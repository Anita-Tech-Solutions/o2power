import React from 'react';
import {Slider, Icon} from 'react-native-elements';
import {View} from 'react-native';
import {useState} from 'react';
import Title from './Title';

const SliderComponent = () => {
  const [value] = useState(10);

  return (
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
      <View>
        <Title></Title>
        <Title></Title>
      </View>
      <Slider
        value={value}
        maximumValue={100}
        minimumValue={0}
        step={1}
        trackStyle={{height: 10, backgroundColor: 'transparent'}}
        thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{bottom: 10, right: 10}}
              color="#f50"
            />
          ),
        }}
      />
    </View>
  );
};

export default SliderComponent;
