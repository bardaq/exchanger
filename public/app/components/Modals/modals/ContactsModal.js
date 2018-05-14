import React from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	InputGroup,
	Label,
	Input,
	Button
} from 'reactstrap';
import MessageInput from '../MessageInput';
import icon from '../img/icon-envelope.png';

export default class ContactsModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (<div className="modal-wrapper">
			<Container>
				<Row>
					<Col xs="12" md={{size: 10, offset:1 }} className="modalBlock contacts-modal">
						<button className="close" onClick={ () => this.props.toogleModal(null) }>x</button>
							<Row>
								<Col xs="12" sm="12" md="6">
									<Form className="exchangeForm">
										<InputGroup size="lg">
											<Label for="emailInput">Email</Label>
											<Input id="emailInput" className="emailInput" type="email" name="emailInput" placeholder="ваша@почта.com" maxLength="18" required="true" />
										</InputGroup>
										<MessageInput />
										<Button color="primary" onClick={event => { console.log("Submited") }}>Отправить <span><img src={icon}/></span></Button>
									</Form>
								</Col>
								<Col xs="12" sm="12" md={{size: 5, offset:1 }}>
									<h2>Связаться  с&nbsp;нами</h2>
									<p><small>E-mail</small>admin@coinbase.tk</p>
									<p><small>Telegram</small>@coinbase.tk</p>
									<p><small>Phone</small>+38 (093) 123 45 56</p>
								</Col>
							</Row>
					</Col>
				</Row>
			</Container>
		</div>)
	}
}
