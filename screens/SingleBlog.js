import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {Subheading} from '../components';

const SingleBlog = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={[styles.card]}>
          <Card.Image source={require('../assets/images/collaterals/1.png')} />
          <Card.Title>OUTLOOK FOR THE INDIAN RE MARKET BY 2022</Card.Title>
          <Subheading>
            Multiple factors are going to shape the Indian RE market going
            forward. Wind industry faced headwinds in the past and all
            stakeholders are now working towards reviving the industry.
            Hopefully, with newer technology and contractual structures coming
            in place, we will see increased interest in wind and hybrid
            projects. Indian grid has morning and evening peaks and if
            competitive tariffs can be discovered for peaking power to begin
            with and subsequently going on to round the clock tariff
            competitiveness, it will solve the intermittency and grid balancing
            issues. Going forward, we might see the emergence of technology
            agnostic tenders seeking the most competitive firm renewable power.I
            think, on an overall basis, tenders would move to a higher degree of
            complexity compared to the plain vanilla tenders being issued today.
            However, from a technology standpoint, the sector has the answers to
            solve for the higher complexity. A policy framework, that evolves
            along with the requirements of the sector and is based on industry
            consultation, would hold the key to the growth of the sector upto
            2022 and beyond
          </Subheading>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:90
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    borderColor: 'white',
    borderWidth: 0.4,
  },
});

export default SingleBlog;
