import React from 'react';
import { InputGroup, Label } from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class PhoneInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mask: '+11 (111) 111 11 11'
		}
	}
	render() {
		return <InputGroup size="lg" className={ this.props.invalidPhone? 'hasError' : ''} >
			<Label for="emailInput">Телефон</Label>
			<MaskedInput mask={this.state.mask} id="phoneInput" className="phoneInput form-control" name="phoneInput" placeholder="+12 345 678 90 12 " maxLength="18" required="true" 
					onChange={ e => {
						this.props.invalidPhone ? this.props.clearValidation('invalidPhone') : null;
						this.setState({isValid: false })
						this.props.updatePhone(e.target.value)
						if(this.props.phone === '+7_ (___) ___ __ __'){
							this.setState({mask: '+1 (111) 111 11 11' })
						}
					}}
			/>
		</InputGroup>
	}
}


