import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { AntDesign } from '@expo/vector-icons';
import NavigationHeader from '../view/NavigationHeader';
import MapView from 'react-native-maps';

import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';

import CheckoutItemList from '../view/CheckoutItemList';

function Checkout({ route, navigation }) {
  const { restaurantData, orderedItems } = route.params;

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(JSON.stringify(orderedItems));

  // Sum all price of items and convert to string with 2 decimal places
  const totalPrice = orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutPressed = () => {
    const requestData = {
      restaurantId: restaurantData.id,
      customerOrder: {
        customerId: user.uid,
        customerName: `${user.firstName} ${user.lastName}`,
        totalAmount: totalPrice,
        menuItems: orderedItems,
      },
    };

    dispatch(placeOrder(requestData));

    // Alert user that order has been placed
    alert('Order has been placed');

    // Wait for 2 seconds and then navigate back to home screen
    setTimeout(() => {
      navigation.popToTop();
    }, 2000);
  };

  const handleAddNotePressed = () => {
    // Ask user to add note
  };

  return (
    <View style={styles.container}>
      <NavigationHeader title={'Checkout'} />

      {/* Restaurant info */}
      <View style={styles.restaurantInfoContainer}>
        <Text style={styles.restaurantName}>{restaurantData.title}</Text>
        <Text style={styles.pickUpLabel}>PICKUP AT</Text>
        <Text style={styles.pickUpAddressDetail}>{restaurantData.address}</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
        {/* Map View */}
        <View style={styles.mapViewContainer}>
          <MapView style={styles.map} />
          <TouchableOpacity style={styles.addNoteButton} onPress={handleAddNotePressed}>
            <AntDesign name="filetext1" size={18} color="black" style={styles.addNoteButtonIcon} />
            <Text style={styles.addNoteButtonTitle}>Add a note</Text>
          </TouchableOpacity>
        </View>

        {/* Check out detail */}
        <View style={styles.checkOutDetailContainer}>
          <CheckoutItemList data={orderedItems} totalPrice={totalPrice} />
        </View>
      </ScrollView>

      {/* Pay button */}
      <View style={styles.payNowButtonContainer}>
        <TouchableOpacity style={styles.payNowButton} onPress={handleCheckoutPressed}>
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
    paddingBottom: 20,
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
    flex: 1,
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
