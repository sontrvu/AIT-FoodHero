import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as AppConstant from "../../helpers/appConstant";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from "../screen/Main";
import ProfileScreen from "../screen/Profile"
import SearchScreen from "../screen/Search"

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { padding: 5 } }}>
            <Tab.Screen name="Main" component={MainScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "ios-home" : "ios-home-outline"}
                            size={26} color="#19A2B1"
                            style={{ color: focused ? "#19A2B1" : "black" }} />
                    ), tabBarActiveTintColor: "#19A2B1"
                }} />

            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "map-search" : "map-search-outline"}
                            size={26} color="#19A2B1"
                            style={{ color: focused ? "#19A2B1" : "black" }} />
                    ), tabBarActiveTintColor: "#19A2B1"
                }} />

            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: 2,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "person-circle" : "person-circle-outline"}
                            size={28} color="#19A2B1"
                            style={{ color: focused ? "#19A2B1" : "black" }} />
                    ), tabBarActiveTintColor: "#19A2B1"
                }} />
        </Tab.Navigator>
    );
}

export default MyTabs;