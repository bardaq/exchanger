import React from 'react';
import { InputGroup, Label } from 'reactstrap';
import MaskedInput from 'react-maskedinput'

export default class AccountNumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mask: '1111 1111 1111 1111'
    }
  }

  changeHandler(e){
    this.props.isInvalid ? this.props.errorCleaner('invalidAccountNum') : null;
    this.props.updateAccountNum(e.target.value)
  }

  componentWillReceiveProps(props){
    if (props.outcomeType === 'coin' &&  (props.outcomeCurrency === "LTC" || props.outcomeCurrency === "BTC" || props.outcomeCurrency === "XRP" || props.outcomeCurrency === "DASH" )){
      this.setState({ mask : '**********************************' });
    }
    else if ( props.outcomeCurrency === "ETH" ){
      this.setState({ mask : '******************************************'});
    }
    else if ( props.outcomeCurrency === "XMR" ){
      this.setState({ mask : '****************************************************************'});
    }
    else {
       this.setState({ mask : '1111 1111 1111 1111' });
    }
  }


  render() {
    return <InputGroup size="lg" className={ this.props.isInvalid ? 'hasError' : '' }>
      <Label for="direction">На счет</Label>
      <MaskedInput
        id="direction" className="direction form-control"
        placeholder={this.props.outcomeType === 'fiat' ? '1234 5678 9098 7654' : 'адрес крипто-кошелька'}
        mask={this.state.mask}
        onChange={e => this.changeHandler(e)}
      />
    </InputGroup>
  }
}

