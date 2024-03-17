import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ImageSlider = () => {
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

	const [images] = useState([
		{ id: 1, image: require('../assets/jerklogo.png'), text: 'HIDEOUT COFFEE' },
		{ id: 2, image: require('../assets/finalcofffeee.png'), text: 'Text for image 2' },
		{ id: 3, image: require('../assets/fuegologo.png'), text: 'Text for image 3' },
		{ id: 4, image: require('../assets/coffee.png'), text: 'Text for image 3' },
		{ id: 5, image: require('../assets/clubhousedone.png'), text: 'Text for image 3' },
		// Add more images and text as needed
	]);

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImagePress = () => {
		setSelectedImage(null);
	};

	const renderImage = ({ item }) => (
		<TouchableOpacity onPress={handleImagePress}>
			<Image source={item.image} style={styles.image} />
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={images}
				renderItem={renderImage}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.imageList}
			/>
			{selectedImage && (
				<TouchableOpacity style={styles.modalContainer} onPress={() => setSelectedImage(null)}>
					<View style={styles.modal}>
						<Text style={styles.modalText}>{selectedImage.text}</Text>
					</View>
				</TouchableOpacity>
			)}
			<View style={styles.footer}>
				<TouchableOpacity onPress={handleNavigateToAnotherAnotherPage}>
					<Image source={require('../assets/guys.png')} style={styles.footerImage} />
				</TouchableOpacity>
				<TouchableOpacity onPress={handleGoBack}>
					<Image source={require('../assets/homepic.png')} style={styles.footerImage} />
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
		justifyContent: 'center', // Center content vertically
		alignItems: 'center', // Center content horizontally
		backgroundColor: '#eeeff3 ', // Set background color to #eceef3
	},
	imageList: {
		alignItems: 'center',
		marginTop: 600, // Adjust the top margin
		height: 180, // Set the height of the image list
	},
	image: {
		width: 100, // Adjust the width of the image
		height: 100, // Adjust the height of the image
		resizeMode: 'cover',
		borderRadius: 15, // Adjust the border radius
		marginHorizontal: 5,
	},
	modalContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: 'white',
		width: 250, // Adjust the width of the modal
		height: 250, // Adjust the height of the modal
		borderRadius: 10,
		elevation: 5,
	},
	modalText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	footer: {
		flexDirection: 'row', // Align buttons horizontally
		justifyContent: 'space-between', // Distribute space evenly
		width: '100%',
		backgroundColor: '#fff',
		paddingTop: 4,
		paddingBottom: 10,
		alignItems: 'center',
		paddingHorizontal: 30, // Add horizontal padding for space between buttons
	},
	footerImage: {
		width: 40, // Adjust image width
		height: 40, // Adjust image height
	},
	title: {
		fontSize: 50,
		fontWeight: 'bold',
		color: 'white',
	},
});

export default ImageSlider;
