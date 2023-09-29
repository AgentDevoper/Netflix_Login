import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup'
import Home from './src/screens/Home';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
