import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View,Image } from "react-native";
import * as AppConstant from "../../helpers/appConstant";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Splash extends Component{

    componentDidMount(){
        //method that gets called after a component is mounted
        setTimeout (() =>{
            this.props.navigation.navigate("Login");
        }, 2000)
    }
    render()
    {
        return(
            <View style={styles.splash}>
                <Text style={{fontSize:40, color:"white"}}> Food Hero</Text>
                {/*<Image source={require('./assets/favicon.png')}></Image>*/}
            </View>
        );
    }
}

const styles=StyleSheet.create({
    splash:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:AppConstant.COLOR_PRIMARY,
    }
});
