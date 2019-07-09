import React from 'react';
import { Text } from 'react-native';
import Padrao from '../styles/padrao';

export const Inverte = (props) => {
	const inv = props.texto.split('').reverse().join('');
	return <Text style={Padrao.ex}>{inv}</Text>;
};

export const Megasena = (props) => {
	const [ min, max ] = [ 1, 60 ];
	const numeros = Array(props.numeros || 6).fill(0);

	for (let key in numeros) {
		let novo = 0;

		while (numeros.includes(novo)) {
			novo = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		numeros[key] = novo;
	}

    numeros.sort((a, b) => a - b);
    
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
};
