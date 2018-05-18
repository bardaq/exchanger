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
      directions: [],
      value: this.props.outcomeAmount
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value : e.target.value });
    this.props.updateOutcomeAmount(e.target.value);
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
    this.props.updateOutcomeMethod(newMethod, newCurrency, newType);
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

  componentWillReceiveProps(newProps){
    this.setState({ value: newProps.outcomeAmount })
  }

  render() {
    return <InputGroup>
        <Label for="paymentOutcome">Получаете</Label>
        <Input id="paymentOutcome" className="paymentOutcome" name="paymentOutcome"
          onKeyPress= { e => this.pressHandler(e) }
          onChange={ e => this.handleChange(e) }
          placeholder={ '0.00' }
          value={ this.state.value || ''}
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


