import React from 'react';
import { InputGroup, Label } from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class AccountNumInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <InputGroup size="lg" className={  this.props.invalidAccountNum ? 'hasError' : ''} >
			<Label for="direction">На счет</Label>
			<MaskedInput mask="1111 1111 1111 1111" id="direction" className="direction form-control" placeholder="1234 5678 9098 7654"
					onChange={event => { 
						this.props.invalidAccountNum ? this.props.clearValidation('invalidAccountNum') : null;
						this.setState({ isValid: false })
						this.props.updateAccountNum(event.target.value) 
					}}/>
		</InputGroup>
	}
}


