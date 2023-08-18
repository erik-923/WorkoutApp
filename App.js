import {React, useState} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalVars } from './styles/globalStyles';
import { v4 as uuid } from 'uuid';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateWorkoutForm from './components/CreateWorkoutForm';
import BottomTabs from './components/BottomTabs.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  const [workouts, setWorkouts] = useState({
    myWorkouts: [
    { name: "Example Workout 1", lastCompleted: new Date().getTime()},
    { name: "Example Workout 2", lastCompleted: new Date().getTime()},
    { name: "Example Workout 3", lastCompleted: new Date().getTime()},
  ]
})
  const [exercises, setExercises] = useState({
    myExercises: [
    {
      name: 'Bench Press',
      id: uuid(),
      muscleGroups: ['Chest', 'Shoulder', 'Tricep'],
      defaultSets: [
        {reps: 8, weight: 0},
        {reps: 8, weight: 0},
        {reps: 8, weight: 0}
      ],
      notes: ''
    }
  ]
})
  const [history, setHistory] = useState({
    myHistory: []
  })

  const createWorkout = () => {
    const newWorkout = {
      name: '',
      id: uuid(),
      exercises: []
    }

    setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Tabs" 
              component={BottomTabs} 
              options={{ headerShown: false }} 
              initialParams={{ 
                workouts: workouts,
                exercises: exercises,
                history: history
              }}
              />
            <Stack.Screen name="CreateWorkoutForm" component={CreateWorkoutForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: globalVars.secondaryBackground
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default App;