// import libraries
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Text,
	Image,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
// import { DEFAULT_COLORS as COLORS, commonStyles as common } from './../helpers';

const renderCenterContent = () => {
	return (
		<View style={styles.logoContainerStyle}>
			<Image
				source={require('../assets/top-logo.jpg')}
				style={styles.logoStyle}
			/>
		</View>
	);
};
// make a component
class CommonHeader extends Component {
	// renderCenterContent() {
	// 	return (
	// 		<View>
	// 			<Image source={require('../assets/logotop.png')} />
	// 		</View>
	// 	);
	// }

	renderLeftContent() {
		const { onPress, icon } = this.props;

		return (
			<TouchableOpacity onPress={onPress}>
				{icon && (
					<View
						style={{
							paddingHorizontal: 10,
							height: 50,
						}}
					>
						<Icon
							name={icon}
							size={30}
							color="white"
							style={{ marginTop: 10 }}
						/>
					</View>
				)}
			</TouchableOpacity>
		);
	}

	// renderRightContent() {
	// 	const { onPressRight, iconRight } = this.props;

	// 	return (
	// 		<TouchableOpacity
	// 			onPress={onPressRight}
	// 		>
	// 			<View style={{ paddingHorizontal: 10 }}>
	// 				<Icon
	// 					name={iconRight}
	// 					size={30}
	// 					color="white"
	// 					style={{ marginTop: 10 }}
	// 				/>
	// 			</View>
	// 		</TouchableOpacity>
	// 	);
	// }

	renderRightContent() {
		const { onPressRight, iconRight } = this.props;
		if (iconRight) {
			return (
				<TouchableOpacity onPress={onPressRight}>
					<View
						style={{
							paddingHorizontal: 4,
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View>
							<Image
								source={require('../assets/flags/chile.jpg')}
								style={styles.flagImageStyle}
							/>
						</View>
						<View style={styles.langContainerStyle}>
							<Text style={{ fontSize: 10, color: '#e4e4e4' }}>
								{iconRight}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			);
		}
		return;
	}

	render() {
		return (
			<View style={styles.headerStyle}>
				<Header
					statusBarProps={{
						barStyle: 'light-content',
						backgroundColor: '#000000',
					}}
					leftComponent={this.renderLeftContent()}
					leftContainerStyle={{}}
					centerComponent={renderCenterContent()}
					rightComponent={this.renderRightContent()}
					rightContainerStyle={{}}
					containerStyle={styles.ContainerStyles}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		height: 87,
		backgroundColor: 'black',
	},
	ContainerStyles: {
		backgroundColor: 'transparent',
		justifyContent: 'space-around',
		borderBottomWidth: 0,
		height: 87,
	},
	logoContainerStyle: {},
	logoStyle: {
		width: 166,
		height: 58,
		resizeMode: 'contain',
		marginBottom: 0,
	},
	flagImageStyle: {
		width: 20,
		resizeMode: 'contain',
	},
	langContainerStyle: {
		borderColor: '#CCCCCC',
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 5,
		paddingHorizontal: 5,
		height: 20,
	},
});

// make the component available to the app

// como las llama el common hay
// que definirlas como objeto no default
// export default Header;
export { CommonHeader };
