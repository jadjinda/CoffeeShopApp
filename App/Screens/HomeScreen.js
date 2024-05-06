import React from "react";
import {StatusBar, Text, View, StyleSheet} from "react-native";
import Header from "../Components/Header";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
export default function HomeScreen(){
    const bottomTabBarHeight = useBottomTabBarHeight();
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
    }
})
