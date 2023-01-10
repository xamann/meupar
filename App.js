import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import TabsScreen from './components/Tabs';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tabs" component={TabsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}


