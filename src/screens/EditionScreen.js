import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
} from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
// eslint-disable-next-line react/prefer-stateless-function
import { CommonHeader, IconLoaderButton } from '../ui';
import {
	DEFAULT_COLORS as COLORS,
	commonStyles as common,
	SCREEN_WIDTH,
} from '../helpers';

class EditionScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};

	state = {
		name: '',
		birth: '',
		male: false,
		female: false,
		nogender: false,
		form1Valid: false,
		loading: false,
	};

	onChangeText(key, value) {
		this.setState(
			{
				[key]: value,
			},
			this.validateForm
		);
	}

	onChangeGender(key) {
		switch (key) {
			case 'male':
				this.setState(
					{
						male: true,
						female: false,
						nogender: false,
					},
					this.validateForm
				);
				break;
			case 'female':
				this.setState(
					{
						male: false,
						female: true,
						nogender: false,
					},
					this.validateForm
				);
				break;
			case 'nogender':
				this.setState(
					{
						male: false,
						female: false,
						nogender: true,
					},
					this.validateForm
				);
				break;
			default:
				break;
		}
	}

	validateForm = () => {
		const isValid = this.birthInput.isValid();
		const { name, male, female, nogender } = this.state;
		if (name.length >= 3 && isValid && (male || female || nogender)) {
			this.setState({ form1Valid: true });
		} else {
			this.setState({ form1Valid: false });
		}
		// console.log('prueba', form1Valid);
	};

	render() {
		const { navigation } = this.props;
		const {
			birth,
			name,
			male,
			female,
			nogender,
			form1Valid,
			loading,
		} = this.state;
		return (
			<SafeAreaView style={common.container}>
				<CommonHeader
					textHeader=""
					icon="ios-arrow-back"
					onPress={() => navigation.goBack()}
				/>
				<View style={common.padding2}>
					<Text style={styles.titleTextStyle}>Edita tus datos</Text>
					<KeyboardAvoidingView
						style={styles.formContainerStyle}
						behavior="padding"
						enabled
					>
						<View
							style={[
								common.mb_1,
								styles.inputNoIconRowContainerStyle,
							]}
						>
							<Input
								ref={(input) => (this.nameInput = input)}
								inputStyle={styles.inputNoIconTextStyle}
								inputContainerStyle={
									styles.inputNoIconContainerStyle
								}
								// labelStyle={common.inputNoIconLabelStyle}
								// label="Nombre Completo"
								placeholder="tu nombre"
								placeholderTextColor="#bbb"
								errorStyle={{ color: 'red' }}
								selectionColor={COLORS.primary}
								keyboardType="default"
								returnKeyType="next"
								autoCorrect={false}
								value={name}
								onChangeText={(text) =>
									this.onChangeText('name', text)
								}
								onSubmitEditing={() =>
									this.birthInput.getElement().focus()
								}
							/>
						</View>
						<View
							style={[
								common.mb_1,
								styles.inputNoIconRowContainerStyle,
								{ marginHorizontal: 10 },
							]}
						>
							<View style={styles.maskedContainerStyle}>
								<TextInputMask
									type={'datetime'}
									style={styles.maskedInputStyle}
									options={{
										format: 'DD/MM/YYYY',
									}}
									placeholder="tu fecha de nacimiento"
									placeholderTextColor="#bbb"
									ref={(input) => (this.birthInput = input)}
									value={birth}
									onChangeText={(text) =>
										this.onChangeText('birth', text)
									}
								/>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								marginHorizontal: 5,
							}}
						>
							<CheckBox
								center
								title="masculino"
								checkedIcon="dot-circle-o"
								uncheckedIcon="circle-o"
								checked={male}
								containerStyle={styles.checkContainerStyle}
								textStyle={styles.checkTextStyle}
								checkedColor={COLORS.primary}
								onPress={() => this.onChangeGender('male')}
							/>
							<CheckBox
								center
								title="femenino"
								checkedIcon="dot-circle-o"
								uncheckedIcon="circle-o"
								checked={female}
								containerStyle={styles.checkContainerStyle}
								textStyle={styles.checkTextStyle}
								checkedColor={COLORS.primary}
								onPress={() => this.onChangeGender('female')}
							/>
							<CheckBox
								center
								title="no indica"
								checkedIcon="dot-circle-o"
								uncheckedIcon="circle-o"
								checked={nogender}
								containerStyle={styles.checkContainerStyle}
								checkedColor={COLORS.primary}
								textStyle={styles.checkTextStyle}
								onPress={() => this.onChangeGender('nogender')}
							/>
						</View>
					</KeyboardAvoidingView>
					{form1Valid ? (
						<IconLoaderButton
							isLoading={loading}
							text="Modificar"
							loadingText="Cargando"
							onPress={() => alert('guarda')}
							leftIcon="pencil"
							addStyles={{}}
						/>
					) : (
						<Text
							style={{
								color: '#000000',
								marginTop: 25,
								textAlign: 'center',
							}}
						>
							Completa la información correcta.
						</Text>
					)}
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	titleTextStyle: {
		fontSize: 18,
		textAlign: 'center',
	},
	formContainerStyle: {
		paddingVertical: 20,
		// width: SCREEN_WIDTH,
		paddingHorizontal: 0,
		// backgroundColor: 'red',
	},
	inputNoIconRowContainerStyle: {
		marginTop: 0,
	},
	inputNoIconTextStyle: {
		color: COLORS.black,
		paddingHorizontal: 10,
		fontSize: 15,
	},
	inputNoIconContainerStyle: {
		// width: '100%',
		backgroundColor: 'white',
		// shadowColor: Color.azulMedio,
		// shadowRadius: 1,
		// elevation: 8,
		paddingHorizontal: 0,
		paddingVertical: 0,
		borderColor: '#838383',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	checkContainerStyle: {
		paddingHorizontal: 0,
		backgroundColor: 'transparent',
		borderWidth: 0,
		marginLeft: 3,
		marginRight: 3,
	},
	checkTextStyle: {
		color: COLORS.black,
		fontWeight: 'normal',
	},
	maskedInputStyle: {
		color: COLORS.black,
		fontSize: 15,
		paddingHorizontal: 10,
	},
	maskedContainerStyle: {
		backgroundColor: 'white',
		minHeight: 40,
		paddingVertical: 0,
		paddingTop: 5,
		// marginHorizontal: 10,
		borderColor: '#838383',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

export default EditionScreen;
