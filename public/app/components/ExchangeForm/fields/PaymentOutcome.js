import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { directions } from '../../../config.js';
import { each } from 'lodash';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateOutcomeAmount(event.target.value);
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
    this.props.updateRate();
  }

  componentWillMount(){
    let directionsList = [];
    // Сreaing array-list of directions for dropdown menu
    each(directions.out, (item,index) => {
      directionsList.push(
        <DropdownItem key={'paymentOutcomeMethod'+index} onClick={ e => {
          this.changeMethod(item.name, item.currency, item.type);
        }}>{item.name}</DropdownItem>
      )
    })
    this.setState({ directions: directionsList })
  }

  render() {
    return <InputGroup>
        <Label for="paymentOutcome">Получаете</Label>
        <Input id="paymentOutcome" className="paymentOutcome" name="paymentOutcome"
          defaultValue={ parseFloat(this.props.outcomeAmount).toFixed(2) }
          onChange={ this.handleChange }
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


