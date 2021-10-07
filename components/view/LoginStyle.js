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
                
            <View style={styles.bodyContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login {'>'}</Text>
                </TouchableOpacity>
            </View>     
            <View style={styles.footer}></View>      
            
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
        maxWidth:250,
    },
    bodyContainer:{
        marginTop:50,
        display:'flex',
        paddingHorizontal:20,
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
    },
    buttonText:{
        fontSize:18,
        color:"#E0E0E0",
        fontWeight:'bold',
    },
    footer:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        height:50,
        width:200,
        borderTopLeftRadius:35,
        alignSelf:'flex-end',
        marginTop:120,

    }

});

export default LoginStyle;