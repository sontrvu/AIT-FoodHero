import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

function MainHeader(props) {
  return (
    <View style={styles.topBar}>
      <View style={{ flexDirection: 'row' }}>
        {/* User address */}
        <View style={{ flex: 1 }}>
          <Text style={styles.addressLabel}>Address</Text>
          <Text style={styles.addressDetail}>20 Spencer St</Text>
        </View>

        {/* Profile button */}
        <View style={styles.profileIconContainer}>
          <FontAwesome5
            name="user-circle"
            size={35}
            color={AppConstant.COLOR_SECONDARY}
          />
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIconContainer}>
          <Ionicons name="search-outline" size={25} color="gray" />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder={'Restaurents, fast food, cuisine...'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: AppConstant.COLOR_PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  addressLabel: {
    fontSize: 13,
    color: AppConstant.COLOR_SECONDARY,
  },
  addressDetail: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: AppConstant.COLOR_SECONDARY,
  },
  profileIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  searchBarContainer: {
    marginTop: 15,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
  },
  searchIconContainer: {
    width: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    fontWeight: '500',
    fontSize: 18,
  },
});

export default MainHeader;
