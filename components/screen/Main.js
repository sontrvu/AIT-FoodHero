import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';

import MainHeader from '../view/MainHeader';
import RestaurantList from '../view/RestaurantList';

function Main(props) {
  return (
    <View>
      <MainHeader />
      <RestaurantList title={'New Restaurents'} />
      <RestaurantList title={'Random'} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Main;
