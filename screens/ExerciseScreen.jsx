import {React, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { globalStyles, globalVars } from '../styles/globalStyles';
import SearchBar from '../components/SearchBar.jsx';
import AddButton from '../components/AddButton.jsx';

export default function({ route }) {
    const exercises = route.params.exercises;
    
    return (
        <ScrollView style={globalStyles.scrollContainer}>
            <View style={styles.headerContainer}>
                <SearchBar />
            </View>
            <View style={styles.container}>
                <AddButton text="Exercise" />
                {
                exercises.map((exercise, index) => (
                    <View key={index} style={[styles.exerciseItem, globalStyles.shadow]}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity>
                                <Text style={styles.nameText}>{exercise.name}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Entypo style={styles.optionsIcon} name="dots-three-vertical" size={24} color="black" />
                            </TouchableOpacity>
                        </View>   
                    </View>
                ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 15
    },
    optionsIcon: {
        color: globalVars.primaryText
    },
    nameText: {
        flex: 1,
        fontSize: 24,
        color: globalVars.primaryText
    },
    exerciseItem: {
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        backgroundColor: globalVars.secondaryBackground,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: globalVars.accentColor,
        marginBottom: 15,
        borderRadius: globalVars.borderRadius,
    },
    container: {
        backgroundColor: globalVars.background,
        paddingHorizontal: 18,
    }
});