import React from "react";
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import {useFonts} from "expo-font";
import {Entypo} from "@expo/vector-icons";

export default function OrderScreen(){
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
    return (
        <SafeAreaView style={{ flex: 1,alignItems: 'center'}}>
            <StatusBar/>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
                <Entypo style={{marginLeft: 0}} name="chevron-left" size={24} color="black" />
                <Text style={{marginLeft: 110, fontFamily: "Sora-Medium", fontSize: 20}}>Order</Text>
            </View>
            <View></View>
        </SafeAreaView>
    );
}
