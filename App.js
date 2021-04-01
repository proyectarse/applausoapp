import React, { Component } from 'react';
import { Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Router from './src/Router';
import Context from './src/context/Context';
// import registerForNotifications from './src/services/push_notification';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
	state = {
		// notification: {},
		isReady: false,
	};

	// _handleNotification = (notification) => {
	// 	console.log(notification);
	// 	const { title } = notification;
	// 	const { origin } = notification;

	// 	if (origin === 'received' && title) {
	// 		Alert.alert(
	// 			'New push',
	// 			title,
	// 			[{ text: 'OK' }],
	// 		);
	// 		this.setState({notification: notification});
	// 	}
	// };

	async _cacheResourcesAsync() {
		console.log('entro'),
			await Font.loadAsync({
				Trevor: require('./src/assets/fonts/Trevor.ttf'),
			});
		// registerForNotifications();
	}

	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Context.Provider>
				<Router />
			</Context.Provider>
		);
	}
}
