import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const login = async () => {
		const storedPassword = await AsyncStorage.getItem(username);
		if (storedPassword === password) {
			navigation.navigate('Welcome');
		} else {
			alert('Invalid credentials');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
			<TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
			<TouchableOpacity style={styles.button} onPress={login}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('SignUpPage')}>
				<Text style={[styles.buttonText, styles.buttonTextSecondary]}>Sign Up Instead?</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 24,
		color: '#333',
	},
	input: {
		width: '100%',
		height: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 16,
		paddingHorizontal: 16,
		backgroundColor: '#fff',
		fontSize: 16,
	},
	button: {
		width: '100%',
		height: 50,
		backgroundColor: '#2e3106',
		borderRadius: 48,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 16,
	},
	buttonSecondary: {
		backgroundColor: '#8d8f5f',
		width: '70%',
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	buttonTextSecondary: {
		color: '#000',
	},
});

export default LoginScreen;
