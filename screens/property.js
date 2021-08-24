import React from 'react';
import { StyleSheet, Image, View, Button, Text, ScrollView } from 'react-native';

export default function Property({ navigation, route }) {
    const { projectName, projectAddress, ratings, price, imageDetail, agentName } = route.params;
    return (
        <ScrollView>
            <View style={{ borderBottomWidth: 1 }}>
                <Image style={styles.propertyImage} source={imageDetail} />
            </View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View style={styles.textLeft}>
                        <Text style={styles.textDetails}>Property</Text>
                        <Text style={styles.textName}>{projectName}</Text>
                        <Text style={styles.textDetails}>Location</Text>
                        <Text style={styles.textName}>{projectAddress}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.textDetails}>Rating</Text>
                                <Text style={styles.textName}>{ratings}/5 stars</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.textRight}>
                        <Text style={styles.textDetails}>Price</Text>
                        <Text style={[styles.textName, { marginBottom: '26%', }]}>{price}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', paddingHorizontal: '6%', marginTop: -45 }}>
                    <Text style={styles.textDetails}>Property Agent</Text>
                    <Text style={[styles.textName, { marginBottom: 0 }]}>{agentName}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: '5%', alignSelf: 'center', }}>
                    <View style={styles.button}>
                        <Button title='Call Agent' color='red' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Chat' color='red' />
                    </View>
                </View>
                <Text style={{ paddingHorizontal: '6%', textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet. Quisque a diam quis magna luctus fringilla non in ligula. Pellentesque placerat diam eros, quis facilisis dui suscipit quis. Etiam iaculis porta viverra. Nam hendrerit leo in turpis aliquet, quis condimentum sapien varius. Nullam vitae ornare velit. Nullam imperdiet luctus elit ut molestie.
                    {'\n\n'}
                    Sed vulputate gravida urna ac viverra. Nullam facilisis dolor eu orci rhoncus tincidunt. Mauris interdum, sapien quis convallis auctor, est nunc maximus arcu, pharetra hendrerit leo turpis ac nisl. Maecenas ultricies, enim vitae semper egestas, orci urna malesuada ipsum, vitae aliquet ex ante ac dolor. Nunc rutrum ex in magna egestas lacinia sit amet in mi. Vivamus vel posuere dui. Ut nec ullamcorper metus. Integer felis tellus, interdum vitae lorem eu, venenatis efficitur purus. Morbi sit amet eleifend velit, a rutrum ante.
                    {'\n\n'}
                    Donec et sapien in orci lobortis tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ultrices condimentum sapien eu sodales. Aenean euismod diam est, sit amet condimentum quam vehicula nec. Morbi non aliquet mauris. Nunc ex nulla, cursus quis magna quis, euismod maximus sem. Fusce ac mi tellus. Nam quis convallis quam.
                    {'\n\n'}
                    Nulla felis mauris, volutpat ut faucibus vitae, scelerisque non risus. Nullam porttitor lobortis mi, sit amet viverra libero placerat sit amet. Ut eu feugiat justo, eget tempor odio. Nulla quis ex ac sapien accumsan laoreet. Nulla facilisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultrices rutrum sodales. Ut a odio fermentum, hendrerit nisl id, vulputate libero. Cras et lacus lorem.
                    {'\n\n'}
                    Maecenas tristique, orci a iaculis efficitur, arcu magna mattis nisl, nec placerat diam elit nec nibh. Nunc dictum et diam eget pellentesque. Cras in efficitur nisi. Nullam mi metus, consequat nec mauris eget, consectetur porttitor mi. Integer pulvinar ultrices elit, at gravida neque hendrerit non. Morbi ligula mi, fermentum sed leo vitae, ornare sollicitudin mauris. Praesent id libero faucibus, efficitur justo vel, ultrices dolor. Nam ex lacus, sagittis vitae eleifend nec, lacinia aliquam sapien.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    propertyImage: {
        resizeMode: 'cover',
        height: 300,
        width: 'auto',
    },
    textContainer: {
        width: '100%',
        paddingTop: '4%',
        paddingHorizontal: '6%',
        flexDirection: 'row',
    },
    textLeft: {
        width: '65%',
        color: 'white',
    },
    textName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '6%',
    },
    textDetails: {
        color: 'black',
    },
    textRight: {
        width: '35%',
        color: 'white',
        paddingLeft: '5%',
    },
    textPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        width: 150,
        marginHorizontal: '5%',
    }
});