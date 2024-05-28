import React from "react";
import {StatusBar, View, StyleSheet} from "react-native";
import Header from "../Components/Header";
import Body from "../Components/Body";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <StatusBar/>
            <Header/>
            <Body/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
