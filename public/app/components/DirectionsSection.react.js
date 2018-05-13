import React from "react";
import { Container, Row, Col } from 'reactstrap';
import sberbank from "../../static/images/sberbank.png";
import privatbank from "../../static/images/privatbank.png";
import qiwi from "../../static/images/qiwi.png";
import visa from "../../static/images/visa.png";
import mastercard from "../../static/images/mastercard.png";
import alfabank from "../../static/images/alfabank.png";
import maesto from "../../static/images/maestro.png";
import yandexdengi from "../../static/images/yandexdengi.png";


let DirectionsSection = props => {
	return ( <section id="directSection" className="directSection">
		<Container>
			<Row>
				<Col>
					<img src={qiwi} />
					<img src={privatbank} />
					<img src={sberbank} />
					<img src={visa} />
					<img src={mastercard} />
					<img src={alfabank} />
					<img src={maesto} />
					<img src={yandexdengi} />
				</Col>
			</Row>
		</Container>
	</section> )
}

export default DirectionsSection