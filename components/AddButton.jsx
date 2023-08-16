import { React } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalVars, globalStyles } from '../styles/globalStyles.js';

export default function({ pressHandler, text }) {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={[styles.container, globalStyles.shadow]}>
                <Entypo name="plus" size={28} color={globalVars.primaryText} style={styles.icon}/>
                <Text style={styles.text}>Create {text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalVars.highlightColor,
        borderRadius: globalVars.borderRadius,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        borderColor: globalVars.accentColor,
        borderWidth: 1,
        flexDirection: 'row',
    },
    text: {
        color: globalVars.primaryText,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }
});