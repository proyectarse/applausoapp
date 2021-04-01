import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CommonSimpleHeader = () => {
	return (
		<View style={styles.headerStyle}>
			<Image
				source={require('../assets/top-logo.jpg')}
				style={styles.logoStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		flex: 1,
		height: 60,
		backgroundColor: 'transparent',
		alignItems: 'center',
	},
	logoStyle: {
		width: 166,
		height: 58,
		resizeMode: 'contain',
		marginBottom: 0,
	},
});

// make the component available to the app

// como las llama el common hay
// que definirlas como objeto no default
// export default Header;
export { CommonSimpleHeader };
