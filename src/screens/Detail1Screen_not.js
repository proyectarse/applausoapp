import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

import { DEFAULT_COLORS as COLORS, commonStyles as common, STATUS_HEIGHT } from '../helpers';
import TabTypePreparation from '../components/TabTypePreparation';

const TABS = {
	Grill: {
		screen: TabTypePreparation,
		params: {
			product: 'Parámetro de producto',
		},
	},
	Oven: TabTypePreparation,
};


const Detail1Screen = createBottomTabNavigator(TABS,
{
	tabBarOptions: {
		activeTintColor: COLORS.primary,
		inactiveTintColor: 'grey',
		style: {
			backgroundColor: COLORS.darkbg,
			paddingTop: 5,
			paddingBottom: 5,
		},
	},
});

const AppContainerDetail = createAppContainer(Detail1Screen);

const DetailRouter = ({ navigation }) => {
	// console.log(navigation);
	return (
		<AppContainerDetail screenProps={navigation} />
	);
};

export default DetailRouter;
