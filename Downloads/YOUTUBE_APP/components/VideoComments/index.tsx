import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import comments from '../../assets/data/comments.json';
import tw from "tailwind-react-native-classnames";

const VideoComments = () => {
    return (
        <View style={tw`bg-gray-800`}>
            <View style={tw`flex items-center my-3 `}>
                <Text style={tw`flex items-center justify-center text-lg text-gray-100`}>Comments for this video</Text>
            </View>
            <FlatList
                data={comments}
                renderItem={({item}) => <VideoComment comment={item} />}
            />
        </View>
    )
}

export default VideoComments;
