import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	Animated,
	ImageBackground,
	TouchableNativeFeedback,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { DEFAULT_COLORS as COLORS, commonStyles as common, STATUS_HEIGHT } from '../helpers';
import CookingList from '../components/CookingList';

const HEADER_MAX_HEIGHT = 230;
const HEADER_MIN_HEIGHT = 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


class TabTypePreparation extends Component {
	static navigationOptions = ({ screenProps }) => {
		const { params } = screenProps.state;
		console.log(params);
		return {
			// tabBarVisible: false,
			tabBarLabel: 'Parrilla',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('../assets/levels/grill.png')}
					style={{ height: 25, width: 25, tintColor: tintColor }}
				/>
			),
		};
	};

	state = {
		scrollY: new Animated.Value(0),
	}

	render() {
		const { navigation, datos } = this.props;
		// const product = navigation.getParam('product', 'NO-ID');
		// console.log("en la ficha", this.props);
		// const titleMeat = product.item.country[1].value;
		const titleMeat = "hola";

		const headerTranslate = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, -HEADER_SCROLL_DISTANCE],
			extrapolate: 'clamp',
		});

		const titleScale = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
			outputRange: [1, 1, 0.7],
			extrapolate: 'clamp',
		});

		const titleTranslate = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [0, 85],
			extrapolate: 'clamp',
		});

		// console.log('llego ',product.item.country[1].value);
		return (
			<View style={[common.container, {backgroundColor: 'black'}]}>
				<CookingList
					style={[styles.listContainerStyle]}
					type={1}
					marginTop={HEADER_MAX_HEIGHT}
					animated={Animated.event(
						[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
					)}
				/>
				<Animated.View
					style={[ styles.header, { transform: [{ translateY: headerTranslate }] }]}
				>
					<ImageBackground
						source={require('../assets/bg-lista.jpg')}
						style={styles.itemBackgroundStyle}
					>
						<Animated.View
							style={[
								styles.titleContainerStyle,
								{
									transform: [
										{ scale: titleScale },
										{ translateY: titleTranslate },
									],
								},
							]}
						>
							<Text style={styles.titleItemStyle}>
								{titleMeat}
							</Text>
						</Animated.View>
					</ImageBackground>
					<View style={styles.cookingTitleContainerStyle}>
						<Image
							source={require('../assets/cooking-title.png')}
							style={styles.cookingTitleStyle}
						/>
					</View>
				</Animated.View>
				<View style={styles.backArrowStyle}>
					<TouchableNativeFeedback
						onPress={() => navigation.pop()}
					>
						<View style={{ paddingHorizontal: 10 }}>
							<Icon
								name="ios-arrow-back"
								size={34}
								color="white"
							/>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
	  	);
	}
}

const styles = StyleSheet.create({
	cookingTitleStyle: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'contain',
	},
	cookingTitleContainerStyle: {
		width: '100%',
		height: 50,
		paddingHorizontal: 30,
	},
	listContainerStyle: {
		paddingBottom: 8,
		flex: 1,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		overflow: 'hidden',
		height: HEADER_MAX_HEIGHT,
		backgroundColor: '#000000',
	},
	backArrowStyle: {
		position: 'absolute',
		top: STATUS_HEIGHT + 20,
		left: 10,
		// zIndex: 4,
	},
	itemBackgroundStyle: {
		flexDirection: 'column',
		// height: 230,
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		paddingTop: STATUS_HEIGHT,
		paddingBottom: 6,
	},
	titleContainerStyle: {
		alignItems: 'center',
		marginBottom: 10,
	},
	titleItemStyle: {
		fontSize: 42,
		color: 'rgba(255,255,255,0.95)',
		fontFamily: 'Trevor',
		textTransform: 'uppercase',
	},
});

export default TabTypePreparation;
