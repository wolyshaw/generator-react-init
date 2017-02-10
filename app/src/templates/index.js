import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import store from './reducers'
import App from './components'
import reduxComponent from './containers'

let appStore = createStore(
	store,
	applyMiddleware(thunk)
)

render(
	<Provider store={appStore}>
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/redux" component={reduxComponent}/>
		</Router>
	</Provider>,
	document.getElementById('app')
)
