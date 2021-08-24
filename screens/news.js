import React from 'react';
import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity } from 'react-native';
import newsDetails from './../models/newsData'; //import data here

export default function News({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={newsDetails}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.mainContainer} onPress={() => {
                        navigation.navigate('NewsArticle', item);
                    }}>
                        <View >
                            <Image style={styles.propertyImage} source={item.imageDetail} />
                            <View style={styles.textContainer}>
                                <Text style={styles.textName}>{item.newsTitle}</Text>
                                <Text style={styles.textDetails}>Location: {item.projectAddress}</Text>
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
        height: 80,
        paddingVertical: '2%',
        paddingHorizontal: '4%',
    },
    textName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    textDetails: {
        color: 'black',
    },
});