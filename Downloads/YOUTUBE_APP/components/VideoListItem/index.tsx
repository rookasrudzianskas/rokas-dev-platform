import React from 'react';
import {View, Image, Text, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

interface VideoListItemProps {
    video: {
        id: string,
        createdAt: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        user: {
            name: string,
            image?: string,
        },
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    // console.log(props);
    const {video} = props;
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;

    let viewsString = video.views.toString();
    if (video.views > 1_000_000){
        viewsString = (video.views / 1_000_000).toFixed(1) + 'M'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed() + 'K'
    }

    const navigation = useNavigation();

    const openVideoPage = () => {
       // @ts-ignore
        navigation.navigate('VideoScreen', {id: video.id});
    }

    return (
        <View style={tw``}>
    {/*// @ts-ignore*/}
            <TouchableOpacity activeOpacity={0.8} onPress={openVideoPage}>
                <View style={tw`mb-10`}>
                    <View>
                        <Image source={{ uri: video?.thumbnail}} style={{ width: '100%', aspectRatio: 16/9 }} />
                        <View style={tw`bg-black opacity-75 rounded-md h-5 w-12 flex items-center justify-center absolute right-2 bottom-4`}>
                            <Text style={tw`text-white`}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                        </View>
                    </View>

                    <View style={tw`mt-3 pl-2`}>
                        {/*    avatar   */}
                        <View style={tw`flex flex-row items-center `}>
                            <View style={tw`w-10 h-10`}>
                                <Image style={tw`w-14 h-14 rounded-full`} source={{uri: video?.user?.image}} />
                            </View>

                            {/*    middle container */}
                            <View style={tw`flex flex-row items-center justify-center`}>
                                <View style={tw`flex mr-10`}>
                                    <View style={tw`ml-6 flex flex-col justify-center mt-3`}>
                                        <Text numberOfLines={2} style={tw`text-gray-100`}>{video?.title}</Text>
                                        <View style={tw`flex flex-row mt-1`}>
                                            <Text style={tw`text-gray-400 mr-3`}>
                                                {video?.user?.name}
                                            </Text>

                                            <Text style={tw`text-gray-400 mr-3`}>
                                                {viewsString} Views
                                            </Text>

                                            <Text style={tw`text-gray-400`}>
                                                {video?.createdAt}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={tw`-ml-2`}>
                                    <Entypo name="dots-three-vertical" size={18} color="white" />
                                </View>
                            </View>
                        </View>

                        {/*    title row    */}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default VideoListItem;
