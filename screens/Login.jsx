import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CombinedImageSlider = () => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.navigate('Home'); // Navigate back to the home screen
	};

	const handleNavigateToAnotherPage = () => {
		navigation.navigate('Map'); // Navigate to AnotherPage
	};

	const handleNavigateToAnotherAnotherPage = () => {
		navigation.navigate('Prizes'); // Navigate to AnotherPage
	};

	const [smallImages] = useState([
		{ id: 1, image: require('../assets/jerklogo.png') },
		{ id: 2, image: require('../assets/finalcofffeee.png') },
		{ id: 3, image: require('../assets/fuegologo.png') },
		{ id: 4, image: require('../assets/coffee.png') },
		{ id: 5, image: require('../assets/clubhousedone.png') },
		// Add more images as needed
	]);

	const [largeImages] = useState([
		{ id: 1, image: require('../assets/food2.png') },
		{ id: 2, image: require('../assets/guys.png') },
		{ id: 3, image: require('../assets/guys.png') },
		// Add more images as needed
	]);

	const [selectedImage, setSelectedImage] = useState(null);
	const [profilePicture, setProfilePicture] = useState(require('../assets/locallogo.png'));

	const handleImagePress = () => {
		setSelectedImage(null);
	};

	const changeProfilePicture = (newProfilePicture) => {
		setProfilePicture(newProfilePicture);
	};

	const renderSmallImage = ({ item }) => (
		<TouchableOpacity onPress={handleImagePress}>
			<Image source={item.image} style={styles.smallImage} />
		</TouchableOpacity>
	);

	const renderLargeImage = ({ item }) => (
		<TouchableOpacity onPress={() => setSelectedImage(item)}>
			<View style={styles.largeImageContainer}>
				<Image source={item.image} style={styles.largeImage} />
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.profileContainer}>
					<Image source={profilePicture} style={styles.profilePicture} />
					<Text style={styles.profileText}>Welcome to Locallink</Text>
				</View>
				<FlatList
					data={smallImages}
					renderItem={renderSmallImage}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.smallImageList}
				/>
				<Text style={styles.sectionTitle}>Charites</Text>
				<FlatList
					data={largeImages}
					renderItem={renderLargeImage}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.largeImageList}
				/>
				{selectedImage && (
					<TouchableOpacity style={styles.modalContainer} onPress={() => setSelectedImage(null)}>
						<View style={styles.modal}>
							<Text style={styles.modalText}>{selectedImage.text}</Text>
						</View>
					</TouchableOpacity>
				)}
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity onPress={handleGoBack}>
					<Image source={require('../assets/homepic.png')} style={styles.footerImage} />
				</TouchableOpacity>
				<TouchableOpacity onPress={handleNavigateToAnotherAnotherPage}>
					<Image source={require('../assets/foodlogo.png')} style={styles.footerImage} />
				</TouchableOpacity>
				<TouchableOpacity onPress={handleNavigateToAnotherPage}>
					<Image source={require('../assets/profile1.png')} style={styles.footerImage} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eeeff3', // Set background color to #eceef3
	},
	scrollContainer: {
		flexGrow: 1,
		paddingBottom: 70, // Adjust the padding bottom to accommodate the sticky footer
	},
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute',
		top: 45,
		left: 20,
	},
	profilePicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	profileText: {
		marginLeft: 10,
		fontSize: 19,
		fontWeight: 'bold',
	},
	smallImageList: {
		marginTop: 120,
		paddingHorizontal: 10,
	},
	smallImage: {
		width: 90,
		height: 90,
		resizeMode: 'cover',
		borderRadius: 15,
		marginRight: 10,
	},
	largeImageList: {
		marginTop: 20,
		paddingHorizontal: 10,
	},
	largeImageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 20, // Add margin between images
	},
	largeImage: {
		width: 320,
		height: 250,
		resizeMode: 'cover',
		borderRadius: 15,
	},
	largeImageText: {
		position: 'absolute',
		bottom: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		color: 'blue',
		paddingHorizontal: 10,
		borderRadius: 5,
		fontSize: 16,
	},
	modalContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: 'white',
		width: 250,
		height: 250,
		borderRadius: 10,
		elevation: 5,
	},
	modalText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row', // Align buttons horizontally
		justifyContent: 'space-between', // Distribute space evenly
		backgroundColor: '#fff',
		paddingVertical: 15,
		paddingHorizontal: 30, // Add horizontal padding for space between buttons
	},
	footerImage: {
		width: 40, // Adjust image width
		height: 40, // Adjust image height
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 10,
	},
});

export default CombinedImageSlider;
