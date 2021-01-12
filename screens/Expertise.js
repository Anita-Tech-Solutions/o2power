import React from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {Heading, Subheading, Subtitle, Title} from '../components';
import {theme} from '../constants';

const {width} = Dimensions.get('window');

const Expertise = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title>Our Expertise</Title>
        <View style={styles.main}>
          <Icon name="sun" type="feather" size={25} color="yellow" />
          <Heading style={{color: theme.COLORS.BUTTON, textAlign: 'left'}}>
            Solar Power
          </Heading>
          <Subheading style={{padding: 10}}>
            The sun is an abundant energy source making solar energy an ideal
            electricity alternative. At O2 Power, we deliver the high-quality
            reliable solar plants for our energy solutions. Long-lasting, green
            energy source with no noise pollution. Team at O2 Power with
            extensive experience in the construction of photovoltaic plants.
          </Subheading>
        </View>
        <View style={styles.main}>
          <Icon name="air" type="entypo" size={25} color="blue" />
          <Heading style={{color: theme.COLORS.BUTTON, textAlign: 'left'}}>
            Wind Power
          </Heading>
          <Subheading style={{padding: 10}}>
            Wind power is one of the oldest-exploited renewable energy sources
            by humans and today is the most seasoned and efficient energy of all
            renewable energies. Carrying the best expertise for executing
            promotion, construction, operation and maintenance of wind
            facilities. With extremely skillful team having more than 20 years
            of experience in the sector, O2 Power is committed to deliver the
            best in class projects. The combination of its leadership and
            knowledge of the sector have established O2 power is an emerging
            provider of products and services in all aspects of wind energy.
          </Subheading>
        </View>
        <View style={styles.main}>
          <Icon name="appstore1" type="antdesign" size={25} color="orange" />
          <Heading style={{color: theme.COLORS.BUTTON, textAlign: 'left'}}>
            Firm Power Project
          </Heading>

          <Text
            style={{
              textAlign: 'left',
              fontSize: 15,
              fontWeight: '600',
              marginTop: 10,
            }}>
            Round The Clock
          </Text>

          <Subheading>
            Round-the-clock (RTC) supply overcomes the natural limitations of
            renewable sources like solar and wind, The interventions required to
            achieve round-the-clock power supply and propose directions to the
            Indian power and energy sectors. Rapid economic growth in India has
            led to a surge in energy demand in the country.
          </Subheading>

          <Text
            style={{
              textAlign: 'left',
              fontSize: 15,
              fontWeight: '600',
              marginTop: 10,
            }}>
            Storage
          </Text>

          <Subheading>
            Broad range of storage technologies have been invented to have
            uninterrupted power supply and meet everyday energy needs. The
            energy storage industry has continued to evolve, adapt, and innovate
            in response to changing energy requirements and advances in
            technology. Energy storage systems provide a broad array of
            technological approaches to managing our power supply in order to
            create a more resilient energy infrastructure and bring cost savings
            to utilities and consumers
          </Subheading>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 15,
              fontWeight: '600',
              marginTop: 10,
            }}>
            Peeking Power
          </Text>
          <Subheading>
            Peaking power” is a relatively recent and an emerging centerpiece of
            discussions in the renewable forums. The intermittent nature of
            renewable sources, unavailability of solar in evening hours; Peaking
            power can address these with load balancing to manage the
            variability of renewable sources of energy. A peaking power plant
            (or peaker) runs during peak hours of demand of electricity.
          </Subheading>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 15,
              fontWeight: '600',
              marginTop: 10,
            }}>
            Hybrid
          </Text>
          <Subheading>
            Hybrid power solutions comprise of a wind and solar panel hybrid
            solution, these technologies work together to provide a consistent
            year-round supply of energy. Team at O2 power is aimed at utilizing
            electricity value network to deliver scalable, customizable and
            flexible solutions to an ever-changing world. Advances in hybrid
            energy technology are expanding the possibilities of electricity
            generation. O2 Power provides end to end hybrid solutions from
            progressing and improving existing services to implementing hybrid
            services into a new generation system or distribution.
          </Subheading>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  main: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.4,
  },
});

export default Expertise;
