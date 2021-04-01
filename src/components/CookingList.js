import React, { Component } from 'react';
import {
	FlatList,
	Animated,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import ListCookingItem from './ListCookingItem';
import EmptyItem from './EmptyItem';
import SeparatorItem from './SeparatorItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class CookingList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		this.handleData();
	}

	renderEmpty = () => <EmptyItem message="No hay sugerencias." />;

	renderSeparator = () => <SeparatorItem height={8} />;

	handleData = () => {
		const { type } = this.props;
		// console.log('el tipo', type.toString());
		if	(type.toString() === '1') {
			let list = [
				{
					title: 'a la inglesa 1',
					temperature: 'df dfd sfd fsf fdf f',
					time: '5',
					key: '1',
				},
				{
					title: 'a punto 2',
					temperature: 'dhj ghj hgjhjsf fdf f',
					time: '12',
					key: '2',
				},
				{
					title: 'a punto 3',
					temperature: 'oiuoiu iiu sf fdf f',
					time: '8',
					key: '3',
				},
				{
					title: 'a punto 4',
					temperature: 'oiuodsdf fdsf fdf f',
					time: '8',
					key: '4',
				},
				{
					title: 'a punto 5',
					temperature: 'oiuodsff  fdf f',
					time: '8',
					key: '5',
				},
				{
					title: 'a punto 6',
					temperature: 'ddfa dd fdf f',
					time: '12',
					key: '6',
				},
			];
			this.setState({ data: list });
		} else if (type.toString() === '2') {
			let list = [
				{
					title: 'Otros Puntos',
					temperature: 'df dfd sfd fsf fdf f',
					time: '5',
					key: '1',
				},
				{
					title: 'Otro punto cocción',
					temperature: 'dhj ghj hgjhjsf fdf f',
					time: '12',
					key: '2',
				},
				{
					title: 'a punto 3',
					temperature: 'oiuoiu iiu sf fdf f',
					time: '8',
					key: '3',
				},
			];
			this.setState({ data: list });
		}
	}

	renderItem(product) {
		return (
			<ListCookingItem
				product={product}
			/>
		)
	}

	render() {
		const { animated, style, marginTop } = this.props;
		return (
			<AnimatedFlatList
				data={this.state.data}
				renderItem={this.renderItem.bind(this)}
				ListEmptyComponent={this.renderEmpty}
				ItemSeparatorComponent={this.renderSeparator}
				keyExtractor={product => product.key}
				onScroll={animated}
				scrollEventThrottle={20}
				style={style}
				contentContainerStyle={{ marginTop: marginTop, paddingBottom: marginTop + 4 }}
			/>
		);
	}
}

export default withNavigation(CookingList);
