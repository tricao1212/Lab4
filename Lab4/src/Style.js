import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contactInfo : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar: {
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 25,
    },
    title: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: "blue",
        fontSize: 14,
        marginTop: 4,
    }
})