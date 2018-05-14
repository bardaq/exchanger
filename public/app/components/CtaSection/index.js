import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import coin from "./coin.png"

let CtaSection = props => {
	return( <section id="ctaSection" className="ctaSection">
		<Container>
			<div className="bordered-container">
			<Row>
					<Col md={6}>
						<h2>Зарегистрируйтесь, чтобы получить лучший курс!</h2>
						<p>Постоянные клиенты меняют через личный кабинет, накапливают бонусы и получают еще более выгодный курс обмена.</p>
						<Button color="primary">Регистрация <span>&#8594;</span></Button>
					</Col>
					<Col md={6} className="text-center">
						<img src={coin} />
					</Col>
			</Row>
			</div>
		</Container>
	</section> )
}

export default CtaSection