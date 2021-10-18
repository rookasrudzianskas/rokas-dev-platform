import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: "100%",
        borderRadius: 10,
        overflow: 'hidden',

        justifyContent: 'flex-end',
        backgroundColor: '#efefef',
    },
    card: {
        width: '100%',
        backgroundColor: '#efefef',
        height: '100%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
});

export default styles;
