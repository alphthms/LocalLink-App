import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import MapScreen from './screens/Map';
import PrizesScreen from './screens/Prizes';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Account" component={AccountScreen} />
				<Stack.Screen name="Map" component={MapScreen} />
				<Stack.Screen name="Prizes" component={PrizesScreen} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
export default App;
