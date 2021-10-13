import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';

import MainHeader from '../view/MainHeader';
import RestaurantList from '../view/RestaurantList';

function Main(props) {
  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        {/* Sticky header */}
        <MainHeader />

        {/* Restaurent list */}
        <RestaurantList title={'New Restaurents'} />
        <RestaurantList title={'Random'} />
        <RestaurantList title={'Hey hey'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    paddingBottom: 30,
  },
});

export default Main;
