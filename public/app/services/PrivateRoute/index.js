import React  from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CHECK_TOKEN_API_URL } from '../../config';
import { read_cookie } from 'sfcookies';
import AccountPage from '../../pages/AccountPage';

export default class PrivateRoute extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLogged: false,
			gotUnswerFromServer: false
		}
	}

	componentDidMount(){
		const session = read_cookie('session');
		fetch(CHECK_TOKEN_API_URL, {
			method: 'post',
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			body: JSON.stringify({ id: session.id, token: session.token })
		}).then( res => {
			if(res.ok) this.setState({ gotUnswerFromServer: true, isLogged: true })
		})
	}

	render() {
		if( this.state.gotUnswerFromServer ){
			if( this.state.isLogged ) return <Route path={this.props.path} component={this.props.component}/>
			else return <Redirect to={{pathname: '/', state: { from: this.props.location }}} />
		} else return null
	}
}