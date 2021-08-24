import React from 'react';
import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity } from 'react-native';
import favProjects from './../models/favouritePeojects'; //import data here

export default function Favourite({ navigation, route, }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={favProjects}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.mainContainer} onPress={() => {
                        navigation.navigate('FavProperty', item);
                    }}>
                        <View >
                            <Image style={styles.propertyImage} source={item.imageDetail} />
                            <View style={styles.textContainer}>
                                <View style={styles.textLeft}>
                                    <Text style={styles.textName}>{item.projectName}</Text>
                                    <Text style={styles.textDetails}>{item.projectAddress}</Text>
                                    <Text style={styles.textDetails}>Rating: {item.ratings}/5 stars</Text>
                                </View>
                                <View style={styles.textRight}>
                                    <Text style={styles.textPrice}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                } />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '1%',
        height: '100%',
        backgroundColor: '#fff',
    },
    mainContainer: {
        height: 260,
        marginVertical: '3%',
        borderWidth: 1,
        borderColor: 'grey',
    },
    propertyImage: {
        height: 180,
        width: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        height: 70,
        paddingVertical: '2%',
        paddingHorizontal: '4%',
        flexDirection: 'row',
    },
    textLeft: {
        width: '65%',
        color: 'white',
        paddingBottom: '2%',
    },
    textName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    textDetails: {
        color: 'black',
    },
    textRight: {
        width: '35%',
        color: 'white',
        paddingVertical: '4%',
        paddingLeft: '4%',
    },
    textPrice: {
        textAlign: 'right',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
});