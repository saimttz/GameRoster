import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLoginScreen from './src/screens/HomeLoginScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const Stack = createStackNavigator();

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
      <Stack.Navigator initialRouteName='HomeLogin'>
        <Stack.Screen name="HomeLogin" component={HomeLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};