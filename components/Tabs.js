
import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './CarouselCards';
import TinderCards from './TinderCards';
import ChatScreen from './Chat';
import CurtidasScreen from './Curtidas'
import SettingsScreen from './Settings';
//import SettingsScreen from './AddPhotoGrid.tsx';

  function MatchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Curtidas!</Text>
      </View>
    );
  }
  function CarouselCards2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carrossel!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const MyTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

export default function Tabs() {
  return (
    
    <NavigationContainer theme={MyTheme} independent={true}>
     
      <Tab.Navigator
       
        screenOptions={({ route }) => ({
            tabBarLabelPosition:'below-icon',
          
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Usuários') {
              iconName =  'user';
            } else if (route.name === 'Curtidas') {
              iconName = 'staro';
            }else if (route.name === 'Conversa') {
                iconName = 'message1'; 
            }else if (route.name === 'Match') {
                    iconName = 'heart';
            }else if (route.name === 'Opções') {
                iconName = 'setting';
            }
        
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Usuários" component={TinderCards} />
        <Tab.Screen name="Curtidas" component={CurtidasScreen} />
        <Tab.Screen name="Conversa" component={ChatScreen} />
        <Tab.Screen name="Match" component={MatchScreen} />
        <Tab.Screen name="Opções" component={SettingsScreen} />
        <Tab.Screen name="Carousel" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}

