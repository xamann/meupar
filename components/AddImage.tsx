// src/AddRemove.tsx
import React, { useState } from 'react';
import { AddRemoveImage } from 'nottinderuikit';

import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const AddImage = () => {
  const [imageSource, setImageSource] = useState<undefined | { uri: string }>();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const removeIcon = <Entypo name='cross' size={25} color='white' />;
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      //  setImageSource(result.assets[0].uri);
        console.log(result);
    } else {
        alert('You did not select any image.');
    }
};
  
  const addIcon = (
    <MaterialCommunityIcons name='plus' size={25} color='white' />
  );

  const saveImage = (id: string ) => {
    // Here you upload your image to your server
    // We just log the image id and set an imageSource 😄
    console.log(`Uploading image ${id}`);
    
    const uri = 'https://images.unsplash.com/photo-1585744134783-ae8804f900dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80';
    setImageSource({ uri });
  }
  const removeImage = (id: string ) => {
    // Here you delete your image from your server
    // We just log the image id and unset the imageSource
    console.log(`Removing image ${id}`);
    setImageSource(undefined);
  }
  const sampleId = 'Image-1';

  
  return <AddRemoveImage
    addIcon={addIcon}
    removeIcon={removeIcon}
    imageSource={imageSource}
    addCallback={pickImageAsync}
    removeCallback={removeImage}
    id={sampleId}
  />
}

export default AddImage;