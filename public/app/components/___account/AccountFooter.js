import React from "react";
import { Container, Row, Col } from 'reactstrap';

class AccountFooter extends React.Component {
	render(){return (
		<footer className="sticky-footer">
			<div className="container">
				<div className="text-center">
					<small>Copyright © Your Website 2018</small>
				</div>
			</div>
		</footer>
	)}
}

export default AccountFooter;