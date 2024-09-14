import React, {Component, useState, useEffect, useRef} from "react";
import {View, Button, Text, Dimensions, StyleSheet, Alert, TouchableOpacity, Image, ScrollView} from "react-native";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {AntDesign, FontAwesome6, MaterialCommunityIcons} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";

export default function NotifScreen() {
    const refRBSheet = useRef();
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    const userLocation = async ()=>{
        let{status}= await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
            Alert('Permission to access location was denied')
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });
        console.log(location.coords.latitude, location.coords.longitude);
    }

    useEffect(()=>{
        userLocation();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MapView style={styles.map}
                     region={mapRegion}
            >
                <Marker coordinate={mapRegion} title='Marker'/>
            </MapView>
            <View style={{flexDirection: 'row',top: -670}}>
                <TouchableOpacity
                    style={{backgroundColor: '#FFFFFF', width: 40, height: 40,left: -110, alignItems: 'center', borderRadius: 10}}
                >
                    <AntDesign name="left" size={20} color="black" style={{top: 10}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: '#FFFFFF', width: 40, height: 40,left: 110, alignItems: 'center', borderRadius: 10}}
                >
                    <FontAwesome6 name="location-crosshairs" size={20} color="black" style={{top: 10}}/>
                </TouchableOpacity>
            </View>
            <View style={{top: -150}}>
                <TouchableOpacity
                    style={{backgroundColor: '#b9814e', width: 200, alignItems: 'center', height: 50, borderRadius: 8}}
                    onPress={() => refRBSheet.current.open()}
                >
                    <Text style={{fontFamily: 'Sora-Medium', top: 10, color: '#FFFFFF'}}>Info</Text>
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={refRBSheet}
                useNativeDriver={true}
                height={350}
                closeOnDragDown={true}
                animationType="slide"
                openDuration={400}
                closeDuration={400}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20
                    },
                    draggableIcon: {
                        top: -30,
                        width: 50
                    },
                }}>
                <View
                    contentContainerStyle={{alignItems: 'center', height: 850 }}
                >
                    <View style={{top: -20, alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Sora-Medium'}}>10 minutes left</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontFamily: 'Sora-Light', fontSize: 13, color: '#bebcba'}}>Delivery to</Text>
                            <Text style={{left: 5, fontFamily:'Sora-Medium', fontSize: 13}}>JI. Kpg Sutoyo</Text>
                        </View>
                    </View>
                    <View style={{height: 50, width: 200}}>
                        <DashedLine dashLength={60} dashGap={3} dashColor='#37c07d' dashThickness={4} style={{left: 25}}/>
                    </View>
                    <View style={{top: -20}}>
                        <View style={{flexDirection: 'row', borderWidth: 1, width: 300, height: 90, borderRadius: 8, borderColor: '#bebcba'}}>
                            <TouchableOpacity style={{borderWidth: 1, left: 10, borderRadius: 8, width: 60,
                                height: 60, alignItems: 'center', top: 15, borderColor: '#bebcba'}}>
                                <MaterialCommunityIcons name="bike" size={24} color="#b9814e" style={{top: 15}}/>
                            </TouchableOpacity>
                            <View style={{left: 20, top: 10}}>
                                <Text style={{fontFamily: 'Sora-Medium'}}>Deliver your order</Text>
                                <Text style={{fontFamily: 'Sora-Light', fontSize: 11, color: '#bebcba'}}>We deliver your goods to your in{'\n'}
                                    the shortes possible time.
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', top: 30}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../../assets/user.png')}/>
                                <View style={{left: 15}}>
                                    <Text style={{fontFamily: 'Sora-Medium'}}>Johan Hawn</Text>
                                    <Text style={{fontFamily: 'Sora-Light', fontSize: 12, color: '#bebcba'}}>Personal Courier</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{borderWidth: 1, borderColor: '#bebcba', borderRadius: 8, width: 57, left: 70, alignItems: 'center'}}
                            >
                                <FontAwesome6 name="phone-volume" size={20} color="#bebcba" style={{top: 17}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </RBSheet>
        </View>
    );
}


const styles = StyleSheet.create({
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})
