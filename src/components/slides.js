import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	Image,
	Switch,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import { Button, Input, CheckBox, ListItem } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

import { Paragraph, LoaderButton } from '../ui';
import {
	DEFAULT_COLORS as COLORS,
	commonStyles as common,
	SCREEN_WIDTH,
} from '../helpers';

class Slides extends Component {
	state = {
		name: '',
		birth: '',
		male: false,
		female: false,
		nogender: false,
		form1Valid: false,
		form2Valid: true,
		mail: '',
		notifications: false,
		loading: false,
	};

	// componentDidUpdate(prevProps, prevState) {
	// 	this.validateForm();
	// }

	onChangeText(key, value) {
		this.setState(
			{
				[key]: value,
			},
			this.validateForm
		);
		// prueba para validar fecha
		// const isValid = this.birthInput.isValid();
		// console.log('prueba',this.state.birth); // boolean
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

	onChangeMail(key, value) {
		this.setState(
			{
				[key]: value,
			},
			this.validateMail
		);
		// prueba para validar fecha
		// const isValid = this.birthInput.isValid();
		// console.log('prueba',this.state.birth); // boolean
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

	onSlidesComplete() {
		this.setState(
			{
				loading: true,
			},
			this.enterApp
		);
	}

	enterApp() {
		const { navigation } = this.props;
		navigation.navigate('main');
	}

	renderLastSlide(index) {
		const { loading } = this.state;
		if (index === this.props.data.length - 1) {
			return (
				<LoaderButton
					isLoading={loading}
					text="ENTRAR"
					loadingText="Cargando"
					onPress={() => {
						this.onSlidesComplete();
					}}
					addStyles={styles.buttonStyle}
				/>
			);
		}
	}

	renderSlides() {
		const { name } = this.state;
		return this.props.data.map((slide, index) => {
			return (
				<View
					style={[
						styles.slideStyle,
						{ backgroundColor: 'black', paddingHorizontal: 0 },
					]}
					key={slide.key}
				>
					<ImageBackground
						source={require('../assets/bg-smoke2.jpg')}
						style={styles.slideBackgroundStyle}
						imageStyle={{ resizeMode: 'cover' }}
					>
						<Image
							source={require('../assets/logo-text.png')}
							style={{
								width: 200,
								height: 200,
								resizeMode: 'contain',
							}}
						/>
						<Text style={styles.textStyle}>{slide.text}</Text>
						<Text style={{ color: COLORS.secondary, fontSize: 21 }}>
							{name.toUpperCase()}
						</Text>
						{this.renderLastSlide(index)}
					</ImageBackground>
				</View>
			);
		});
	}

	renderSlides1 = () => {
		return (
			<View
				style={[
					styles.slideStyle,
					{
						backgroundColor: 'black',
						justifyContent: 'space-between',
					},
				]}
				key={1}
			>
				<Image
					source={require('../assets/main-logo.jpg')}
					style={[styles.logoStyle, common.mt_7]}
				/>
				<Image
					source={require('../assets/dots.png')}
					style={[styles.dotsStyle, common.mb_2]}
				/>
				<TouchableOpacity
					onPress={() => {
						this.refs._scrollView.scrollTo({ x: SCREEN_WIDTH });
					}}
				>
					<View style={styles.nextContentStyle}>
						<Text style={{ marginRight: 8 }}>Siguiente</Text>
						<Ionicons
							name="ios-arrow-forward"
							color="black"
							size={30}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	renderSlides2 = () => {
		return (
			<View
				style={[
					styles.slideStyle,
					{
						backgroundColor: 'black',
						justifyContent: 'space-between',
						paddingTop: 90,
					},
				]}
				key={2}
			>
				<ImageBackground
					source={require('../assets/bg-smoke.jpg')}
					style={styles.slideBackgroundStyle}
				>
					<Text style={styles.titleTextStyle}>
						SELECCIONA TU PAÍS
					</Text>
					<View style={styles.flagContainerStyle}>
						<Image
							source={require('../assets/chile-flag.png')}
							style={styles.flagStyle}
						/>
					</View>
					<Paragraph style={{ fontSize: 13 }}>
						POR AHORA SÓLO HABILITADA PARA CHILE
					</Paragraph>
				</ImageBackground>
				<Image
					source={require('../assets/dots2.png')}
					style={[styles.dotsStyle, common.mb_7]}
				/>
				<View style={styles.arrowContainerStyle}>
					<TouchableOpacity
						onPress={() => {
							this.refs._scrollView.scrollTo({
								x: -SCREEN_WIDTH,
							});
						}}
					>
						<View style={styles.backContentStyle}>
							<Ionicons
								name="ios-arrow-back"
								color="black"
								size={30}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							this.refs._scrollView.scrollTo({
								x: SCREEN_WIDTH * 2,
							});
						}}
					>
						<View style={styles.nextContentStyle}>
							<Text style={{ marginRight: 8 }}>Siguiente</Text>
							<Ionicons
								name="ios-arrow-forward"
								color="black"
								size={30}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	renderSlides3 = () => {
		const { birth, name, male, female, nogender, form1Valid } = this.state;
		return (
			<View
				style={[
					styles.slideStyle,
					{
						backgroundColor: 'black',
						justifyContent: 'space-between',
						paddingTop: 90,
					},
				]}
				key={3}
			>
				<Text style={styles.titleTextStyle}>INDÍCANOS</Text>
				<KeyboardAvoidingView
					style={styles.formContainerStyle}
					behavior="padding"
					enabled
				>
					<ImageBackground
						source={require('../assets/bg-smoke.jpg')}
						style={{ width: '100%' }}
						imageStyle={{ resizeMode: 'cover' }}
					>
						<View
							style={[
								common.mb_1,
								common.inputNoIconRowContainerStyle,
							]}
						>
							<Input
								ref={(input) => (this.nameInput = input)}
								inputStyle={common.inputNoIconTextStyle}
								inputContainerStyle={
									common.inputNoIconContainerStyle
								}
								labelStyle={common.inputNoIconLabelStyle}
								label="Nombre Completo"
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
								common.inputNoIconRowContainerStyle,
							]}
						>
							<Text
								style={[
									common.inputNoIconLabelStyle,
									{ marginLeft: 10, fontSize: 15 },
								]}
							>
								Fecha Nacimiento (DDMMYYYY)
							</Text>
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
						<View style={{ flexDirection: 'row' }}>
							<CheckBox
								center
								title="masc."
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
								title="fem."
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
								title="no ind."
								checkedIcon="dot-circle-o"
								uncheckedIcon="circle-o"
								checked={nogender}
								containerStyle={styles.checkContainerStyle}
								checkedColor={COLORS.primary}
								textStyle={styles.checkTextStyle}
								onPress={() => this.onChangeGender('nogender')}
							/>
						</View>
					</ImageBackground>
				</KeyboardAvoidingView>
				<Image
					source={require('../assets/dots3.png')}
					style={[styles.dotsStyle]}
				/>
				{form1Valid ? (
					<View style={styles.arrowContainerStyle}>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH,
								});
							}}
						>
							<View style={styles.backContentStyle}>
								<Ionicons
									name="ios-arrow-back"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 3,
								});
							}}
						>
							<View style={styles.nextContentStyle}>
								<Text style={{ marginRight: 8 }}>
									Siguiente
								</Text>
								<Ionicons
									name="ios-arrow-forward"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.arrowContainerStyle}>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH,
								});
							}}
						>
							<View style={styles.backContentStyle}>
								<Ionicons
									name="ios-arrow-back"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 3,
								});
							}}
							disabled={true}
						>
							<View style={styles.nextContentDisableStyle}>
								<Text style={{ marginRight: 8 }}>
									Siguiente
								</Text>
								<Ionicons
									name="ios-arrow-forward"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	};

	renderSlides4 = () => {
		const { mail, notifications, form2Valid } = this.state;
		// console.log(form2Valid);
		return (
			<View
				style={[
					styles.slideStyle,
					{
						backgroundColor: 'black',
						justifyContent: 'space-between',
						paddingTop: 90,
					},
				]}
				key={4}
			>
				<KeyboardAvoidingView
					style={styles.formContainerStyle}
					behavior="padding"
					enabled
				>
					<Paragraph
						style={{ textAlign: 'center', marginBottom: 20 }}
					>
						DÉJANOS TU EMAIL PARA RECIBIR ACTUALIZACIONES Y
						NOVEDADES
					</Paragraph>
					<Paragraph
						style={{ marginBottom: 40, textAlign: 'center' }}
					>
						¿DESEAS RECIBIR NOTIFICACIONES A TU TELÉFONO?
					</Paragraph>
					<ImageBackground
						source={require('../assets/bg-smoke.jpg')}
						style={{ width: '100%' }}
						imageStyle={{ resizeMode: 'cover' }}
					>
						<View
							style={[
								common.mb_1,
								common.inputNoIconRowContainerStyle,
							]}
						>
							<Input
								ref={(input) => (this.mailInput = input)}
								inputStyle={common.inputNoIconTextStyle}
								inputContainerStyle={
									common.inputNoIconContainerStyle
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
							containerStyle={{ backgroundColor: 'transparent' }}
						>
							<ListItem.Content>
								<ListItem.Title
									style={{
										color: 'white',
									}}
								>
									RECIBIR NOTIFICACIONES
								</ListItem.Title>
							</ListItem.Content>
							<Switch
								trackColor={{
									false: 'grey',
									true: COLORS.primary,
								}}
								thumbColor={COLORS.secondary}
								onValueChange={() =>
									this.setState({
										notifications: !notifications,
									})
								}
								value={notifications}
							/>
						</ListItem>
					</ImageBackground>
				</KeyboardAvoidingView>
				<Image
					source={require('../assets/dots4.png')}
					style={[styles.dotsStyle, common.mt_1]}
				/>
				{!form2Valid ? (
					<View style={styles.arrowContainerStyle}>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 2,
								});
							}}
						>
							<View style={styles.backContentStyle}>
								<Ionicons
									name="ios-arrow-back"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 4,
								});
							}}
							disabled={true}
						>
							<View style={styles.nextContentDisableStyle}>
								<Text style={{ marginRight: 8 }}>
									Siguiente
								</Text>
								<Ionicons
									name="ios-arrow-forward"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.arrowContainerStyle}>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 2,
								});
							}}
						>
							<View style={styles.backContentStyle}>
								<Ionicons
									name="ios-arrow-back"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.refs._scrollView.scrollTo({
									x: SCREEN_WIDTH * 4,
								});
							}}
						>
							<View style={styles.nextContentStyle}>
								<Text style={{ marginRight: 8 }}>
									Siguiente
								</Text>
								<Ionicons
									name="ios-arrow-forward"
									color="black"
									size={30}
								/>
							</View>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	};

	render() {
		return (
			<ScrollView
				horizontal
				pagingEnabled
				scrollEnabled={false}
				style={{ flex: 1 }}
				ref="_scrollView"
			>
				{this.renderSlides1()}
				{this.renderSlides2()}
				{this.renderSlides3()}
				{this.renderSlides4()}
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	slideStyle: {
		flex: 1,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	titleTextStyle: {
		fontSize: 20,
		fontWeight: '300',
		color: '#FFFFFF',
	},
	flagContainerStyle: {
		marginVertical: 20,
	},
	logoStyle: {
		width: 450,
		height: 400,
		resizeMode: 'contain',
	},
	dotsStyle: {
		width: 110,
		resizeMode: 'contain',
		height: 30,
	},
	flagStyle: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
	},
	textStyle: {
		fontSize: 35,
		color: 'white',
		fontFamily: 'Trevor',
		textAlign: 'center',
	},
	buttonStyle: {
		backgroundColor: '#cccccc',
		marginTop: 20,
		borderRadius: 0,
	},
	nextArrowStyle: {
		marginTop: 60,
	},
	formContainerStyle: {
		paddingVertical: 20,
		width: SCREEN_WIDTH,
		paddingHorizontal: 20,
	},
	checkContainerStyle: {
		paddingHorizontal: 0,
		backgroundColor: 'transparent',
		borderWidth: 0,
		marginLeft: 3,
		marginRight: 3,
	},
	checkTextStyle: {
		color: '#FFFFFF',
		fontWeight: 'normal',
	},
	maskedInputStyle: {
		color: COLORS.paragraph,
		fontSize: 15,
		paddingHorizontal: 10,
	},
	maskedContainerStyle: {
		backgroundColor: '#363636',
		minHeight: 40,
		paddingVertical: 0,
		paddingTop: 5,
		marginHorizontal: 10,
		// borderColor: COLORS.secondary,
		// borderBottomWidth: StyleSheet.hairlineWidth,
	},
	nextContentStyle: {
		backgroundColor: '#e5e5e5',
		width: 200,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 6,
		marginBottom: 30,
	},
	nextContentDisableStyle: {
		backgroundColor: 'rgba(229,229,229,0.4)',
		width: 200,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 6,
		marginBottom: 30,
	},
	slideBackgroundStyle: {
		// flexDirection: 'row',
		// height: 200,
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrowContainerStyle: {
		flexDirection: 'row',
	},
	backContentStyle: {
		backgroundColor: '#cacaca',
		width: 42,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 6,
		marginBottom: 30,
		marginRight: 10,
	},
});

export default Slides;
