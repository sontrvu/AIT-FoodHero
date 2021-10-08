import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";

import MainHeader from "../view/MainHeader";


function Main(props) {
    return (
        <View>
            <MainHeader />

            <View style={{backgroundColor: 'red', height: 100, flexDirection: 'row'}}>
                <View style={{backgroundColor: 'white', flex: 1 }}>

                </View>
                <View style={{backgroundColor: 'white', flex: 2 }}>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Main;