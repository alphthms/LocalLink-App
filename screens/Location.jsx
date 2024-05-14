import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

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

	const handleNavigateToAnotherAnotherAnotherPage = () => {
		navigation.navigate('Location'); // Navigate to AnotherPage
	};

	const [selectedImage, setSelectedImage] = useState(null);
	const [profilePicture, setProfilePicture] = useState(require('../assets/locallogo.png'));

	const handleImagePress = (item) => {
		setSelectedImage(item.selectedImage);
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.profileContainer}>
					<Image source={profilePicture} style={styles.profilePicture} />
					<Text style={styles.profileText}>Locations</Text>
				</View>

				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 50.8195,
						longitude: -1.0875,
						latitudeDelta: 0.1,
						longitudeDelta: 0.1,
					}}
				>
					<Marker coordinate={{ latitude: 50.79682, longitude: -1.06706 }} title="Spark Community" />
					<Marker coordinate={{ latitude: 50.78972, longitude: -1.09318 }} title="Bored Of Southsea" />
					<Marker coordinate={{ latitude: 50.80207, longitude: -1.08821 }} title="Natty Jerk" />
					<Marker coordinate={{ latitude: 50.781089782714844, longitude: -1.0909353494644165 }} title="The Club House" />
					<Marker coordinate={{ latitude: 50.787044525146484, longitude: -1.0803639888763428 }} title="Sweet Tooth" />
				</MapView>
				{selectedImage && (
					<TouchableOpacity style={styles.modalContainer} onPress={() => setSelectedImage(null)}>
						<View style={styles.modal}>
							<Image source={selectedImage} style={styles.modalImage} />
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
	profilePicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	profileText: {
		marginLeft: 10,
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
		marginRight: 10,
	},
	map: {
		width: '90%',
		height: 600,
		marginLeft: 20,
		marginTop: 130,
		borderRadius: 23,
	},
	modalContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
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
