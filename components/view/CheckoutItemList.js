import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as AppConstant from '../../helpers/appConstant';

export default function CheckoutItemList({ data, totalPrice = 0 }) {
  const totalPriceString = '$' + totalPrice.toFixed(2);

  const renderItem = ({ item }) => <Item itemData={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.listTile}>YOUR ITEMS</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={styles.totalPrice}>{totalPriceString}</Text>
      </View>
    </View>
  );
}

function Item({ itemData }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemQuantityContainer}>
        <Text style={styles.itemQuantity}>{itemData.quantity}</Text>
        <Feather name="x" size={16} color="black" />
      </View>
      <Text style={styles.itemName}>{itemData.name}</Text>
      <Text style={styles.itemPrice}>{'$' + (itemData.price * itemData.quantity).toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  listTile: {
    fontSize: 12,
  },
  listContainer: {
    marginTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  itemContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  itemQuantityContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemQuantity: {
    fontWeight: 'bold',
    marginRight: 2,
  },
  itemName: {
    flex: 6,
  },
  itemPrice: {
    flex: 2,
    textAlign: 'right',
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
  totalContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  totalLabel: {
    fontWeight: 'bold',
    flex: 1,
  },
  totalPrice: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
});
