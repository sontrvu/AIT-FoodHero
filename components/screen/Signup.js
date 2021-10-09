import React from 'react'
import { Text,View, StyleSheet,TextInput,Button,TouchableOpacity } from 'react-native'
import * as AppConstant from "../../helpers/appConstant";
import Constants from 'expo-constants';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Signup() {

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.loginTextHeader}>Signup</Text>
                <Text style={styles.loginText}>Enter your details to subscribe</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.input} placeholder="Enter your name"></TextInput>
                <Text style={styles.text}>Surname</Text>
                <TextInput style={styles.input} placeholder="Enter your surname"></TextInput>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.buttonText}>Singup</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={22} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>

            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        marginTop: Constants.statusBarHeight,
        flex:1,
    },
    header:{
        flex:1,
        borderStyle:'solid',
        borderLeftWidth:0,
        borderWidth:3,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        borderColor:AppConstant.COLOR_PRIMARY,
        padding:15,
        maxWidth:250,
        maxHeight:110,
        marginTop:25,
    },
    body:{
        flex:3.5,
        paddingHorizontal:20,
        marginTop:10,
    },
    footer:{
        height:50,
        backgroundColor:AppConstant.COLOR_PRIMARY,
        width:200,
        borderTopLeftRadius:35,
        alignSelf:'flex-end',
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
        marginTop:5,
        marginLeft:15,
    },
    input:{
        height:50,
        backgroundColor:"#E0E0E0",
        width:320,
        borderRadius:25,
        paddingLeft:15,
        fontWeight:'bold',
        marginBottom:5,
    },
    button:{
        backgroundColor:AppConstant.COLOR_PRIMARY,
        width:120,
        height:50,
        borderRadius:25,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginTop:30,
        alignSelf:'flex-end',
        //flex:1,
    },
    buttonText:{
        fontSize:16,
        color:"#E0E0E0",
        fontWeight:'bold',
    },
});

export default Signup
