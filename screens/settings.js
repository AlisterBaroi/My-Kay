import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Settings({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* <TouchableOpacity style={styles.buttons}
                    onPress={() => {
                        navigation.navigate('Contact', { screen: 'Contact' });
                    }}>
                    <MaterialCommunityIcons name="contacts" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Contact us</Text>
                        <Text>visit our contact page</Text>
                    </View>
                    <MaterialCommunityIcons name="arrow-top-right" style={{ marginTop: '2%', marginLeft: '25%', }} size={30} color="lightgrey" />
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.buttons}
                    onPress={() => {
                        Alert.alert('Privacy Policy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu ac purus ornare, sit amet tempus diam facilisis. Duis tempus vel justo non mattis. Integer vel turpis ut libero dignissim rhoncus. Pellentesque ac sapien tempus nibh volutpat lacinia ac non quam.Nullam nec justo vitae sem ultrices pharetra vel a ex.');
                    }}>
                    <MaterialCommunityIcons name="shield-alert-outline" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Privacy Policy</Text>
                        <Text>Aggrement Contract</Text>
                    </View>
                    <MaterialCommunityIcons name="arrow-left" style={{ marginTop: '2%', marginLeft: '28%', }} size={30} color="lightgrey" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}
                    onPress={() => {
                        Alert.alert('Terms of Service', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu ac purus ornare, sit amet tempus diam facilisis. Duis tempus vel justo non mattis. Integer vel turpis ut libero dignissim rhoncus. Pellentesque ac sapien tempus nibh volutpat lacinia ac non quam.Nullam nec justo vitae sem ultrices pharetra vel a ex.');
                    }}>
                    <MaterialCommunityIcons name="text-box-check" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Terms of Service</Text>
                        <Text>Aggrement Contract</Text>
                    </View>
                    <MaterialCommunityIcons name="arrow-left" style={{ marginTop: '2%', marginLeft: '25%', }} size={30} color="lightgrey" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}
                    onPress={() => {
                        Alert.alert('License', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu ac purus ornare, sit amet tempus diam facilisis. Duis tempus vel justo non mattis. Integer vel turpis ut libero dignissim rhoncus. Pellentesque ac sapien tempus nibh volutpat lacinia ac non quam.Nullam nec justo vitae sem ultrices pharetra vel a ex.');
                    }}>
                    <MaterialCommunityIcons name="script-text-outline" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Open Source Licenses</Text>
                        <Text>Certificate</Text>
                    </View>
                    <MaterialCommunityIcons name="arrow-left" style={{ marginTop: '2%', marginLeft: '13%', }} size={30} color="lightgrey" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}>
                    <MaterialCommunityIcons name="google-play" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Build Version</Text>
                        <Text>5.0.7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}>
                    <MaterialCommunityIcons name="dropbox" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>SDK Version</Text>
                        <Text>45.3.7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}>
                    <MaterialCommunityIcons name="shield-bug-outline" size={40} color="red" />
                    <View style={{ paddingHorizontal: '7%', }}>
                        <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Security Build</Text>
                        <Text>8.5.1</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    officeHours: {
        fontSize: 18,
        color: 'white',
    },
    buttons: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
});