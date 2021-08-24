import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Message({ navigation, route }) {
    const { agentName, lastMessage } = route.params; // data from chat page routed to here

    const [messages, setMessages] = React.useState([]);
    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: lastMessage,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: agentName,
                    avatar: () => (<MaterialCommunityIcons name="account-circle" size={35} color="grey" />),
                },
            },
        ])
    }, [])
    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderBubble = (props) => {
        return (<Bubble
            {...props}
            wrapperStyle={{
                right: { backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 6, },
                left: { backgroundColor: 'lightgrey', }
            }}
            textStyle={{
                right: { color: 'white', },
                left: { color: 'black', }
            }}
        />)
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons name="send" style={{ marginBottom: '3%', marginRight: '2%' }} size={40} color="red" />
                </View>

            </Send>
        )
    }


    return (

        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
        />
        // <TouchableWithoutFeedback onPress={() => {
        //     Keyboard.dismiss();
        // }}>
        //     <View style={styles.container}>
        //         <Text style={styles.title}>Contact</Text>
        //         <Text>{agentName}</Text>
        //         <Text>{agentDetails}</Text>
        //         <Text>{lastMessage}</Text>
        //         <Text>{contactTime}</Text>
        //     </View>
        // </TouchableWithoutFeedback>
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