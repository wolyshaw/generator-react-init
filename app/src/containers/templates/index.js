import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class reduxComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				reduxComponent
				<Link to={'/'}>back</Link>
			</div>
		)
	}
}

export default connect()(
	reduxComponent
)
