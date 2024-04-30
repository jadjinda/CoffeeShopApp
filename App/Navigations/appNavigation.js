import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import FavScreen from "../Screens/FavScreen";
import OrderScreen from "../Screens/OrderScreen";
import NotifScreen from "../Screens/NotifScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet } from "react-native";
//import { BlurView } from "expo-blur"


const Tab = createBottomTabNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle:{
                        position: "absolute",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                    tabBarBackground: () => (
                        <BlurView
                            intensity={80}
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                overflow: "hidden",
                                backgroundColor: "transparent",
                            }}
                        />
                    ),
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Fav" component={FavScreen} />
                <Tab.Screen name="Order" component={OrderScreen}/>
                <Tab.Screen name="Notif" component={NotifScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
