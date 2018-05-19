import React from 'react';
import { InputGroup, Label } from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class AccountNumInput extends React.Component {
  constructor(props) {
    super(props);
  }

  changeHandler(e){
    this.props.isInvalid ? this.props.errorCleaner('invalidAccountNum') : null;
    this.props.updateAccountNum(e.target.value)
  }

  render() {
    return <InputGroup size="lg" className={ this.props.isInvalid ? 'hasError' : '' }>
      <Label for="direction">На счет</Label>
      <MaskedInput
        id="direction" className="direction form-control"
        placeholder={this.props.outcomeType === 'fiat' ? '1234 5678 9098 7654' : 'адрес крипто-кошелька'}
        mask={this.props.outcomeType === 'fiat' ? '1234 5678 9098 7654' : '****************************************************************'}
        onChange={e => this.changeHandler(e)}
      />
    </InputGroup>
  }
}

