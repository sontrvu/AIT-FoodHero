import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

function LoginStyle() {

    const navigation = useNavigation();

    {/*const pressHandler =() =>{
        navigation.navigate("Signup")
    }*/}

    return (
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.loginTextHeader}>Login</Text>
                <Text style={styles.loginText}>Please login to continue</Text>
            </View>
                
            <View style={styles.bodyContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login  <FontAwesome5 name="arrow-alt-circle-right" size={24} color="black" /></Text>
                </TouchableOpacity>
            </View>     
            <Text style={styles.signUpBtn} onPress={() => navigation.navigate("Signup")}>Not registered, signup</Text>
            {/*<Button title="Go to Signup" onPress={pressHandler}/>*/}
            <View style={styles.footer}></View>
        </View>
    );
}

const styles=StyleSheet.create({
    mainContainer:{
        marginTop: Constants.statusBarHeight,
        //flex:1,
        //flexDirection:'column',
        //backgroundColor:"red",
    },
    headerContainer:{
        marginTop:25,
        borderStyle:'solid',
        borderLeftWidth:0,
        borderWidth:3,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        borderColor:AppConstant.COLOR_PRIMARY,
        padding:20,
        maxWidth:250,
        //flex:1,
        //backgroundColor:"red",
        //flexDirection:"column",
    },
    bodyContainer:{
        marginTop:50,
        //flex:1,
        display:'flex',
        paddingHorizontal:20,
        //backgroundColor:"green",
        //flexDirection:"column",
    },
    loginTextHeader:{
        fontSize:35,
        fontWeight:'bold',
        color:AppConstant.COLOR_PRIMARY,
    },
    loginText:{
        fontSize:15,
        color:AppConstant.COLOR_PRIMARY,
    },
    text:{
        fontSize:20,
        color:AppConstant.COLOR_PRIMARY,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:15,
    },
    input:{
        height:50,
        backgroundColor:"#E0E0E0",
        width:320,
        borderRadius:25,
        paddingLeft:15,
        fontWeight:'bold',
        marginBottom:20,
    },
    button:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        width:120,
        height:50,
        borderRadius:25,
        display:'flex',
        alignItems:'center',
        padding:10,
        marginTop:50,
        alignSelf:'flex-end',
        //flex:1,
    },
    buttonText:{
        fontSize:16,
        color:"#E0E0E0",
        fontWeight:'bold',
    },
    signUpBtn:{
        fontSize:15,
        maxWidth:160,
        color:AppConstant.COLOR_PRIMARY,
        alignSelf:'flex-end',
        padding:2,
        marginRight:20,
        marginTop:40,

    },
    footer:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        height:50,
        width:200,
        borderTopLeftRadius:35,
        alignSelf:'flex-end',
        marginTop:100,
    }

});

export default LoginStyle;