import React from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';

const SeparatorItem = (props) => {
	const { color, height } = props;
	// si le viene color, lo aplica sino el default
	return (
		<View style={[styles.lineStyle, { borderTopColor: (color) ? color : 'transparent', height: height }]} />
	);
};

const styles = StyleSheet.create({
	lineStyle: {
		borderTopWidth: 2,
		marginTop: 0,
	},
});

export default SeparatorItem;
