import React from 'react';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    scrollContainer: {
      backgroundColor: '#202124',
      flex: 1
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    }
});
  
const globalVars = {
    background: '#202124',
    primaryText: '#f5f5f5',
    secondaryText: '#9e9e9e',
    accentColor: '#b39ddb',
    highlightColor: '#663399',
    secondaryBackground: '#292a2b',
    borderRadius: 15,
    black: '#120e1a'

};
  
export { globalVars, globalStyles };

// Background: #202124 (dark gray)
// Primary text: #f5f5f5 (white)
// Secondary text: #9e9e9e (light gray)
// Accent color: #84cc8c (light purple)
// Highlight color: #ff80ab (pink)

// #663399 (deep purple)
// #b39ddb (pale lilac)
// #5c3014 (maroon)