import { React, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import dateFormat from '../functions/dateFormat.js';
import { Entypo } from '@expo/vector-icons';
import { globalVars, globalStyles } from '../styles/globalStyles.js';
import AddButton from '../components/AddButton.jsx';

export default function() {
    [workouts, setWorkouts] = useState(
        [{
            name: "Arms and Shoulders",
            lastCompleted: new Date(2023, 8, 14, 11, 37)
        },
        {
            name: "Chest and Back",
            lastCompleted: new Date(2023, 8, 13, 14, 8)
        },
        {
            name: "Legs",
            lastCompleted: new Date(2023, 7, 29, 18, 34)
        }
        ]
    )


    return (
        <ScrollView style={globalStyles.scrollContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Press on a workout to begin</Text>
            </View>
            <View style={styles.workoutContainer}>
                <AddButton text="Workout"/>
                {
                workouts.map((workout, index) => (
                    <View key={index} style={[styles.workoutItem, globalStyles.shadow]}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity>
                                <Text style={styles.nameText}>{workout.name}</Text>
                                <Text style={styles.timeText}>Last Workout: {dateFormat(workout.lastCompleted)}</Text>
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