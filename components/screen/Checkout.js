import React from 'react';
import { Button, StyleSheet, Text, TextInput, View,Dimensions } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import { FontAwesome5, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import NavigationHeader from '../view/NavigationHeader';
import MapView from 'react-native-maps';

function Checkout(){

    return(
        <View style={styles.container}>
            <NavigationHeader title={"Checkout"}/>
            <View style={{padding:10,flex:0.5,justifyContent:'space-between',marginBottom:5}}>
                <Text style={{fontSize:20,marginBottom:5,fontWeight:'bold'}}>Restaurant name</Text>
                <Text>PICKUP AT</Text>
                <Text style={{fontWeight:'bold',fontSize:15}}>Restaurant address</Text>
            </View>
            <View style={{flex:2.5,margin:10,}}>
                <View style={{borderWidth:1,borderColor:AppConstant.COLOR_PRIMARY,marginBottom:10}}>
                    <MapView style={styles.map}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.addNoteBtn}>
                        <MaterialCommunityIcons name="note-text-outline" size={24} color="black" />
                        <Text >Add a note</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding:10,flex:2,justifyContent:'center',}}>
                <Text style={{marginBottom:5}}>YOUR ITEMS</Text>
                <View style={styles.details}>
                    <Text style={{fontWeight:'bold'}}>Qty</Text><Text>Item name</Text><Text style={{color:AppConstant.COLOR_PRIMARY,fontWeight:'bold'}}>Amount</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginBottom:5}}/>
                <View style={styles.details}>
                    <Text style={{fontWeight:'bold'}}>TOTAL</Text><Text style={{color:AppConstant.COLOR_PRIMARY,fontWeight:'bold'}}>Amount</Text>
                </View>
            </View>

            <View style={{alignItems:'center', flex:1}}>  
                <TouchableOpacity style={styles.payNowBtn}>
                    <Text style={{fontSize:20, padding:10,color:"white"}}>Pay now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        flex:1
    },
    map: {
        width: "100%",
        height:"100%",
        borderRadius:10,
        borderColor:AppConstant.COLOR_PRIMARY,
        
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,

    },
    addNoteBtn:{
        borderColor:AppConstant.COLOR_PRIMARY,
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:2,
        borderRadius:20,
        padding:5,
        borderColor:AppConstant.COLOR_PRIMARY,
    },
    payNowBtn:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        borderRadius:25,
        width:300,
        alignItems:'center',

    }

});
export default Checkout;