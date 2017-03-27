import React, {Component} from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router-dom'

export default class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				App
				<Link to={'/redux'}>redux</Link>
			</div>
		)
	}
}
