import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfilePage = ({ navigation }) => {
	// Dummy user data
	const user = {
		username: 'alphonsethm',
		bio: "Welcome to your account page, there's so much you can do",
		avatar: require('../assets/guys.png'), // You can replace this with your own image
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Overview</Text>
			<Image source={user.avatar} style={styles.avatar} />
			<Text style={styles.username}>{user.username}</Text>
			<Text style={styles.bio}>{user.bio}</Text>
			<Image source={require('../assets/ramen.png')} style={styles.additionalImage} />
			<TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
				<Image source={require('../assets/homepic.png')} style={styles.buttonImage} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start', // Align content to the top of the screen
		paddingTop: 80, // Add padding from the top to push content down
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 20,
		marginBottom: 20,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 75,
		marginBottom: 20,
	},
	username: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	bio: {
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	additionalImage: {
		width: 250, // Larger width
		height: 250, // Larger height
		alignSelf: 'flex-start', // Align to the left
		marginTop: 30,
		marginLeft: 10, // Add some left margin
		marginBottom: 20,
	},
	buttonContainer: {
		padding: 100,
	},
	buttonImage: {
		width: 50,
		height: 50,
	},
});

export default ProfilePage;
