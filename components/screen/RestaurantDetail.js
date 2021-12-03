import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as AppConstant from '../../helpers/appConstant';
import RatingStars from '../view/RatingStars';
import NavigationHeader from '../view/NavigationHeader';
import MenuList from '../view/MenuList';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../actions/restaurantAction';

export default function RestaurantDetail({ route, navigation }) {
  const restaurantData = route.params;

  const orderedItemsDict = {};
  const [totalQuantity, setTotalQuantity] = useState(0);

  const { currentRestaurant } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Use effect detail');
    const data = { restaurantId: restaurantData.id };
    dispatch(fetchMenuItems(data));
  }, []);

  const handleCellPressed = (data) => {};

  const handleQuantityUpdated = (itemData, quantity) => {
    orderedItemsDict[itemData.id] = { ...itemData, quantity };

    // Sum of all quantities in the orderedItemsDict
    // const totalQty = Object.values(aaa).reduce((acc, item) => {
    //   return acc + item.quantity;
    // }, 0);

    // setTotalQuantity(totalQty);
  };

  const handleCheckoutPressed = () => {
    const orderedItems = Object.keys(orderedItemsDict).map((key) => orderedItemsDict[key]);

    if (orderedItems.length === 0) {
      alert('Please select items to checkout');
      return;
    }

    navigation.navigate('Checkout', { restaurantData, orderedItems });
  };

  return (
    <View style={styles.screenContainer}>
      <NavigationHeader title={restaurantData.restaurantName} />

      {/* Top cover image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: restaurantData.imageUrl || 'https://nantucket.net/wp-content/uploads/2020/09/placeholder-768x512.png',
          }}
        />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.detailContainer}>
          {/* Restaurent name and categories */}
          <Text style={styles.restaurantName}>{restaurantData.restaurantName}</Text>
          <Text style={styles.restaurantCatogory}>{restaurantData.categories}</Text>

          <RatingStars size={20} style={styles.ratingStars} />

          {/* Address detail */}
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>ADDRESS</Text>
            <Text style={styles.addressDetail}>{restaurantData.address}</Text>
          </View>

          {/* Introduction text */}
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionDescription}>{restaurantData.introduction}</Text>
          </View>

          {/* Menu */}
          <MenuList
            style={styles.menuListContainer}
            data={currentRestaurant.menuItems}
            onCellPressed={handleCellPressed}
            onQuantityUpdated={handleQuantityUpdated}
          />
        </View>
      </ScrollView>

      {/* Checkout button */}
      <View style={styles.checkoutButtonContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutPressed}>
          <Text style={styles.checkoutButtonTitle}>Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  imageContainer: {
    height: 200,
    zIndex: -1,
  },
  image: {
    position: 'absolute',
    top: -30,
    width: '100%',
    height: 230,
  },
  detailContainer: {
    padding: 10,
    flex: 1,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  restaurantCatogory: {
    marginTop: 5,
    fontSize: 12,
  },
  ratingStars: {
    marginTop: 10,
  },
  addressContainer: {
    marginTop: 10,
  },
  addressLabel: {
    fontSize: 12,
  },
  addressDetail: {
    fontWeight: 'bold',
  },
  introductionContainer: {
    marginTop: 20,
    paddingTop: 8,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: AppConstant.COLOR_PRIMARY,
    borderBottomColor: AppConstant.COLOR_PRIMARY,
  },
  introductionDescription: {
    textAlign: 'center',
  },
  menuListContainer: {
    marginTop: 20,

    flex: 1,
  },

  checkoutButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButton: {
    padding: 10,
    backgroundColor: AppConstant.COLOR_PRIMARY,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
  },
  checkoutButtonTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
