import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
	const navigation = useNavigation();

	const navigateToLoginPage = () => {
		navigation.navigate('Login');
	};

	const navigateToHomePage = () => {
		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<TextInput
				style={[styles.input, styles.textBold]} // Combine styles for username input
				placeholder="Username"
			/>
			<TextInput
				style={[styles.input, styles.textBold]} // Combine styles for password input
				placeholder="Password"
				secureTextEntry
			/>
			<Button title="Login" onPress={navigateToLoginPage} />
			<Button title="Go back to Home" onPress={navigateToHomePage} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D3D3D3', // Change background color to grey
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: '#ccc',
		borderWidth: 1,
		marginBottom: 20,
		paddingHorizontal: 10,
		borderRadius: 55,
		color: 'black', // Set text color to black
	},
	textBold: {
		fontWeight: 'bold', // Set text to bold
	},
});

export default SignUpPage;
