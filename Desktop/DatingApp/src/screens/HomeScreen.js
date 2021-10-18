import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet, TouchableOpacity,
    View
} from 'react-native';
import TinderCard from "./../../src/components/TinderCard";
import AnimatedStack from "./../../src/components/AnimatedStack";
import {Entypo, FontAwesome, Ionicons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import {Match, User} from "../models";
import {Auth, DataStore} from 'aws-amplify';
import users from "../../assets/data/users";


const HomeScreen = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [me, setMe] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();

            const dbUsers = await DataStore.query(
                User,
                u => u.sub === user.attributes.sub,
            );
            if (dbUsers.length < 0) {
                return;
            }
            setMe(dbUsers[0]);
        };
        getCurrentUser().then();
    }, []);


    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(User);
            setUsers(fetchedUsers);
        };
        fetchUsers();
    }, []);

    const onSwipeLeft = () => {
        if(!currentUser || !me) {
            return;
        }
        console.warn('Swiped Left', currentUser?.name);
    }

    const onSwipeRight = async () => {
        if (!currentUser || !me) {
            return;
        }

        const myMatches = await DataStore.query(Match, match =>
            match.User1ID('eq', me.id).User2ID('eq', currentUser.id),
        );
        if (myMatches.length > 0) {
            console.warn('You already swiped right to this user');
            return;
        }

        const hisMatches = await DataStore.query(Match, match =>
            match.User1ID('eq', currentUser.id).User2ID('eq', me.id),
        );

        console.log('hisMatches');
        console.log('User1 ', currentUser.id);
        console.log('User2 ', me.id);
        console.log(hisMatches);

        if (hisMatches.length > 0) {
            console.log('Yay, this is a new match');
            const hisMatch = hisMatches[0];
            DataStore.save(
                Match.copyOf(hisMatch, updated => (updated.isMatch = true)),
            ).then();
            return;
        }

        console.warn('Sending him a match request!');
        const newMatch = new Match({
            User1ID: me.id,
            User2ID: currentUser.id,
            isMatch: false,
        });
        console.log(newMatch);
        DataStore.save(newMatch).then();
    };



    // console.warn(users);

    return (
        <View style={styles.pageContainer}>
            {users.length > 0  && <AnimatedStack setCurrentUser={setCurrentUser} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} data={users} renderItem={({item}) => <TinderCard user={item} />} />}
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginHorizontal: 10, marginTop: -80}}>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="undo" size={30} color="#FBD88B" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <Entypo name="cross" size={30} color="#F76C6B" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="star" size={30} color="#3AB4CC" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="heart" size={30} color="#4FCC94" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <Ionicons name="flash" size={30} color="#A65CD2" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        // marginTop: -100,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        // backgroundColor: '#ededed',
    },
});

export default HomeScreen;
