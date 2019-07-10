import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {
	state = {
		numero: this.props.inicial
	};

	maisUm = () => {
		this.setState({ numero: this.state.numero + 1 });
	};

	limpa = () => {
		this.setState({ numero: this.props.inicial });
	};

	render() {
		return (
			<View>
				<Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
				<TouchableHighlight onPress={this.maisUm} onLongPress={this.limpa}>
					<Text>Incrementa / Reseta</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
