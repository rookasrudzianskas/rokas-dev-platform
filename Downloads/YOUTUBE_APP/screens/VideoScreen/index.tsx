import React, {useRef} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Pressable, FlatList, SafeAreaView} from "react-native";
import tw from "tailwind-react-native-classnames";
import video from '../../assets/data/video.json';
import {AntDesign} from "@expo/vector-icons";
import videos from "../../assets/data/videos.json";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";
import BottomSheet, {BottomSheetModal} from "@gorhom/bottom-sheet";
import VideoComments from "../../components/VideoComments";
import VideoComment from "../../components/VideoComment";
import comments from '../../assets/data/comments.json';

const VideoScreen = () => {

    let viewsString = video.views.toString();
    if (video.views > 1_000_000){
        viewsString = (video.views / 1_000_000).toFixed(1) + 'M';
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'K';
    }
    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.expand();
        // console.warn("Rokas");
    }

    return (
        <View style={tw`mt-12`}>
            <View style={tw``}>
                {/*<Image source={{uri: video?.thumbnail}} style={{width: '100%', aspectRatio: 16/9}} />*/}
                <VideoPlayer thumbnailURI={video?.thumbnail} videoURI={video?.videoUrl}/>
            </View>

            <View style={tw`flex`}>
            <ScrollView>
                <View style={tw`flex flex-col px-3`}>
                    <View style={tw`flex flex-row items-center mt-6`}>
                        <Text style={tw`text-blue-500`}>{video?.tags}</Text>
                    </View>

                    <View style={tw`mt-3`}>
                        <Text style={tw`text-lg text-gray-100`}>{video?.title}</Text>
                    </View>

                    <View style={tw`flex flex-row mt-3`}>
                        <Text style={tw`text-gray-300`}>{viewsString}</Text>
                        <Text style={tw`text-gray-300 ml-3`}>{video.createdAt}</Text>
                    </View>

                    <View style={tw`mt-3`}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View style={tw`flex items-center`}>
                                <AntDesign name="like1" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.likes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="dislike2" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="export" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={tw`mt-3 border-t-2 border-gray-600  border-b-2 border-gray-600`}>
                        <View style={tw`flex flex-row items-center my-2`}>
                            <View style={tw``}>
                                <Image source={{uri: video?.user?.image}} style={tw`w-10 h-10 rounded-full`} />
                            </View>
                            <View style={tw`flex flex-col ml-2 justify-center flex-1`}>
                                <Text style={tw`text-gray-100 text-lg`}>{video.user.name}</Text>
                                <Text style={tw`text-gray-400`}>{video?.user?.subscribers} subscribers</Text>
                            </View>

                            <View style={tw`flex `}>
                                <Text style={tw`text-lg text-red-500`}>SUBSCRIBE</Text>
                            </View>
                        </View>
                    </View>


                    <View style={tw`mt-4 flex`}>
                        <Pressable>
                            <View style={tw``}>
                                <View style={tw`flex flex-row`}>
                                    <Text style={tw`text-gray-100 text-lg`}>Comments</Text>
                                    <Text style={tw`text-gray-400 text-lg ml-3`}>300</Text>
                                </View>
                                <View style={tw``}>
                                    <TouchableOpacity  onPress={openComments} activeOpacity={0.8}>
                                        <View style={tw`flex flex-row items-center my-2`}>
                                    {/*<VideoComment comment={comments[0]}/>*/}
                                            <Text style={tw`text-white`}>Open the comments</Text>
                                            {/*<VideoComments />*/}

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                {/*    recommended */}
                    <View style={tw`mt-10`}>
                        {/*<VideoListItem />*/}
                        <FlatList style={{marginBottom: 250}} data={videos} renderItem={({item}) => (
                            <VideoListItem key={item.id} video={item} />
                        )}/>
                    </View>
                </View>
            </ScrollView>

            <BottomSheet
                style={tw`bg-gray-800`}
                backgroundComponent={() => <View style={{backgroundColor: 'blue'}} />}
                ref={commentsSheetRef} snapPoints={[0, '100%']} index={-1}>
                <View style={tw`flex bg-gray-800 flex-1`}>
                    <VideoComments />
                </View>
            </BottomSheet>

            </View>
        </View>
    );
};

export default VideoScreen;


// const VideoScreenWithRecommendation = () => {
//     return (
//         <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
//             <BottomSheetModalProvider>
//                 <FlatList
//                     data={videos}
//                     renderItem={({item}) => <VideoListItem video={item} />}
//                     ListHeaderComponent={VideoScreen}
//                 />
//             </BottomSheetModalProvider>
//         </SafeAreaView>
//     )
// }
//
// export default VideoScreenWithRecommendation;

// done with comments
