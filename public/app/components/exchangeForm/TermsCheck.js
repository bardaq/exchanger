import React from 'react';
import { InputGroup, Label, Input} from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class TermsCheck extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <InputGroup className={this.props.invalidCheck ? 'hasError' : ''} >
			<Label className="exchange-form__checkbox-label">Отправляя форму вы подтверждаете, что введенные данные верны и вы ознакомлены и согласены с условиями <a href="#">Соглашения</a> </Label>
			<Input type="checkbox" className="exchange-form__checkbox" onClick={ e => {
				this.props.invalidCheck ? this.props.clearValidation('invalidCheck') : null;
				this.setState({ isValid: false });
				this.props.agreeWithTerms();
			}}/>
		</InputGroup>
	}
}


