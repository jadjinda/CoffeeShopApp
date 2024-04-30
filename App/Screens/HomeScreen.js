import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FavScreen from "./FavScreen";
import NotifScreen from "./NotifScreen";
import {StatusBar, Text, View, StyleSheet} from "react-native";
import Header from "../Components/Header";

const Tab = createBottomTabNavigator();
export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <StatusBar/>
            <Header/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7EE",
    }
})
