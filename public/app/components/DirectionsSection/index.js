import React from "react";
import { Container, Row, Col } from 'reactstrap';
import sberbank from "./img/sberbank.png";
import privatbank from "./img/privatbank.png";
import qiwi from "./img/qiwi.png";
import visa from "./img/visa.png";
import mastercard from "./img/mastercard.png";
import alfabank from "./img/alfabank.png";
import maesto from "./img/maestro.png";
import yandexdengi from "./img/yandexdengi.png";


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