import React from 'react';
import { StyleSheet, ScrollView, View, Button, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import PropertyComponent from '../components/propertyComponent';

export default function Home({ navigation, route }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image style={styles.introImage} source={require('./../assets/intro.png')} />
                </View>
                <View style={styles.postIntro}>
                    <View style={styles.postIntroLeft} >
                        <Image style={styles.bookImage} source={require('./../assets/book.png')} />
                        <View style={styles.guideButton}>
                            <Button title='Guide' color='red' />
                        </View>
                    </View>
                    <Text style={styles.postIntroRight}>Tutorial and guidance of MyKay Property Consultancy Application</Text>
                </View>
                <Text style={styles.findProperties} >Find Properties</Text>
                <Text style={styles.ourPick}>Our Picks {'\n'}(See Properties Tab for Details)</Text>
                <PropertyComponent />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    introImage: {
        resizeMode: 'cover',
        height: 300,
        width: 'auto',
    },
    postIntro: {
        overflow: 'hidden',
        flexDirection: 'row',
        marginVertical: 10,
    },
    postIntroLeft: {
        marginBottom: 0,
        width: 120,
        paddingLeft: '5%',
        alignContent: 'flex-end',
    },
    bookImage: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    postIntroRight: {
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: '5%',
        paddingHorizontal: '5%',
    },
    findProperties: {
        height: 50,
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    ourPick: {
        fontSize: 18,
        paddingHorizontal: '5%',
    },
});