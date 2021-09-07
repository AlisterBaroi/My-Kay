import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contact({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={styles.topContainer}>

                <Text style={styles.title}>MyKay</Text>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginBottom: 5, borderBottomColor: 'white', paddingBottom: 2, }}>
                    <MaterialCommunityIcons name="clock-time-eight" size={22} color="white" />
                    <Text style={styles.officeHours}>Office Hours:</Text>
                </View>
                <Text style={[styles.timing, { textDecorationLine: 'underline', fontWeight: 'bold' }]}>Kuala Lumpur Brach</Text>
                <Text style={styles.timing}>9:00 am - 7:00 pm, (Monday - Friday)</Text>
                <Text style={styles.timing}>10:00 am - 3:00 pm, (Saturday)</Text>

                <Text style={[styles.timing, { marginTop: '4%', textDecorationLine: 'underline', fontWeight: 'bold' }]}>Other Braches</Text>
                <Text style={[styles.timing, { marginVertical: '2%' }]}>9:00 am - 7:00 pm, (Monday - Friday)</Text>
            </View >
            <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingVertical: '5%', borderColor: 'lightgrey', borderBottomWidth: 1 }}>
                <MaterialCommunityIcons name="phone" size={40} color="red" />
                <View style={{ paddingHorizontal: '7%', }}>
                    <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Call for free</Text>
                    <Text>(+60) 100-1001</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingVertical: '5%', borderColor: 'lightgrey', borderBottomWidth: 1 }}>
                <MaterialCommunityIcons name="message" size={40} color="red" />
                <View style={{ paddingHorizontal: '7%', }}>
                    <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Chat with us</Text>
                    <Text>Messenger, WhatsApp</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingVertical: '5%', borderColor: 'lightgrey', borderBottomWidth: 1 }}>
                <MaterialCommunityIcons name="at" size={40} color="red" />
                <View style={{ paddingHorizontal: '7%', }}>
                    <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Email us</Text>
                    <Text>support@mykay.com</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingVertical: '5%', }}>
                <MaterialCommunityIcons name="map-marker" size={40} color="red" />
                <View style={{ paddingHorizontal: '7%', }}>
                    <Text style={[styles.officeHours, { color: 'black' }]}>Location:</Text>
                    <Text style={[styles.timing, { textDecorationLine: 'underline', fontWeight: 'bold', color: 'black' }]}>Head Office</Text>
                    <Text style={[styles.timing, { color: 'black', paddingRight: '15%', }]}>Jalan Pinang, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Wilayah {'\n'}Persekutuan Kuala Lumpur</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '5%',
    },
    topContainer: {
        paddingTop: '5%',
        paddingHorizontal: '20%',
        backgroundColor: 'red',
        height: '41%',
    },
    officeHours: {
        fontSize: 18,
        color: 'white',
    },
    timing: {
        color: 'white',
        marginVertical: '1%',
    },
});