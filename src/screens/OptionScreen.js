import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
// eslint-disable-next-line react/prefer-stateless-function
import { DEFAULT_COLORS as COLORS, commonStyles as common } from '../helpers';
import { Paragraph } from '../ui';

class OptionScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};

	render() {
		const { navigation } = this.props;
		return (
			<SafeAreaView style={common.container}>
				<ScrollView style={[common.container, common.padding1]}>
					<Paragraph
						style={{ color: COLORS.black, marginBottom: 10 }}
					>
						Actualiza aquí tu información. No olvides que puedes
						recibir notificaciones y mails con noticias y
						actualizaciones.
					</Paragraph>
					<ListItem
						bottomDivider
						onPress={() => {
							navigation.navigate('edit');
						}}
					>
						<ListItem.Content
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
							}}
						>
							<Icon
								name="user-o"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Mis Datos
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
					<ListItem
						bottomDivider
						onPress={() => {
							navigation.navigate('preference');
						}}
					>
						<ListItem.Content
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
							}}
						>
							<Icon
								name="envelope-o"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Mis Preferencias
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
					<ListItem
						bottomDivider
						onPress={() => {
							alert('cerrando');
						}}
					>
						<ListItem.Content
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
							}}
						>
							<Icon
								name="sign-out"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Cerrar Sesión
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({});

export default OptionScreen;
