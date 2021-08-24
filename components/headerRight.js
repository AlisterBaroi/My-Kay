import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { screenHeight, screenWidth } from "./../components/data";
export default function HeaderRight({ navigation }) {
    return (
        <TouchableOpacity>
            <MaterialIcons style={{ marginRight: 15, color: 'white', }} name="more-vert" size={25} />
        </TouchableOpacity>
    )
}