import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SuggestedWatch from "../components/SuggestedWatch";
import { Auth } from 'aws-amplify';

// @ts-ignore
const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={tw`flex mt-16 items-center bg-black`}>
        <View style={tw`bg-black flex items-center`}>
            <Text style={tw`text-2xl text-white`}>Nothing here</Text>
            <Text style={tw`text-4xl text-green-500 mt-2 font-bold`}>404</Text>

            <TouchableOpacity activeOpacity={0.8} onPress={() => Auth.signOut()}>
                <View style={tw`mt-10 px-10 py-2 rounded-md`}>
                    <Text style={tw`text-lg font-bold`}>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}


export default TabOneScreen;
