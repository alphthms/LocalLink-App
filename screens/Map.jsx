import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const ProfilePage = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false); // Define state variables

	const user = {
		username: 'alphonsethm',
		bio: "Welcome to your account page, there's so much you can do",
		avatar: require('../assets/guys.png'),
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Overview</Text>
			<Image source={user.avatar} style={styles.avatar} />
			<Text style={styles.username}>{user.username}</Text>
			<Text style={styles.bio}>{user.bio}</Text>
			<Text style={styles.heading1}>1400 Points</Text>

			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<Image source={require('../assets/applewallet.png')} style={styles.image2} />
			</TouchableOpacity>

			{/* Modal for displaying the image */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Image source={require('../assets/barcode.png')} style={styles.modalImage} />
						<TouchableOpacity onPress={() => setModalVisible(false)}>
							<Text style={styles.closeButton}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 80,
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 20,
		marginBottom: 20,
	},
	heading1: {
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 20,
		marginBottom: 30,
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
	image2: {
		width: 200, // Adjust the width to make the image bigger
		height: 100, // Adjust the height to maintain aspect ratio
		marginTop: 30,
		marginLeft: 0,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	modalImage: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
	closeButton: {
		fontSize: 16,
		color: 'blue',
		marginTop: 10,
	},
});

export default ProfilePage;
