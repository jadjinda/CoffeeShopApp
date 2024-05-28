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
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#b9814e',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () =>(
                    <BlurView
                        overlayColor=""
                        blurAmount={80}
                        style={styles.BlurViewStyles}
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

const styles = StyleSheet.create({
    tabBarStyle:{
        height: 80,
        position: 'absolute',
        backgroundColor: 'rgba(196,196,196,0.4)',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})
