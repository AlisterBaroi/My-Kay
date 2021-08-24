import React from 'react';
import { View, Text } from 'react-native';

export default function ChatHeader({ route }) {
    const { agentName, agentDetails } = route.params;
    return (
        <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{agentName}</Text>
            <Text style={{ color: 'white', }}>{agentDetails}</Text>
        </View>
    )
}