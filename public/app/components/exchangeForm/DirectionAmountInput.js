import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DirectionAmountInput extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.toggleSplit = this.toggleSplit.bind(this);
		this.state = {
			dropdownOpen: false,
			splitButtonOpen: false
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

	changeMethod(newMethod, newCurrency) {
		this.props.actionUpdateCurrency(newCurrency)
		this.props.actionUpdateMethod(newMethod)
		this.props.actionUpdateRate()
	}

	render() {
		return <InputGroup>

				<Label for="directAmountInput">Получаете</Label>
				<Input id="directAmountInput" className="directAmountInput" name="directAmountInput" readOnly
					value={parseFloat(this.props.directionAmount).toFixed(2)}
				/>

				<InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
					<DropdownToggle caret>
						{this.props.method}
					</DropdownToggle>

					<DropdownMenu>
						<DropdownItem onClick={e => {
							this.changeMethod("Приват 24", "uah");
						}}>Приват 24</DropdownItem>

						<DropdownItem onClick={e => {
							this.changeMethod("Сбербанк", "rub");
						}}>Сбербанк</DropdownItem>

						<DropdownItem onClick={e => {
							this.changeMethod("Visa/Mastercard Грн.", "uah");
						}}>Visa/Mastercard</DropdownItem>

						<DropdownItem onClick={e => {
							this.changeMethod("Visa/Mastercard Руб.", "rub");
						}}>Visa/Mastercard</DropdownItem>

						<DropdownItem onClick={e => {
							this.changeMethod("Qiwi", "rub");
						}}>Qiwi</DropdownItem>

						<DropdownItem onClick={e => {
							this.changeMethod("Яндекс деньги", "rub");
						}}>Яндекс деньги</DropdownItem>
					</DropdownMenu>

				</InputGroupButtonDropdown>
		</InputGroup>
	}
}


