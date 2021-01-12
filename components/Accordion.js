import React, {useState} from 'react';

import {View, TouchableOpacity} from 'react-native';
import {Card, Icon} from 'react-native-elements';

import Title from './Title';
import Subtitle from './Subtitle';
import {theme} from '../constants';

const Accordion = ({item}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <View>
      <Card
        key={item.id}
        containerStyle={{
          borderColor: 'purple',
          borderRadius: 12,
          padding: theme.SIZES.BASE * 1.5,
        }}>
        <TouchableOpacity onPress={() => setEnabled(!enabled)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'purple',
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
              }}>
              <Icon
                name="image"
                type="evilicon"
                size={theme.SIZES.ICON * 2}
                color="white"
              />
            </View>
            <Title style={{fontSize: 20}}>{item.category}</Title>
            <Icon
              name={enabled ? 'chevron-up' : 'chevron-down'}
              type="evilicon"
            />
          </View>
        </TouchableOpacity>
        {enabled && (
          <>
            {item.subcategory.map((item) => (
              <Subtitle>{item}</Subtitle>
            ))}
          </>
        )}
      </Card>
    </View>
  );
};

export default Accordion;
