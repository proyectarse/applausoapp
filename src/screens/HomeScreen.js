import React, { Component } from 'react';
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	Modal,
	Alert,
} from 'react-native';
// import { Notifications } from 'expo';
import { Icon } from 'react-native-elements';
// import { API, graphqlOperation } from 'aws-amplify';
// eslint-disable-next-line react/prefer-stateless-function
import Cow from '../components/Cow2';
import { CommonHeader, Paragraph, Spinner } from '../ui';
import {
	DEFAULT_COLORS as COLORS,
	commonStyles as common,
	SCREEN_WIDTH,
} from '../helpers';

class HomeScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};

	state = {
		modalVisible: false,
		cowVisible: false,
		notification: {},
		image: '',
		// list: [],
	};

	async componentDidMount() {
		// this._notificationSubscription = Notifications.addListener(
		// 	this._handleNotification
		// );
		setTimeout(() => {
			this.setState({ cowVisible: true });
		}, 35);
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	// _handleNotification = (notification) => {
	// 	console.log(notification);
	// 	const { text } = notification.data;
	// 	// { "text":"el texto de la data" }
	// 	const { origin } = notification;

	// 	if (origin === 'received' && text) {
	// 		Alert.alert('New push', text, [{ text: 'OK' }]);
	// 		this.setState({ notification: notification });
	// 	}
	// };

	render() {
		// console.log(this.state.cowVisible);
		const { navigation } = this.props;
		const { cowVisible } = this.state;
		return (
			<SafeAreaView style={common.container}>
				<Modal
					animationType="slide"
					transparent
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(!this.state.modalVisible);
					}}
				>
					<View style={styles.modalContainerStyle}>
						<View style={styles.contentContainerStyle}>
							<Text style={styles.titleStyle}>
								Cambio de Idioma
							</Text>
							<Paragraph>
								Por ahora solo habilitada para Chile.
							</Paragraph>
							<Icon
								reverse
								size={16}
								name="close"
								type="font-awesome"
								color="#f50"
								onPress={() => {
									this.setModalVisible(
										!this.state.modalVisible
									);
								}}
							/>
						</View>
					</View>
				</Modal>
				<CommonHeader
					textHeader=""
					iconRight="es"
					onPressRight={() => {
						this.setModalVisible(true);
					}}
				/>
				{cowVisible ? (
					<Cow navigation={navigation} />
				) : (
					<Spinner color={COLORS.primary} />
				)}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	modalContainerStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
	},
	contentContainerStyle: {
		width: SCREEN_WIDTH - 40,
		backgroundColor: '#000000',
		padding: 20,
		alignItems: 'center',
		borderRadius: 10,
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: COLORS.secondary,
	},
});

export default HomeScreen;
