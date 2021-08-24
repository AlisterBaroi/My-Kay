import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function SendFeedback({ navigation }) {
    const [text, setText] = React.useState('');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Send Feedback</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={2}
                    value={text}
                    onChangeText={value => setText(value)}
                    placeholder='Write your feedback here'
                    style={styles.textInput}
                />
                <View style={styles.resetButton}>
                    <Button title='Send Feedback' onPress={() => {
                        Keyboard.dismiss();
                        setText('');
                        Alert.alert('Success', 'Your feedback was submitted successfully.');
                    }} color='red' />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '5%',
        paddingHorizontal: '10%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey'
    },
    textInput: {
        height: '25%',
        fontSize: 17,
        textAlignVertical: 'top',
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginVertical: 25,
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        backgroundColor: '#fff',
    },
    resetButton: {
        marginTop: 20,
        marginBottom: 20,
    },
});