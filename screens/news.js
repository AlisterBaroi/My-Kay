import React from 'react';
import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity } from 'react-native';

export default function News({ navigation }) {
    const [newsDetails, setnewsDetails] = React.useState([
        { key: 1, newsTitle: 'The Loft: New investments raises the price up', projectAddress: 'Brickfields, Kuala Lumpur', price: 'RM 520,000', imageDetail: require('./../assets/projects/property7.png') },
        { key: 2, newsTitle: 'The Parque Residences: Price cut down due to flea infestation', projectAddress: 'Telok Panglima, Kuala Selangor', price: 'RM 99,000', imageDetail: require('./../assets/projects/property4.png') },
        { key: 3, newsTitle: 'Sunway Medical Residence: Apartments selling out like hot cakes', projectAddress: 'Subang Jaya, Selangor', price: 'RM 120,000', imageDetail: require('./../assets/projects/property2.png') },
        { key: 4, newsTitle: 'Medini Signature: New Security upgrades installed for premium security', projectAddress: 'Medini, Iskandar Puteri, Johor', price: 'RM 340,000', imageDetail: require('./../assets/projects/property6.png') },
        { key: 5, newsTitle: 'One Damansara: Getting popular as family homes', projectAddress: 'Damansara Damai, Petaling Jaya', price: 'RM 280,000', imageDetail: require('./../assets/projects/property5.png') },
        { key: 6, newsTitle: 'Afiniti Residences: Construction completed before deadline', projectAddress: 'Medini Iskandar Puteri, Johor', price: 'RM 150,000', imageDetail: require('./../assets/projects/property1.png') },
        { key: 7, newsTitle: 'Saville @ The Park: "An ideal place" amongst students', projectAddress: 'Bangsar, Kuala Lumpur', price: 'RM 490,000', imageDetail: require('./../assets/projects/property8.png') },
        { key: 8, newsTitle: 'Sunway Lagoon Residence: Becoming the go-to place for tourists', projectAddress: 'Subang Jaya, Selangor', price: 'RM 460,000', imageDetail: require('./../assets/projects/property3.png') },
    ]);

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