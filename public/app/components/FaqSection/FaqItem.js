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
		this.state = { collapse: false };
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
		//this//document.getElementById('faqItem__')
	}

	render() {
		return (
			<Col xs="12" sm="12" md={6} className="faqItem">
				<div className={"faqItem__header " + (this.state.collapse ? 'open' : 'closed')} onClick={this.toggle}>
					<h6>{this.props.title}</h6>
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