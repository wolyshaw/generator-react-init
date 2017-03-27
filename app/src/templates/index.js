import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import store from './reducers'
import App from './components'
import reduxComponent from './containers'

const history = createHistory()

const middleware = [
	thunk,
	routerMiddleware(history)
]

let appStore = createStore(
	store,
	applyMiddleware(...middleware)
)

render(
	<Provider store={appStore}>
		<Router history={history}>
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/redux" component={reduxComponent}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
