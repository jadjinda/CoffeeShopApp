import React, {useCallback, useState} from "react";
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useFonts} from "expo-font";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {BlurView} from "expo-blur";
const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        id: 1,
        title: 'Cappuccino',
    },
    {
        id: 2,
        title: 'Machiato',
    },
    {
        id: 3,
        title: 'Latte',
    },
];
const CardData = [
    {
        id: 1,
        image: "../../assets/1.png",
        titre: "Cappucino",
        description: "with Chocolate",
        price: "$ 4.53"
    },
    {
        id: 2,
        image: "../../assets/2.png",
        titre: "Cappucino",
        description: "with Chocolate",
        price: "$ 4.53"
    },
    {
        id: 3,
        image: "../../assets/3.png",
        titre: "Cappucino",
        description: "with Chocolate",
        price: "$ 4.53"
    },
    {
        id: 4,
        image: "../../assets/4.png",
        titre: "Cappucino",
        description: "with Chocolate",
        price: "$ 4.53"
    }
]

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
);

const product = ({content}) => (
    <View style={{backgroundColor: "#FFFFFF", marginTop: 25, left: 15 ,width: 160, height: 260, borderRadius: 15}}>
        <Image source={content.image} style={{left: 10, top:10}}/>
        <BlurView blurAmount={10} style={{width: 55, height:30, marginTop: -120, left: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15 , overflow: 'hidden'}}>
            <AntDesign name="star" size={20} color="gold" style={{top: 2, left: 2}}/>
            <Text style={{color: 'white', left:25, top: -20, fontFamily: "Sora-Light", fontSize: 13}}>4.9</Text>
        </BlurView>
        <View style={{left: 15, marginTop: 100}}>
            <Text style={{fontFamily: "Sora-Bold", color: "black"}}>{[content.titre]}</Text>
            <Text style={{fontFamily: "Sora-Light", color:"black", fontSize: 13}}>{[content.description]}</Text>
            <Text style={{fontFamily: "Sora-Bold", color: "black", marginTop: 20}}>{[content.price]}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: "#b9814e", width: 50, height:50, left: 90, marginTop: -40, borderRadius: 15}}>
            <Entypo name="plus" size={50} color="white" />
        </TouchableOpacity>
    </View>
);

export default function Body(){
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

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#b9814e' : '#FFFFFF';
        const color = item.id === selectedId ? '#FFFFFF' : '#000000';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.body}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                        <View style={{backgroundColor: "#FFFFFF", marginTop: 25, left: 15 ,width: 160, height: 260, borderRadius: 15}}>
                            <Image source={require('../../assets/1.png')} style={{left: 10, top:10}}/>
                            <BlurView blurAmount={10} style={{width: 55, height:30, marginTop: -120, left: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15 , overflow: 'hidden'}}>
                                <AntDesign name="star" size={20} color="gold" style={{top: 2, left: 2}}/>
                                <Text style={{color: 'white', left:25, top: -20, fontFamily: "Sora-Light", fontSize: 13}}>4.9</Text>
                            </BlurView>
                            <View style={{left: 15, marginTop: 100}}>
                                <Text style={{fontFamily: "Sora-Bold", color: "black"}}>Cappucino</Text>
                                <Text style={{fontFamily: "Sora-Light", color:"black", fontSize: 13}}>with Chocolate</Text>
                                <Text style={{fontFamily: "Sora-Bold", color: "black", marginTop: 20}}>$ 4.53</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: "#b9814e", width: 50, height:50, left: 90, marginTop: -40, borderRadius: 15}}>
                                <Entypo name="plus" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: "#FFFFFF", marginTop: 25, left: 15 ,width: 160, height: 260, borderRadius: 15}}>
                            <Image source={require('../../assets/2.png')} style={{left: 10, top:10}}/>
                            <BlurView blurAmount={10} style={{width: 55, height:30, marginTop: -120, left: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15 , overflow: 'hidden'}}>
                                <AntDesign name="star" size={20} color="gold" style={{top: 2, left: 2}}/>
                                <Text style={{color: 'white', left:25, top: -20, fontFamily: "Sora-Light", fontSize: 13}}>4.9</Text>
                            </BlurView>
                            <View style={{left: 15, marginTop: 100}}>
                                <Text style={{fontFamily: "Sora-Bold", color: "black"}}>Cappucino</Text>
                                <Text style={{fontFamily: "Sora-Light", color:"black", fontSize: 13}}>with Chocolate</Text>
                                <Text style={{fontFamily: "Sora-Bold", color: "black", marginTop: 20}}>$ 4.53</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: "#b9814e", width: 50, height:50, left: 90, marginTop: -40, borderRadius: 15}}>
                                <Entypo name="plus" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: "#FFFFFF", marginTop: 25, left: 15 ,width: 160, height: 260, borderRadius: 15}}>
                            <Image source={require('../../assets/3.png')} style={{left: 10, top:10}}/>
                            <BlurView blurAmount={10} style={{width: 55, height:30, marginTop: -120, left: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15 , overflow: 'hidden'}}>
                                <AntDesign name="star" size={20} color="gold" style={{top: 2, left: 2}}/>
                                <Text style={{color: 'white', left:25, top: -20, fontFamily: "Sora-Light", fontSize: 13}}>4.9</Text>
                            </BlurView>
                            <View style={{left: 15, marginTop: 100}}>
                                <Text style={{fontFamily: "Sora-Bold", color: "black"}}>Cappucino</Text>
                                <Text style={{fontFamily: "Sora-Light", color:"black", fontSize: 13}}>with Chocolate</Text>
                                <Text style={{fontFamily: "Sora-Bold", color: "black", marginTop: 20}}>$ 4.53</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: "#b9814e", width: 50, height:50, left: 90, marginTop: -40, borderRadius: 15}}>
                                <Entypo name="plus" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: "#FFFFFF", marginTop: 25, left: 15 ,width: 160, height: 260, borderRadius: 15}}>
                            <Image source={require('../../assets/4.png')} style={{left: 10, top:10}}/>
                            <BlurView blurAmount={10} style={{width: 55, height:30, marginTop: -120, left: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15 , overflow: 'hidden'}}>
                                <AntDesign name="star" size={20} color="gold" style={{top: 2, left: 2}}/>
                                <Text style={{color: 'white', left:25, top: -20, fontFamily: "Sora-Light", fontSize: 13}}>4.9</Text>
                            </BlurView>
                            <View style={{left: 15, marginTop: 100}}>
                                <Text style={{fontFamily: "Sora-Bold", color: "black"}}>Cappucino</Text>
                                <Text style={{fontFamily: "Sora-Light", color:"black", fontSize: 13}}>with Chocolate</Text>
                                <Text style={{fontFamily: "Sora-Bold", color: "black", marginTop: 20}}>$ 4.53</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: "#b9814e", width: 50, height:50, left: 90, marginTop: -40, borderRadius: 15}}>
                                <Entypo name="plus" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
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
    body:{
        top: -20,
        left: 10,
    },
    item: {
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        fontFamily: "Sora-Light"
    },
})
