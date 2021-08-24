import React from 'react';
import { View, Text } from 'react-native';

export default function PropertyHeader({ route }) {
    const { projectName, projectAddress } = route.params;
    return (
        <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{projectName}</Text>
            <Text style={{ color: 'white', }}>{projectAddress}</Text>
        </View>
    )
}