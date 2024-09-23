import React from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import {useFonts} from "expo-font";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {size} from "../constant/size";

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
                        <Text style={{color:'white',marginTop: -150, left: hp(-4), opacity:0.6, fontFamily: "Sora-Thin"}}>Location</Text>
                        <Text style={{color:'white', left: hp(-13), marginTop: -90, fontFamily: "Sora-Light"}}>Lomé, TOGO
                            <Entypo name="chevron-small-down" size={15} color="white" /></Text>
                        <Image source={require('../../assets/avatar.png')} style={styles.profile}/>
                    </View>
                    <View style={styles.subHearderContent}>
                        <TextInput placeholder='Search coffee' placeholderTextColor="white" style={styles.searchBar}></TextInput>
                        <Feather name="search" size={20} color="grey" style={{top: hp(5), left:hp(-16)}}/>
                        <View style={styles.filterBtn}>
                            <AntDesign name="filter" size={30} color="white" style={{top: hp(1), left: hp(1.5)}}/>
                        </View>
                    </View>
                </View>
                <View style={styles.headerCard}>
                    <Image source={require('../../assets/banner.png')} style={{borderRadius: 10, width: wp(84)}}/>
                    <View style={styles.promoText}>
                        <Text style={{color: "white", fontFamily: "Sora-Light", left: 5}}>Promo</Text>
                    </View>
                    <View style={{top: -15}}>
                        <View style={{backgroundColor: "black", width: 144, height: 20, top: 50, left: 10}}></View>
                        <View style={{backgroundColor: "black", width: 110, height: 13, top: 60, left: 10}}></View>
                        <Text style={{color: "white", top: 1, fontSize: 20, left: 10, fontFamily: "Sora-Bold"}}>Buy one get{"\n"}
                            one FREE</Text>
                        <View></View>
                    </View>
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
        width: size.width,
        height: size.height/2.7,
        backgroundColor:'#1f1f1f',
        alignItems: 'center',
        position: 'relative'
    },
    headerContent:{
        marginTop: size.height-670,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    subHearderContent:{
        top: size.height-810,
        width: size.width+90,
        height: size.height-50,
        display: 'flex',
        alignItems:'center'
    },
    profile:{
        width: size.width-310,
        height: size.height-730,
        borderRadius: 10,
        marginTop: size.height-900,
        right: hp(-3)
    },
    searchBar:{
        left: hp(9.5),
        top: size.height-760,
        borderWidth: 0,
        backgroundColor: '#313132',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 50,
        width: wp(85),
        height: hp(7),
        position: 'absolute',
        opacity: 0.5
    },
    filterBtn:{
        backgroundColor: '#b9814e',
        width: wp(15),
        height: hp(6),
        borderRadius: 10,
        left: hp(15.5),
        top: hp(0.8),
    },
    headerCard:{
        width: 300,
        height: 140,
        top: -90,
        left: 30,
        borderRadius: 10
    },
    promoText: {
        backgroundColor: "#ed5151",
        borderRadius: 5,
        marginTop: -130,
        left: 10,
        width: 70
    },
})
