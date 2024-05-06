import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import FavScreen from "../Screens/FavScreen";
import OrderScreen from "../Screens/OrderScreen";
import NotifScreen from "../Screens/NotifScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {Ionicons, Entypo, AntDesign} from "@expo/vector-icons";
import WelcomeScreen from "../Screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { BlurView } from 'expo-blur';
import {StyleSheet} from "react-native"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeNavigation(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#b9814e',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 30,
                    position: 'absolute'
                },
                tabBarBackground: () =>(
                    <BlurView
                        intensity={80}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            overflow: 'hidden',
                            backgroundColor: 'transparent'
                        }}
                    />
                ),
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => (
                                <Entypo name="home" size={24} color={focused? "#b9814e": "grey"} />
                            ),
                        }}/>
            <Tab.Screen name="Fav" component={FavScreen} options={{
                tabBarIcon: ({focused, color}) => (
                    <AntDesign name="heart" size={24} color={focused? "#b9814e": "grey"}/>
                ),
            }}/>
            <Tab.Screen name="Order" component={OrderScreen} options={{
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name="bag" size={24} color={focused? "#b9814e": "grey"}/>
                ),
            }}/>
            <Tab.Screen name="Notif" component={NotifScreen} options={{
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name="notifications" size={24} color={focused? "#b9814e": "grey"}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

function AppNavigation(props){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeNavigation} />
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Fav" options={{headerShown: false}} component={FavScreen} />
                <Stack.Screen name="Order" options={{headerShown: false}} component={OrderScreen} />
                <Stack.Screen name="Notif" options={{headerShown: false}} component={NotifScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
