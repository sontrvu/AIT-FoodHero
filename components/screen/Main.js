import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";

import MainHeader from "../view/MainHeader";


function Main(props) {
    return (
        <View>
            <MainHeader />

            <Text>Hello</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Main;