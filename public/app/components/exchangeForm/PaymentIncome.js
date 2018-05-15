import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { directions } from '../../config';

export default class PaymentIncome extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.toggleSplit = this.toggleSplit.bind(this);
		this.state = {
			dropdownOpen: false,
			splitButtonOpen: false,
			directions: [],
			amount: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.updateIncomeAmount(event.target.value);
		this.setState({value: event.target.value});
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
		this.props.getRate()
	}

	componentWillMount(){
		let directionsList = [];
		// Сreating array-list of directions for dropdown menu
		for ( let i = 0; i < directions.in.length; i++){
				directionsList.push(<DropdownItem key={'incomeMethod'+i} onClick={e => {
					this.changeMethod(directions.in[i].name, directions.in[i].currency, directions.in[i].type );
				}}>{directions.in[i].name}</DropdownItem>)
		}
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


