import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';

import MainHeader from '../view/MainHeader';
import RestaurantList from '../view/RestaurantList';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurantAction';

function Main(props) {
  const { restaurantGroups, loading } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Main useEffect');
    dispatch(fetchRestaurants());
  }, []);

  const restaurantGroupsView = restaurantGroups.map((group, key) => {
    return <RestaurantList key={key} title={group.groupTitle} data={group.restaurants} />;
  });

  //   <ScrollView
  //   style={styles.scrollView}
  //   contentContainerStyle={styles.scrollViewContentContainer}
  //   stickyHeaderIndices={[0]}
  //   bounces={false}
  // >
  //   {/* Sticky header */}
  //   <MainHeader />

  //   {/* Restaurant list */}
  //   {restaurantGroupsView}
  // </ScrollView>

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
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={AppConstant.COLOR_PRIMARY} />
          </View>
        ) : (
          restaurantGroupsView
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    paddingBottom: 30,
  },
  loadingContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
