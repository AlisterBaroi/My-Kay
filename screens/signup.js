import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Signup({ navigation }) {
    const [data, setData] = React.useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        checktxtEmailChange: false,
        checkUNameChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,

    });
    const txtEmailChange = (val) => {
        if (val.length !== 0) {
            setData({ ...data, email: val, checktxtEmailChange: true, });
        }
        else {
            setData({ ...data, email: val, checktxtEmailChange: false, });
        }
    };
    const txtUNameChange = (val) => {
        if (val.length !== 0) {
            setData({ ...data, email: val, checkUNameChange: true, });
        }
        else {
            setData({ ...data, email: val, checkUNameChange: false, });
        }
    };
    const handlePasswordChange = (val) => {
        setData({ ...data, password: val, });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({ ...data, confirmPassword: val, });
    }
    const updateSecureTxt = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry, });
    };
    const updateConfirmSecureTxt = () => {
        setData({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry, });
    };
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>MyKay</Text>
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="at-sign" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='Email Address'
                        autoCapitalize='none'
                        onChangeText={(val) => txtEmailChange(val)} />
                    {data.checktxtEmailChange ?
                        <Feather style={styles.icon} name="check" size={20} color="grey" />
                        : null}
                </View>
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="user" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='User Name'
                        onChangeText={(val) => txtUNameChange(val)} />
                    {data.checkUNameChange ?
                        <Feather style={styles.icon} name="check" size={20} color="grey" />
                        : null}
                </View>
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="lock" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)} />
                    <TouchableOpacity onPress={updateSecureTxt}>
                        {data.secureTextEntry ?
                            <Feather style={styles.icon} name="eye-off" size={20} color="grey" />
                            :
                            <Feather style={styles.icon} name="eye" size={20} color="grey" />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="lock" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='Comfirm Password'
                        secureTextEntry={data.confirmSecureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)} />
                    <TouchableOpacity onPress={updateConfirmSecureTxt}>
                        {data.confirmSecureTextEntry ?
                            <Feather style={styles.icon} name="eye-off" size={20} color="grey" />
                            :
                            <Feather style={styles.icon} name="eye" size={20} color="grey" />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.signupButton}>
                    <Button title='Signup' color='red' onPress={() => {
                        Keyboard.dismiss();
                        Alert.alert('Success', 'Your feedback was submitted successfully.');
                        navigation.navigate('Signup');
                    }} />
                </View>
                <Text style={styles.acc}>Have an account?</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => {
                    navigation.navigate('Login');
                }}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '20%',
        paddingHorizontal: '10%',
        backgroundColor: '#fff',
        height: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginBottom: '10%',
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: '10%',
        paddingVertical: '2%',
        // backgroundColor: 'yellow',
    },
    icon: {
        marginTop: '1%',
    },
    textInput: {
        width: '86%',
        paddingHorizontal: '2%',
        fontSize: 17,
    },
    signupButton: {
        marginTop: '4%',
    },
    acc: {
        position: 'absolute',
        marginTop: '218%',
        alignSelf: 'center',
        marginBottom: '5%',
        color: 'grey',
    },
    loginButton: {
        position: 'absolute',
        marginTop: '230%',
        alignSelf: 'center',
        width: '100%',
    },
    loginButtonText: {
        borderWidth: 2,
        borderColor: 'red',
        paddingTop: '2%',
        paddingBottom: '1%',
        textAlign: 'center',
        color: 'red',
        fontSize: 14,
    },
});