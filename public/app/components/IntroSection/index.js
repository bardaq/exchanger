import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ExchangeForm from "../ExchangeForm";
import CircleCounter from "../CircleCounter";

let IntroSection = props => {
	return (
		<section id="intro" className="intro" >
			<Container>
				<Row>
					<Col xs="12" sm="12" md="6">
						<h1>Вывод биткоинов на карту онлайн</h1>
						<ExchangeForm/>
					</Col>
					<Col xs="12" sm="12" md="6">
						<CircleCounter/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default IntroSection;