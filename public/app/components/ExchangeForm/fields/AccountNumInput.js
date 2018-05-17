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
        placeholder="1234 5678 9098 7654" mask="1111 1111 1111 1111"
        onChange={e => this.changeHandler(e)}
      />
    </InputGroup>
  }
}


