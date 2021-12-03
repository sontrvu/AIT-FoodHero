import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AppConstant from '../../helpers/appConstant';

export default function RestaurantList({ title, data }) {
  const renderItem = ({ item }) => <Item itemData={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.listTile}>{title}</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
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
    navigation.navigate('RestaurantDetail', itemData);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image
        style={styles.itemImage}
        source={{
          uri: itemData.imageUrl || 'https://nantucket.net/wp-content/uploads/2020/09/placeholder-768x512.png',
        }}
      />
      <View style={styles.itemInfo}>
        <View style={{ flex: 3 }}>
          <Text style={styles.itemTitle}>{itemData.restaurantName}</Text>
          <Text style={styles.itemCategory}>{itemData.categories}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemPrice}>{itemData.price || '$01'}</Text>
          <Text style={styles.itemDistance}>{itemData.distance || '0km'}</Text>
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
  itemContainer: {
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
