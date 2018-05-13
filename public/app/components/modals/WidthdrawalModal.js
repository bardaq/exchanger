import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import ExchangeForm from "../../containers/ExchangeForm";
import CircleCounter from "../CircleCounter.react.js";

export default class WidthdrawalModal extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {balance: 0}
	}
	render(){
		return (<div className="modal-wrapper">
			<Container>
				<Row>
					<Col xs="12" className="modalBlock">
						<button className="close" onClick={ () => this.props.toogleModal(null) }>&times;</button>
						<Row>
							<Col xs="12" sm="12" md="6">
								<h1>Вывести средства</h1>
								<ExchangeForm isInModal/>
							</Col>
							<Col xs="12" sm="12" md="6">
								<CircleCounter/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>)
	}
}
