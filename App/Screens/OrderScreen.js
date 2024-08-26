import React from "react";
import {SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {useFonts} from "expo-font";
import {Entypo} from "@expo/vector-icons";
import {center} from "@shopify/react-native-skia";

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
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
                <Entypo style={{marginLeft: -120}} name="chevron-left" size={24} color="black" />
                <Text style={{marginLeft: 110, fontFamily: "Sora-Medium", fontSize: 20}}>Order</Text>
            </View>

            <View style={{marginTop: 50}}>
                <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 10}}>
                    <TouchableOpacity style={{backgroundColor: '#b9814e', width: 150, height: 40, borderRadius: 10}}>
                        <Text style={{left: 50, top: 5, color: '#FFF', fontFamily: "Sora-Regular"}}>Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 10, width: 150, height: 40}}>
                        <Text style={{left: 40, top: 5, fontFamily: "Sora-Regular"}}>Pick Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View>
                    <Text>Delivery Address</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
