import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from './../components/context';
import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import Users from './../model/users';

export default function Login({ navigation, route }) {

    const { logIn } = React.useContext(AuthContext);
    // const [userName, setUserName] = React.useState();
    // const [userPassword, setUserPassword] = React.useState();

    const [data, setData] = React.useState({
        email: '',
        password: '',
        checktxtEmailChange: false,
        secureTextEntry: true,
    });
    const txtEmailChange = (val) => {
        if (val.length !== 0) {
            setData({ ...data, email: val, checktxtEmailChange: true, });
        }
        else {
            setData({ ...data, email: val, checktxtEmailChange: false, });
        }
    };
    const handlePasswordChange = (val) => {
        setData({ ...data, password: val, });
    };
    const updateSecureTxt = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry, });
    };
    const loginHandle = (username, password) => {
        logIn(username, password);
    };

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
                        onChangeText={(val) => txtEmailChange(val)}
                    />
                    {data.checktxtEmailChange ?
                        <Feather style={styles.icon} name="check" size={20} color="grey" />
                        : null}
                </View>
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
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.loginButton}>
                    <Button title='Login' color='red' onPress={() => { loginHandle(data.email, data.password); }} />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Signup');
                }}>
                    <Text style={styles.signupButton} >SIGNUP</Text>
                </TouchableOpacity>

                <Text style={styles.bottomText}>MyKay Property Consultancy</Text>
            </View>
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
        marginBottom: '25%',
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: '12%',
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
        marginTop: '78%',
        marginBottom: '3%',
        alignSelf: 'center',
        color: 'grey',
    },
});