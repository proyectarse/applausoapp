import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { ListItem, Input, CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
// eslint-disable-next-line react/prefer-stateless-function
import { CommonHeader, IconLoaderButton } from '../ui';
import { DEFAULT_COLORS as COLORS, commonStyles as common, SCREEN_WIDTH } from '../helpers';

class PreferenceEditionScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};

	state = {
		mail: '',
		notifications: false,
		form2Valid: true,
		loading: false,
		token: null,
	};

	async componentDidMount() {
		const previoustoken = await AsyncStorage.getItem('pushtoken');
		this.setState({
			token: previoustoken,
		});
		// console.log('entro', previoustoken);
	}

	validateMail = () => {
		const { mail } = this.state;
		const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		if (mail !== '') {
			if (emailRegex.test(mail)) {
				this.setState({ form2Valid: true });
			} else {
				this.setState({ form2Valid: false });
			}
		} else {
			this.setState({ form2Valid: true });
		}
		// console.log('prueba', mail, 'validado', this.state.form2Valid);
	};

	render() {
		const { navigation } = this.props;
		const { mail, notifications, form2Valid, loading, token } = this.state;
		return (
			<View style={common.container}>
				<CommonHeader
					textHeader=""
					icon="ios-arrow-back"
					onPress={() => navigation.pop()}
				/>
				<View style={common.padding2}>
					<Text style={styles.titleTextStyle}>
						Indícanos tus preferencias
					</Text>
					<Text>{token}</Text>
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
								ref={(input) => (this.mailInput = input)}
								inputStyle={styles.inputNoIconTextStyle}
								inputContainerStyle={
									styles.inputNoIconContainerStyle
								}
								// labelStyle={common.inputNoIconLabelStyle}
								// label="Nombre Completo"
								placeholder="tu email"
								placeholderTextColor="#bbb"
								errorStyle={{ color: 'red' }}
								selectionColor={COLORS.primary}
								keyboardType="default"
								returnKeyType="next"
								autoCorrect={false}
								value={mail}
								onChangeText={(text) =>
									this.onChangeMail('mail', text)
								}
							/>
						</View>
						<ListItem
							title="Recibir Notificaciones"
							containerStyle={{ backgroundColor: 'transparent' }}
							titleStyle={{ color: COLORS.black }}
							// onPress={() => this.setState({ opiniochecked: !opiniochecked })}
							rightElement={
								<Switch
									trackColor={{
										false: 'grey',
										true: COLORS.primary,
									}}
									onValueChange={() =>
										this.setState({
											notifications: !notifications,
										})
									}
									value={notifications}
								/>
							}
						/>
					</KeyboardAvoidingView>
					{form2Valid ? (
						<IconLoaderButton
							isLoading={loading}
							text="Guardar"
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
							Borra el mail o escríbelo correctamente.
						</Text>
					)}
				</View>
			</View>
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

export default PreferenceEditionScreen;
