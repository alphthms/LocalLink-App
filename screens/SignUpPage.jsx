import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const signup = async () => {
		await AsyncStorage.setItem(username, password);
		alert('User registered successfully');
		navigation.navigate('Welcome');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<TextInput style={styles.input} placeholder="studentnumber@myport.ac.uk" value={username} onChangeText={setUsername} />
			<TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
			<TouchableOpacity style={styles.button} onPress={signup}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('Login')}>
				<Text style={[styles.buttonText, styles.buttonTextSecondary]}>Go back to Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		padding: 20,
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
		color: 'black',
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

	textBold: {
		fontWeight: 'bold',
	},
});

export default SignUpPage;
