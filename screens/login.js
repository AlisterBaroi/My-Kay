import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from './../components/context';
import users from './../models/userData';

export default function Login({ navigation, route }) {

    const { logIn } = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        username: '',
        password: '',
        checktxtUserNameChange: false,
        secureTextEntry: true,
        isValidUserName: true,
        isValidPassword: true,

    });
    const txtUserNameChange = (val) => {
        if (val.trim().length >= 4) {
            setData({ ...data, username: val, checktxtUserNameChange: true, isValidUserName: true, });
        }
        else {
            setData({ ...data, username: val, checktxtUserNameChange: false, isValidUserName: false, });
        }
    };
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) { setData({ ...data, password: val, isValidPassword: true, }); }
        else { setData({ ...data, password: val, isValidPassword: false, }); }
    };
    const updateSecureTxt = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry, });
    };


    const loginHandle = (username, password) => {
        const foundUser = users.filter(item => {
            return username == item.username && password == item.password;
        });
        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Warning', 'Email or password field cannot be empty', [{ text: 'Okay' }]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }

        logIn(foundUser);
    };
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUserName: true
            });
        } else {
            setData({
                ...data,
                isValidUserName: false
            });
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>

                <Text style={styles.title}>MyKay</Text>
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="user" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='Enter Email'
                        autoCapitalize='none'
                        onChangeText={(val) => txtUserNameChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.checktxtUserNameChange ?
                        <Feather style={styles.icon} name="check" size={20} color="grey" />
                        : null}
                </View>
                {data.isValidUserName ? //null
                    <View style={{ marginBottom: '10%', }}></View>
                    :
                    < Text style={{ marginBottom: '10%', color: 'red', marginLeft: '7%', }} >Email must be valid and registered</Text>
                }
                <View style={styles.inputWrapper}>
                    <Feather style={styles.icon} name="lock" size={20} color="grey" />
                    <TextInput style={styles.textInput} placeholder='Enter Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTxt}>
                        {data.secureTextEntry ?
                            <Feather style={styles.icon} name="eye-off" size={20} color="grey" />
                            :
                            <Feather style={styles.icon} name="eye" size={20} color="grey" />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? //null
                    <View style={{ marginBottom: '10%', }}></View>
                    :
                    <Text style={{ marginBottom: '10%', color: 'red', marginLeft: '7%', }} >Password must 8 characters long</Text>
                }
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.loginButton}>
                    <Button title='Login' color='red' onPress={() => { loginHandle(data.username, data.password); }} />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Signup');
                }}>
                    <Text style={styles.signupButton} >SIGNUP</Text>
                </TouchableOpacity>
                <Text style={styles.bottomText}>MyKay Property Consultancy</Text>
            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
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
        marginBottom: '25%',
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        paddingVertical: '2%',
    },
    icon: {
        marginTop: '1%',
    },
    textInput: {
        width: '86%',
        paddingHorizontal: '2%',
        fontSize: 17,
    },
    forgotPass: {
        color: 'red',
        marginTop: '-5%',
        textDecorationLine: 'underline',
    },
    loginButton: {
        marginTop: '8%',
        marginBottom: '6%',
    },
    signupButton: {
        borderWidth: 2,
        paddingTop: '2%',
        paddingBottom: '1%',
        borderColor: 'red',
        textAlign: 'center',
        color: 'red',
        fontSize: 14,
    },
    bottomText: {
        position: 'absolute',
        marginTop: '235%',
        marginBottom: '3%',
        alignSelf: 'center',
        color: 'grey',
    },
});