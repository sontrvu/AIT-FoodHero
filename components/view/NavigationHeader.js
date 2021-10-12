import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

export default function NavigationHeader({ title }) {
  return (
    <View style={styles.topBar}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Entypo name="chevron-thin-left" size={35} color="white" />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <FontAwesome5 name="user-circle" size={35} color="white" />
        </View>
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
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
