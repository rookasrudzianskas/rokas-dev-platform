import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet, Text, TouchableOpacity,
    View
} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import {FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import Amplify from 'aws-amplify'
import config from './src/aws-exports';
import { withAuthenticator } from "aws-amplify-react-native";
import ProfileScreen from "./src/screens/ProfileScreen";

Amplify.configure({
    ...config,
    Analytics: {
        disabled: true,
    },
});


const App = () => {

    const color = '#b5b5b5';
    const activeColor = '#ff0065';
    const [activeScreen, setActiveScreen] = useState('HOME');

    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.pageContainer}>
                {/*{activeScreen === 'HOME' || activeScreen === 'CHAT' && (*/}
                    <View style={[tw`flex flex-row mt-6`, {justifyContent: 'space-around', width: '100%'}]}>
                        <TouchableOpacity onPress={() => setActiveScreen('HOME')}>
                            <Fontisto name="tinder" size={30} color={activeScreen === 'HOME' ? activeColor  : color} />
                        </TouchableOpacity>
                        <MaterialCommunityIcons name="star-four-points" size={30} color={color} />
                        <Pressable onPress={() => setActiveScreen('CHAT')}>
                            <Ionicons name="ios-chatbubbles" size={30} color={activeScreen === 'CHAT' ? activeColor  : color} />
                        </Pressable>
                        <Pressable onPress={() => setActiveScreen('PROFILE')}>
                            <FontAwesome name="user" size={30} color={activeScreen === 'PROFILE' ? activeColor  : color} />
                        </Pressable>
                    </View>
                {/*)}*/}

                {/*<HomeScreen />*/}
                {activeScreen === 'HOME' && <HomeScreen />}
                {activeScreen === 'CHAT' && <MatchesScreen />}
                {activeScreen === 'PROFILE' && <ProfileScreen />}
                {/*<MatchesScreen />*/}
                <StatusBar style="auto" />
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

export default withAuthenticator(App);
