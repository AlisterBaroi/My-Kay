import React from 'react';
import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Projects({ navigation, route, }) {
    const [projectDetails, setProjectDetails] = React.useState([
        { key: 1, projectName: 'Afiniti Residences', projectAddress: 'Medini Iskandar Puteri, Johor', ratings: '3', price: 'RM 150,000', imageDetail: require('./../assets/projects/property1.png') },
        { key: 2, projectName: 'Sunway Medical Residence', projectAddress: 'Subang Jaya, Selangor', ratings: '3', price: 'RM 120,000', imageDetail: require('./../assets/projects/property2.png') },
        { key: 3, projectName: 'Sunway Lagoon Residence', projectAddress: 'Subang Jaya, Selangor', ratings: '4', price: 'RM 460,000', imageDetail: require('./../assets/projects/property3.png') },
        { key: 4, projectName: 'The Parque Residences', projectAddress: 'Telok Panglima, Kuala Selangor', ratings: '2', price: 'RM 99,000', imageDetail: require('./../assets/projects/property4.png') },
        { key: 5, projectName: 'One Damansara', projectAddress: 'Damansara Damai, Petaling Jaya', ratings: '3', price: 'RM 280,000', imageDetail: require('./../assets/projects/property5.png') },
        { key: 6, projectName: 'Medini Signature', projectAddress: 'Medini, Iskandar Puteri, Johor', ratings: '4', price: 'RM 340,000', imageDetail: require('./../assets/projects/property6.png') },
        { key: 7, projectName: 'The Loft', projectAddress: 'Brickfields, Kuala Lumpur', ratings: '5', price: 'RM 520,000', imageDetail: require('./../assets/projects/property7.png') },
        { key: 8, projectName: 'Saville @ The Park', projectAddress: 'Bangsar, Kuala Lumpur', ratings: '5', price: 'RM 490,000', imageDetail: require('./../assets/projects/property8.png') },
    ]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList
                    data={projectDetails}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.mainContainer} onPress={() => {
                            navigation.navigate('Property', item);
                        }
                        }>
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
        </ScrollView>
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