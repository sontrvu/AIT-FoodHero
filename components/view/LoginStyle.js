import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LoginStyle(props) {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.loginTextHeader}>Login</Text>
                <Text style={styles.loginText}>Please sign in to continue</Text>
            </View>
            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"></TextInput>
            </View>
        
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles=StyleSheet.create({
    headerContainer:{
        marginTop:100,
        borderStyle:'solid',
        borderLeftWidth:0,
        borderWidth:3,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        borderColor:AppConstant.COLOR_PRIMARY,
        padding:20,
        maxWidth:300,
    },
    loginTextHeader:{
        fontSize:35,
        fontWeight:'bold',
        color:AppConstant.COLOR_PRIMARY,
    },
    loginText:{
        fontSize:20,
        color:AppConstant.COLOR_PRIMARY,
    },
    text:{
        fontSize:20,
        color:AppConstant.COLOR_PRIMARY,
        fontWeight:'bold',
    },
    input:{
        height:50,
        backgroundColor:"#E0E0E0",
        width:300,
        borderRadius:25,
    },
    button:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        width:100,
        height:40,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        padding:5,
    },
    buttonText:{
        fontSize:20,
        color:"#E0E0E0",

    }



});

export default LoginStyle;