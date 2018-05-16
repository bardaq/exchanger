import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { directions } from '../../../config';
import { each } from 'lodash';

export default class PaymentIncome extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.toggleSplit = this.toggleSplit.bind(this);
		this.state = {
			dropdownOpen: false,
			splitButtonOpen: false,
			directions: []
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.updateIncomeAmount(event.target.value);
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
		this.props.updateIncomeMethod(newMethod, newCurrency, newType)
		this.props.updateRate();
	}

	componentWillMount(){
		let directionsList = [];
		// Сreating array-list of directions for dropdown menu
		each(directions.in, (item, index) => {
			directionsList.push(
				<DropdownItem key={'incomeMethod'+index} onClick={
					e => { this.changeMethod(item.name, item.currency, item.type ); }
				}> {item.name} </DropdownItem>
			)
		})



		this.setState({ directions: directionsList })
	}

	render() {
		return <InputGroup>
				<Label for="paymentIncome">Продаете</Label>
				<Input id="paymentIncome" className="paymentIncome" name="paymentIncome"
					defaultValue={parseFloat(this.props.incomeAmount).toFixed(2)}
					onChange={this.handleChange}
				/>

				<InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
					<DropdownToggle caret> {this.props.incomeMethod} </DropdownToggle>
					<DropdownMenu>
						{ this.state.directions }
					</DropdownMenu>
				</InputGroupButtonDropdown>
		</InputGroup>
	}
}


