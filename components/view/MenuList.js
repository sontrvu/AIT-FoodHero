import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AppConstant from '../../helpers/appConstant';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dimsum',
    longDescription: 'High-quality, fresh ingredients are important',
    price: '$4.99',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    longDescription: 'For flavor, and you can also experiment with',
    price: '$5.99',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    longDescription: 'Various toppings to design innovative pizzas.',
    price: '$6.99',
  },
  {
    id: '58694a0f-3da1-471f-ifjc-145571e29d72',
    name: '4rd Item Hehehe',
    longDescription: 'Various toppings to design pizzas innovative toppings.',
    price: '$8.99',
  },
];

export default function MenuList() {
  const renderItem = ({ item }) => <Item itemData={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.listTile}>MENU</Text>
      <FlatList
        style={styles.listContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        bounces={false}
      />
    </View>
  );
}

function Item({ itemData }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Checkout');
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.itemName}>{itemData.name}</Text>
        <Text style={styles.itemPrice}>{itemData.price}</Text>
      </View>
      <Text style={styles.itemLongDescription}>{itemData.longDescription}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listTile: {
    fontSize: 12,
  },
  listContainer: {},
  itemContainer: {
    marginTop: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  itemName: {
    flex: 5,
    fontWeight: 'bold',
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
  itemLongDescription: {
    flex: 1,
    fontSize: 12,
    paddingTop: 4,
    paddingBottom: 8,
  },
});
