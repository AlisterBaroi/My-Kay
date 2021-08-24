import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function HeaderLeft({ navigation }) {
    return (
        <TouchableOpacity onPress={() => {
            navigation.openDrawer();
        }}>
            <MaterialIcons style={{ marginLeft: 15, color: 'white', }} name='menu' size={30} />
        </TouchableOpacity>
    )
}