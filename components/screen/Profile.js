import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import * as AppConstant from "../../helpers/appConstant";
import Constants from 'expo-constants';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ padding: 10, backgroundColor: AppConstant.COLOR_PRIMARY }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Profile</Text>
                </View>
                <View style={styles.headerDetails}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../../assets/logo.png')} style={{ width: 60, height: 60, borderRadius: 25 }}></Image>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 20 }}>Jeff</Text>
                        <Text style={{ fontSize: 15 }}>boss@gmail.com</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={{ padding: 10, backgroundColor: AppConstant.COLOR_PRIMARY }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Settings</Text>
                </View>
                <View style={{ flex: 1, marginTop: 10, padding: 5 }}>
                    <View style={styles.options} >
                        <Text style={{ flex: 4, fontSize: 16, fontWeight: "bold", color: AppConstant.COLOR_PRIMARY }}>Payment method</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Text style={{ flex: 4, fontSize: 16, fontWeight: "bold", color: AppConstant.COLOR_PRIMARY }} >Terms of Service</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Text style={{ flex: 4, fontSize: 16, fontWeight: "bold", color: AppConstant.COLOR_PRIMARY }}>Contacts</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Text style={{ flex: 4, fontSize: 16, fontWeight: "bold", color: AppConstant.COLOR_PRIMARY }}>Help</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Text style={{ flex: 4, fontSize: 16, fontWeight: "bold", color: AppConstant.COLOR_PRIMARY }}>Sign out</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("")}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text>FoodHero 2022 v1</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    headerContainer: {
        flex: 1,
        marginTop: 25,
    },
    bodyContainer: {
        flex: 3,
    },
    footerContainer: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E8E8E8",
    },
    headerDetails: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    options: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
});

export default Profile;