import _ from 'lodash';
import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	Image,
	ImageBackground,
} from 'react-native';

import { DEFAULT_COLORS as COLORS } from '../helpers';

const getTypeIcon = (icon) => {
	switch (icon) {
		case '1':
			return require('../assets/levels/grill.png');
		case '2':
			return require('../assets/levels/skillet.png');
		case '3':
			return require('../assets/levels/oven.png');
		default:
			return require('../assets/levels/pot.png');
	}
};

const mapType = (typePreparation) => {
	return typePreparation.map((type) => {
		return (
			<Image
				key={type.id}
				source={getTypeIcon(type.id)}
				style={styles.cookingImageStyle}
			/>
		);
	});
};

const ListItem = (props) => {
	console.log(props);
	console.log('llego esto ', props.product);
	const { titleStyle, descriptionStyle } = styles;
	// console.log('nombre ', props.product.item.country[1].value);
	// console.log('los items ', props.product.item);
	const name = props.product.item.name;
	const id = props.product.item.id;
	// const name = 'Nombre Corte';
	const typePreparation = props.product.item.typePreparation;
	// const typePreparation = [
	// 	{
	// 		id: '1',
	// 	},
	// 	{
	// 		id: '2',
	// 	},
	// ];
	// console.log(typePreparation);

	let image = '../assets/bg-lista.jpg';
	let image2 = '../assets/bg-lista2.jpg';

	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.handleClick}>
			<ImageBackground
				source={id === '2' ? require(image) : require(image2)}
				style={styles.itemBackgroundStyle}
			>
				<View style={{ width: '50%' }} />
				<View>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle}>
							{name.toUpperCase()}
						</Text>
					</View>
					<View style={styles.cookingStyle}>
						{mapType(typePreparation)}
					</View>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		paddingHorizontal: 15,
		paddingVertical: 1,
		alignSelf: 'flex-start',
		backgroundColor: 'rgba(255,255,255,1)',
	},
	titleTextStyle: {
		fontSize: 18,
		color: 'black',
		fontFamily: 'Trevor',
		textTransform: 'uppercase',
	},
	cookingStyle: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		alignSelf: 'flex-start',
		backgroundColor: 'rgba(0,0,0,0.95)',
		flexDirection: 'row',
	},
	cookingImageStyle: {
		width: 40,
		height: 35,
		resizeMode: 'contain',
	},
	itemBackgroundStyle: {
		flexDirection: 'row',
		height: 200,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});

export default ListItem;
