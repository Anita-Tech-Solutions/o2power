import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Heading, Subheading, Subtitle, Title} from '../components';

const Investors = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title>Our Investors</Title>
        <View style={styles.card}>
          <Heading style={{padding: 10}}>EQT</Heading>
          <Subheading>
            EQT is a differentiated global investment organization with a
            25-year history of investing in, developing and owning companies,
            and has a demonstrated track-record of attractive, consistent
            investment performance across multiple geographies, sectors and
            strategies. EQT has been a thought-leader in the private markets
            industry. EQT has grown its geographical presence and successfully
            scaled strategies such as Infrastructure, Real Estate, Venture
            Capital and Credit. EQT’s well-established platform, ability to
            generate consistent attractive returns and long-term relationships
            with fund investors, and its unique culture, values and brand, have
            enabled EQT to raise EUR 62 billion of commitments since inception.
            For more information about EQT, please visit www.eqtgroup.com
          </Subheading>
        </View>
        <View style={styles.card}>
          <Heading style={{padding: 10}}>TEMASEK</Heading>
          <Subheading>
            Temasek is a global investment company headquartered in Singapore
            with a net portfolio value of S$306 billion as at 31 March 2020.
            Temasek is committed to generate sustainable returns beyond our
            present generation, and is guided by the principles of our Temasek
            Charter to be an active investor, a forward looking institution and
            a trusted steward Temasek seeks sustainable solutions to address
            present and future challenges, as we capture investment and other
            opportunities that help to bring about a better, smarter and more
            sustainable world. Temasek has a long term investment horizon and
            invests off our own balance sheet with a owner-investor mindset
            Their global portfolio spans a broad spectrum of industries:
            financial services; TMT, consumer & real estate; transportation &
            industrials; life sciences & agribusiness and energy & resources.
            Headquartered in Singapore, Temasek has 11 offices around the world:
            Beijing, Hanoi, Mumbai, Shanghai and Singapore in Asia; and London,
            New York, San Francisco, Washington DC, Mexico City, and Sao Paulo
            outside Asia For more information about Temasek, please visit
            https://www.temasek.com.sg/
          </Subheading>
        </View>
        <View style={styles.card}>
          <Title>Annual Financial</Title>
          <Subtitle>Annual Return-2020</Subtitle>
          <Subtitle>Annual Report-2020</Subtitle>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.6,
  },
});

export default Investors;
