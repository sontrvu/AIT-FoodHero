import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import { FontAwesome5 } from '@expo/vector-icons';


function MainHeader(props) {
    return (
        <View style={styles.topBar}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Address</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>20 Spencer St</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <FontAwesome5 name="user-circle" size={35} color="white" />
                </View>
            </View>
            <TextInput style={styles.searchBar}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 40,
        paddingBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: AppConstant.COLOR_PRIMARY, 
        // height: 150, 
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30
    },
    searchBar: {
        marginTop: 15,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30
    }
});

export default MainHeader;


