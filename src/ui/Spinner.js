// import libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// se puede uar un componente funcional, porque no hay estado, ni procesos
// props.children recibe lo que está dentro donde uso este componente
const Spinner = ({ sizeprop, color }) => {
	//pasa la prop size
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={sizeprop || 'large'} color={color || 'red'} />
		</View>
	);
};

const styles = {
	spinnerStyle: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
	},
};

// como las llama el common hay que definirlas como objeto no default
// export default Button;
export { Spinner };
