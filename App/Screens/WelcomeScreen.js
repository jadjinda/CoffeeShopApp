import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Image, TouchableOpacity, View, Text} from "react-native";
import {useFonts} from "expo-font";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {size} from "../constant/size";

export default function WelcomeScreen({navigation}){
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
        <SafeAreaView style={{ flex: 1,alignItems: 'center',
            justifyContent: 'center' }}>
            <StatusBar/>
            <View style={styles.container}>
                <Image source={require('../../assets/welcome.png')}
                       style={styles.logo}/>
                <View style={{marginTop: -50, justifyContent: "center"}}>
                    <Text style={styles.startText}>Coffee so good,{"\n"}
                        your taste buds{"\n"}
                        will love it</Text>
                    <Text style={styles.secondText}> The best grain, the finest roast, the{"\n"}
                        powerful flavor</Text>
                </View>
                <TouchableOpacity style={styles.btn}
                                  onPress={()=>navigation.navigate('HomeScreen')}>
                    <Text style={{color: 'white', marginTop:15, fontFamily: "Sora-Bold"}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: size.width,
        height: size.height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: size.width,
        height: size.height-250,
        justifyContent: 'center',
    },
    startText:{
        color: 'white',
        fontSize: hp(3),
        justifyContent: "center",
        fontFamily: "Sora-Bold",
        textAlign:'center'
    },
    secondText:{
        color:'white',
        textAlign:'center',
        fontFamily: "Sora-Thin",
        opacity: 0.9,
    },
    btn:{
        backgroundColor: '#b9814e',
        width: wp(70),
        height: hp(8),
        borderRadius: 15,
        marginTop: 20,
        alignItems: "center"
    }
})
