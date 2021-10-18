import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet, Text, TouchableOpacity,
    View
} from 'react-native';
import HomeScreen from "../../src/screens/HomeScreen";
import MatchesScreen from "../../src/screens/MatchesScreen";
import {FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {useNavigation} from "@react-navigation/native";


const SecondPartOfHomeScreen = () => {

    const color = '#b5b5b5';
    const activeColor = '#ff0065';
    const [activeScreen, setActiveScreen] = useState('HOME');
    const navigation = useNavigation();

    const goToHome = () => {
        setActiveScreen('HOME');
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.pageContainer}>
                <View style={[tw`flex flex-row mt-6`, {justifyContent: 'space-around', width: '100%'}]}>
                    <TouchableOpacity onPress={goToHome}>
                        <Fontisto name="tinder" size={30} color={activeScreen === 'HOME' ? activeColor  : color} />
                    </TouchableOpacity>
                    <MaterialCommunityIcons name="star-four-points" size={30} color={color} />
                    <Pressable onPress={() => setActiveScreen('CHAT')}>
                        <Ionicons name="ios-chatbubbles" size={30} color={activeScreen === 'CHAT' ? activeColor  : color} />
                    </Pressable>
                    <FontAwesome name="user" size={30} color={color} />
                </View>

                <HomeScreen />

                {/*<MatchesScreen />*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
});

export default SecondPartOfHomeScreen;
