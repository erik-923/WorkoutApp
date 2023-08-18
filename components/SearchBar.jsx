import { React } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalVars } from '../styles/globalStyles.js';
import { AntDesign } from '@expo/vector-icons';

export default function() {
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <AntDesign 
                    name="search1" 
                    size={24} 
                    color={globalVars.secondaryText} 
                    />
            </View>
            <TextInput 
                style={styles.textInput} 
                placeholder="Search" 
                underlineColorAndroid="transparent"
                placeholderTextColor={globalVars.secondaryText}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    textInput: {
        backgroundColor: globalVars.secondaryBackground,
        paddingVertical: 5,
        paddingHorizontal: 15,
        flex: 1,
        borderBottomRightRadius: globalVars.borderRadius,
        borderTopRightRadius: globalVars.borderRadius,
        fontSize: 24,
        color: globalVars.secondaryText,
        
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalVars.secondaryBackground,
        paddingLeft: 10,
        borderBottomLeftRadius: globalVars.borderRadius,
        borderTopLeftRadius: globalVars.borderRadius
    }
});