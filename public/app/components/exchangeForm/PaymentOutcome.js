import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { directions } from '../../config';

export default class PaymentOutcome extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.toggleSplit = this.toggleSplit.bind(this);
		this.state = {
			dropdownOpen: false,
			splitButtonOpen: false,
			directions: []
		};
	}
	toggleDropDown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	toggleSplit() {
		this.setState({
			splitButtonOpen: !this.state.splitButtonOpen
		});
	}

	changeMethod(newMethod, newCurrency, newType) {
		this.props.updateOutcomeMethod(newMethod, newCurrency, newType);
		this.props.getRate()
	}

	componentWillMount(){
		let directionsList = [];
		// Сreaing array-list of directions for dropdown menu
		for ( let i = 0; i < directions.out.length; i++){
				directionsList.push(<DropdownItem key={'paymentOutcomeMethod'+i} onClick={e => {
					this.changeMethod(directions.out[i].name, directions.out[i].currency, directions.out[i].type);
				}}>{directions.out[i].name}</DropdownItem>)
		}
		this.setState({ directions: directionsList })
	}

	render() {
		return <InputGroup>
				<Label for="paymentOutcome">Получаете</Label>
				<Input id="paymentOutcome" className="paymentOutcome" name="paymentOutcome"
					defaultValue={ parseFloat(this.props.outcomeAmount).toFixed(2) }
					//onChange={ e => this.onChangeHandler(e) }
				/>

				<InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
					<DropdownToggle caret> {this.props.outcomeMethod} </DropdownToggle>
					<DropdownMenu>
						{ this.state.directions }
					</DropdownMenu>
				</InputGroupButtonDropdown>
		</InputGroup>
	}
}


