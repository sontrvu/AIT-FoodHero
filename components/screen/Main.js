import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import MainHeader from "../view/MainHeader";

import { NavigationContainer } from '@react-navigation/native';

function Main(props) {
    return (
        <View>
            <MainHeader />
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Main;