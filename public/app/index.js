import React from 'react';
import { render } from 'react-dom';
import PathToRegexp from 'path-to-regexp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './services/PrivateRoute';
import '../vendor/bootstrap-4.0.0/scss/bootstrap.scss';
import '../scss/main.scss';
import HomePage from './pages/HomePage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import TransactionPage from './pages/TransactionPage';
import AccountPage from './pages/AccountPage';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/terms' component={TermsAndConditionsPage}/>
				<Route path='/transaction(\d{13}?)' component={TransactionPage}/>
				<PrivateRoute path='/account' component={AccountPage}/>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);



