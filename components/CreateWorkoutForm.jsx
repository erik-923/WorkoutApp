import { React, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { globalVars } from '../styles/globalStyles';

export default function(props) {
    const [localName, setLocalName] = useState("New Workout")

    const handleLocalNameChange = (text) => {
        if (text.length == 0){
            setLocalName("New Workout");
        } else {
            setLocalName(text);
        }
        
    };

    return (
        <View>
            <Text>Hello, World</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    
});