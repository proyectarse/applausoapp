import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyItem = (props) => {
	const { message } = props;
	return (
		<View>
			<Text style={styles.textStyle}>{message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		padding: 10,
		fontStyle: 'italic',
		color: 'white',
	},
});

export default EmptyItem;
