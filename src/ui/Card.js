// import libraries
import React from 'react';
import { View } from 'react-native';

// se puede uar un componente funcional, porque no hay estado, ni procesos
// props.children recibe lo que está dentro donde uso este componente
const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		//se ven solo en IOS
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
};

//como las llama el common hay que definirlas como objeto no default
// export default Card;
export { Card };
