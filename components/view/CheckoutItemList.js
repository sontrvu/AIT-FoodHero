import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as AppConstant from '../../helpers/appConstant';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dimsum',
    quantity: 3,
    price: '$4.99',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    quantity: 3,
    price: '$5.99',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    quantity: 3,
    price: '$6.99',
  },
  {
    id: '58694a0f-3da1-471f-ifjc-145571e29d72',
    name: '4rd Item Hehehe',
    quantity: 3,
    price: '$8.99',
  },
];

export default function CheckoutItemList() {
  const renderItem = ({ item }) => <Item itemData={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.listTile}>YOUR ITEMS</Text>
      <FlatList
        style={styles.listContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        bounces={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={styles.totalPrice}>$99.99</Text>
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
      <Text style={styles.itemPrice}>{itemData.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
