import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Image, TouchableOpacity, View, Text} from "react-native";

export default function WelcomeScreen({navigation}){

    return(
        <SafeAreaView style={{ flex: 1,alignItems: 'center',
            justifyContent: 'center' }}>
            <StatusBar/>
            <View style={styles.container}>
                <Image source={require('../../assets/coffee.jpg')}
                       style={styles.logo}/>
                <View style={{marginTop: -50, justifyContent: "center"}}>
                    <Text style={styles.startText}>Coffee so good,{"\n"}
                        your taste buds{"\n"}
                        will love it</Text>
                    <Text style={styles.secondText}> The best grain, the finest roast, the{"\n"}
                        powerful flavor</Text>
                </View>
                <TouchableOpacity style={styles.btn}
                                  onPress={()=>navigation.navigate('Home')}>
                    <Text style={{color: 'white', marginTop:15, fontWeight: 'bold'}}>
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
        width: 500,
        height: 900,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        marginTop: -10,
        width:350,
        height: 500,
        justifyContent: 'center',
    },
    startText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 37,
        justifyContent: "center",
        fontFamily: 'Roboto',
        textAlign:'center'
    },
    secondText:{
        color:'white',
        textAlign:'center'
    },
    btn:{
        backgroundColor: '#b9814e',
        width: 300,
        height: 60,
        borderRadius: 15,
        marginTop: 20,
        alignItems: "center"
    }
})
