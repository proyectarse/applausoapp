import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
		<Text>asdsadasdsda</Text>
	</View>
);

export default class Detail1Screen extends React.Component {
	state = {
		index: 0,
		routes: [],
		rutas: [],
	};

	componentDidMount() {
		const { navigation } = this.props;
		const product = navigation.getParam('product', 'NO-ID');
		// console.log("llegó ",product);
		this.renderTabs(product);
		console.log(this.state);
	}

	renderTabs = (product) => {
		// console.log("array ",product.item.typePreparation);
		const ArrayPruebas = [
			{
				"id": "2",
				"mediumFire": "Bajo",
				"mediumTime": 11,
				"mediumWellFire": "Bajo",
				"mediumWellTime": 44,
				"name": "Sartén",
				"rareFire": "Bajo",
				"rareTime": 22,
				"wellDoneFire": "Bajo",
				"wellDoneTime": 33,
			},
			{
				"id": "3",
				"mediumFire": "Bajo",
				"mediumTime": 11,
				"mediumWellFire": "Bajo",
				"mediumWellTime": 44,
				"name": "Horno",
				"rareFire": "Bajo",
				"rareTime": 22,
				"wellDoneFire": "Bajo",
				"wellDoneTime": 33,
			},
		];

		const newData = [];

		{[...Array(ArrayPruebas.length)].map((x, index) =>
			newData.push(ArrayPruebas[index])
		)}

		this.setState({
			rutas: newData,
		});

		// if (!this.state.routes) {
		// let ArrayNuevo = ArrayPruebas.map((data) => {
		// 	let nameRoute = data.name;
		// 	let idRoute = data.id;
		// 	return { key: idRoute.toString(), title: nameRoute };
		// }

			// ArrayPruebas.map((data) => {
			// 	let nameRoute = data.name;
			// 	let idRoute = data.id;
			// 	console.log(nameRoute);
			// 	let carArray = { key: idRoute.toString(), title: nameRoute }, ...carArray]
			// 	// this.setState({
			// 	// 	rutas: [...this.state.rutas, { key: idRoute.toString(), title: nameRoute }],
			// 	// });
			// });

			// console.log(ArrayNuevo);

		this.setState({
			routes: [
				{ key: 'first', title: 'First' },
				{ key: 'second', title: 'Second' },
				{ key: 'third', title: 'Third' },
			],
		});
		// }
	}

	render() {
		const { navigation } = this.props;
		const product = navigation.getParam('product', 'NO-ID');
		console.log("nuevo array",this.state.rutas);
		if (this.state.routes != null) {
			return (
				<TabView
					navigationState={this.state}
					renderScene={SceneMap({
						first: FirstRoute,
						second: SecondRoute,
						third: ThirdRoute,
					})}
					onIndexChange={index => this.setState({ index })}
					initialLayout={{ width: Dimensions.get('window').width }}
					style={styles.container}
					tabBarPosition="bottom"
				/>
			);
		}
		return (
			<View><Text>zxcxzcxz</Text></View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
	},
});
