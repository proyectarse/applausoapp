import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

import ListItem from './ListItem';
import EmptyItem from './EmptyItem';
import SeparatorItem from './SeparatorItem';
import { DEFAULT_COLORS as COLORS, commonStyles as common } from '../helpers';

class ProductList extends Component {
	renderItem(product) {
		return (
			<ListItem
				product={product}
				handleClick={() => {
					this.props.navigation.navigate('detail', {
						product: product,
					});
				}}
			/>
		);
	}

	renderEmpty = () => <EmptyItem message="No hay sugerencias." />;

	renderSeparator = () => <SeparatorItem color={COLORS.darkbg} height={1} />;

	render() {
		// const list = this.props;
		// console.log(this.props.list, 'en pl');
		return (
			<FlatList
				data={this.props.list}
				renderItem={this.renderItem.bind(this)}
				ListEmptyComponent={this.renderEmpty}
				ItemSeparatorComponent={this.renderSeparator}
				keyExtractor={(product) => product.id}
			/>
		);
	}
}

export default withNavigation(ProductList);
