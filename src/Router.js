import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
	createBottomTabNavigator,
	createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import NavigationService from './NavigationService';

import { CommonSimpleHeader } from './ui';
import { DEFAULT_COLORS as COLORS } from './helpers';
import WellcomeScreen from './screens/WellcomeScreen';
import ListScreen from './screens/ListScreen';
import HomeScreen from './screens/HomeScreen';
import OptionScreen from './screens/OptionScreen';
import EditionScreen from './screens/EditionScreen';
import PreferenceEditionScreen from './screens/PreferenceEditionScreen';
import ApplausoScreen from './screens/ApplausoScreen';
// import Detail1Screen from './screens/Detail1Screen';
import Detail1Screen from './screens/Detail1Screen';
// navegación de proceso de login

const ListNavigator = createStackNavigator(
	{
		list: ListScreen,
		detail: {
			screen: Detail1Screen,
			navigationOptions: {
				headerShown: false,
			},
		},
	},
	{
		initialRouteName: 'list',
	}
);

ListNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}
	return {
		tabBarVisible,
	};
};

const CowNavigator = createStackNavigator(
	{
		cow: {
			screen: HomeScreen,
		},
		file: {
			screen: Detail1Screen,
			navigationOptions: {
				headerShown: false,
			},
		},
	},
	{
		initialRouteName: 'cow',
		/* The header config from HomeScreen is now here */
		// defaultNavigationOptions: {
		// 	header: null,
		// },
	}
);

CowNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}
	return {
		tabBarVisible,
	};
};

const TabsSettings = createMaterialTopTabNavigator(
	{
		tabProfile: {
			screen: OptionScreen,
			navigationOptions: {
				tabBarLabel: 'Perfil',
			},
		},
		tabApplauso: {
			screen: ApplausoScreen,
			navigationOptions: {
				tabBarLabel: 'Applauso',
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: COLORS.textTabActive,
			inactiveTintColor: COLORS.textTabInactive,
			style: {
				backgroundColor: COLORS.bottomtabs,
				height: 50,
			},
			labelStyle: {
				textAlign: 'center',
			},
			indicatorStyle: {
				borderBottomColor: COLORS.primary,
				borderBottomWidth: 3,
			},
		},
	}
);

// TabsSettings.navigationOptions = {
// 	headerTitle: () => <CommonSimpleHeader />,
// };

const OptionNavigator = createStackNavigator({
	// For each screen that you can navigate to, create a new entry like this:
	tabs: {
		screen: TabsSettings,
		navigationOptions: {
			headerTitle: () => <CommonSimpleHeader />,
			headerStyle: {
				backgroundColor: '#000000',
			},
		},
	},
	edit: {
		screen: EditionScreen,
	},
	preference: {
		screen: PreferenceEditionScreen,
	},
});

const MainTabs = createBottomTabNavigator(
	{
		home: {
			screen: CowNavigator,
			navigationOptions: {
				tabBarLabel: 'RES',
				tabBarIcon: ({ tintColor }) => (
					<Image
						source={require('./assets/tabs/head.png')}
						style={{ height: 25, width: 25, tintColor: tintColor }}
					/>
				),
			},
		},
		list: {
			screen: ListNavigator,
			navigationOptions: {
				tabBarLabel: 'LISTADO',
				tabBarIcon: ({ tintColor }) => (
					<Image
						source={require('./assets/tabs/lines.png')}
						style={{ height: 25, width: 25, tintColor: tintColor }}
					/>
				),
			},
		},
		option: {
			screen: OptionNavigator,
			navigationOptions: {
				tabBarLabel: 'OPCIONES',
				tabBarIcon: ({ tintColor }) => (
					<Image
						source={require('./assets/tabs/gear.png')}
						style={{ height: 25, width: 25, tintColor: tintColor }}
					/>
				),
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: COLORS.primary,
			inactiveTintColor: 'grey',
			labelStyle: {
				paddingTop: 0,
			},
			tabStyle: {
				// backgroundColor: 'red',
				paddingTop: 5,
			},
			style: {
				backgroundColor: COLORS.darkbg,
				paddingTop: 0,
				paddingBottom: 4,
				height: 55,
			},
		},
	}
);

const MainNavigator = createSwitchNavigator({
	wellcome: { screen: WellcomeScreen },
	main: { screen: MainTabs },
});

const AppContainer = createAppContainer(MainNavigator);

const prefix = 'applauso://';

const RouterComponent = () => {
	return (
		<AppContainer
			enableURLHandling={false}
			uriPrefix={prefix}
			ref={(navigatorRef) => {
				NavigationService.setTopLevelNavigator(navigatorRef);
			}}
		/>
	);
};
export default RouterComponent;
