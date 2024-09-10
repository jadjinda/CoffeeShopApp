import React from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import {Divider} from "react-native-paper";

export default function DetailScreen(){
    return (
        <ScrollView
            contentContainerStyle={{alignItems: 'center' }}
        >
            <StatusBar/>
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
                <TouchableOpacity style={{flex: 1, left: 30, top: 8}}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontFamily: "Sora-Medium", fontSize: 20, flex: 2, left: 30}}>Detail</Text>
                <TouchableOpacity style={{top: 8}}>
                    <AntDesign name="hearto" size={24} color="black" style={{left: -30}}/>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 50, alignItems: 'center', height: 700}}>
                <Image source={require('../../assets/item.png')}/>
                <View style={{marginTop: 10}}>
                    <Text style={{fontFamily: "Sora-Medium", left: -110}}>Cappucino</Text>
                    <Text style={{fontFamily: "Sora-Medium", fontSize: 10.5, marginTop:5, color: "#bebcba", left: -110}}>with Chocolate</Text>
                </View>
                <View style={{flexDirection: "row", top: 10}}>
                    <TouchableOpacity style={{flexDirection: "row", left: -75}}>
                        <AntDesign name="star" size={24} color="gold" />
                        <Text style={{fontFamily: "Sora-Medium"}}>4.8(230)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: "#fff", left: 65, width: 40, height: 40, alignItems:"center", borderRadius: 7}}>
                        <MaterialCommunityIcons name="umbrella-beach" size={24} color="#b9814e" style={{top:7}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: "#fff", left: 75, width: 40, height: 40, alignItems:"center", borderRadius: 7}}>
                        <MaterialCommunityIcons name="lightning-bolt" size={24} color="#b9814e" style={{top:7}}/>
                    </TouchableOpacity>
                </View>
                <Divider style={{width: 320, top: 30}}/>
                <View style={{alignItems: "center", top: 50}}>
                    <Text style={{fontFamily: "Sora-Medium", left: -110}}>Description</Text>
                    <Text style={{fontFamily: "Sora-Medium", fontSize: 13.5, marginTop:5, color: "#bebcba", left: 10}}>A cappuccino is an approximately 150 ml (5oz) beverage, with 25 ml
                    of espresso coffee and 85ml of fresh milk thefo..<Text style={{color:"#b9814e"}}>Red More</Text></Text>
                </View>
                <View style={{alignItems: "center", top: 60}}>
                    <Text style={{fontFamily: "Sora-Medium", left: -140}}>Size</Text>
                    <View style={{flexDirection: "row", top: 10}}>
                        <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 10, width: 90, height: 40, alignItems: "center", left: -20}}>
                            <Text style={{fontFamily: "Sora-Medium", top: 5}}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderColor: "#b9814e", borderWidth: 1, borderRadius: 10, width: 90, height: 40, alignItems: "center", left: 0}}>
                            <Text style={{fontFamily: "Sora-Medium", top: 5, color: "#b9814e"}}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderColor: "#d5d5d5", borderWidth: 1, borderRadius: 10, width: 90, height: 40, alignItems: "center", left: 20}}>
                            <Text style={{fontFamily: "Sora-Medium", top: 5}}>L</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: "row", top: 100}}>
                    <View style={{left: -30}}>
                        <Text style={{color: '#bebcba', fontFamily: 'Sora-Medium'}}>Price</Text>
                        <Text style={{color: "#b9814e", fontFamily: "Sora-Medium", fontSize: 16}}>$4.53</Text>
                    </View>
                    <View style={{left: 30}}>
                        <TouchableOpacity style={{alignItems: 'center', backgroundColor: "#b9814e", width: 200, height: 50, borderRadius: 10}}>
                            <Text style={{color: "#ffffff", fontFamily: "Sora-Medium", top: 7}}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
