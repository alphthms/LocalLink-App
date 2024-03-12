import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, Text, TouchableOpacity } from 'react-native';
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
		{ id: 1, image: require('../assets/ramen.png'), text: 'HIDEOUT COFFEE' },
		{ id: 2, image: require('../assets/spinakerlogo.png'), text: 'Text for image 2' },
		{ id: 3, image: require('../assets/costa.png'), text: 'Text for image 3' },
		{ id: 4, image: require('../assets/coffee.png'), text: 'Text for image 3' },
		{ id: 5, image: require('../assets/spinakerlogo.png'), text: 'Text for image 3' },
		// Add more images and text as needed
	]);

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImagePress = (imageId) => {
		const image = images.find((img) => img.id === imageId);
		setSelectedImage(image);
	};

	const renderImage = ({ item }) => (
		<TouchableOpacity onPress={() => handleImagePress(item.id)}>
			<Image source={item.image} style={styles.image} />
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>LocalLink</Text>
			<View style={styles.rectangle}>
				<Text style={styles.rectangleText}>Ugly fix this page</Text>
			</View>
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e1dfdd', // Set background color to #eceef3
		paddingTop: 90, // Adjust the top padding
	},
	imageList: {
		alignItems: 'center',
		marginTop: 80,
	},
	image: {
		width: 144, // Adjust the width of the image as needed
		height: 140, // Adjust the height of the image as needed
		resizeMode: 'cover',
		borderRadius: 23,
		marginHorizontal: 8,
	},
	modalContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: 'white',
		width: 290, // Adjust the width of the image as needed
		height: 290,
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
		backgroundColor: '#88837c',
		paddingTop: 4,
		paddingBottom: 10,
		alignItems: 'center',
		paddingHorizontal: 20, // Add horizontal padding for space between buttons
	},
	footerImage: {
		width: 50, // Adjust image width as needed
		height: 50, // Adjust image height as needed
	},
	title: {
		fontSize: 50,
		fontWeight: 'bold',
		color: 'white',
	},
	rectangle: {
		backgroundColor: 'white',
		padding: 90, // Increase padding for a bigger rectangle
		marginTop: 60, // Adjust margin for positioning
		borderRadius: 20,
	},
	rectangleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	},
});

export default ImageSlider;
