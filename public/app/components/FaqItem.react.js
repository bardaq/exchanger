import React from "react";
import { 
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Collapse 
} from 'reactstrap';


export default class FaqItem extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false, status: 'Closed' };
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		return (
			<Col xs="12" sm="12" md={6} className="faqItem">
				<div color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
					<h6>{this.props.title}</h6><span> Открыть &#9660; &#9650;</span>
				</div>
				<Collapse isOpen={this.state.collapse}>
				<Card>
					<CardBody>
						{this.props.content}
					</CardBody>
				</Card>
				</Collapse>
			</Col>
		);
	}
}