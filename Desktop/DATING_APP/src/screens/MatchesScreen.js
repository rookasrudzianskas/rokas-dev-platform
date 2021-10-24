import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";
import users from "../../assets/data/users";
import {Auth, DataStore} from 'aws-amplify';
import {Match, User} from '../models';

const MatchesScreen = () => {
    const [matches, setMatches] = useState([]);
    const [me, setMe] = useState(null);


    const getCurrentUser = async () => {
        const user = await Auth.currentAuthenticatedUser();
        // console.log('This user', user);
        const dbUsers = await DataStore.query(User, u => u.sub('eq', user.attributes.sub));

        if(!dbUsers || dbUsers.length === 0) {
            return;
        }
        setMe(dbUsers[0]);
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    useEffect(() =>  {
        if(!me) {
            return;
        }
        const fetchMatches = async () => {
            // console.log(me.id);
            const result = await DataStore.query(Match, m => m.isMatch('eq', true).or(m1 => m1.User1ID('eq', me.id).User2ID('eq', me.id)),);
            // console.log("This is result about the users", result);
            setMatches(result);
        };
        fetchMatches();
    }, [me]);


    useEffect(() => {
        const subscription = DataStore.observe(Match).subscribe(msg => {
            console.log("This is message", msg.model, msg.opType, msg.element);

            if (msg.opType === 'UPDATE') {
                const newMatch = msg.element;
                if (
                    newMatch.isMatch &&
                    (newMatch.User1ID === me.id || newMatch.User2ID === me.id)
                ) {
                    console.log(
                        '+++++++++++++++++++ There is a new match waiting for you!',
                    );
                }
            }
        });

        return () => subscription.unsubscribe();
    }, [me]);

    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10}}>
                <View style={{padding: 10,}}>
                    <Text style={tw`font-bold text-xl text-pink-400`}>
                        New Matches 🚀
                    </Text>
                    <View style={styles.users}>
                        {matches.map((match, index) => {
                            const matchUser = match.User1ID === me.id ? match.User2 : match.User1;
                            if(!match.User1 || !match.User2) {
                                return (
                                    <View key={index} style={tw`items-center justify-center`}>
                                        <Text style={tw`font-bold text-xl`}>There is a new match 🔥</Text>
                                    </View>
                                )
                            }

                            return (
                            <View key={index} style={[styles.user, {marginHorizontal: 10, marginTop: 6}]}>
                                <Image source={{uri: matchUser?.image || 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg'}} style={styles.image} />
                                <Text>{matchUser?.name}</Text>
                            </View>
                        )}) }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;

const styles = StyleSheet.create({
    user: {
        width: 100,
        height: 100,
        // padding: 8,
        borderWidth: 2,
        borderColor: '#F63A6e',
        borderRadius: 100,
        padding: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
});

// backend
