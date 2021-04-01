// import libraries
import React from 'react';
import { View } from 'react-native';

// se puede uar un componente funcional, porque no hay estado, ni procesos
// props.children recibe lo que está dentro donde uso este componente
// se le pasa la props style para sobre escribir desde el componente el estilo
const CardSection = (props) => {
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		padding: 5,
		borderBottomWidth: 1,
		backgroundColor: '#ffffff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		
	}
};

export { CardSection };
