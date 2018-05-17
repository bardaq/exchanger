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
			directions: [],
			value: this.props.incomeAmount
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ value : e.target.value });
		this.props.isInvalid ? this.props.errorCleaner('invalidPaymentAmount') : null;
		this.props.updateIncomeAmount(e.target.value);
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
		//this.props.updateRate();
	}

	componentWillMount(){
		// Сreating array-list of directions for dropdown menu
		let directionsList = [];
		each(directions.in, (item, index) => {
			directionsList.push(
				<DropdownItem key={'incomeMethod'+index} onClick={
					e => { this.changeMethod(item.name, item.currency, item.type ); }
				}> {item.name} </DropdownItem>
			)
		})
		this.setState({ directions: directionsList })
	}

	componentWillReceiveProps(newProps){
    this.setState({ value: newProps.incomeAmount })
  }

	render() {
		return <InputGroup className={ this.props.isInvalid ? 'hasError' : '' }>
				<Label for="paymentIncome">Продаете</Label>
				<Input id="paymentIncome" className="paymentIncome" name="paymentIncome"
					//placeholder={ this.props.incomeAmount }
					onChange={ e => this.handleChange(e) }
					value={ this.state.value || '0.00' }
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


