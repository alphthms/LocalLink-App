import React from 'react';
import { View, Text, Image, Pressable, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome To</Text>
			<Text style={styles.title}>LocalLinked!</Text>
			<Image source={require('../assets/locallogo.png')} style={styles.HeaderImage} />
			<Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
				<Text style={styles.text}>Login</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => navigation.navigate('Account')}>
				<Text style={styles.text}>Or Sign Up?</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EDEDED', // Grey background color
	},
	title: {
		color: '#2e3106',
		fontWeight: 'bold',
		fontSize: 45,
	},
	HeaderImage: {
		width: 90,
		height: 90,
		margin: 20,
		borderRadius: 44,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 24,
		elevation: 3,
		backgroundColor: '#2e3106',
		marginTop: 40,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});
