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

	pressHandler(e){
		const containsPeriod = String(this.state.value).includes('.');
		if(( isNaN(e.key) && e.key !== '.') || ( e.key === '.' && containsPeriod )) {
			e.preventDefault(); console.log('dis');
		}
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
					onChange={ e => this.handleChange(e) }
					onKeyPress={ e => this.pressHandler(e) }
					placeholder={ '0.00' }
					value={ this.state.value || '' }
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


