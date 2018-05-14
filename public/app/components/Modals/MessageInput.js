import React from 'react';
import { InputGroup, Label, Input } from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class MessageInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<InputGroup size="lg">
			<Label for="messageInput">Сообщение</Label>
			<Input type="textarea" name="messageInput" id="messageInput" className="text-area" placeholder="Ваше сообщение..."/>
		</InputGroup>)
	}
}