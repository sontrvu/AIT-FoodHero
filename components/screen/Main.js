import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Alert } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';

import MainHeader from '../view/MainHeader';
import RestaurantList from '../view/RestaurantList';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurantAction';
import { logoutWithUser } from '../../actions/userAction';

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

  const handleLogout = () => {
    // Confirm log out alert
    const alertActions = [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: () => {
          dispatch(logoutWithUser());
        },
      },
    ];

    Alert.alert('Log out', 'Are you sure you want to log out?', alertActions, { cancelable: false });
  };

  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        {/* Sticky header */}
        <MainHeader onRightButtonPressed={handleLogout} />
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
