import React from "react";
import {Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {useFonts} from "expo-font";
import {AntDesign, Entypo, Feather, SimpleLineIcons} from "@expo/vector-icons";
import { Divider} from 'react-native-paper';

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
                <View style={{flexDirection: 'row', backgroundColor: '#d5d5d5', borderRadius: 10}}>
                    <TouchableOpacity style={{backgroundColor: '#b9814e', width: 150, height: 40, borderRadius: 10}}>
                        <Text style={{left: 50, top: 5, color: '#FFF', fontFamily: "Sora-Regular"}}>Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 10, width: 150, height: 40}}>
                        <Text style={{left: 40, top: 5, fontFamily: "Sora-Regular"}}>Pick Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={{marginTop: 30, marginLeft: -30}}>
                    <Text style={{fontFamily: "Sora-Medium", fontSize: 16}}>Delivery Address</Text>
                    <Text style={{fontFamily: "Sora-Medium", fontSize: 13, marginTop: 15}}>JI. Kpg Sutoyo</Text>
                    <Text style={{fontFamily: "Sora-Medium", fontSize: 10.5, marginTop:5, color: "#bebcba"}}>Kpg. SutoyoNo. 620, Bilzen, Tanjungbalai</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 100, width: 130, height: 30, marginLeft: -30}}>
                        <Feather name="edit" size={20} style={{marginLeft: 10, top: 2}} color="#bebcba" />
                        <Text style={{top: -18, left: 35, color: "black", fontFamily: "Sora-Light", fontSize: 10}}>Edit Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 100, width: 100, height: 30, marginLeft: 110, top: -30}}>
                        <SimpleLineIcons name="notebook" size={15} style={{marginLeft: 10, top: 4}} color="#bebcba"/>
                        <Text style={{top: -14, left: 30, color: "black", fontFamily: "Sora-Light", fontSize: 10}}>Add Note</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={{width: 250}} />
                <View>
                    <View style={{width: 100, height: 60, marginTop: 20, left: -30}}>
                        <Image source={require('../../assets/1.png')} style={{flex: 1, aspectRatio: 1.2, resizeMode: 'contain'}}/>
                    </View>
                    <View style={{marginTop: -55, left: 50}}>
                        <Text style={{fontFamily: "Sora-Medium", fontSize: 14}}>Cappucino</Text>
                        <Text style={{fontFamily: "Sora-Medium", fontSize: 10.5, marginTop:5, color: "#bebcba"}}>with Chocolate</Text>
                    </View>
                    <View style={{marginTop: -55, left: 200}}>
                        <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 200, width: 30, height: 30, marginTop: 20, left: -10}}>
                            <AntDesign name="minus" style={{top: 5, left: 6}} size={15} color="black" />
                        </TouchableOpacity>
                        <Text style={{marginTop: -30, left: 30}}>1</Text>
                        <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 200, width: 30, height: 30, marginTop: -25, left: 50}}>
                            <AntDesign name="plus" style={{top: 5, left: 6}} size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Divider style={{width: 400, marginTop: 35, height: 10}} />
        </SafeAreaView>
    );
}
