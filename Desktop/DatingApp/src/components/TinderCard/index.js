import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import tw from "tailwind-react-native-classnames";
import styles from "./style";

const TinderCard = (props) => {
    const {name, image, bio} = props.user;

    return (
            <View style={styles.card}>
                <View style={tw`flex-1 items-center justify-center`}>
                    <ImageBackground
                        style={styles.image}
                        source={{uri: image}} >
                        <View style={tw`p-6`}>
                            <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold',}}>{name}</Text>
                            <Text style={{fontSize: 18, color: 'white', lineHeight: 25,}}>{bio}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
    );
};

export default TinderCard;

