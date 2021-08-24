import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from './context';

export default function DrawerContent(props) {

    const { logOut } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1, height: '100%', }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', paddingTop: 20, }}>
                            <MaterialCommunityIcons name="account-circle" size={60} color="grey" />
                            <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.capton}>@Email Here</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>

                        {/* home tab */}
                        <DrawerItem
                            icon={() => (<MaterialCommunityIcons name="home-outline"
                                color={'grey'} size={26} />)}
                            label='Home'
                            onPress={() => { props.navigation.navigate('Home') }} />

                        {/* news tab */}
                        <DrawerItem
                            icon={() => (<MaterialCommunityIcons name="newspaper-variant-outline"
                                color={'grey'} size={26} />)}
                            label='News'
                            onPress={() => { props.navigation.navigate('News') }} />

                        {/* about tab */}
                        <DrawerItem
                            icon={() => (<MaterialCommunityIcons name="account-group-outline"
                                color={'grey'} size={26} />)}
                            label='About Us'
                            onPress={() => { props.navigation.navigate('About') }} />

                        {/* contact tab */}
                        <DrawerItem
                            icon={() => (<MaterialCommunityIcons name="contacts-outline"
                                color={'grey'} size={26} />)}
                            label='Contact Us'
                            onPress={() => { props.navigation.navigate('Contact') }} />

                        {/* settings tab */}
                        <DrawerItem
                            icon={() => (<MaterialIcons name="settings"
                                color={'grey'} size={26} />)}
                            label='Settings'
                            onPress={() => { props.navigation.navigate('Settings') }} />

                        {/* feedback tab */}
                        <DrawerItem
                            icon={() => (<MaterialCommunityIcons name="send"
                                color={'grey'} size={26} />)}
                            label='Send Feedback'
                            onPress={() => { props.navigation.navigate('SendFeedback') }} />

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={() => (
                        <MaterialCommunityIcons name="exit-to-app"
                            color={'grey'}
                            size={26} />
                    )}
                    label='Sign Out'
                    onPress={() => { logOut(); }} />
            </Drawer.Section>
        </View >
    );
};

const styles = StyleSheet.create({
    drawerContent: { flex: 1, },
    userInfoSection: { paddingLeft: '6%', paddingBottom: '6%', },
    title: { fontSize: 16, marginTop: 3, fontWeight: 'bold', },
    capton: { fontSize: 14, lineHeight: 14, },
    bottomDrawerSection: { borderTopWidth: 1, borderTopColor: 'lightgrey', },
});