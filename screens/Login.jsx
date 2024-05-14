import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Text, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

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

	const handleNavigateToAnotherAnotherAnotherPage = () => {
		navigation.navigate('Location'); // Navigate to AnotherPage
	};

	const [smallImages, setSmallImages] = useState([
		{ id: 1, image: require('../assets/jerklogo.png'), selectedImage: require('../assets/nattytimetable.png') },
		{ id: 6, image: require('../assets/bored.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 4, image: require('../assets/sweettooth.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 3, image: require('../assets/florios.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 5, image: require('../assets/theclubhouse.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 2, image: require('../assets/spark.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 7, image: require('../assets/hunter.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 8, image: require('../assets/tenth.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 9, image: require('../assets/portsolent.png'), selectedImage: require('../assets/floratimetable.png') },
		{ id: 10, image: require('../assets/baycoffee.png'), selectedImage: require('../assets/floratimetable.png') },
	]);

	const [selectedImage, setSelectedImage] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const handleImagePress = (item) => {
		setSelectedImage(item.selectedImage);
		setModalVisible(true);
	};

	const renderSmallImage = ({ item }) => (
		<TouchableOpacity onPress={() => handleImagePress(item)}>
			<Image source={item.image} style={styles.smallImage} />
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.profileContainer}>
					<Image source={require('../assets/locallogo.png')} style={styles.profileIcon} />
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
				<Swiper style={styles.swiperContainer} loop={false}>
					<Image source={require('../assets/bored4.png')} style={styles.centerImage} />
					<Image source={require('../assets/natty2.png')} style={styles.centerImage} />
					<Image source={require('../assets/bored4.png')} style={styles.centerImage} />
					{/* Add more images as needed */}
				</Swiper>
			</ScrollView>
			<Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
				<View style={styles.modalContainer}>
					<View style={styles.modal}>
						<Image source={selectedImage} style={styles.modalImage} />
						<Button title="Close" onPress={() => setModalVisible(false)} />
					</View>
				</View>
			</Modal>
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
				<TouchableOpacity onPress={handleNavigateToAnotherAnotherAnotherPage}>
					<Image source={require('../assets/mapicon2.png')} style={styles.footerImage} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eeeff3',
	},
	scrollContainer: {
		flexGrow: 1,
		paddingBottom: 70,
	},
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute',
		top: 45,
		left: 20,
	},
	profileIcon: {
		width: 50,
		height: 50,
		marginRight: 10,
		marginTop: 10,
	},
	profileText: {
		fontSize: 19,
		fontWeight: 'bold',
		marginTop: 15,
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
		marginTop: 10,
	},
	swiperContainer: {
		height: 300,
	},
	centerImage: {
		width: width,
		height: 200, // Adjust height as needed
		width: 340,
		marginLeft: 10,
		borderRadius: 20,
		paddingBottom: 200,
	},
	modalContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 100,
	},
	modal: {
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 5,
	},
	modalImage: {
		width: 350,
		height: 300,
		borderRadius: 10,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		paddingVertical: 15,
		paddingHorizontal: 30,
	},
	footerImage: {
		width: 40,
		height: 40,
	},
});

export default CombinedImageSlider;
