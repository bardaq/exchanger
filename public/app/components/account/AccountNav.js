import React from "react";
import { Nav } from 'reactstrap';
import AccountLevelCounter from './AccountLevelCounter'
import TwoFloorInfo from '../TwoFloorInfo'

class AccountNav extends React.Component {
	constructor(props){ super(props) }
	render(){return (
		<nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
			<div className="nav-item" onClick={ e => this.props.logout() }>
				<i className="fa fa-fw fa-sign-out"></i>Logout
			</div>
			<div className="nav-item">
				<i className="fa fa-fw fa-sign-out"></i>Help
			</div>

			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
					<li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
						<AccountLevelCounter progress={1} />
					</li>

					<li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
						<TwoFloorInfo isBig text="Баланс" val='0.000000' curr='btc' />
					</li>
					<li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
						<p>Чем выше уровень тем лучше курс обмена. Чтобы повысить уровень нужно чтобы на балансе было:</p>
						<p>от 0.1 btc – курс {this.props.rate * 0.98} {this.props.currency}</p>
						<p>от 0.5 btc – курс {this.props.rate * 0.99} {this.props.currency}</p>
						<p>от 1 btc – курс {this.props.rate * 0.995} {this.props.currency}</p>
					</li>
				</ul>

			</div>
		</nav>
	)}
}

export default AccountNav;