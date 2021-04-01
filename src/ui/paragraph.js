import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DEFAULT_COLORS as COLORS } from '../helpers';

const Paragraph = ({ children, style }) => {
	return <Text style={[styles.texto, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	texto: {
		color: COLORS.paragraph,
		fontSize: 16,
		paddingHorizontal: 2,
	},
});

export { Paragraph };
