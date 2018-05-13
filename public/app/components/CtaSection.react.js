import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import coin from "../../static/images/coin1.png"



let CtaSection = props => {
	return( <section id="ctaSection" className="ctaSection">
		<Container>
			<Row>
				<Col md={6}>
					<h3>Зарегистрируйтесь, чтобы получить лучший курс!</h3>
					<p>Постоянные клиенты меняют через личный кабинет, накапливают бонусы и получают еще более выгодный курс обмена.</p>
					<Button color="primary">Регистрация <span>&#8594;</span></Button>
				</Col>
				<Col md={6}>
					<img src={coin} />
				</Col>
			</Row>
		</Container>
	</section> )
}

export default CtaSection