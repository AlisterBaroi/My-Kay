import React from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import projectDetails from './../models/projectAgentData'; //import data here


export default function Chat({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder='Search Contacts' />
                </View>
                <FlatList
                    data={projectDetails}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Message', item);
                        }}>
                            <View style={styles.contactContainer}>
                                <MaterialIcons style={styles.contactImage} name="person-outline" size={30} color="black" />
                                <View>
                                    <Text style={styles.contactName}>{item.agentName}</Text>
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
        paddingRight: 10,
    },
    contactTime: {
        // right: -(screenWidth * 0.2),
    }
});