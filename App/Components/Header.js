import React from "react";
import {Image, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import {Entypo, Feather} from "@expo/vector-icons";

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={{color:'white',marginTop: -150, left: -85}}>Location</Text>
                        <Text style={{color:'white', left: -140, marginTop: -90}}>Lomé, TOGO
                            <Entypo name="chevron-small-down" size={15} color="white" /></Text>
                        <Image source={require('../../assets/avatar.png')} style={styles.profile}/>
                    </View>
                    <TextInput placeholder='Search coffee' placeholderTextColor="white" style={styles.searchBar} ></TextInput>
                    <Feather name="search" size={20} color="white" style={{marginTop: 30, marginLeft: -300}}/>
                    <View style={styles.filterBtn}>
                        <Image source={require('../../assets/icon/filter-32.svg')}/>
                    </View>
                </View>
                <View style={styles.body}></View>
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
        height:320,
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
    profile:{
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop: -120,
        right: -40
    },
    searchBar:{
        marginTop: 150,
        left: 30,
        borderWidth: 0,
        backgroundColor: '#313132',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 40,
        width: 300,
        height: 60,
        position: 'absolute',
    },
    filterBtn:{
        backgroundColor: '#b9814e',
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop:-35,
        left: 100
    },
    body:{
        width: 400,
        height: 550,
        backgroundColor:'#FFF',
        position:'relative',
        top: 0,
    }
})
