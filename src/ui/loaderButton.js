import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';

import { DEFAULT_COLORS as COLORS } from '../helpers';

const LoaderButton = ({
	isLoading,
	text,
	loadingText,
	onPress,
	addStyles,
	disabled = false,
	...props
}) => (
	<Button
		buttonStyle={
			!isLoading
				? [styles.buttonStyle, addStyles]
				: [styles.buttonLoaderStyle, addStyles]
		}
		titleStyle={{ fontSize: 22, color: COLORS.black, fontWeight: '300' }}
		type="solid"
		onPress={onPress}
		loading={disabled || isLoading}
		title={!isLoading ? text : loadingText}
		{...props}
		disabled={disabled || isLoading}
	/>
);


const styles = StyleSheet.create({
	buttonStyle: {
		paddingVertical: 8,
		minWidth: 150,
		paddingHorizontal: 8,
		borderRadius: 50,
		backgroundColor: COLORS.primary,
	},
	buttonLoaderStyle: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 50,
		minWidth: 150,
		backgroundColor: COLORS.secondary,
	},
});

export { LoaderButton };
