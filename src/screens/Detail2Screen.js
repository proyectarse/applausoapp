import React, { Component } from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line react/prefer-stateless-function
class Detail2Screen extends Component {
	render() {
		// console.log(this.props.navigation.state.params.product);
		const product = this.props.navigation.state.params.product;
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{product.item.title}</Text>
				<Text>en el tab 2</Text>
			</View>
		);
	}
}

export default Detail2Screen;
