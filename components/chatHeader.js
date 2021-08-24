import React from 'react';
import { View, Text } from 'react-native';

export default function ChatHeader({ route }) {
    const { contactName, contactDetails } = route.params;
    return (
        <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{contactName}</Text>
            <Text style={{ color: 'white', }}>{contactDetails}</Text>
        </View>
    )
}