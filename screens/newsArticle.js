import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

export default function NewsArticle({ navigation, route }) {
    const { newsTitle, projectAddress, imageDetail } = route.params;
    return (
        <ScrollView>
            <View style={{ borderBottomWidth: 1 }}>
                <Image style={styles.propertyImage} source={imageDetail} />
            </View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.textName}>{newsTitle}</Text>
                    <Text style={{ marginVertical: '3%', fontSize: 15, fontWeight: 'bold', color: 'grey' }}>Location: {projectAddress}</Text>
                    <Text style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet. Quisque a diam quis magna luctus fringilla non in ligula. Pellentesque placerat diam eros, quis facilisis dui suscipit quis. Etiam iaculis porta viverra. Nam hendrerit leo in turpis aliquet, quis condimentum sapien varius. Nullam vitae ornare velit. Nullam imperdiet luctus elit ut molestie.
                        {'\n\n'}
                        Sed vulputate gravida urna ac viverra. Nullam facilisis dolor eu orci rhoncus tincidunt. Mauris interdum, sapien quis convallis auctor, est nunc maximus arcu, pharetra hendrerit leo turpis ac nisl. Maecenas ultricies, enim vitae semper egestas, orci urna malesuada ipsum, vitae aliquet ex ante ac dolor. Nunc rutrum ex in magna egestas lacinia sit amet in mi. Vivamus vel posuere dui. Ut nec ullamcorper metus. Integer felis tellus, interdum vitae lorem eu, venenatis efficitur purus. Morbi sit amet eleifend velit, a rutrum ante.
                        {'\n\n'}
                        Donec et sapien in orci lobortis tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ultrices condimentum sapien eu sodales. Aenean euismod diam est, sit amet condimentum quam vehicula nec. Morbi non aliquet mauris. Nunc ex nulla, cursus quis magna quis, euismod maximus sem. Fusce ac mi tellus. Nam quis convallis quam.
                        {'\n\n'}
                        Nulla felis mauris, volutpat ut faucibus vitae, scelerisque non risus. Nullam porttitor lobortis mi, sit amet viverra libero placerat sit amet. Ut eu feugiat justo, eget tempor odio. Nulla quis ex ac sapien accumsan laoreet. Nulla facilisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultrices rutrum sodales. Ut a odio fermentum, hendrerit nisl id, vulputate libero. Cras et lacus lorem.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', height: '100%', },
    propertyImage: { resizeMode: 'cover', height: 300, width: 'auto', },
    textContainer: { width: '100%', paddingTop: '4%', paddingHorizontal: '6%', paddingBottom: '2%', },
    textName: { fontSize: 17, fontWeight: 'bold', color: 'black', },
});