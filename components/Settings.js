// src/AddRemove.tsx
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Avatar from './Avatar';
import AddImage from './AddImage.tsx';

const Settings = () => {

  return (
    <View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Avatar></Avatar>
      <Text>MAURO</Text>

    </View>
    <View style={styles.photosRows}>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
      </View>
      <View style={styles.photosRows}>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
      <View style={styles.photosCols}>
      <AddImage></AddImage>
      </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  photosRows: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
   
    
  },
  photosCols: {
    padding: 5
  },
});

export default Settings

