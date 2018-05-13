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

export default class ContactsModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (<div className="modal-wrapper">
			<Container>
				<Row>
					<Col xs="12" md={{size: 6, offset: 3}} className="modalBlock">
						<button className="close" onClick={ () => this.props.toogleModal(null) }>&times;</button>
							<Row>
								<Col xs="12" sm="12" md="6">
									<Form className="exchangeForm">
										<InputGroup size="lg">
											<Label for="emailInput">Email</Label>
											<Input id="emailInput" className="emailInput" type="email" name="emailInput" placeholder="ваша@почта.com" maxLength="18" required="true" />
										</InputGroup>
										<Button onClick={event => { console.log("Submited") }}>Submit</Button>
									</Form>
								</Col>
								<Col xs="12" sm="12" md="6">
									<h2>Связаться с нами</h2>
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
