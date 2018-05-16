import React from "react";
import { Row, Col } from 'reactstrap';

class AccountPaymentButtons extends React.Component {

  render(){return (
    <Row>
      <Col sm={6} className='my-3'>
        <div className="card text-white bg-primary o-hidden h-100" onClick={ () => this.props.actionToogleModalIsOpen('widthdrawal')}>
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fa fa-fw fa-comments"></i>
            </div>
            <div className="mr-5">Вывести в фиат</div>
          </div>
        </div>
      </Col>
      <Col sm={6} className='my-3'>
        <div className="card text-white bg-warning o-hidden h-100" onClick={ () => this.props.actionToogleModalIsOpen('fillUpBalance')}>
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fa fa-fw fa-list"></i>
            </div>
            <div className="mr-5">Пополнить баланс</div>
          </div>
        </div>
      </Col>
  </Row>
	)}
}

export default AccountPaymentButtons;