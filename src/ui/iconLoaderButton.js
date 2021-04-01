import React from 'react';
import {
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { DEFAULT_COLORS as COLORS } from '../helpers';

const IconLoaderButton = ({
	isLoading,
	text,
	loadingText,
	onPress,
	leftIcon,
	addStyles,
	disabled = false,
	...props
}) => (
	<TouchableOpacity
		style={
			!isLoading
				? [styles.buttonStyle, addStyles]
				: [styles.buttonLoaderStyle, addStyles]
		}
		onPress={onPress}
		disabled={disabled || isLoading}
	>
		{!isLoading
			?	(
				<SimpleLineIcons
					name={leftIcon}
					style={styles.buttonIconStyle}
				/>
			)
			: (
				<View style={{ marginRight: 10 }}>
					<ActivityIndicator size="small" color="#FFFFFF" />
				</View>
			)}
		<Text style={styles.buttonText}>
			{!isLoading ? text : loadingText}
		</Text>
	</TouchableOpacity>
);


const styles = StyleSheet.create({
	buttonStyle: {
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		padding: 14,
		marginTop: 20,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
	buttonIconStyle: {
		color: '#fff',
		marginRight: 10,
		fontSize: 24,
	},
	buttonLoaderStyle: {
		alignItems: 'center',
		backgroundColor: COLORS.textTabInactive,
		padding: 14,
		marginTop: 20,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export { IconLoaderButton };
