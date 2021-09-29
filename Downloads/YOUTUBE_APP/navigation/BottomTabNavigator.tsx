import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {AntDesign, Entypo, FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";
import TabOneScreen from '../screens/TabOneScreen';
import { BottomTabParamList } from '../types';
import TabTwoScreen from "../screens/TabTwoScreen";
import HomeScreen from '../screens/HomeScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    // @ts-ignore
    // @ts-ignore
    return (
        <BottomTab.Navigator
    // @ts-ignore
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false,
                // activeTintColor: '#274156', activeBackgroundColor: '#fbfcff', inactiveBackgroundColor: '#fbfcff'
            }}
    //         tabBarOptions={{  }}
        >
            <BottomTab.Screen
    // @ts-ignore
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) =><Foundation name="home" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
    // @ts-ignore
                name="Explore"
                component={TabOneScreen}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="compass-outline" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
    // @ts-ignore
                name="New"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
                // @ts-ignore
                name="Subscriptions"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
                // @ts-ignore
                name="Library"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-collection" size={24} color={color} />,
                }}

            />

        </BottomTab.Navigator>
    );
}


// backend
