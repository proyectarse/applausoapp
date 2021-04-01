import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
// eslint-disable-next-line react/prefer-stateless-function
import ProductList from '../components/ProductList';
import { CommonHeader } from '../ui';
import { DEFAULT_COLORS as COLORS, commonStyles as common } from '../helpers';
import { Context } from '../context/Context';

const ListScreen = () => {
	// static navigationOptions = {
	// 	headerShown: false,
	// };
	const [meatState, setMeatState] = useState(null);

	const context = useContext(Context);
	const { list } = context;

	useEffect(() => {
		setMeatState(list);
	}, []);

	console.log('el estado meat', meatState);

	return (
		<SafeAreaView style={common.container}>
			<CommonHeader textHeader="" onPress={() => {}} />
			<View style={styles.listContainerStyle}>
				<ProductList list={meatState} />
			</View>
		</SafeAreaView>
	);
};

ListScreen['navigationOptions'] = () => ({
	headerShown: false,
});

const styles = StyleSheet.create({
	listContainerStyle: {
		backgroundColor: '#000000',
		// paddingBottom: 87,
		flex: 1,
	},
});

export default ListScreen;
