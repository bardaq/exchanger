import React from 'react';
import { InputGroup, Label, Input} from 'reactstrap';
import { Link } from "react-router-dom";
import MaskedInput from 'react-maskedinput'

export default class TermsCheck extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler(e){
		this.props.isInvalid ? this.props.errorCleaner('invalidCheck') : null;
		this.props.agreeWithTerms();
	}

	render() {
		return <InputGroup className={ this.props.isInvalid ? 'hasError' : '' }>
			<Label className="exchange-form__checkbox-label">Отправляя форму вы подтверждаете, что введенные данные верны и вы ознакомлены и согласены с условиями <Link to='/terms'>Соглашения</Link> </Label>
			<Input type="checkbox" className="exchange-form__checkbox" onClick={ e => this.clickHandler(e) }/>
		</InputGroup>
	}
}