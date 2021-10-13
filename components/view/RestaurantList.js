import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
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
    title: 'Dimsum',
    price: '$5.00',
    categories: 'Food • Drink',
    distance: '5km',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    price: '$5.00',
    categories: 'Food • Drink',
    distance: '5km',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: '$5.00',
    categories: 'Food • Drink',
    distance: '5km',
  },
];

export default function RestaurantList({ title }) {
  const renderItem = ({ item }) => <Item itemData={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.listTile}>{title}</Text>
      <FlatList
        style={styles.listContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
}

function Item({ itemData }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('RestaurantDetail');
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image
        style={styles.itemImage}
        source={{
          uri: 'https://www.slrlounge.com/wp-content/uploads/2016/03/monikawalecka-1.jpg',
        }}
      />
      <View style={styles.itemInfo}>
        <View style={{ flex: 3 }}>
          <Text style={styles.itemTitle}>{itemData.title}</Text>
          <Text style={styles.itemCategory}>{itemData.categories}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemPrice}>{itemData.price}</Text>
          <Text style={styles.itemDistance}>{itemData.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listTile: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 10,
  },
  item: {
    height: 270,
    width: 320,
    borderColor: 'red',
    borderRadius: 15,
    marginHorizontal: 10,
    overflow: 'hidden', // Seems not working
    backgroundColor: AppConstant.COLOR_PRIMARY,
  },
  itemImage: {
    flex: 1,
    width: '100%',
    borderRadius: 15,
  },
  itemInfo: {
    padding: 10,
    flexDirection: 'row',
  },
  itemTitle: {
    color: AppConstant.COLOR_SECONDARY,
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemPrice: {
    color: AppConstant.COLOR_SECONDARY,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
  },
  itemCategory: {
    marginTop: 5,
    color: AppConstant.COLOR_SECONDARY,
    fontSize: 12,
  },
  itemDistance: {
    marginTop: 5,
    color: AppConstant.COLOR_SECONDARY,
    fontSize: 12,
    textAlign: 'right',
  },
});
