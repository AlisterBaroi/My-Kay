import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function About({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>MyKay</Text>
                    <View style={{ marginBottom: 5, }}>
                        <Text style={[styles.timing, { textAlign: 'justify', }]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu ac purus ornare, sit amet tempus diam facilisis. Duis tempus vel justo non mattis. Integer vel turpis ut libero dignissim rhoncus.
                            {'\n\n'}
                            Pellentesque ac sapien tempus nibh volutpat lacinia ac non quam. Nullam nec justo vitae sem ultrices pharetra vel a ex. Phasellus id enim pulvinar, ullamcorper eros.
                            {'\n\n'}
                            Ut, ornare massa Suspendisse consectetur mattis lorem, eget aliquet massa laoreet elementum. Donec massa purus.
                        </Text>
                    </View>
                </View >
                <View style={styles.bottomContainer}>

                    <TouchableOpacity style={styles.buttons}
                        onPress={() => {
                            navigation.navigate('Contact', { screen: 'Contact' });
                        }}>
                        <MaterialCommunityIcons name="contacts" size={40} color="red" />
                        <View style={{ paddingHorizontal: '7%', }}>
                            <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Contact us</Text>
                            <Text>visit our contact page</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-top-right" style={{ marginTop: '2%', marginLeft: '25%', }} size={30} color="lightgrey" />
                    </TouchableOpacity>

                    <Text style={styles.findProperties} >Follow us on:</Text>

                    <TouchableOpacity style={styles.buttons}>
                        <MaterialCommunityIcons name="instagram" size={40} color="red" />
                        <View style={{ paddingHorizontal: '7%', }}>
                            <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Instagram</Text>
                            <Text>@mykay_official</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialCommunityIcons name="facebook" size={40} color="red" />
                        <View style={{ paddingHorizontal: '7%', }}>
                            <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Facebook</Text>
                            <Text>facebook.com/mykay_official</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialCommunityIcons name="web" size={40} color="red" />
                        <View style={{ paddingHorizontal: '7%', }}>
                            <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Our Website</Text>
                            <Text>www.mykay.com</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialCommunityIcons name="wordpress" size={40} color="red" />
                        <View style={{ paddingHorizontal: '7%', }}>
                            <Text style={[styles.officeHours, { color: 'black', marginLeft: 0 }]}>Our Blog</Text>
                            <Text>www.blog.mykay.com</Text>
                        </View>
                    </TouchableOpacity>
                </View >
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    topContainer: {
        paddingTop: '3%',
        paddingHorizontal: '10%',
        backgroundColor: 'red',
        height: '43%'
    },
    bottomContainer: {
        height: '57%',
        marginBottom: '5%',
    },
    officeHours: {
        fontSize: 18,
        color: 'white',
    },
    timing: {
        color: 'white',
        marginVertical: '5%',
    },
    findProperties: {
        height: '8%',
        backgroundColor: 'lightgrey',
        textAlignVertical: 'center',
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: '5%',
    },
    buttons: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
});