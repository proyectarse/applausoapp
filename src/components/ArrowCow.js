import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { DEFAULT_COLORS as COLORS, SCREEN_WIDTH } from '../helpers';

class ArrowCow extends Component {
	render() {
		const { arrowfunctionnext, arrowfunctionback, halfcow } = this.props;
		// console.log(halfcow);
		return (
			<View style={styles.bottomContainerStyle}>
				<View style={styles.arrowContainerStyle}>
					<TouchableOpacity onPress={() => arrowfunctionnext()}>
						<View style={styles.boxArrowStyle}>
							<Ionicons
								name="ios-arrow-back"
								size={32}
								color={COLORS.black}
							/>
						</View>
					</TouchableOpacity>
					{halfcow ? (
						<Image
							source={require('../assets/cow-arrow-front.jpg')}
							style={styles.cowImageStyle}
							fadeDuration={0}
						/>
					) : (
						<Image
							source={require('../assets/cow-arrow-back.jpg')}
							style={styles.cowImageStyle}
							fadeDuration={0}
						/>
					)}
					<TouchableOpacity onPress={() => arrowfunctionback()}>
						<View style={styles.boxArrowStyle}>
							<Ionicons
								name="ios-arrow-forward"
								size={32}
								color={COLORS.black}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomContainerStyle: {
		// height: 35,
		flexDirection: 'row',
		backgroundColor: '#000000',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 5,
	},
	cowImageStyle: {
		width: 52,
		height: 45,
		resizeMode: 'contain',
	},
	arrowContainerStyle: {
		// height: 35,
		width: '65%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	arrowTextStyle: {
		color: '#FFFFFF',
	},
	boxArrowStyle: {
		backgroundColor: COLORS.secondary,
		paddingHorizontal: 12,
		paddingVertical: 5,
	},
});

export default ArrowCow;
