import { View, StyleSheet, Text } from 'react-native';

export default function UserData({  }) {
    return (
        <View style={styles.container}>

          <Text style={styles.header}>Mauro, 55</Text>
          <Text style={styles.body}>Porto Alegre - RS</Text>
          <Text style={styles.body}>Advogado</Text>
        </View>
      )

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%'
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,

      paddingLeft: 20,
      paddingRight: 20
    }
  })
  
 
  