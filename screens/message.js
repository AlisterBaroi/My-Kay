import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Message({ navigation, route }) {
    const { agentName, agentDetails, lastMessage, contactTime } = route.params;
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Contact</Text>
                <Text>{agentName}</Text>
                <Text>{agentDetails}</Text>
                <Text>{lastMessage}</Text>
                <Text>{contactTime}</Text>
                <TextInput style={styles.textInput} placeholder='Enter Registered Email' />
                <View style={styles.resetButton}>
                    <Button title='Reset Password' color='red' onPress={() => {
                        // navigation.navigate('Project');
                    }} />
                </View>
                <Text style={styles.remember}>Remember Password?</Text>
                <TouchableOpacity onPress={() => {
                    // navigation.navigate('Home');
                }}>
                    <Text style={styles.loginButton}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        height: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginBottom: 50,
    },
    textInput: {
        borderBottomWidth: 1,
        marginVertical: 25,
        paddingHorizontal: 5,
        fontSize: 17,
    },
    resetButton: {
        marginTop: 20,
        marginBottom: 20,
    },
    remember: {
        textAlign: 'center',
        marginTop: 330,
        marginBottom: 10,
        color: 'grey',
    },
    loginButton: {
        marginTop: 10,
        marginBottom: 50,
        borderWidth: 2,
        paddingTop: 6,
        paddingBottom: 3,
        borderColor: 'red',
        textAlign: 'center',
        color: 'red',
        fontSize: 14,
    },
});