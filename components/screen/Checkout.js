import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { AntDesign } from '@expo/vector-icons';
import NavigationHeader from '../view/NavigationHeader';
import MapView from 'react-native-maps';

import CheckoutItemList from '../view/CheckoutItemList';

function Checkout() {
  return (
    <View style={styles.container}>
      <NavigationHeader title={'Checkout'} />

      {/* Restaurant info */}
      <View style={styles.restaurantInfoContainer}>
        <Text style={styles.restaurantName}>Pizza'zz Zaazip</Text>
        <Text style={styles.pickUpLabel}>PICKUP AT</Text>
        <Text style={styles.pickUpAddressDetail}>
          22 Watton st, Werribee, VIC 3030
        </Text>
      </View>

      {/* Map View */}
      <View style={styles.mapViewContainer}>
        <MapView style={styles.map} />
        <TouchableOpacity style={styles.addNoteButton}>
          <AntDesign
            name="filetext1"
            size={18}
            color="black"
            style={styles.addNoteButtonIcon}
          />
          <Text style={styles.addNoteButtonTitle}>Add a note</Text>
        </TouchableOpacity>
      </View>

      {/* Check out detail */}
      <View style={styles.checkOutDetailContainer}>
        <CheckoutItemList />
      </View>

      {/* Pay button */}
      <View style={styles.payNowButtonContainer}>
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowButtonTitle}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  restaurantInfoContainer: {
    padding: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickUpLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  pickUpAddressDetail: {
    fontWeight: 'bold',
  },
  mapViewContainer: {
    padding: 10,
  },
  map: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppConstant.COLOR_PRIMARY,
  },
  addNoteButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: AppConstant.COLOR_PRIMARY,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNoteButtonIcon: {
    marginRight: 5,
  },
  addNoteButtonTitle: {
    fontSize: 15,
  },
  checkOutDetailContainer: {
    padding: 10,
  },
  checkOutDetailLabel: {
    fontSize: 12,
  },
  payNowButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  payNowButton: {
    padding: 10,
    backgroundColor: AppConstant.COLOR_PRIMARY,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
  },
  payNowButtonTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Checkout;
