import React from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import {useFonts} from "expo-font";

export default function Header(){
    const [fontLoaded] = useFonts({
        'Sora-Bold' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-Bold.ttf'),
        'Sora-ExtraBold' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-ExtraBold.ttf'),
        'Sora-ExtraLight' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-ExtraLight.ttf'),
        'Sora-Light' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-Light.ttf'),
        'Sora-Medium' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-Medium.ttf'),
        'Sora-Regular' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-Regular.ttf'),
        'Sora-SemiBold' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-SemiBold.ttf'),
        'Sora-Thin' : require('/home/user/Code/CoffeeShopApp/assets/fonts/Sora-Thin.ttf'),

    })

    if(!fontLoaded){
        return undefined;
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={{color:'white',marginTop: -150, left: -60, opacity:0.6, fontFamily: "Sora-Thin"}}>Location</Text>
                        <Text style={{color:'white', left: -60, marginTop: -90, fontFamily: "Sora-Light"}}>Lomé, TOGO
                            <Entypo name="chevron-small-down" size={15} color="white" /></Text>
                        <Image source={require('../../assets/avatar.png')} style={styles.profile}/>
                    </View>
                    <View style={styles.subHearderContent}>
                        <TextInput placeholder='Search coffee' placeholderTextColor="white" style={styles.searchBar}></TextInput>
                        <Feather name="search" size={20} color="grey" style={{top: 40, left:-140}}/>
                        <View style={styles.filterBtn}>
                            <AntDesign name="filter" size={30} color="white" style={{top: 10, left: 10}}/>
                        </View>
                    </View>
                </View>
                <View style={styles.headerCard}>
                    <Image source={require('../../assets/banner.png')} style={{borderRadius: 10, width: 300}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7EE",
    },
    mainContainer:{},
    header: {
        width: 400,
        height:290,
        backgroundColor:'#1f1f1f',
        alignItems: 'center',
        position: 'relative'
    },
    headerContent:{
        marginTop: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    subHearderContent:{
        top: -30,
        width: 450,
        height: 100,
        display: 'flex',
        alignItems:'center'
    },
    profile:{
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop: -120,
        right: -40
    },
    searchBar:{
        left: 55,
        top: 20,
        borderWidth: 0,
        backgroundColor: '#313132',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 50,
        width: 300,
        height: 60,
        position: 'absolute',
        opacity: 0.5
    },
    filterBtn:{
        backgroundColor: '#b9814e',
        width: 50,
        height: 50,
        borderRadius: 10,
        left: 100,
        top: 4,
    },
    headerCard:{
        width: 300,
        height: 140,
        top: -90,
        left: 30,
        borderRadius: 10
    },
})
