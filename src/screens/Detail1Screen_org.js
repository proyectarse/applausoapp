import React, { Component } from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line react/prefer-stateless-function
class Detail1Screen extends Component {
	render() {
		const { navigation } = this.props;
		const product = navigation.getParam('product', 'NO-ID');

		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{product.item.title}</Text>
			</View>
		);
	}
}

export default Detail1Screen;
