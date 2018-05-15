import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	)

	if (module.hot) {
		module.hot.accept('../rootReducer', () => {
			const nextRootReducer = require('../rootReducer')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}