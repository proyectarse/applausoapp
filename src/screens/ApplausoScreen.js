import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
// eslint-disable-next-line react/prefer-stateless-function
import { CommonHeader } from '../ui';
import { DEFAULT_COLORS as COLORS, commonStyles as common } from '../helpers';
import { Paragraph } from '../ui';

class ApplausoScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};

	render() {
		return (
			<View style={common.container}>
				<ScrollView style={[common.container, common.padding1]}>
					<Paragraph
						style={{ color: COLORS.black, marginBottom: 10 }}
					>
						Applauso esa una App pensada para los que disfrutan del
						buen comer, no solo sibaritas, sino los que cocinan
						siempre con pasión y disfrutan de sacar lo mejor de cada
						corte.
					</Paragraph>
					<ListItem
						bottomDivider
						onPress={() => {
							alert('datos');
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
								name="info"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Datos & Privacidad
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
					<ListItem
						bottomDivider
						onPress={() => {
							alert('compartir');
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
								name="share-square-o"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Compartir
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
					<ListItem
						bottomDivider
						onPress={() => {
							alert('contacto');
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
								name="send-o"
								type="font-awesome"
								color={COLORS.icons}
								size={20}
							/>
							<ListItem.Title style={{ marginLeft: 10 }}>
								Contactarnos
							</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default ApplausoScreen;
