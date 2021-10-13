import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as AppConstant from '../../helpers/appConstant';
import RatingStars from '../view/RatingStars';
import NavigationHeader from '../view/NavigationHeader';
import MenuList from '../view/MenuList';

export default function RestaurantDetail(props) {
  return (
    <View>
      <NavigationHeader title={'Header Title'} />

      {/* Top cover image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.slrlounge.com/wp-content/uploads/2016/03/monikawalecka-1.jpg',
          }}
        />
      </View>

      <View style={styles.detailContainer}>
        {/* Restaurent name and categories */}
        <Text style={styles.restaurantName}>Pizza'zz Zaazip</Text>
        <Text style={styles.restaurantCatogory}>
          Food • Drink • Fink • Drood
        </Text>

        <RatingStars size={20} style={styles.ratingStars} />

        {/* Address detail */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>ADDRESS</Text>
          <Text style={styles.addressDetail}>
            22 Watton st, Werribee, VIC 3030
          </Text>
        </View>

        {/* Introduction text */}
        <View style={styles.introductionContainer}>
          <Text style={styles.introductionDescription}>
            High-quality, fresh ingredients are important for flavor, and you
            can also experiment with various toppings to design innovative
            pizzas.
          </Text>
        </View>

        {/* Menu */}
        <MenuList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    backgroundColor: 'red',
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
});
