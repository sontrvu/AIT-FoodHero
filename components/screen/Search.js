import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, useState } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import Constants from 'expo-constants';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import MapView from 'react-native-maps';


// const [mapRegion, setmapRegion] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

function Search() {
    return (
        <View style={styles.container}>
            {/* <MapView style={styles.map} />
            region={mapRegion} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    // map:{
    //     alignSelf:"stretch",
    //     height:"100%"
    // }
});

export default Search;