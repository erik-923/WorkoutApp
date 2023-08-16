import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { globalVars } from './styles/globalStyles';
import WorkoutScreen from './screens/WorkoutScreen.jsx'
import ExerciseScreen from './screens/ExerciseScreen'
import InsightScreen from './screens/InsightScreen'
import SettingsScreen from './screens/SettingsScreen.jsx'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
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
                  backgroundColor: globalVars.background
                }
              }} 
              name="Workouts" 
              component={WorkoutScreen} 
              />
            <Tab.Screen 
              options={{
                tabBarIcon: ({ color, size }) => (<FontAwesome5 name="dumbbell" size={size} color={color} />),
                headerTintColor: globalVars.primaryText,
                headerStyle: {
                  backgroundColor: globalVars.background
                }
              }} 
              name="Exercises" 
              component={ExerciseScreen} 
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