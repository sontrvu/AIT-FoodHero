import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as AppConstant from '../../helpers/appConstant';

export default function MenuList({ style, data, onCellPressed, onQuantityUpdated }) {
  const renderItem = ({ item }) => (
    <Item itemData={item} onCellPressed={onCellPressed} onQuantityUpdated={onQuantityUpdated} />
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.listTile}>MENU</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={false}
      />
    </View>
  );
}

function Item({ itemData, onCellPressed, onQuantityUpdated }) {
  const [quantity, setQuantity] = useState(0);

  const handleCellPressed = () => {
    onCellPressed(itemData);
  };

  const handleDecreasePressed = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityUpdated(itemData, newQuantity);
    }
  };

  const handleIncreasePressed = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityUpdated(itemData, newQuantity);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleCellPressed}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.itemName}>{itemData.name}</Text>
        <Text style={styles.itemPrice}>{'$' + itemData.price.toString()}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
        <Text style={styles.itemLongDescription}>{itemData.longDescription}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecreasePressed}>
            <Ionicons name="remove-circle-outline" size={24} color="red" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncreasePressed}>
            <Ionicons name="add-circle-outline" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  listTile: {
    fontSize: 12,
  },
  listContainer: {
    marginTop: 15,
  },
  itemContainer: {
    marginBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  itemName: {
    flex: 5,
    fontWeight: 'bold',
  },
  itemPrice: {
    flex: 1,
    paddingRight: 3,
    textAlign: 'right',
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
  itemLongDescription: {
    fontSize: 12,
    flex: 4,
  },
  // itemQuantity: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 20 / 2,

  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: AppConstant.COLOR_HIGHLIGHT,
  // },
  // itemQuantityText: {
  //   fontSize: 12,
  //   color: 'white',
  //   fontWeight: '600',
  // },
  quantityContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
