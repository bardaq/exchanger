import React from 'react';
import { Container,
			Row,
			Col,
			Form, 
			InputGroup, 
			Label, 
			Input, 
			Button
} from 'reactstrap';

export default class FillUpBalanceModal extends React.Component {
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
								<h2>Пополнить баланс</h2>
								<p>Переведите bitcoin на ваш аккаунт  123sad23fa2sac78eqwra7234af  или воспользуйтесь QR кодом, чтобы пополнить ваш баланс.</p>
							</Col>
							<Col xs="12" sm="12" md="6">
								<img srt={''} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>)
	}
}
