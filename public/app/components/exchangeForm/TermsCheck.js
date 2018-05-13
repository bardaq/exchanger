import React from 'react';
import { InputGroup, Label, Input} from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class TermsCheck extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <InputGroup className={this.props.invalidCheck ? 'hasError' : ''} >
			<Label className="exchange-form__checkbox-label"> Введенные данные верны, ознакомлен(а) и согласен(а) с условиями Соглашения </Label>
			<Input type="checkbox" className="exchange-form__checkbox" onClick={ e => { 
				this.props.invalidCheck ? this.props.clearValidation('invalidCheck') : null;
				this.setState({ isValid: false });
				this.props.agreeWithTerms();
			}}/>
		</InputGroup>
	}
}


