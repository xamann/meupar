
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import Button from './Button';
import ImageViewer from './ImageViewer';
import Gallery from 'react-native-image-gallery';
//import UserData from './UserData';

import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('../assets/images/m1.jpeg');

export default function HomeScreen() {
    const [selectedImage, setSelectedImage] = useState(null);
    const clickHandler = () => {
        //function to handle click on floating Action Button
        alert('Floating Button Clicked');
    };


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    };
    return (


        <ScrollView>
            <View style={styles.imageContainer}>

                <Gallery
                    style={{ flex: 1, backgroundColor: '#696969' }}
                    images={[

                        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                        { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                        { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                        { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                    ]}
                />
            </View>

            <View style={styles.footerContainer}>
                <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            </View>
            <View style={styles.heart}>
                <AntDesign name="hearto" onPress={clickHandler} size={50} color="black" />
            </View>
            <View style={styles.match}>
                <AntDesign name="closecircleo" onPress={clickHandler} size={50} color="black" />

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff'
    },
    imageContainer: {
        paddingTop: 35,
    },
    footerContainer: {
        alignItems: 'center',
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor: 'black'
    },
    heart: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'brown',
        right: 120,
        bottom: 200,
        width: 80,
        height: 80,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    match: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        right: 30,
        bottom: 200,
        width: 80,
        height: 80,
        borderRadius: 40,
    },
});
