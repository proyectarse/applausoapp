import { Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

// http://rallycoding.herokuapp.com/api/tokens
// const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
	// await AsyncStorage.removeItem('pushtoken');
	let previoustoken = await AsyncStorage.getItem('pushtoken');
	// console.log('el token', previoustoken);
	
	if (previoustoken) {
		console.log('token viejo ', previoustoken);
	} else {
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

		// Stop here if the user did not grant permissions
		// console.log('el status', status);
		if (status !== 'granted') {
			return;
		}

		// Get the token that uniquely identifies this device
		let token = await Notifications.getExpoPushTokenAsync();

		// await axios.post(PUSH_ENDPOINT, { token: { token } });

		// return fetch(PUSH_ENDPOINT, {
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		token: {
		// 			value: token,
		// 		},
		// 		user: {
		// 			username: 'Brent',
		// 		},
		// 	}),
		// });

		AsyncStorage.setItem('pushtoken', token);
	}
}
