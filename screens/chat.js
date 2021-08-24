import React from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Chat({ navigation }) {

    const [chatContacts, setChatContacts] = React.useState([
        { contactName: 'Jean Tai', contactDetails: 'Sales Agent of Property 1', lastMessage: 'hi, how are you', contactTime: '12:45 am' },
        { contactName: 'Loo Weiler', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
        { contactName: 'Jason Brian', contactDetails: 'Sales Agent of Property 2', lastMessage: 'Yes, its available fro now, but cant gurantee till when will stay free', contactTime: '12:45 am' },
        { contactName: 'Lao Han', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
        { contactName: 'Xian Kai', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
        { contactName: 'Chew Lim', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
        { contactName: 'Denes Waren', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
        { contactName: 'Sunny Woo', contactDetails: 'Sales Agent of Property 3', lastMessage: 'Sorry, its not available now.', contactTime: '12:45 am' },
    ]);
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder='Search Contacts' />
                </View>
                <FlatList
                    data={chatContacts}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Message', item);
                        }}>
                            <View style={styles.contactContainer}>
                                <MaterialIcons style={styles.contactImage} name="person-outline" size={30} color="black" />
                                <View>
                                    <Text style={styles.contactName}>{item.contactName}</Text>
                                    <View style={styles.detailsContainer}>
                                        <Text style={styles.contactDetails}>{item.lastMessage}</Text>
                                        <Text style={styles.contactTime}>{item.contactTime}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', height: '100%', },
    searchContainer: {
        paddingHorizontal: '6%',
        backgroundColor: 'red',
    },
    searchInput: {
        backgroundColor: 'white',
        color: 'black',
        marginVertical: '6%',
        marginBottom: '5%',
        paddingVertical: '1.5%',
        paddingHorizontal: '2%',
        fontSize: 17,
    },
    contactContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: screenWidth * 0.06,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },
    contactImage: { marginRight: screenWidth * 0.04, },
    contactName: { fontWeight: 'bold', fontSize: 17, },
    detailsContainer: { flexDirection: 'row', },
    contactDetails: {
        width: '75%',
        height: 20,
        overflow: 'hidden',
        paddingRight: 5,
    },
    contactTime: {
        // right: -(screenWidth * 0.2),
    }
});