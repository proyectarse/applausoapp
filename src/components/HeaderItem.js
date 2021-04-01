// import libraries
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { STATUS_HEIGHT, commonStyles as common } from '../helpers';


// make a component
const HeaderItem = (props) => {
	const { onPress, title } = props;
	return (
		<ImageBackground
			source={require('../assets/bg-lista.jpg')}
			style={styles.itemBackgroundStyle}
		>
			{/* <View style={styles.backArrowStyle}>
				<TouchableOpacity
					onPress={onPress}
				>
					<Icon
						name="ios-arrow-back"
						size={32}
						color="white"
					/>
				</TouchableOpacity>
			</View> */}
			<View style={styles.titleContainerStyle}>
				<Text style={styles.titleItemStyle}>
					{title}
				</Text>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	itemBackgroundStyle: {
		flexDirection: 'column',
		// height: 230,
		flex: 1,
		justifyContent: 'space-between',
		width: '100%',
		paddingTop: STATUS_HEIGHT,
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

// make the component available to the app

// como las llama el common hay
// que definirlas como objeto no default
export default HeaderItem;
