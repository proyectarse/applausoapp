import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const DEFAULT_COLORS = {
	primary: '#ff5a1c',
	secondary: '#f7f7f7',
	paragraph: '#f7f7f7',
	darkbg: '#222223',
	error: '#cd5c2f',
	black: '#222223',
	icons: '#5a5a5a',
	textTabActive: '#ff5a1c',
	textTabInactive: '#f7f7f7',
	bottomtabs: '#222223',
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const STATUS_HEIGHT = Constants.statusBarHeight;

export const commonStyles = {
	padding1: {
		padding: 10,
	},
	padding2: {
		padding: 20,
	},
	padding3: {
		padding: 30,
	},
	padding4: {
		padding: 40,
	},
	padding5: {
		padding: 50,
	},
	mb_1: {
		marginBottom: 10,
	},
	mb_2: {
		marginBottom: 20,
	},
	mb_3: {
		marginBottom: 30,
	},
	mb_4: {
		marginBottom: 40,
	},
	mb_5: {
		marginBottom: 50,
	},
	mb_6: {
		marginBottom: 60,
	},
	mb_7: {
		marginBottom: 70,
	},
	mt_1: {
		marginTop: 10,
	},
	mt_2: {
		marginTop: 20,
	},
	mt_3: {
		marginTop: 20,
	},
	mt_4: {
		marginTop: 40,
	},
	mt_5: {
		marginTop: 50,
	},
	mt_6: {
		marginTop: 60,
	},
	mt_7: {
		marginTop: 70,
	},
	container: {
		flex: 1,
	},
	bodyContainer: {
		paddingTop: 3,
		paddingLeft: 4,
		paddingRight: 4,
	},
	row: {
		flexDirection: 'row',
	},
	column: {
		flexDirection: 'column',
	},
	alignCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	none: {
		display: 'none',
	},
	flex: {
		display: 'flex',
	},
	paddingBottomTabs: {
		paddingBottom: 50,
	},
	// inputs
	inputNoIconTextStyle: {
		color: DEFAULT_COLORS.paragraph,
		paddingHorizontal: 10,
		fontSize: 15,
	},
	inputNoIconContainerStyle: {
		width: '100%',
		backgroundColor: '#363636',
		// shadowColor: Color.azulMedio,
		// shadowRadius: 1,
		// elevation: 8,
		paddingVertical: 0,
		// borderColor: DEFAULT_COLORS.secondary,
		borderBottomWidth: 0,
	},
	inputNoIconRowContainerStyle: {
		marginTop: 0,
	},
	inputNoIconLabelStyle: {
		fontWeight: 'normal',
		color: DEFAULT_COLORS.secondary,
		marginBottom: 3,
	},
};
