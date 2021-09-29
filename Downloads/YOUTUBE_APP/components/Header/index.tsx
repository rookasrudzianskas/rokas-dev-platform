import React from 'react';
import {View, Image, Text, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {AntDesign, Feather, FontAwesome5} from "@expo/vector-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const Header = () => {
    return (
        <View style={tw`px-4 flex `}>
            <View style={tw`mt-16 flex flex-row border-b-2 border-gray-600`}>

                    <View style={tw`flex flex-row items-center flex-1 mb-2`}>
                        <AntDesign name="youtube" size={35} color="red" />
                        <Text style={tw`text-gray-100 ml-1 text-xl font-bold`}>Youtube</Text>
                    </View>

                    <View style={tw`flex items-center flex-row mb-2`}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <FontAwesome5 name="chromecast" size={24} color="white" style={tw`mx-2`} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <FontAwesome5 name="bell" size={24} color="white" style={tw`mx-2`} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Feather name="search" size={24} color="white" style={tw`mx-2`} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <FontAwesome5 name="user-circle" size={24} color="white" style={tw`mx-2`} />
                        </TouchableOpacity>
                    </View>

            </View>
        </View>
    );
};

export default Header;
