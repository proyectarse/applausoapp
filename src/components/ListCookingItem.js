import React from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	StyleSheet,
	Image,
	ImageBackground,
} from 'react-native';

import { DEFAULT_COLORS as COLORS } from '../helpers';

const ListItem = (props) => {
	// console.log(props);
	// console.log(props);
	const {
		titleStyle,
		itemBackgroundStyle,
		titleTextStyle,
		infoContainerStyle,
		infoImageStyle,
		infoStyle,
	} = styles;
	const {
		title,
		temperature,
		time,
	} = props.product.item;

	return (
		<TouchableWithoutFeedback
			onPress={props.handleClick}
		>
			<ImageBackground
				source={require('../assets/bg-cooking.jpg')}
				style={itemBackgroundStyle}
			>
				<View style={{ width: '12%' }} />
				<View>
					<View style={titleStyle}>
						<Text style={titleTextStyle}>{title.toUpperCase()}</Text>
					</View>
					<View style={infoStyle}>
						<View style={infoContainerStyle}>
							<Image
								source={require('../assets/temperature-icon.jpg')}
								style={infoImageStyle}
							/>
							<View>
								<Text style={{ fontWeight: 'bold', color: 'white' }}>TEMPERATURA</Text>
								<Text style={{ color: 'white' }}>{temperature}</Text>
							</View>
						</View>
						<View style={infoContainerStyle}>
							<Image
								source={require('../assets/time-icon.jpg')}
								style={infoImageStyle}
							/>
							<View>
								<Text style={{ fontWeight: 'bold', color: 'white' }}>TIEMPO</Text>
								<Text style={{ color: 'white' }}>{time}</Text>
							</View>
						</View>
					</View>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		paddingTop: 12,
		alignSelf: 'flex-start',
	},
	titleTextStyle: {
		fontSize: 18,
		color: 'white',
		fontFamily: 'Trevor',
		textTransform: 'uppercase',
	},
	infoStyle: {
		marginTop: 8,
		flexDirection: 'row',
		width: '80%',
		alignSelf: 'flex-start',
		justifyContent: 'space-between',
	},
	infoContainerStyle: {
		alignSelf: 'flex-start',
		flexDirection: 'row',
	},
	infoImageStyle: {
		width: 40,
		height: 35,
		marginRight: 6,
		resizeMode: 'contain',
	},
	itemBackgroundStyle: {
		flexDirection: 'row',
		height: 120,
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});

export default ListItem;
