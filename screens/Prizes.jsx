import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';

const ImageWithText = ({ imageSource, title, subtitle }) => (
	<View style={styles.imageContainer}>
		<Image source={imageSource} style={styles.image} resizeMode="cover" />
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.subtitle}>{subtitle}</Text>
	</View>
);

const ImageGrid = () => {
	const [images, setImages] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const loadImages = async () => {
			const loadedImages = await Promise.all([
				require('../assets/food1.png'),
				require('../assets/ramen.png'),
				require('../assets/donut2.png'),
				require('../assets/newdonut.png'),
				require('../assets/newjerkk.png'),
				require('../assets/fuegos.png'),
				require('../assets/fuegos.png'),
				require('../assets/food1.png'),
				require('../assets/ramen.png'),
				require('../assets/food1.png'),
			]);

			setImages(loadedImages);
		};

		loadImages();
	}, []);

	const titles = ['Salmon Pasta', 'Chicken Ramen', 'Coconut Donut', 'Fog Donut', 'Belly Box Meal', 'Fuegos Smashed Burge', 'Food 1', 'Food 2', 'Ramen', 'Food 1'];
	const subtitles = [
		'Wagamamas',
		'Wagamamas',
		'Hideout Coffee',
		'Hideout Coffee',
		'Natty s Jerk Kitchen',
		'Fuegos Street',
		'Natty s Jerk Kitchen',
		'Subtitle for Food 2',
		'Subtitle for Ramen',
		'Subtitl1',
	];

	// Filter images based on search query
	const filteredImages = images.filter((image, index) => titles[index].toLowerCase().includes(searchQuery.toLowerCase()));

	// Split the filtered images into pairs
	const imagePairs = [];
	for (let i = 0; i < filteredImages.length; i += 2) {
		imagePairs.push([filteredImages[i], filteredImages[i + 1]]);
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.searchInput} placeholder="Search..." onChangeText={setSearchQuery} value={searchQuery} />
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				{imagePairs.map((pair, index) => (
					<View key={index} style={styles.row}>
						{pair.map((image, idx) => (
							<ImageWithText key={idx} imageSource={image} title={titles[index * 2 + idx]} subtitle={subtitles[index * 2 + idx]} />
						))}
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const { width } = Dimensions.get('window');
const imageWidth = width / 2 - 20; // Subtracting 20 for margins and padding

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#edebeb',
	},
	scrollViewContent: {
		flexGrow: 1,
		paddingBottom: 20, // Adjust if necessary
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	imageContainer: {
		alignItems: 'center',
	},
	image: {
		width: 150, // Adjust the width to make the images smaller
		height: 150, // Adjust the height to make the images smaller
		marginHorizontal: 5,
		marginBottom: 10,
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subtitle: {
		textAlign: 'center',
		fontStyle: 'italic',
		color: '#888',
	},
	searchInput: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 9,
		margin: 39,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		zIndex: 1,
	},
});

export default ImageGrid;
