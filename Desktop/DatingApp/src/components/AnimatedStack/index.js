import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Animated, {
    interpolate, runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle, useDerivedValue,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';
import TinderCard from "../TinderCard";


const SWIPE_VELOCITY = 800;


const AnimatedStack = (props) => {

    const {data, renderItem, onSwipeRight, onSwipeLeft, setCurrentUser} = props;
    const ROTATION = 60;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(currentIndex + 1);
    const nextProfile = data[nextIndex];
    const currentProfile = data[currentIndex];
    const {width: screenWidth} = useWindowDimensions();
    const hiddenTranslateX = 2 * screenWidth;

    const translateX = useSharedValue(0); /// -width             0            width
    const rotate = useDerivedValue(() =>
        interpolate(                          // -60 - left,     0 - center,    60 - right
            translateX.value,
            [0, hiddenTranslateX],
            [0, ROTATION]) + 'deg');


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    rotate: rotate.value,
                }
            ],
        };
    });

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(
                    translateX.value,
                    [-hiddenTranslateX, 0, hiddenTranslateX],
                    [1, 0.8, 1],
                ),
            },
        ],
        opacity: interpolate(
            translateX.value,
            [-hiddenTranslateX, 0, hiddenTranslateX],
            [1, 0.5, 1],
        ),
    }));

    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
    }));

    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
    }));


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: (event) => {
            if(Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
            }

            // will return 1 if the sign is +, if it is - it will return -1
            translateX.value = withSpring(hiddenTranslateX * Math.sign(event.velocityX),
                {},
                () => runOnJS(setCurrentIndex)(currentIndex + 1),
            );

            const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
            onSwipe && runOnJS(onSwipe)();
                },
            },
        [currentProfile],

    );

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, [currentIndex, translateX]);


    useEffect(() =>  {
        setCurrentUser(currentProfile);
    }, [currentProfile, setCurrentUser]);


    return (
        <View style={styles.root}>
            {nextProfile && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                        {renderItem({item: nextProfile })}
                    </Animated.View>
                </View>
            )}
            {currentProfile ? (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <Animated.Image source={Like} style={[styles.like, {left: 10}, likeStyle]} />
                        <Animated.Image source={Nope} style={[styles.like, {right: 10}, nopeStyle]} />
                        {renderItem({item: currentProfile })}
                    </Animated.View>
                </PanGestureHandler>
            ) : (
                <View>
                    <Text style={tw`text-xl font-bold`}>No users found</Text>
                </View>
            )}

            {/*<TouchableOpacity onPress={() => sharedValue.value = withSpring(Math.random())}>*/}
            {/*    <Text style={tw``}>Change Value</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
    // return (
    //     <Text>Rokas</Text>
    // )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
    },
    animatedCard: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {

        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: 10,
        zIndex: 1,
    }
});

export default AnimatedStack;
