import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const SuggestedWatch = () => {
    return (
        <View style={tw`px-4`}>
            <View style={tw`flex flex-row items-center my-2 border-b-2 border-gray-500`}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-white w-12 py-2 rounded-full mb-2`}>
                        <Text style={tw`text-black ml-4`}>All</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`flex  bg-gray-900 w-16 border-2 border-gray-500 py-2 rounded-full ml-2 mb-2`}>
                        <Text style={tw` text-white ml-3`}>Mixes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-gray-900 w-16 border-2 border-gray-500 py-2 rounded-full ml-2 mb-2`}>
                        <Text style={tw`text-white ml-3`}>Music</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-gray-900 w-36 border-2 border-gray-500 py-2 pr-2 rounded-full ml-2 mb-2`}>
                        <Text style={tw`text-white ml-4`}>American English</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-gray-900 w-16 border-2 border-gray-500 py-2 rounded-full ml-2 mb-2`}>
                        <Text style={tw`text-white ml-3`}>Sales</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SuggestedWatch;
