import React from 'react';

export const Context = React.createContext();

const Provider = ({ children }) => {
	const value = {
		list: [
			{
				id: '1',
				name: 'Lomo Vetado',
				typePreparation: [
					{
						id: '1',
					},
					{
						id: '4',
					},
				],
			},
			{
				id: '2',
				name: 'Punta Picana',
				typePreparation: [
					{
						id: '2',
					},
				],
			},
			{
				id: '3',
				name: 'Huachalomo',
				typePreparation: [
					{
						id: '1',
					},
					{
						id: '3',
					},
				],
			},
		],
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
	Provider,
	Consumer: Context.Consumer,
};
