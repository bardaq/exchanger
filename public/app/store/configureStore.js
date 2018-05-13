import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer, 
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}