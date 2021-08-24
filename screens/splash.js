import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Splash() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyKay</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'red',
    },
});