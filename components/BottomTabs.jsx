import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { globalVars } from '../styles/globalStyles.js';
import WorkoutScreen from '../screens/WorkoutScreen.jsx';
import ExerciseScreen from '../screens/ExerciseScreen';
import InsightScreen from '../screens/InsightScreen';
import SettingsScreen from '../screens/SettingsScreen.jsx';

const Tab = createBottomTabNavigator();

export default function({ route }) {
    const workouts = route.params.workouts.myWorkouts;
    const exercises = route.params.exercises.myExercises;
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalVars.highlightColor,
        tabBarInactiveColor: globalVars.primaryText,
        tabBarStyle: {
          height: 80,
          backgroundColor: globalVars.secondaryBackground,
          paddingBottom: 15,
          borderTopColor: globalVars.accentColor
        },
      }}
      >
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clipboard-clock-outline" size={size} color={color} />),
            headerTintColor: globalVars.primaryText,
            headerStyle: {
              backgroundColor: globalVars.secondaryBackground
            }
          }} 
          name="Workouts" 
          component={WorkoutScreen} 
          initialParams={{ workouts: workouts }}
          />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="dumbbell" size={size} color={color} />),
            headerTintColor: globalVars.primaryText,
            headerStyle: {
              backgroundColor: globalVars.background
            },
          }} 
          name="Exercises" 
          component={ExerciseScreen} 
          initialParams={{ exercises: exercises }}
          />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (<Entypo name="line-graph" size={size} color={color} />)
          }}
          name="Insights" 
          component={InsightScreen} 
          />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (<Feather name="settings" size={size} color={color} />)
          }}
          name="Settings" 
          component={SettingsScreen} 
          />
      </Tab.Navigator>
    );
  }