import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import data from '../Data'

/*const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  // { key: 'K' },
  // { key: 'L' },
];
*/
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
const PlaceholderImage = require('../assets/images/m1.jpeg');

export default class App extends React.Component {
  renderItem = ({ item, index }) => {
   // const img = require(item.imgUrl);
   /* console.log(item.empty);
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }*/
    return (
      <View style={styles.item}>
        <Image source={{ uri: PlaceholderImage }} style={styles.imageContained}/>
       
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    //backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  imageContained:{
   
    resizeMode: "stretch",
    width: '100%',
    height: Dimensions.get('window').width / numColumns, 
  }
});