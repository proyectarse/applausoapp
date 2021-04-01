import _ from 'lodash';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import Slides from '../components/slides';

const SLIDE_DATA = [{ text: 'Bienvenido', key: '5', color: '#383838' }];

class WellcomeScreen extends Component {
	state = { token: null };

	async componentDidMount() {
		// AsyncStorage.removeItem('fb_token');
		const token = await AsyncStorage.getItem('location_token');

		const { navigation } = this.props;

		if (!token) {
			// cambiar aca cando esté el token
			// console.log(token);
			this.setState({ token });
			navigation.navigate('main');
		} else {
			this.setState({ token: false });
		}
	}

	// arrow functioms sin bind.this = () =>
	onSlidesComplete = () => {
		const { navigation } = this.props;
		navigation.navigate('main');
	};
	// las funciones comunes con bind
	// onSlidesComplete() {
	// 	this.props.navigation.navigate('main');
	// }

	render() {
		const { token } = this.state;
		// se usa lodash, porque diferencia el null del false,
		// sino el if no funcionaría
		if (_.isNull(token)) {
			return <AppLoading />;
		}
		return <Slides data={SLIDE_DATA} navigation={this.props.navigation} />;
	}
}

export default WellcomeScreen;
