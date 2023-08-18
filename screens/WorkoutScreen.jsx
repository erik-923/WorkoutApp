import { React, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import dateFormat from '../functions/dateFormat.js';
import { Entypo } from '@expo/vector-icons';
import { globalVars, globalStyles } from '../styles/globalStyles.js';
import AddButton from '../components/AddButton.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useNavigation } from '@react-navigation/native';

export default function({ route }) {
    const workouts = route.params.workouts
    const navigation = useNavigation();

    const addWorkoutNavigation = () => {
        navigation.navigate('CreateWorkoutForm');
    };

    return (
        <ScrollView style={globalStyles.scrollContainer}>
            <View style={styles.headerContainer}>
                <SearchBar />
            </View>
            <View style={styles.workoutContainer}>
                <AddButton text="Workout"pressHandler={addWorkoutNavigation}/>
                {
                workouts.map((workout, index) => (
                    <View key={index} style={[styles.workoutItem, globalStyles.shadow]}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity>
                                <Text style={styles.nameText}>{workout.name}</Text>
                                <Text style={styles.timeText}>{Date(workout.lastCompleted)}</Text>
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
    workoutContainer: {
        backgroundColor: globalVars.background,
        paddingHorizontal: 18,
        flex: 1
    },
    workoutItem: {
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
    nameText: {
        flex: 1,
        fontSize: 24,
        color: globalVars.primaryText
    },
    timeText: {
        fontSize: 12,
        color: globalVars.secondaryText
    },
    optionsIcon: {
        color: globalVars.primaryText
    },
    headerContainer: {
        padding: 15
    },
    headerTitle: {
        color: globalVars.primaryText
    }
})