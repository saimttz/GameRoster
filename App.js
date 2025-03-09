import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeLoginScreen from './src/screens/HomeLoginScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, useColorScheme } from 'react-native';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import HomeScreen from './src/screens/HomeScreen';
import HomeAddGameScreen from './src/screens/HomeAddGameScreen';
import ProfileSettingScreen from './src/screens/ProfileSettingScreen';
import ChatScreen from './src/screens/ChatScreen';
import ChatDetailScreen from './src/screens/ChatDetailScreen';
import Entypo from '@expo/vector-icons/Entypo';
import ProfilAffichageSettingsScreen from './src/screens/ProfilAffichageSettingsScreen';
import ProfileEditMdpCode from './src/screens/ProfileEditMdpCode';
import ProfileEditMdpNewMdp from './src/screens/ProfileEditMdpNewMdp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#ff286a',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#303030',
          paddingTop: 10,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Chat') {
            return <Entypo name="chat" size={size} color={color} />
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Airstream": require("./assets/fonts/airstream.ttf"),
    "Amaranth": require("./assets/fonts/Amaranth-Bold.ttf"),
    "Amaranth-Regular": require("./assets/fonts/Amaranth-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="HomeLogin" component={HomeLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="HomeAddGame" component={HomeAddGameScreen} options={{ headerShown: false, gestureDirection: 'vertical', ...TransitionPresets.ModalSlideFromBottomIOS }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AffichageSetting" component={ProfilAffichageSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileEditMdpCode" component={ProfileEditMdpCode} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileEditMdpNewMdp" component={ProfileEditMdpNewMdp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};